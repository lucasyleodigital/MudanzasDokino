import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import { SERVICES, whatsappHref } from "@/lib/constants";

// ── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    n: "01",
    title: "Nos cuentas tu mudanza",
    body: "Rellenas el formulario con origen, destino y fecha aproximada. También puedes escribirnos directamente por WhatsApp y te respondemos en minutos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Te enviamos presupuesto",
    body: "Revisamos accesos, plantas y volumen. Te respondemos con precio cerrado — sin letra pequeña, sin sorpresas el día de la mudanza.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Hacemos la mudanza",
    body: "Llega nuestro equipo con furgoneta propia y plataforma elevadora si el acceso lo requiere. Lo gestionamos todo de principio a fin.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    n: "04",
    title: "Seguimiento y cierre",
    body: "Confirmamos que todo ha llegado en perfecto estado. Resolvemos cualquier incidencia sin excusas — somos una empresa de personas, no de call centers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    name: "María G.",
    role: "Mudanza particular · Barcelona",
    stars: 5,
    text: "Mudanza de piso completo del Born al Poblenou. Todo llegó en perfecto estado, los chicos muy profesionales y puntuales. Sin sorpresas en el precio — exactamente lo que me habían presupuestado.",
    initial: "M",
    color: "from-orange-400 to-amber-400",
  },
  {
    name: "Carlos M.",
    role: "Traslado de oficina · L'Hospitalet",
    stars: 5,
    text: "Traslado de oficina de 15 puestos. Lo coordinaron todo para que no perdiéramos ni un día de trabajo. Llevaron muebles, servidores y equipo frágil sin ningún problema. Volveríamos a contratarlos.",
    initial: "C",
    color: "from-blue-400 to-indigo-400",
  },
  {
    name: "Anna R.",
    role: "Plataforma elevadora · Gràcia",
    stars: 5,
    text: "Necesitábamos plataforma elevadora para un 5º sin ascensor con muebles pesadísimos. Llegaron con el equipo adecuado y en menos de 4 horas estábamos completamente instalados en el nuevo piso.",
    initial: "A",
    color: "from-emerald-400 to-teal-400",
  },
];

const FEATURES = [
  {
    title: "Vehículo y equipo propio",
    body: "Nuestras furgonetas, nuestro equipo. No subcontratamos a terceros ni cedemos tu mudanza a otra empresa.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    title: "Plataforma elevadora",
    body: "Para pisos altos, accesos difíciles o muebles grandes sin ascensor. La traemos, la montamos, la usamos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Seguro de transporte",
    body: "Tus pertenencias viajan aseguradas. Si algo se daña durante la mudanza, lo resolvemos sin excusas ni papeleo eterno.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Respuesta directa, sin call center",
    body: "Hablas con quien hace tu mudanza. Presupuesto personalizado, respuesta real, trato humano.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57A1 1 0 0 1 21 16.5v3.5A1 1 0 0 1 20 21 17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f97316" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── SERVICIOS ─────────────────────────────────────── */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label text-orange-500">Lo que hacemos</p>
                <h2 className="mt-3 font-heading text-4xl font-extrabold text-ink md:text-5xl">
                  Nuestros servicios
                </h2>
                <p className="mt-3 max-w-xl text-lg text-ink-muted">
                  Gestionamos el proceso completo. Tú solo decides cuándo.
                </p>
              </div>
              <Link
                href="/servicios/"
                className="shrink-0 flex items-center gap-1.5 text-sm font-bold text-orange-500 transition-colors hover:text-orange-600"
              >
                Ver todos
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delayMs={i * 70}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060d1e] py-24">
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Orange blob */}
        <div
          className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="section-label text-orange-400">El proceso</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-white md:text-5xl">
              Cómo trabajamos
            </h2>
            <p className="mt-3 max-w-xl text-lg text-slate-400">
              Claro, sencillo y sin sorpresas. Cuatro pasos y tu mudanza está hecha.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delayMs={i * 100}>
                <TiltCard intensity={6}>
                  <div className="glass rounded-2xl p-6 h-full">
                    {/* Step number + icon */}
                    <div className="flex items-start justify-between">
                      <span className="font-heading text-6xl font-extrabold leading-none text-orange-500/15 select-none">
                        {step.n}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                        {step.icon}
                      </span>
                    </div>
                    {/* Connector line */}
                    <h3 className="mt-3 font-heading text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {step.body}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ───────────────────────────────────── */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="section-label text-orange-500">Lo que dicen nuestros clientes</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-ink md:text-5xl">
              Más de 300 mudanzas realizadas
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delayMs={i * 100}>
                <TiltCard intensity={7}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                    <Stars n={t.stars} />
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} font-heading text-sm font-extrabold text-white shadow-sm`}>
                        {t.initial}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-ink">{t.name}</p>
                        <p className="text-xs text-ink-muted">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ DOKINO ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="section-label text-orange-400">Por qué elegir Dokino</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-white md:text-5xl">
              Sin intermediarios.<br className="hidden sm:block" /> Sin sorpresas.
            </h2>
            <p className="mt-3 max-w-xl text-lg text-slate-400">
              Somos una empresa pequeña y directa. Eso significa que la persona que
              presupuesta tu mudanza es la misma que la hace.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delayMs={i * 80}>
                <div className="group flex flex-col gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:bg-orange-500/20 group-hover:scale-110">
                    {f.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-500 py-20">
        {/* Dot pattern */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-orange-600 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-orange-600 to-transparent" />

        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="section-label justify-center text-orange-200">Empieza ahora</p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
              ¿Tienes una mudanza en mente?
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              Cuéntanos los detalles y te respondemos con un presupuesto exacto,
              sin compromiso.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/presupuesto/"
                className="btn-glow rounded-xl bg-white px-8 py-4 text-sm font-bold text-orange-600 shadow-xl shadow-orange-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-600/50"
              >
                Pedir presupuesto gratis
              </Link>
              <a
                href={whatsappHref("Hola, quiero pedir información sobre una mudanza.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border-2 border-white/40 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/15"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"/>
                </svg>
                WhatsApp directo
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
