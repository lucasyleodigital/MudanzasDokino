import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { SERVICES_CONTENT, getServiceContent } from "@/lib/services-content";
import { whatsappHref } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICES_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) notFound();

  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <Reveal>
        <ServiceIcon name={service.icon} className="h-20 w-20" />
        <h1 className="mt-4 font-heading text-4xl font-extrabold text-ink">
          {service.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-muted">{service.intro}</p>
      </Reveal>

      <Reveal delayMs={100}>
        <h2 className="mt-10 font-heading text-xl font-bold text-ink">Qué incluye</h2>
        <ul className="mt-4 space-y-3">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-3 text-ink-muted">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delayMs={180}>
        <div className="mt-10 flex flex-wrap gap-3 rounded-xl border border-line bg-accent-soft p-6">
          <Link
            href="/presupuesto/"
            className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Pedir presupuesto para {service.name.toLowerCase()}
          </Link>
          <a
            href={whatsappHref(`Hola, quiero información sobre ${service.name.toLowerCase()}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line bg-paper-raised px-5 py-3 text-sm font-semibold text-ink hover:border-accent"
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
