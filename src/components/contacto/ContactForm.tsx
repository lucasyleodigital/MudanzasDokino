"use client";

import { useState } from "react";
import Turnstile from "@/components/Turnstile";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

const EMPTY_FORM: ContactFormValues = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
  turnstileToken: "",
  website: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revisa los campos del formulario.");
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("No hemos podido enviar tu mensaje. Prueba de nuevo o escríbenos por WhatsApp.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-line bg-accent-soft p-8 text-center">
        <h2 className="font-heading text-xl font-bold text-ink">Mensaje enviado</h2>
        <p className="mt-2 text-ink-muted">Te responderemos lo antes posible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={(e) => update("website", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Nombre completo</span>
        <input className="input" value={values.nombre} onChange={(e) => update("nombre", e.target.value)} />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Email</span>
        <input
          type="email"
          className="input"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Teléfono (opcional)</span>
        <input className="input" value={values.telefono} onChange={(e) => update("telefono", e.target.value)} />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Mensaje</span>
        <textarea
          className="input min-h-32"
          value={values.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
        />
      </label>

      <Turnstile onVerify={(token) => update("turnstileToken", token)} />

      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
