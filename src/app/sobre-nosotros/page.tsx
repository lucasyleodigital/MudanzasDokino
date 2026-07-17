import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre nosotros — Mudanzas Dokino",
  description: `Conoce ${SITE.name}, empresa de mudanzas con furgonetas y equipo propio en Barcelona.`,
};

const STATS = [
  { value: "300+", label: "Mudanzas realizadas" },
  { value: "5★", label: "Valoración media" },
  { value: "24 h", label: "Tiempo de respuesta" },
  { value: "100%", label: "Equipo propio" },
];

const VALUES = [
  {
    color: "orange",
    bg: "bg-orange-500/10 border-orange-500/30",
    icon_color: "text-orange-400",
    title: "Equipo propio, no subcontratas",
    desc: "Las mismas personas que recogen tus cosas en origen las entregan en destino. Ningún intermediario en el camino.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: "blue",
    bg: "bg-blue-500/10 border-blue-500/30",
    icon_color: "text-blue-400",
    title: "Furgonetas propias",
    desc: "Flota de vehículos propia y plataforma elevadora para accesos complicados, sin depender de terceros.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    color: "violet",
    bg: "bg-violet-500/10 border-violet-500/30",
    icon_color: "text-violet-400",
    title: "Presupuesto exacto",
    desc: "Sin sorpresas en la factura. Te damos el precio cerrado antes de confirmar nada — preparado por una persona, no un sistema automático.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: "emerald",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    icon_color: "text-emerald-400",
    title: "Seguro de transporte",
    desc: "Tus objetos viajan protegidos. Cuéntanos el detalle de tu mudanza al pedir presupuesto y te explicamos la cobertura exacta.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHero
        label="Quiénes somos"
        title="Mudanzas Dokino,"
        highlight="tu equipo."
        subtitle="Una empresa de mudanzas especializada en el traslado completo de hogares y oficinas. Sin intermediarios, con equipo y vehículos propios, desde Barcelona."
        blobColor="rgba(139,92,246,0.38)"
      />

      {/* Stats */}
      <section className="relative bg-[#060d1e] py-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-10 text-center">
                <span className="font-heading text-4xl font-extrabold text-gradient-orange">{s.value}</span>
                <span className="mt-2 text-xs font-medium text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="relative bg-[#060d1e] py-12">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="section-label text-orange-400">Nuestra historia</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-white leading-tight">
                Especialistas en mudanzas, <span className="text-gradient-orange">no en excusas.</span>
              </h2>
              <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
                <p>
                  {SITE.name} nació para hacer algo que parece sencillo pero es difícil de encontrar: una mudanza donde la persona que te hace el presupuesto es la misma que mueve tus cosas.
                </p>
                <p>
                  Nos dedicamos exclusivamente a mudanzas. Eso significa que cada persona que recoge tus cosas en origen es la misma que las entrega en destino — sin cambios de transportista ni intermediarios por el camino.
                </p>
                <p>
                  Trabajamos tanto con particulares como con empresas, y cubrimos desde una mudanza de piso en Barcelona hasta un traslado de oficina a cualquier punto de España.
                </p>
              </div>
              <Link
                href="/presupuesto/"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Pedir presupuesto gratis
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Visual */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { n: "Barcelona", sub: "Sede principal" },
                  { n: "Cataluña", sub: "Cobertura completa" },
                  { n: "España", sub: "Larga distancia" },
                  { n: "24 h", sub: "Respuesta garantizada" },
                ].map((item) => (
                  <div key={item.n} className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-5 text-center backdrop-blur-sm">
                    <p className="font-heading text-lg font-extrabold text-white">{item.n}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="relative bg-[#060d1e] py-20">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="section-label justify-center text-orange-400">Por qué elegirnos</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-white">Lo que nos diferencia</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className={`group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${v.bg} backdrop-blur-sm`}
              >
                <div className={`mb-4 ${v.icon_color}`}>{v.icon}</div>
                <h3 className="font-heading text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
