import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios de mudanzas — Mudanzas Dokino",
  description: "Mudanzas particulares, de empresa, guardamuebles, plataforma elevadora y larga distancia en Barcelona y toda España.",
};

const SERVICES = [
  {
    slug: "particulares",
    href: "/servicios/particulares/",
    title: "Mudanzas de Hogar",
    desc: "Gestión integral de tu vivienda con embalaje especializado para objetos frágiles. Desmontaje y montaje de muebles por ebanistas profesionales.",
    bullets: [
      "Protección de suelos y ascensores incluida",
      "Seguro a todo riesgo incluido",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    large: true,
  },
  {
    slug: "empresas",
    href: "/servicios/empresas/",
    title: "Traslados de Oficinas",
    desc: "Minimizamos el tiempo de inactividad de su empresa. Traslados nocturnos o en fin de semana para que la operatividad no se detenga.",
    footer: "Logística IT especializada",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    slug: "guardamuebles",
    href: "/servicios/guardamuebles/",
    title: "Traslado a guardamuebles",
    desc: "Recogemos tus muebles y los trasladamos a un guardamuebles de confianza. Cuando estés listo, los devolvemos a tu nuevo domicilio.",
    stats: [
      { value: "Flex", label: "Duración" },
      { value: "Seguro", label: "Incluido" },
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <path d="M3.29 7L12 12l8.71-5M12 22V12"/>
      </svg>
    ),
  },
  {
    slug: "embalaje",
    href: "/servicios/plataforma-elevadora/",
    title: "Embalaje Profesional",
    desc: "Materiales eco-responsables. Embalajes a medida para obras de arte, equipo frágil y mobiliario de alta gama.",
    tags: ["Eco-Friendly", "Premium Kraft"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDphYamJRnEYlb57TPezYTT-I9Ux1tVJFIhWltKF-SPs_T_lVVKf9zihEtuK9n7bSNQuaT2yL-wQH7XbVQuaHYX7RttLHtb_ejo9eTTQqggvXns41GZAlGJhXydDU66kVlKB_v_mmCRu-R575TdF3gWaB9iFUkpwtJt62POOg3klQNKBSnJmOpYEi6NmZPjQI9-nP0ryClpyJqC7o_LVS_sZ2KNPo6tPaGw0uBE_MctCX8_Nf2SgkJAvSIhN40h29WcTw_nH9bO8tI",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/>
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  return (
    <div
      className="min-h-screen bg-[#060d1e]"
      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:text-left">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <Reveal>
              <span className="mb-4 block font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Logística de precisión
              </span>
              <h1
                className="font-heading font-extrabold text-white"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Nuestros Servicios
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:mx-0">
                Especialistas en traslados de alta exigencia en Barcelona. Combinamos tecnología, cuidado artesanal y puntualidad para que tu mudanza sea un proceso impecable.
              </p>
            </Reveal>
          </div>

          {/* Spinning circle illustration */}
          <div className="hidden md:flex md:w-1/3 justify-end">
            <Reveal delayMs={200}>
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/[0.07] lg:h-52 lg:w-52">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-orange-400 lg:scale-[1.5]" aria-hidden="true">
                  <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                {/* Dashed spinning border */}
                <div
                  className="animate-wheel-border pointer-events-none absolute inset-0 rounded-full border-2 border-dashed border-orange-500/25"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delayMs={i * 80}>
              <Link
                href={service.href}
                className="glass-card group relative flex flex-col overflow-hidden rounded-xl p-6 transition-all lg:p-8"
              >
                {/* Watermark icon */}
                {service.large && (
                  <div className="pointer-events-none absolute right-0 top-0 p-8 opacity-[0.04]">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden="true">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                  </div>
                )}

                {/* Icon chip */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/15 text-orange-400 lg:mb-8">
                  {service.icon}
                </div>

                <h3 className="font-heading text-2xl font-extrabold text-white lg:text-3xl">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400 lg:mt-4">{service.desc}</p>

                {/* Bullets */}
                {"bullets" in service && service.bullets && (
                  <ul className="mt-6 space-y-2.5 lg:mt-8">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-slate-400 lg:text-base">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-emerald-500" aria-hidden="true">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                          <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Stats row */}
                {"stats" in service && service.stats && (
                  <div className="mt-auto grid grid-cols-2 gap-4 pt-6">
                    {service.stats.map((s) => (
                      <div key={s.label} className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-3 text-center lg:p-4">
                        <span className="block font-heading text-base font-bold text-orange-400 lg:text-lg">{s.value}</span>
                        <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-widest text-slate-500 lg:text-[10px]">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer label */}
                {"footer" in service && service.footer && (
                  <div className="mt-auto border-t border-white/[0.07] pt-6 lg:mt-6">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-orange-400">{service.footer}</span>
                  </div>
                )}

                {/* Tags */}
                {"tags" in service && service.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-orange-500/20 bg-white/[0.04] px-3 py-1 text-xs font-bold text-orange-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Photo (Embalaje card) */}
                {"image" in service && service.image && (
                  <div className="group/img mt-6 w-full overflow-hidden rounded-lg border border-white/[0.07] relative" style={{ aspectRatio: "16/9" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt="Materiales de embalaje premium"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060d1e]/80 to-transparent opacity-60" />
                  </div>
                )}

                {/* Hover arrow */}
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Saber más
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}

        </div>
      </section>

      {/* ── Process strip ─────────────────────────────────── */}
      <section className="border-y border-white/[0.07] bg-[#060d1e] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="section-label justify-center text-orange-400">Así funciona</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-white">3 pasos, sin sorpresas</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Cuéntanos tu mudanza", desc: "Rellena el formulario o escríbenos por WhatsApp con origen, destino y fecha aproximada." },
              { step: "02", title: "Recibes presupuesto exacto", desc: "Una persona revisa tu caso y te manda el precio cerrado — sin cifras automáticas ni sorpresas posteriores." },
              { step: "03", title: "El día de la mudanza", desc: "El mismo equipo de la oferta se presenta, recoge todo y lo entrega en el nuevo destino." },
            ].map((item, i) => (
              <Reveal key={item.step} delayMs={i * 100}>
                <div className="glass-card relative rounded-2xl p-7">
                  <span className="absolute left-6 top-4 font-heading text-5xl font-black text-orange-500/10 select-none">{item.step}</span>
                  <div className="mt-6">
                    <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
            ¿Preparado para tu próximo destino?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Calculamos tu presupuesto sin compromiso en menos de 24 horas. Calidad y transparencia desde el primer contacto.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/presupuesto/"
              className="btn-glow inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/40 w-full sm:w-auto justify-center"
            >
              Solicitar presupuesto
            </Link>
            <a
              href={whatsappHref("Hola, tengo dudas sobre el servicio de mudanzas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/[0.08] w-full sm:w-auto justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#4ade80" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"/>
              </svg>
              Hablar por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
