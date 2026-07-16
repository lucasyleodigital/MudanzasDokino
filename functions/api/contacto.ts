import { contactFormSchema } from "../../src/lib/validation";
import { checkRateLimit, verifyTurnstile, sanitize, escapeHtml, type Env } from "../_lib/security";
import { sendEmail } from "../_lib/resend";

interface EventContext {
  request: Request;
  env: Env;
}

export async function onRequestPost(context: EventContext): Promise<Response> {
  const { request, env } = context;
  const ip = request.headers.get("cf-connecting-ip") || "unknown";

  const allowed = await checkRateLimit(env, ip);
  if (!allowed) {
    return json({ error: "Demasiadas solicitudes. Inténtalo de nuevo en unos minutos." }, 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "JSON inválido" }, 400);
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return json({ error: "Datos inválidos", issues: parsed.error.issues }, 400);
  }
  const data = parsed.data;

  if (data.website) {
    return json({ ok: true });
  }

  const verified = await verifyTurnstile(env, data.turnstileToken, ip);
  if (!verified) {
    return json({ error: "Verificación anti-spam fallida" }, 403);
  }

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p>
      <strong>Nombre:</strong> ${escapeHtml(sanitize(data.nombre))}<br />
      <strong>Email:</strong> ${escapeHtml(sanitize(data.email))}<br />
      <strong>Teléfono:</strong> ${escapeHtml(sanitize(data.telefono || "No indicado"))}
    </p>
    <p>${escapeHtml(sanitize(data.mensaje))}</p>
  `;

  try {
    await sendEmail(env, {
      subject: `Nuevo mensaje de contacto — ${sanitize(data.nombre)}`,
      html,
      replyTo: data.email,
    });
  } catch (err) {
    return json({ error: (err as Error).message }, 502);
  }

  return json({ ok: true });
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
