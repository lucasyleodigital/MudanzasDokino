import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contacto/ContactForm";
import { SITE, whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto — Mudanzas Dokino",
  description: "Escríbenos por WhatsApp, email o el formulario de contacto. Respuesta rápida garantizada.",
};

const CONTACT_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Respuesta inmediata",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    href: whatsappHref("Hola, quiero información sobre una mudanza."),
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: "Email",
    value: SITE.contactEmail,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    href: `mailto:${SITE.contactEmail}`,
    external: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Disponibilidad",
    value: SITE.availability,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
    href: null,
    external: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Dirección fiscal",
    value: SITE.fiscalAddress,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/30",
    href: null,
    external: false,
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        label="Hablemos"
        title="Contacta"
        highlight="con nosotros."
        subtitle="¿Tienes una mudanza en mente o necesitas un presupuesto? Escríbenos — sin formularios complicados, sin esperas."
        blobColor="rgba(16,185,129,0.35)"
      />

      <section className="relative bg-[#060d1e] py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Contact info cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {CONTACT_CARDS.map((card) => {
              const inner = (
                <div
                  key={card.label}
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${card.bg} backdrop-blur-sm`}
                >
                  <div className={`mb-3 ${card.color}`}>{card.icon}</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{card.label}</p>
                  <p className={`mt-1 text-sm font-semibold ${card.color}`}>{card.value}</p>
                </div>
              );
              if (card.href) {
                return (
                  <a key={card.label} href={card.href} target={card.external ? "_blank" : undefined} rel={card.external ? "noopener noreferrer" : undefined}>
                    {inner}
                  </a>
                );
              }
              return inner;
            })}
          </div>

          {/* Form + WhatsApp big button */}
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* WhatsApp primary CTA */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-8 text-center">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">WhatsApp directo</h3>
                  <p className="mt-2 text-sm text-slate-400">La forma más rápida de hablar con nosotros. Respondemos en minutos.</p>
                  <a
                    href={whatsappHref("Hola, necesito información sobre una mudanza.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </div>

              {/* Presupuesto CTA */}
              <div className="relative overflow-hidden rounded-2xl border border-orange-500/25 bg-orange-500/5 p-8 text-center">
                <div
                  className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">Pedir presupuesto</h3>
                  <p className="mt-2 text-sm text-slate-400">Rellena el formulario y recibe una cifra exacta sin compromiso.</p>
                  <Link
                    href="/presupuesto/"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600"
                  >
                    Solicitar presupuesto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
