import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Resolvemos las dudas más habituales sobre presupuestos, seguros, fechas y plataforma elevadora.",
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-ink">
          Preguntas frecuentes
        </h1>
        <p className="mt-3 text-ink-muted">
          Si no encuentras respuesta a tu duda, escríbenos por WhatsApp y te respondemos
          directamente.
        </p>
      </Reveal>

      <Reveal delayMs={100} className="mt-8">
        <FaqAccordion />
      </Reveal>
    </section>
  );
}
