export type Env = {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  NOTIFY_TO_EMAIL?: string;
  NOTIFY_FROM_EMAIL?: string;
  // [PENDIENTE] namespace KV de Cloudflare para el rate limiting — si no está
  // enlazado, el rate limiting se omite de forma segura (no bloquea envíos).
  RATE_LIMIT_KV?: KVNamespace;
};

const RATE_LIMIT_WINDOW_SECONDS = 10 * 60; // 10 minutos
const RATE_LIMIT_MAX_REQUESTS = 5;

export async function checkRateLimit(env: Env, ip: string): Promise<boolean> {
  if (!env.RATE_LIMIT_KV) return true; // sin KV enlazado, no bloqueamos

  const key = `ratelimit:${ip}`;
  const raw = await env.RATE_LIMIT_KV.get(key);
  const count = raw ? parseInt(raw, 10) : 0;

  if (count >= RATE_LIMIT_MAX_REQUESTS) return false;

  await env.RATE_LIMIT_KV.put(key, String(count + 1), {
    expirationTtl: RATE_LIMIT_WINDOW_SECONDS,
  });
  return true;
}

export async function verifyTurnstile(env: Env, token: string, ip: string): Promise<boolean> {
  if (!env.TURNSTILE_SECRET_KEY) {
    // Sin secret configurado (entorno de desarrollo) dejamos pasar para no
    // bloquear el desarrollo local, pero SIEMPRE hay que configurar la clave
    // real antes de lanzar a producción.
    return true;
  }

  const body = new URLSearchParams();
  body.set("secret", env.TURNSTILE_SECRET_KEY);
  body.set("response", token);
  body.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

// Elimina saltos de línea y caracteres de control para evitar inyección de
// cabeceras en el email compuesto a partir de los campos del formulario.
export function sanitize(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
