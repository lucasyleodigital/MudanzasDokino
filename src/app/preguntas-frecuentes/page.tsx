import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { whatsappHref } from "@/lib/constants";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Preguntas frecuentes — Mudanzas Dokino",
  description: "Resolvemos las dudas más habituales sobre presupuestos, seguros, fechas y plataforma elevadora.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        label="FAQ"
        title="Preguntas"
        highlight="frecuentes."
        subtitle={`${FAQS.length} respuestas a las dudas más habituales sobre presupuestos, fechas, seguros y accesos complicados.`}
        blobColor="rgba(245,158,11,0.38)"
      />

      <section className="relative bg-[#060d1e] py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6">
          {/* Quick topics */}
          <div className="mb-10 flex flex-wrap gap-2">
            {["Presupuesto", "Plataforma elevadora", "Seguro", "Fechas", "Larga distancia", "Embalaje"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-1.5 text-xs font-semibold text-slate-400 transition-colors hover:border-orange-500/40 hover:text-orange-400 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <FaqAccordion />

          {/* Bottom CTA */}
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-10 text-center">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background: "radial-gradient(circle at 50% 100%, rgba(249,115,22,0.1) 0%, transparent 60%)",
              }}
            />
            <p className="section-label justify-center text-orange-400">¿No encuentras tu respuesta?</p>
            <h3 className="mt-4 font-heading text-2xl font-bold text-white">
              Pregúntanos directamente
            </h3>
            <p className="mt-3 text-slate-400">
              No es un sistema automático — responde una persona que conoce tu caso.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={whatsappHref("Hola, tengo una pregunta sobre una mudanza.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z" />
                </svg>
                Escribir por WhatsApp
              </a>
              <Link
                href="/presupuesto/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.08]"
              >
                Pedir presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
