"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/constants";

export default function ContactForm() {
  const [values, setValues] = useState({ nombre: "", telefono: "", mensaje: "" });

  const waHref = whatsappHref(
    `Hola, me llamo ${values.nombre || "..."}${values.telefono ? ` (tel. ${values.telefono})` : ""}.\n\n${values.mensaje || "Quería consultar sobre una mudanza."}`
  );

  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-8 backdrop-blur-sm">
      <h3 className="font-heading text-lg font-bold text-white">Escríbenos</h3>
      <p className="mt-1 text-sm text-slate-400">Rellena el formulario y te contactamos por WhatsApp.</p>

      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Nombre</span>
          <input
            className="w-full rounded-xl border border-white/[0.1] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20"
            placeholder="Tu nombre completo"
            value={values.nombre}
            onChange={(e) => setValues((p) => ({ ...p, nombre: e.target.value }))}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Teléfono (opcional)</span>
          <input
            className="w-full rounded-xl border border-white/[0.1] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20"
            placeholder="600 000 000"
            value={values.telefono}
            onChange={(e) => setValues((p) => ({ ...p, telefono: e.target.value }))}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Tu consulta</span>
          <textarea
            rows={4}
            className="w-full resize-none rounded-xl border border-white/[0.1] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20"
            placeholder="Cuéntanos sobre tu mudanza — origen, destino, fechas aproximadas..."
            value={values.mensaje}
            onChange={(e) => setValues((p) => ({ ...p, mensaje: e.target.value }))}
          />
        </label>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/40"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
          </svg>
          Enviar por WhatsApp
        </a>
        <p className="text-center text-xs text-slate-600">Al pulsar, se abrirá WhatsApp con tu mensaje redactado.</p>
      </div>
    </div>
  );
}
