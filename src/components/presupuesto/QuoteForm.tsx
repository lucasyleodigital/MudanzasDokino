"use client";

import { useState } from "react";
import Turnstile from "@/components/Turnstile";
import {
  quoteFormSchema,
  SERVICIOS_EXTRA_LABELS,
  TIPO_MERCANCIA_LABELS,
  type QuoteFormValues,
} from "@/lib/validation";
import { whatsappHref } from "@/lib/constants";

const TOTAL_STEPS = 4;

const EMPTY_FORM: QuoteFormValues = {
  nombre: "",
  telefono: "",
  email: "",
  tipoCliente: "particular",
  origen: "",
  destino: "",
  fechaAproximada: "",
  tipoInmueble: "vivienda",
  habitacionesOM2: "",
  plantaOrigen: "",
  ascensorOrigen: "no",
  plantaDestino: "",
  ascensorDestino: "no",
  tipoMercancia: "hogar_completo",
  volumenAproximado: "",
  servicios: [],
  comentarios: "",
  turnstileToken: "",
  website: "",
};

const REQUIRED_BY_STEP: Record<number, (keyof QuoteFormValues)[]> = {
  1: ["nombre", "telefono", "email"],
  2: ["origen", "destino"],
  3: [],
  4: [],
};

function buildWhatsappSummary(v: QuoteFormValues) {
  const servicios = v.servicios.map((s) => SERVICIOS_EXTRA_LABELS[s]).join(", ") || "ninguno";
  return [
    `Hola, acabo de enviar una solicitud de presupuesto desde la web.`,
    `Nombre: ${v.nombre}`,
    `Origen: ${v.origen}`,
    `Destino: ${v.destino}`,
    v.fechaAproximada ? `Fecha aproximada: ${v.fechaAproximada}` : null,
    `Tipo: ${TIPO_MERCANCIA_LABELS[v.tipoMercancia]}`,
    `Servicios extra: ${servicios}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<QuoteFormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function update<K extends keyof QuoteFormValues>(key: K, value: QuoteFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function toggleServicio(servicio: string) {
    setValues((prev) => {
      const has = prev.servicios.includes(servicio as never);
      return {
        ...prev,
        servicios: has
          ? prev.servicios.filter((s) => s !== servicio)
          : [...prev.servicios, servicio as (typeof prev.servicios)[number]],
      };
    });
  }

  function validateStep(current: number) {
    const required = REQUIRED_BY_STEP[current] ?? [];
    const nextErrors: Partial<Record<keyof QuoteFormValues, string>> = {};
    for (const field of required) {
      const value = values[field];
      if (typeof value === "string" && value.trim().length === 0) {
        nextErrors[field] = "Este campo es obligatorio";
      }
    }
    if (current === 1 && values.email && !/\S+@\S+\.\S+/.test(values.email)) {
      nextErrors.email = "Indica un email válido";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  function goBack() {
    setStep((s) => Math.max(1, s - 1));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(step)) return;

    const parsed = quoteFormSchema.safeParse(values);
    if (!parsed.success) {
      setServerError("Revisa los campos marcados antes de enviar.");
      return;
    }
    if (!values.turnstileToken) {
      setServerError("Completa la verificación anti-spam antes de enviar.");
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/presupuesto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("sent");
    } catch {
      setStatus("error");
      setServerError(
        "No hemos podido enviar tu solicitud. Prueba de nuevo o escríbenos directamente por WhatsApp."
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-line bg-accent-soft p-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-ink">
          Hemos recibido tu solicitud
        </h2>
        <p className="mt-3 text-ink-muted">
          Una persona del equipo revisa cada presupuesto — te contestamos por email en
          cuanto lo tengamos listo. Si quieres, también puedes mandarnos el resumen por
          WhatsApp para agilizarlo.
        </p>
        <a
          href={whatsappHref(buildWhatsappSummary(values))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-md bg-[#25ad5a] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Enviar resumen por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot anti-spam: campo oculto que un bot rellenaría y una persona nunca ve */}
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

      <div className="mb-8">
        <div className="flex justify-between text-xs font-medium text-ink-muted">
          <span>Paso {step} de {TOTAL_STEPS}</span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <fieldset className="space-y-5">
          <legend className="font-heading text-xl font-bold text-ink">Tus datos de contacto</legend>
          <Field label="Nombre completo" error={errors.nombre}>
            <input
              className="input"
              value={values.nombre}
              onChange={(e) => update("nombre", e.target.value)}
            />
          </Field>
          <Field label="Teléfono" error={errors.telefono}>
            <input
              className="input"
              value={values.telefono}
              onChange={(e) => update("telefono", e.target.value)}
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              className="input"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </Field>
          <div>
            <span className="mb-2 block text-sm font-medium text-ink">Tipo de cliente</span>
            <div className="flex gap-4">
              {(["particular", "empresa"] as const).map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm text-ink">
                  <input
                    type="radio"
                    name="tipoCliente"
                    checked={values.tipoCliente === opt}
                    onChange={() => update("tipoCliente", opt)}
                  />
                  {opt === "particular" ? "Particular" : "Empresa"}
                </label>
              ))}
            </div>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-5">
          <legend className="font-heading text-xl font-bold text-ink">La mudanza</legend>
          <Field label="Dirección de origen" error={errors.origen}>
            <input
              className="input"
              value={values.origen}
              onChange={(e) => update("origen", e.target.value)}
            />
          </Field>
          <Field label="Dirección de destino" error={errors.destino}>
            <input
              className="input"
              value={values.destino}
              onChange={(e) => update("destino", e.target.value)}
            />
          </Field>
          <Field label="Fecha aproximada (opcional)">
            <input
              type="date"
              className="input"
              value={values.fechaAproximada}
              onChange={(e) => update("fechaAproximada", e.target.value)}
            />
          </Field>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="space-y-5">
          <legend className="font-heading text-xl font-bold text-ink">Detalles de acceso</legend>
          <p className="text-sm text-ink-muted">
            Esta información nos permite saber si hace falta plataforma elevadora.
          </p>
          <div>
            <span className="mb-2 block text-sm font-medium text-ink">Tipo de inmueble</span>
            <select
              className="input"
              value={values.tipoInmueble}
              onChange={(e) => update("tipoInmueble", e.target.value as QuoteFormValues["tipoInmueble"])}
            >
              <option value="vivienda">Vivienda</option>
              <option value="oficina">Oficina</option>
              <option value="local">Local</option>
            </select>
          </div>
          <Field label="Nº de habitaciones o m² aproximados">
            <input
              className="input"
              value={values.habitacionesOM2}
              onChange={(e) => update("habitacionesOM2", e.target.value)}
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Planta en origen">
              <input
                className="input"
                value={values.plantaOrigen}
                onChange={(e) => update("plantaOrigen", e.target.value)}
              />
            </Field>
            <div>
              <span className="mb-2 block text-sm font-medium text-ink">¿Ascensor en origen?</span>
              <YesNo value={values.ascensorOrigen} onChange={(v) => update("ascensorOrigen", v)} name="ascensorOrigen" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Planta en destino">
              <input
                className="input"
                value={values.plantaDestino}
                onChange={(e) => update("plantaDestino", e.target.value)}
              />
            </Field>
            <div>
              <span className="mb-2 block text-sm font-medium text-ink">¿Ascensor en destino?</span>
              <YesNo value={values.ascensorDestino} onChange={(v) => update("ascensorDestino", v)} name="ascensorDestino" />
            </div>
          </div>
        </fieldset>
      )}

      {step === 4 && (
        <fieldset className="space-y-5">
          <legend className="font-heading text-xl font-bold text-ink">Servicios y comentarios</legend>
          <div>
            <span className="mb-2 block text-sm font-medium text-ink">Tipo de mercancía</span>
            <select
              className="input"
              value={values.tipoMercancia}
              onChange={(e) => update("tipoMercancia", e.target.value as QuoteFormValues["tipoMercancia"])}
            >
              {Object.entries(TIPO_MERCANCIA_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <Field label="Volumen o peso aproximado (opcional)">
            <input
              className="input"
              placeholder="ej. piso de 3 habitaciones, ~15m³"
              value={values.volumenAproximado}
              onChange={(e) => update("volumenAproximado", e.target.value)}
            />
          </Field>
          <div>
            <span className="mb-2 block text-sm font-medium text-ink">Servicios extra</span>
            <div className="grid gap-2 sm:grid-cols-2">
              {Object.entries(SERVICIOS_EXTRA_LABELS).map(([value, label]) => (
                <label key={value} className="flex items-center gap-2 text-sm text-ink">
                  <input
                    type="checkbox"
                    checked={values.servicios.includes(value as never)}
                    onChange={() => toggleServicio(value)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
          <Field label="Comentarios adicionales (opcional)">
            <textarea
              className="input min-h-24"
              value={values.comentarios}
              onChange={(e) => update("comentarios", e.target.value)}
            />
          </Field>

          <div>
            <span className="mb-2 block text-sm font-medium text-ink">Verificación</span>
            <Turnstile onVerify={(token) => update("turnstileToken", token)} />
          </div>
        </fieldset>
      )}

      {serverError && (
        <p role="alert" className="mt-5 text-sm font-medium text-red-600">
          {serverError}
        </p>
      )}

      <div className="mt-8 flex justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={goBack}
            className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-ink hover:bg-paper"
          >
            Atrás
          </button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Continuar
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark disabled:opacity-60"
          >
            {status === "submitting" ? "Enviando..." : "Enviar solicitud"}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}

function YesNo({
  value,
  onChange,
  name,
}: {
  value: "si" | "no";
  onChange: (v: "si" | "no") => void;
  name: string;
}) {
  return (
    <div className="flex gap-4">
      {(["si", "no"] as const).map((opt) => (
        <label key={opt} className="flex items-center gap-2 text-sm text-ink">
          <input
            type="radio"
            name={name}
            checked={value === opt}
            onChange={() => onChange(opt)}
          />
          {opt === "si" ? "Sí" : "No"}
        </label>
      ))}
    </div>
  );
}
