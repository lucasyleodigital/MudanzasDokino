import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios de mudanzas",
  description:
    "Mudanzas particulares, de empresa, guardamuebles, plataforma elevadora y larga distancia.",
};

export default function ServiciosPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-ink">Servicios</h1>
        <p className="mt-3 max-w-xl text-ink-muted">
          Mudanzas es nuestra única especialidad. Cada servicio se adapta al tipo de
          mudanza, al acceso de la vivienda u oficina y al volumen a transportar.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.slug} delayMs={i * 80}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
