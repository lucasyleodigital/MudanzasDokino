import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PresupuestoTabs from "@/components/presupuesto/PresupuestoTabs";

export const metadata: Metadata = {
  title: "Pedir presupuesto — Mudanzas Dokino",
  description:
    "Solicita presupuesto para mudanzas o paquetería. Te respondemos con precio cerrado, sin sorpresas.",
};

export default function PresupuestoPage() {
  return (
    <div
      className="min-h-screen bg-[#060d1e]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {/* ── Header ──────────────────────────────────── */}
      <div className="relative border-b border-white/[0.06] py-14 md:py-20">
        <div
          className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
              Sin compromiso
            </span>
            <h1 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
              Pedir presupuesto
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Selecciona el tipo de servicio, cuéntanos los detalles y te respondemos con
              precio cerrado — no es un cálculo automático.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── Form ──────────────────────────────────────── */}
      <div className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <PresupuestoTabs />
      </div>

      {/* ── Trust strip ───────────────────────────────── */}
      <div className="border-t border-white/[0.06] bg-white/[0.02] py-10">
        <div className="mx-auto max-w-2xl px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Respuesta en menos de 24 h",
              "Precio cerrado, sin sorpresas",
              "Sin compromiso de contratación",
            ].map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="7" fill="rgba(74,222,128,0.12)" />
                  <path d="M4 7l2 2 4-4" stroke="#4ade80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
