import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';
import type { IncomingMessage, ServerResponse } from 'http';

/**
 * Minimal type shim for Vercel serverless request/response.
 * Replaces @vercel/node to eliminate a large transitive dependency tree
 * with known security vulnerabilities.
 */
interface VercelRequest extends IncomingMessage {
  body?: any;
  cookies: Record<string, string>;
  query: Record<string, string | string[]>;
  method?: string;
  headers: IncomingMessage['headers'];
}

interface VercelResponse extends ServerResponse {
  json(body: any): VercelResponse;
  status(code: number): VercelResponse;
  send(body: string): VercelResponse;
}

// ============================================================================
// CONFIGURATION
// ============================================================================

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'caselyncontact@gmail.com';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Caselyn <onboarding@resend.dev>';

// Upstash Redis configuration for persistent rate limiting in serverless
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL || '';
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';

// CORS: restrict to own domain + local development
const ALLOWED_ORIGINS = [
  'https://caselyn-portfolio.vercel.app',
  'https://caselyn.es',
  'https://www.caselyn.es',
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:5500',
  'http://localhost:8080',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5500',
];

// Rate limiting
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 10;

// ============================================================================
// REDIS CLIENT (lazy init)
// ============================================================================

let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  if (UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
      url: UPSTASH_REDIS_REST_URL,
      token: UPSTASH_REDIS_REST_TOKEN,
    });
    console.log('[RateLimiter] Using Upstash Redis');
    return redis;
  }
  console.warn('[RateLimiter] Upstash Redis not configured. Falling back to in-memory rate limiter (resets on cold starts).');
  return null;
}

// ============================================================================
// IN-MEMORY FALLBACK (for dev / when Redis is not configured)
// ============================================================================

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimitMemory(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - record.count };
}

// ============================================================================
// PERSISTENT RATE LIMITER (Redis)
// ============================================================================

async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const client = getRedis();

  if (!client) {
    return checkRateLimitMemory(ip);
  }

  const key = `rate_limit:contact:${ip}`;
  const windowSeconds = Math.ceil(RATE_LIMIT_WINDOW_MS / 1000);

  try {
    const current = await client.incr(key);

    // Set expiry on first request in window
    if (current === 1) {
      await client.expire(key, windowSeconds);
    }

    const allowed = current <= RATE_LIMIT_MAX_REQUESTS;
    const remaining = Math.max(0, RATE_LIMIT_MAX_REQUESTS - current);

    return { allowed, remaining };
  } catch (err) {
    console.error('[RateLimiter] Redis error, falling back to memory:', err);
    return checkRateLimitMemory(ip);
  }
}

// ============================================================================
// CORS
// ============================================================================

function getOrigin(req: VercelRequest): string | undefined {
  const origin = req.headers.origin;
  if (typeof origin === 'string') return origin;
  const referer = req.headers.referer;
  if (typeof referer === 'string') {
    try {
      return new URL(referer).origin;
    } catch {
      return undefined;
    }
  }
  return undefined;
}

function isAllowedOrigin(origin: string | undefined): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.includes(origin);
}

function setCorsHeaders(req: VercelRequest, res: VercelResponse): boolean {
  const origin = getOrigin(req);

  if (!origin || !isAllowedOrigin(origin)) {
    return false;
  }

  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Vary', 'Origin');
  return true;
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * RFC 5322 simplified email regex.
 * Allows standard characters, plus signs, dots, and hyphens.
 */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  return EMAIL_REGEX.test(email);
}

// ============================================================================
// UTILITIES
// ============================================================================

function getClientIP(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const realIp = req.headers['x-real-ip'];

  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (typeof realIp === 'string') {
    return realIp;
  }
  return 'unknown';
}

function getUserAgent(req: VercelRequest): string {
  return (req.headers['user-agent'] as string) || 'unknown';
}

function validateEnv(): { ok: boolean; error?: string } {
  if (!SUPABASE_URL) {
    return { ok: false, error: 'SUPABASE_URL no configurado' };
  }
  if (!SUPABASE_SERVICE_ROLE_KEY) {
    return { ok: false, error: 'SUPABASE_SERVICE_ROLE_KEY no configurado' };
  }
  if (!RESEND_API_KEY) {
    return { ok: false, error: 'RESEND_API_KEY no configurado' };
  }
  return { ok: true };
}

// ============================================================================
// MAIN HANDLER
// ============================================================================

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // ── 0. CORS preflight ───────────────────────────────────────────────────
  const originAllowed = setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    if (originAllowed) {
      return res.status(204).send('');
    }
    return res.status(403).json({ ok: false, error: 'Origen no permitido' });
  }

  // ── 1. Only accept POST requests ────────────────────────────────────────
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Metodo no permitido' });
  }

  // Block requests from unknown origins after OPTIONS
  if (!originAllowed) {
    console.warn(`CORS blocked request from origin: ${getOrigin(req) || 'unknown'}`);
    return res.status(403).json({ ok: false, error: 'Origen no permitido' });
  }

  // ── 2. Validate environment variables ───────────────────────────────────
  const envCheck = validateEnv();
  if (!envCheck.ok) {
    console.error('Environment validation failed:', envCheck.error);
    return res.status(500).json({ ok: false, error: 'Error de configuracion del servidor' });
  }

  // ── 3. Get client info ──────────────────────────────────────────────────
  const ip = getClientIP(req);
  const userAgent = getUserAgent(req);

  // ── 4. Check rate limit (persistent Redis + fallback) ───────────────────
  const rateLimitResult = await checkRateLimit(ip);
  if (!rateLimitResult.allowed) {
    console.warn(`Rate limit exceeded for IP: ${ip}`);
    res.setHeader('Retry-After', String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)));
    return res
      .status(429)
      .json({ ok: false, error: 'Demasiadas solicitudes. Intenta de nuevo mas tarde.' });
  }

  // ── 5. Parse and validate request body ──────────────────────────────────
  const { name, email, phone, message, website } = req.body;

  // Honeypot check: if "website" field is filled, reject silently
  if (website && website.trim() !== '') {
    console.warn(`Honeypot triggered for IP: ${ip}`);
    return res.status(200).json({ ok: true, message: 'Mensaje enviado' });
  }

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ ok: false, error: 'El nombre es obligatorio' });
  }

  if (!email || typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({ ok: false, error: 'El email es obligatorio' });
  }

  // Email format validation
  if (!isValidEmail(email.trim())) {
    return res.status(400).json({ ok: false, error: 'El formato del email no es valido' });
  }

  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ ok: false, error: 'El mensaje es obligatorio' });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ ok: false, error: 'El mensaje debe tener al menos 10 caracteres' });
  }

  if (message.trim().length > 5000) {
    return res.status(400).json({ ok: false, error: 'El mensaje es demasiado largo (maximo 5000 caracteres)' });
  }

  // Sanitize inputs
  const sanitizedName = name.trim();
  const sanitizedEmail = email.trim().toLowerCase();
  const sanitizedPhone = phone ? phone.trim() : '';
  const sanitizedMessage = message.trim();

  try {
    // ── 6. Save to Supabase ───────────────────────────────────────────────
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { data: leadData, error: supabaseError } = await supabase
      .from('leads')
      .insert({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        message: sanitizedMessage,
        ip,
        user_agent: userAgent,
      })
      .select()
      .single();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return res
        .status(500)
        .json({ ok: false, error: 'Error al guardar el mensaje. Intenta de nuevo.' });
    }

    console.log('Lead saved to Supabase:', leadData?.id);

    // ── 6.5 Send to Google Sheets via webhook (non-blocking, resilient) ───
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const sheetsSecret = process.env.SHEETS_WEBHOOK_SECRET;

    if (sheetsWebhookUrl && sheetsSecret) {
      const sheetsPayload = {
        secret: sheetsSecret,
        lead_id: leadData?.id || null,
        created_at: leadData?.created_at || new Date().toISOString(),
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        message: sanitizedMessage,
        source: 'Formulario',
        priority: 'Media',
        notes: '',
        ip: ip,
      };

      try {
        console.log('Calling Google Sheets webhook...', {
          lead_id: leadData?.id,
          url: sheetsWebhookUrl.substring(0, 50) + '...',
        });

        const webhookResponse = await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetsPayload),
          signal: AbortSignal.timeout(5000),
        });

        const responseText = await webhookResponse.text();

        console.log('Sheets webhook response:', {
          status: webhookResponse.status,
          ok: webhookResponse.ok,
          bodyPreview: responseText.substring(0, 500),
        });

        try {
          const data = JSON.parse(responseText);
          if (data.ok === true) {
            console.log('Google Sheets webhook success:', {
              lead_id: data.lead_id,
              action: data.action,
              row: data.row,
            });
          } else {
            console.error('Google Sheets returned ok=false:', data.message);
          }
        } catch (parseError) {
          console.error('Sheets response not valid JSON:', responseText.substring(0, 200));
        }
      } catch (webhookError: any) {
        console.error('Google Sheets webhook error (non-blocking):', {
          name: webhookError.name,
          message: webhookError.message,
        });
      }
    } else {
      console.warn('Google Sheets webhook not configured:', {
        hasUrl: !!sheetsWebhookUrl,
        hasSecret: !!sheetsSecret,
      });
    }

    // ── 7. Send email via Resend ──────────────────────────────────────────
    const resend = new Resend(RESEND_API_KEY);

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif; line-height: 1.6; color: #0a0a0a; background-color: #fafaf9; margin: 0; padding: 40px 20px; }
    .container { max-width: 560px; margin: 0 auto; background-color: #ffffff; }
    .header { padding: 32px 40px 24px; text-align: left; }
    .logo { font-size: 13px; font-weight: 700; letter-spacing: 0.15em; color: #0a0a0a; margin: 0; }
    .divider { border-top: 1px solid #e5e5e5; margin: 0; }
    .content { padding: 0 40px; }
    .title { font-size: 22px; font-weight: 500; color: #0a0a0a; margin: 32px 0 8px 0; }
    .subtitle { font-size: 14px; color: #525252; margin: 0 0 32px 0; }
    .field { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #f5f5f5; }
    .label { font-weight: 600; color: #a3a3a3; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
    .value { margin: 0; padding-left: 12px; border-left: 3px solid #3b82f6; font-size: 15px; color: #0a0a0a; }
    .meta { font-size: 12px; color: #a3a3a3; padding-top: 24px; }
    .footer { text-align: center; font-size: 12px; color: #a3a3a3; padding: 24px 40px 32px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">CASELYN</div>
    </div>
    <div class="divider"></div>
    <div class="content">
      <h1 class="title">Nuevo contacto</h1>
      <p class="subtitle">${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', ' ·')}</p>
      
      <div class="field">
        <div class="label">Nombre</div>
        <div class="value">${sanitizedName}</div>
      </div>
      
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${sanitizedEmail}</div>
      </div>
      
      <div class="field">
        <div class="label">Telefono</div>
        <div class="value">${sanitizedPhone || '—'}</div>
      </div>
      
      <div class="field" style="border-bottom: none;">
        <div class="label">Mensaje</div>
        <div class="value">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
      </div>
      
      <div class="divider"></div>
      <div class="meta">
        Informacion tecnica:<br>
        IP: ${ip}<br>
        User Agent: ${userAgent}<br>
        Lead ID: ${leadData?.id || 'N/A'}
      </div>
    </div>
    <div class="footer">
      &copy; 2026 Caselyn
    </div>
  </div>
</body>
</html>
    `.trim();

    const emailText = `
NUEVO CONTACTO — CASELYN

Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', ' ·')}

NOMBRE:
${sanitizedName}

EMAIL:
${sanitizedEmail}

TELEFONO:
${sanitizedPhone || '—'}

MENSAJE:
${sanitizedMessage}

---
INFORMACION TECNICA:
IP: ${ip}
User Agent: ${userAgent}
Lead ID: ${leadData?.id || 'N/A'}
    `.trim();

    const { data: emailData, error: resendError } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `Nuevo contacto — ${sanitizedName}`,
      html: emailHtml,
      text: emailText,
    });

    if (resendError) {
      console.error('Resend error:', resendError);
      console.warn('Email failed but lead was saved successfully');
    } else {
      console.log('Email sent via Resend:', emailData?.id);
    }

    // ── 8. Return success ─────────────────────────────────────────────────
    res.setHeader('X-RateLimit-Remaining', String(rateLimitResult.remaining));
    return res.status(200).json({
      ok: true,
      message: 'Mensaje enviado correctamente. Responderemos en menos de 24h.',
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({
      ok: false,
      error: 'Error inesperado. Por favor, intenta de nuevo o contacta por WhatsApp.',
    });
  }
}
