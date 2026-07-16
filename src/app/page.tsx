import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { SERVICES, whatsappHref } from "@/lib/constants";

// ─── Data ───────────────────────────────────────────────────────────────────

const STEPS = [
  {
    n: "01",
    title: "Nos cuentas tu mudanza",
    body: "Rellenas el formulario con origen, destino y fecha aproximada. También puedes escribirnos directamente por WhatsApp.",
  },
  {
    n: "02",
    title: "Te enviamos presupuesto",
    body: "Revisamos accesos, plantas y volumen. Te respondemos con precio cerrado — sin sorpresas el día de la mudanza.",
  },
  {
    n: "03",
    title: "Hacemos la mudanza",
    body: "Llega nuestro equipo con furgoneta propia y plataforma elevadora si hace falta. Nosotros lo gestionamos todo.",
  },
  {
    n: "04",
    title: "Seguimiento y cierre",
    body: "Confirmamos que todo ha llegado en perfecto estado. Resolvemos cualquier incidencia sin excusas.",
  },
];

const TESTIMONIALS = [
  {
    name: "María G.",
    role: "Mudanza particular · Barcelona",
    stars: 5,
    text: "Mudanza de piso completo del Born al Poblenou. Todo llegó en perfecto estado, los chicos muy profesionales y puntuales. Sin sorpresas en el precio — exactamente lo que me habían presupuestado.",
    initial: "M",
  },
  {
    name: "Carlos M.",
    role: "Traslado de oficina · L'Hospitalet",
    stars: 5,
    text: "Traslado de oficina de 15 puestos. Lo coordinaron todo para que no perdiéramos ni un día de trabajo. Llevaron muebles, servidores y equipo frágil sin ningún problema. Volveríamos a contratarlos.",
    initial: "C",
  },
  {
    name: "Anna R.",
    role: "Plataforma elevadora · Gràcia",
    stars: 5,
    text: "Necesitábamos plataforma elevadora para un 5º sin ascensor con muebles muy pesados. Llegaron con el equipo adecuado y en menos de 4 horas estábamos completamente instalados en el nuevo piso.",
    initial: "A",
  },
];

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
    title: "Vehículo y equipo propio",
    body: "Nuestras furgonetas, nuestro equipo. No subcontratamos a terceros ni cedemos tu mudanza a otra empresa.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Plataforma elevadora",
    body: "Para pisos altos, accesos difíciles o muebles grandes sin ascensor. Disponible bajo reserva.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Seguro de transporte",
    body: "Tus pertenencias viajan aseguradas. Si algo se daña durante la mudanza, lo resolvemos sin excusas.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Respuesta directa",
    body: "Hablas con quien hace tu mudanza, no con un call center. Presupuesto personalizado en 24 horas.",
  },
];

// ─── Subcomponents ───────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f97316" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── SERVICIOS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
                  Lo que hacemos
                </span>
                <h2 className="mt-2 font-heading text-3xl font-extrabold text-ink md:text-4xl">
                  Nuestros servicios
                </h2>
                <p className="mt-2 max-w-lg text-ink-muted">
                  Gestionamos el proceso completo: embalaje, carga, transporte y
                  colocación. Tú solo decides cuándo.
                </p>
              </div>
              <Link
                href="/servicios/"
                className="shrink-0 text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                Ver todos los servicios →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delayMs={i * 80}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ── */}
      <section className="bg-[#0f172a] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              El proceso
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-white md:text-4xl">
              Cómo trabajamos
            </h2>
            <p className="mt-2 max-w-lg text-slate-400">
              Claro, sencillo y sin sorpresas. Cuatro pasos y tu mudanza está hecha.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delayMs={i * 100}>
                <div className="relative">
                  {/* Step number */}
                  <span className="font-heading text-5xl font-extrabold leading-none text-orange-500/20 select-none">
                    {step.n}
                  </span>
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <span
                      className="absolute top-6 hidden h-px bg-gradient-to-r from-orange-500/30 to-transparent lg:block"
                      style={{ left: "3.5rem", right: "-1rem" }}
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="mt-2 font-heading text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Lo que dicen nuestros clientes
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-ink md:text-4xl">
              Más de 300 mudanzas realizadas
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delayMs={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-sm">
                  <StarRating count={t.stars} />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-heading text-sm font-bold text-orange-600">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink">{t.name}</p>
                      <p className="text-xs text-ink-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ DOKINO ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Por qué elegir Dokino
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-ink md:text-4xl">
              Sin intermediarios. Sin sorpresas.
            </h2>
            <p className="mt-2 max-w-lg text-ink-muted">
              Somos una empresa pequeña y directa. Eso significa que la persona que
              presupuesta tu mudanza es la misma que la hace.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delayMs={i * 80}>
                <div className="flex flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-orange-500 py-16">
        {/* Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              ¿Tienes una mudanza en mente?
            </h2>
            <p className="mt-3 text-lg text-orange-100">
              Cuéntanos los detalles y te respondemos con un presupuesto exacto, sin
              compromiso.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/presupuesto/"
                className="rounded-xl bg-white px-8 py-4 text-sm font-bold text-orange-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Pedir presupuesto gratis
              </Link>
              <a
                href={whatsappHref(
                  "Hola, quiero pedir información sobre una mudanza."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
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
