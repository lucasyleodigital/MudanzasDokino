import type { Env } from "./security";

export async function sendEmail(
  env: Env,
  params: { subject: string; html: string; replyTo?: string }
) {
  if (!env.RESEND_API_KEY) {
    throw new Error(
      "RESEND_API_KEY no configurada. Añádela en las variables de entorno de Cloudflare Pages."
    );
  }
  if (!env.NOTIFY_TO_EMAIL || !env.NOTIFY_FROM_EMAIL) {
    throw new Error(
      "NOTIFY_TO_EMAIL / NOTIFY_FROM_EMAIL no configuradas en las variables de entorno."
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.NOTIFY_FROM_EMAIL,
      to: [env.NOTIFY_TO_EMAIL],
      reply_to: params.replyTo,
      subject: params.subject,
      html: params.html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error (${res.status}): ${text}`);
  }
}
