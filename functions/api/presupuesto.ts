import { quoteFormSchema, SERVICIOS_EXTRA_LABELS, TIPO_MERCANCIA_LABELS } from "../../src/lib/validation";
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

  const parsed = quoteFormSchema.safeParse(body);
  if (!parsed.success) {
    return json({ error: "Datos inválidos", issues: parsed.error.issues }, 400);
  }
  const data = parsed.data;

  // Honeypot: si el campo "website" viene relleno, es un bot. Respondemos 200
  // sin enviar el email para no delatar el mecanismo de defensa.
  if (data.website) {
    return json({ ok: true });
  }

  const verified = await verifyTurnstile(env, data.turnstileToken, ip);
  if (!verified) {
    return json({ error: "Verificación anti-spam fallida" }, 403);
  }

  const serviciosLabel =
    data.servicios.map((s) => SERVICIOS_EXTRA_LABELS[s]).join(", ") || "Ninguno";

  const html = `
    <h2>Nueva solicitud de presupuesto</h2>
    <h3>Contacto</h3>
    <p>
      <strong>Nombre:</strong> ${escapeHtml(sanitize(data.nombre))}<br />
      <strong>Teléfono:</strong> ${escapeHtml(sanitize(data.telefono))}<br />
      <strong>Email:</strong> ${escapeHtml(sanitize(data.email))}<br />
      <strong>Tipo de cliente:</strong> ${data.tipoCliente}
    </p>
    <h3>La mudanza</h3>
    <p>
      <strong>Origen:</strong> ${escapeHtml(sanitize(data.origen))}<br />
      <strong>Destino:</strong> ${escapeHtml(sanitize(data.destino))}<br />
      <strong>Fecha aproximada:</strong> ${escapeHtml(sanitize(data.fechaAproximada || "No indicada"))}
    </p>
    <h3>Detalles de acceso</h3>
    <p>
      <strong>Tipo de inmueble:</strong> ${data.tipoInmueble}<br />
      <strong>Habitaciones/m²:</strong> ${escapeHtml(sanitize(data.habitacionesOM2 || "No indicado"))}<br />
      <strong>Planta origen:</strong> ${escapeHtml(sanitize(data.plantaOrigen || "-"))} (ascensor: ${data.ascensorOrigen})<br />
      <strong>Planta destino:</strong> ${escapeHtml(sanitize(data.plantaDestino || "-"))} (ascensor: ${data.ascensorDestino})
    </p>
    <h3>Servicios</h3>
    <p>
      <strong>Tipo de mercancía:</strong> ${TIPO_MERCANCIA_LABELS[data.tipoMercancia]}<br />
      <strong>Volumen aproximado:</strong> ${escapeHtml(sanitize(data.volumenAproximado || "No indicado"))}<br />
      <strong>Servicios extra:</strong> ${escapeHtml(serviciosLabel)}
    </p>
    ${data.comentarios ? `<h3>Comentarios</h3><p>${escapeHtml(sanitize(data.comentarios))}</p>` : ""}
  `;

  try {
    await sendEmail(env, {
      subject: `Nueva solicitud de presupuesto — ${sanitize(data.nombre)}`,
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
