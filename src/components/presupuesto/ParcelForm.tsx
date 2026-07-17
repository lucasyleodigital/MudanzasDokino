"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/constants";

type FormValues = {
  nombre: string;
  telefono: string;
  email: string;
  tipoCliente: "particular" | "empresa";
  origen: string;
  destino: string;
  tipo: "paquete" | "pale" | "carga_general" | "fragil";
  peso: string;
  dimensiones: string;
  urgencia: "estandar" | "urgente";
  comentarios: string;
  website: string;
};

const EMPTY: FormValues = {
  nombre: "",
  telefono: "",
  email: "",
  tipoCliente: "particular",
  origen: "",
  destino: "",
  tipo: "paquete",
  peso: "",
  dimensiones: "",
  urgencia: "estandar",
  comentarios: "",
  website: "",
};

const TIPO_LABELS: Record<FormValues["tipo"], string> = {
  paquete: "Paquete / bulto suelto",
  pale: "Palé / mercancía paletizada",
  carga_general: "Carga general / maquinaria",
  fragil: "Objetos frágiles / arte / antigüedades",
};

export default function ParcelForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateStep(current: number) {
    const required: (keyof FormValues)[] =
      current === 1 ? ["nombre", "telefono", "email"] : ["origen", "destino"];
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
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
    setStep(2);
  }

  function goBack() {
    setStep(1);
  }

  const whatsappMsg = [
    "Hola, quiero presupuesto para un envío/transporte:",
    `Nombre: ${values.nombre}`,
    `Teléfono: ${values.telefono}`,
    `Origen: ${values.origen}`,
    `Destino: ${values.destino}`,
    `Tipo: ${TIPO_LABELS[values.tipo]}`,
    values.peso ? `Peso/vol: ${values.peso}` : null,
    values.dimensiones ? `Dimensiones: ${values.dimensiones}` : null,
    values.urgencia === "urgente" ? "URGENTE (24-48h)" : "Estándar",
    values.comentarios ? `Comentarios: ${values.comentarios}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form onSubmit={(e) => e.preventDefault()} noValidate>
      {/* Honeypot */}
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

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-medium text-ink-muted">
          <span>Paso {step} de 2</span>
          <span>{step === 1 ? 50 : 100}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-orange-500 transition-all duration-500"
            style={{ width: `${step === 1 ? 50 : 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <fieldset className="space-y-5">
          <legend className="font-heading text-xl font-bold text-ink">Tus datos</legend>
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
              type="tel"
              value={values.telefono}
              onChange={(e) => update("telefono", e.target.value)}
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              className="input"
              type="email"
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
          <legend className="font-heading text-xl font-bold text-ink">El envío</legend>
          <Field label="Dirección de recogida (origen)" error={errors.origen}>
            <input
              className="input"
              value={values.origen}
              onChange={(e) => update("origen", e.target.value)}
            />
          </Field>
          <Field label="Dirección de entrega (destino)" error={errors.destino}>
            <input
              className="input"
              value={values.destino}
              onChange={(e) => update("destino", e.target.value)}
            />
          </Field>
          <div>
            <span className="mb-2 block text-sm font-medium text-ink">Tipo de mercancía</span>
            <select
              className="input"
              value={values.tipo}
              onChange={(e) => update("tipo", e.target.value as FormValues["tipo"])}
            >
              {Object.entries(TIPO_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Peso / volumen aproximado">
              <input
                className="input"
                placeholder="ej. 25 kg · 0,5 m³"
                value={values.peso}
                onChange={(e) => update("peso", e.target.value)}
              />
            </Field>
            <Field label="Dimensiones aproximadas">
              <input
                className="input"
                placeholder="ej. 60×40×30 cm"
                value={values.dimensiones}
                onChange={(e) => update("dimensiones", e.target.value)}
              />
            </Field>
          </div>
          <div>
            <span className="mb-2 block text-sm font-medium text-ink">Urgencia</span>
            <div className="flex flex-wrap gap-4">
              {(
                [
                  ["estandar", "Estándar (3-5 días)"],
                  ["urgente", "Urgente (24-48 h)"],
                ] as const
              ).map(([val, label]) => (
                <label key={val} className="flex items-center gap-2 text-sm text-ink">
                  <input
                    type="radio"
                    name="urgencia"
                    checked={values.urgencia === val}
                    onChange={() => update("urgencia", val)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
          <Field label="Comentarios adicionales (opcional)">
            <textarea
              className="input min-h-20"
              value={values.comentarios}
              onChange={(e) => update("comentarios", e.target.value)}
            />
          </Field>
        </fieldset>
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

        {step < 2 ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Continuar
          </button>
        ) : (
          <a
            href={whatsappHref(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-md bg-[#25ad5a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1e9a4f] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"/>
            </svg>
            Solicitar por WhatsApp
          </a>
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
