import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Zona de cobertura — Mudanzas en Barcelona, Cataluña y España",
  description: "Realizamos mudanzas en Barcelona y toda Cataluña, con cobertura de larga distancia a cualquier punto de España.",
};

const ZONES = [
  {
    id: "bcn",
    label: "Zona 1",
    name: "Barcelona y área metropolitana",
    desc: "Servicio rápido en toda la ciudad y municipios del Barcelonès, Baix Llobregat, Vallès Occidental y Maresme. Respuesta en menos de 24 h.",
    color: "orange",
    ring: "rgba(249,115,22,1)",
    ringGlow: "rgba(249,115,22,0.35)",
    bg: "bg-orange-500/10 border-orange-500/30",
    tag: "text-orange-300",
    stat: "< 24 h",
    statLabel: "tiempo de respuesta",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
        <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 44C24 44 8 32 8 20a16 16 0 0 1 32 0c0 12-16 24-16 24z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="24" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "cat",
    label: "Zona 2",
    name: "Toda Cataluña",
    desc: "Girona, Lleida, Tarragona, Terres de l'Ebre y todas las comarcas catalanas. Mudanzas a cualquier punto sin coste adicional de larga distancia.",
    color: "blue",
    ring: "rgba(59,130,246,1)",
    ringGlow: "rgba(59,130,246,0.35)",
    bg: "bg-blue-500/10 border-blue-500/30",
    tag: "text-blue-300",
    stat: "4 provincias",
    statLabel: "cobertura completa",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
        <path d="M8 12h32M8 24h32M8 36h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 8v32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "esp",
    label: "Zona 3",
    name: "Resto de España",
    desc: "Larga distancia a Madrid, Valencia, Andalucía, Galicia y cualquier punto peninsular. Mismo equipo de origen a destino, sin cambios de transportista.",
    color: "violet",
    ring: "rgba(139,92,246,1)",
    ringGlow: "rgba(139,92,246,0.35)",
    bg: "bg-violet-500/10 border-violet-500/30",
    tag: "text-violet-300",
    stat: "Toda España",
    statLabel: "sin cambio de equipo",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
        <path d="M6 34l8-12 8 8 8-16 12 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="42" cy="34" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="6" cy="34" r="3" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
];

export default function ZonaCoberturaPage() {
  return (
    <>
      <PageHero
        label="Dónde trabajamos"
        title="Zona de"
        highlight="cobertura."
        subtitle="Desde Barcelona hasta cualquier punto de España, con el mismo equipo y la misma atención de principio a fin."
        blobColor="rgba(59,130,246,0.38)"
      />

      {/* Visual de zonas concéntricas */}
      <section className="relative bg-[#060d1e] py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Visual mapa concéntrico */}
          <div className="flex flex-col items-center justify-center py-12 md:py-16">
            <div className="relative flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
              {/* Anillo España */}
              <div
                className="absolute h-full w-full rounded-full border-2 border-dashed"
                style={{
                  borderColor: "rgba(139,92,246,0.4)",
                  animation: "blob-drift-alt 20s ease-in-out infinite",
                  boxShadow: "0 0 60px rgba(139,92,246,0.12) inset",
                }}
              />
              <span
                className="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-1 rounded-full border border-violet-500/40 bg-[#060d1e] px-3 py-1 text-xs font-bold text-violet-300"
              >
                España
              </span>

              {/* Anillo Cataluña */}
              <div
                className="absolute h-[68%] w-[68%] rounded-full border-2 border-dashed"
                style={{
                  borderColor: "rgba(59,130,246,0.5)",
                  animation: "blob-drift 15s ease-in-out infinite 2s",
                  boxShadow: "0 0 40px rgba(59,130,246,0.15) inset",
                }}
              />
              <span
                className="absolute top-[16%] left-1/2 -translate-x-1/2 rounded-full border border-blue-500/40 bg-[#060d1e] px-3 py-1 text-xs font-bold text-blue-300"
              >
                Cataluña
              </span>

              {/* Anillo Barcelona */}
              <div
                className="absolute h-[38%] w-[38%] rounded-full border-2"
                style={{
                  borderColor: "rgba(249,115,22,0.7)",
                  boxShadow: "0 0 30px rgba(249,115,22,0.25) inset, 0 0 30px rgba(249,115,22,0.2)",
                  animation: "blob-drift-alt 10s ease-in-out infinite 1s",
                }}
              />

              {/* Punto central Barcelona */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-orange-400 opacity-20" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 shadow-lg shadow-orange-500/50">
                    <svg viewBox="0 0 20 20" fill="white" className="h-5 w-5" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="mt-2 rounded bg-[#060d1e] px-2 py-0.5 text-xs font-bold text-orange-400">
                  Barcelona
                </span>
              </div>

              {/* Líneas de radio */}
              {[45, 135, 225, 315].map((deg) => (
                <div
                  key={deg}
                  className="absolute h-[50%] w-[1px] origin-bottom"
                  style={{
                    transform: `rotate(${deg}deg) translateX(-50%)`,
                    background: "linear-gradient(to top, rgba(249,115,22,0.5), transparent)",
                    left: "50%",
                    bottom: "50%",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Cards de zonas */}
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {ZONES.map((zone, i) => (
              <div
                key={zone.id}
                className={`group relative rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${zone.bg} backdrop-blur-sm`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{zone.label}</span>

                <div className={`mt-4 ${zone.tag}`}>{zone.icon}</div>

                <h3 className="mt-4 font-heading text-lg font-bold text-white">{zone.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{zone.desc}</p>

                <div className="mt-5 border-t border-white/[0.06] pt-5">
                  <p className={`font-heading text-2xl font-extrabold ${zone.tag}`}>{zone.stat}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{zone.statLabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">¿Tu zona no aparece?</p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white">
              Pregúntanos — cubrimos toda la Península
            </h3>
            <p className="mt-3 text-slate-400">
              Si tu origen o destino está en España, muy probablemente podemos llegar. Cuéntanos tu caso y te respondemos.
            </p>
            <a
              href="https://wa.me/34600000000?text=Hola%2C+quer%C3%ADa+saber+si+cub%C3%A9is+mi+zona+para+una+mudanza."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
