import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// ============================================================================
// CONFIGURATION
// ============================================================================

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'caselyncontact@gmail.com';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Caselyn <onboarding@resend.dev>';

// Simple in-memory rate limiter (resets on cold starts in serverless)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 10;

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Get client IP from Vercel headers
 */
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

/**
 * Get User-Agent from headers
 */
function getUserAgent(req: VercelRequest): string {
  return (req.headers['user-agent'] as string) || 'unknown';
}

/**
 * Simple rate limiter by IP
 * NOTE: In serverless, this resets on cold starts. For production,
 * consider using Upstash Redis: https://upstash.com/docs/redis/features/ratelimiting
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    // New IP or expired window
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false; // Rate limit exceeded
  }

  // Increment count
  record.count += 1;
  return true;
}

/**
 * Validate environment variables
 */
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
  // 1. Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  }

  // 2. Validate environment variables
  const envCheck = validateEnv();
  if (!envCheck.ok) {
    console.error('Environment validation failed:', envCheck.error);
    return res.status(500).json({ ok: false, error: 'Error de configuración del servidor' });
  }

  // 3. Get client info
  const ip = getClientIP(req);
  const userAgent = getUserAgent(req);

  // 4. Check rate limit
  if (!checkRateLimit(ip)) {
    console.warn(`Rate limit exceeded for IP: ${ip}`);
    return res
      .status(429)
      .json({ ok: false, error: 'Demasiadas solicitudes. Intenta de nuevo más tarde.' });
  }

  // 5. Parse and validate request body
  const { name, email, phone, message, website } = req.body;

  // Honeypot check: if "website" field is filled, reject silently
  if (website && website.trim() !== '') {
    console.warn(`Honeypot triggered for IP: ${ip}`);
    // Return success to confuse bots, but don't save anything
    return res.status(200).json({ ok: true, message: 'Mensaje enviado' });
  }

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ ok: false, error: 'El nombre es obligatorio' });
  }

  if (!email || typeof email !== 'string' || email.trim() === '') {
    return res
      .status(400)
      .json({ ok: false, error: 'El email es obligatorio' });
  }

  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ ok: false, error: 'El mensaje es obligatorio' });
  }

  if (message.trim().length < 10) {
    return res
      .status(400)
      .json({ ok: false, error: 'El mensaje debe tener al menos 10 caracteres' });
  }

  if (message.trim().length > 5000) {
    return res
      .status(400)
      .json({ ok: false, error: 'El mensaje es demasiado largo (máximo 5000 caracteres)' });
  }

  // Sanitize inputs
  const sanitizedName = name.trim();
  const sanitizedEmail = email.trim();
  const sanitizedPhone = phone ? phone.trim() : '';
  const sanitizedMessage = message.trim();

  try {
    // 6. Save to Supabase
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

    // 6.5 Send to Google Sheets via webhook (non-blocking, resilient)
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

      // Fire-and-forget controlado (se ejecuta ANTES del return)
      try {
        console.log('📞 Calling Google Sheets webhook...', {
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

        console.log('📬 Sheets webhook response:', {
          status: webhookResponse.status,
          ok: webhookResponse.ok,
          bodyPreview: responseText.substring(0, 500),
        });

        // Parsear JSON
        try {
          const data = JSON.parse(responseText);
          if (data.ok === true) {
            console.log('✅ Google Sheets webhook success:', {
              lead_id: data.lead_id,
              action: data.action,
              row: data.row,
            });
          } else {
            console.error('❌ Google Sheets returned ok=false:', data.message);
          }
        } catch (parseError) {
          console.error('❌ Sheets response not valid JSON:', responseText.substring(0, 200));
        }
      } catch (webhookError: any) {
        console.error('❌ Google Sheets webhook error (non-blocking):', {
          name: webhookError.name,
          message: webhookError.message,
        });
      }
    } else {
      console.warn('⚠️ Google Sheets webhook not configured:', {
        hasUrl: !!sheetsWebhookUrl,
        hasSecret: !!sheetsSecret,
      });
    }

    // 7. Send email via Resend
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
        <div class="label">Teléfono</div>
        <div class="value">${sanitizedPhone || '—'}</div>
      </div>
      
      <div class="field" style="border-bottom: none;">
        <div class="label">Mensaje</div>
        <div class="value">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
      </div>
      
      <div class="divider"></div>
      <div class="meta">
        Información técnica:<br>
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

TELÉFONO:
${sanitizedPhone || '—'}

MENSAJE:
${sanitizedMessage}

---
INFORMACIÓN TÉCNICA:
IP: ${ip}
User Agent: ${userAgent}
Lead ID: ${leadData?.id || 'N/A'}
        `.trim();

    const { data: emailData, error: resendError } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `Nuevo contacto — ${sanitizedName}`,
      html: emailHtml,
      text: emailText, // Fallback for email clients that don't support HTML
    });

    if (resendError) {
      console.error('Resend error:', resendError);
      // Don't fail the request if email fails - lead is already saved
      console.warn('Email failed but lead was saved successfully');
    } else {
      console.log('Email sent via Resend:', emailData?.id);
    }

    // 8. Return success
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
