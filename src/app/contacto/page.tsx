import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contacto/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { SITE, whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos por email, WhatsApp o el formulario de contacto.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-ink">Contacto</h1>
        <p className="mt-3 max-w-xl text-ink-muted">
          ¿Tienes una duda rápida o prefieres que te llamemos? Escríbenos por cualquiera
          de estos canales.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delayMs={120} className="space-y-6">
          <div className="rounded-xl border border-line bg-paper-raised p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Email
            </p>
            <p className="mt-1 text-ink">{SITE.contactEmail}</p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              WhatsApp
            </p>
            <a
              href={whatsappHref("Hola, tengo una duda sobre vuestros servicios.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-accent hover:underline"
            >
              Escríbenos directamente
            </a>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Disponibilidad
            </p>
            <p className="mt-1 text-ink">{SITE.availability}</p>
          </div>

          <MapEmbed />
        </Reveal>
      </div>
    </section>
  );
}
