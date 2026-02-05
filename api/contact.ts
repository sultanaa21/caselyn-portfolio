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
  const { name, contact, message, website } = req.body;

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

  if (!contact || typeof contact !== 'string' || contact.trim() === '') {
    return res
      .status(400)
      .json({ ok: false, error: 'El contacto (email o teléfono) es obligatorio' });
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
  const sanitizedContact = contact.trim();
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
        contact: sanitizedContact,
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
        contact: sanitizedContact,
        message: sanitizedMessage,
        source: 'Formulario',
        priority: 'Media',
        notes: '',
        ip: ip
      };

      console.log('📞 Calling Google Sheets webhook...', {
        lead_id: leadData?.id,
        url: sheetsWebhookUrl.substring(0, 50) + '...'
      });

      // Fire-and-forget con timeout 5s y manejo robusto de errores
      fetch(sheetsWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sheetsPayload),
        signal: AbortSignal.timeout(5000)
      })
        .then(async (response) => {
          // Leer response como texto primero
          const responseText = await response.text();

          console.log('📬 Sheets webhook response:', {
            status: response.status,
            ok: response.ok,
            bodyPreview: responseText.substring(0, 500)
          });

          // Intentar parsear JSON
          let data: any;
          try {
            data = JSON.parse(responseText);
          } catch (e) {
            console.error('❌ Sheets webhook response not valid JSON:', {
              responseText: responseText,
              parseError: e instanceof Error ? e.message : String(e)
            });
            return;
          }

          // Verificar campo 'ok' en vez de HTTP status
          if (data.ok === true) {
            console.log('✅ Google Sheets webhook success:', {
              lead_id: data.lead_id,
              action: data.action,
              row: data.row
            });
          } else {
            console.error('❌ Google Sheets returned ok=false:', {
              message: data.message,
              statusHint: data.statusHint,
              fullResponse: data
            });
          }
        })
        .catch(error => {
          // Timeout o error de red (NO bloquea el flujo)
          console.error('❌ Google Sheets webhook error (non-blocking):', {
            errorMessage: error.message,
            errorName: error.name,
            errorStack: error.stack?.substring(0, 200)
          });
        });
    } else {
      console.warn('⚠️ Google Sheets webhook not configured:', {
        hasUrl: !!sheetsWebhookUrl,
        hasSecret: !!sheetsSecret
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
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: 600; color: #4b5563; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #667eea; }
    .meta { font-size: 12px; color: #6b7280; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">🎯 Nuevo Lead desde Caselyn</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nombre</div>
        <div class="value">${sanitizedName}</div>
      </div>
      
      <div class="field">
        <div class="label">Contacto</div>
        <div class="value">${sanitizedContact}</div>
      </div>
      
      <div class="field">
        <div class="label">Mensaje</div>
        <div class="value">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
      </div>
      
      <div class="meta">
        <strong>Información técnica:</strong><br>
        📅 Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}<br>
        🌐 IP: ${ip}<br>
        💻 User Agent: ${userAgent}<br>
        🆔 Lead ID: ${leadData?.id || 'N/A'}
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    const emailText = `
🎯 NUEVO LEAD DESDE CASELYN

NOMBRE: ${sanitizedName}
CONTACTO: ${sanitizedContact}

MENSAJE:
${sanitizedMessage}

---
INFORMACIÓN TÉCNICA:
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
IP: ${ip}
User Agent: ${userAgent}
Lead ID: ${leadData?.id || 'N/A'}
        `.trim();

    const { data: emailData, error: resendError } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `🎯 Nuevo Lead: ${sanitizedName}`,
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
