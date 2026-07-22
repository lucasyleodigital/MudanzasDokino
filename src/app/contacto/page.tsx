import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contacto/ContactForm";
import { SITE, whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto — Mudanzas Dokino",
  description: "Escríbenos por WhatsApp, email o el formulario de contacto. Respuesta rápida garantizada.",
};

const INFO_CARDS = [
  {
    label: "WhatsApp",
    value: "Respuesta inmediata",
    href: whatsappHref("Hola, quiero información sobre una mudanza."),
    external: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: SITE.contactEmail,
    href: `mailto:${SITE.contactEmail}`,
    external: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
        <path d="M22 6l-10 7L2 6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Horario",
    value: SITE.availability,
    href: null,
    external: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Cobertura",
    value: "Barcelona y Área Metrop.",
    href: "/zona-de-cobertura/",
    external: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function ContactoPage() {
  return (
    <div
      className="min-h-screen bg-[#060d1e]"
      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-20">

        {/* ── Page Header ──────────────────────────────────── */}
        <Reveal>
          <div className="mb-10 md:mb-14">
            <span className="mb-3 block font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange-400 md:text-sm">
              Estamos aquí para ayudarte
            </span>
            <h1
              className="font-heading font-extrabold text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Contacta con Dokino
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              Logística de precisión en Barcelona. Solicita información sobre mudanzas locales, nacionales o guardamuebles con atención personalizada.
            </p>
          </div>
        </Reveal>

        {/* ── Info cards ────────────────────────────────────── */}
        <section className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mb-16">
          {INFO_CARDS.map((card, i) => {
            const inner = (
              <div className="glass-card flex flex-row items-center gap-4 rounded-xl p-6 md:p-8 lg:flex-col lg:items-start lg:gap-6">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">{card.label}</h3>
                  <p className="mt-1 font-mono text-sm text-slate-400">{card.value}</p>
                </div>
              </div>
            );

            if (card.href) {
              return (
                <Reveal key={card.label} delayMs={i * 60}>
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                </Reveal>
              );
            }
            return (
              <Reveal key={card.label} delayMs={i * 60}>
                {inner}
              </Reveal>
            );
          })}
        </section>

        {/* ── Main: form + sidebar ──────────────────────────── */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 md:gap-12">

          {/* Form */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card rounded-xl p-6 md:p-10">
              <h2 className="mb-8 font-heading text-2xl font-extrabold text-white md:mb-10 md:text-[1.75rem]">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </div>
          </Reveal>

          {/* Sidebar CTAs */}
          <div className="flex flex-col gap-4">

            {/* WhatsApp */}
            <Reveal delayMs={100}>
              <div className="glass-card group rounded-xl p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-white">Atención Inmediata</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      ¿Necesitas una respuesta rápida? Escríbenos directamente por WhatsApp y te atenderemos en minutos.
                    </p>
                  </div>
                  <a
                    href={whatsappHref("Hola, necesito información sobre una mudanza.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-600 active:scale-95"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Presupuesto */}
            <Reveal delayMs={160}>
              <div className="glass-card group rounded-xl border-orange-500/20 p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                      <rect x="9" y="3" width="6" height="4" rx="1"/>
                      <path d="M9 12h6M9 16h4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-white">Presupuesto Online</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Rellena el formulario y recibe una cifra exacta sin compromiso en menos de 24h.
                    </p>
                  </div>
                  <Link
                    href="/presupuesto/"
                    className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-600 active:scale-95"
                  >
                    Solicitar presupuesto
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Asesor card */}
            <Reveal delayMs={220}>
              <div className="glass-card flex items-center gap-4 rounded-xl p-5 md:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400 font-heading font-extrabold text-lg border border-orange-500/20">
                  D
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-white">Asesoría Dokino</p>
                  <p className="text-xs text-slate-500">Soporte 24/7 emergencias</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </div>
  );
}
