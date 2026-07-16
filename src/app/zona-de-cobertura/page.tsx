import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Zona de cobertura — Mudanzas en Barcelona, Cataluña y España",
  description:
    "Realizamos mudanzas en Barcelona y toda Cataluña, con cobertura de larga distancia a cualquier punto de España.",
};

// [PENDIENTE] confirmar el listado exacto de provincias/comarcas que se quiere
// listar aquí (ver brief técnico, sección 13).
const ZONES = [
  "Barcelona ciudad y área metropolitana",
  "Resto de Cataluña",
  "Resto de España (mudanzas de larga distancia)",
];

export default function ZonaCoberturaPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-ink">
          Zona de cobertura
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-muted">
          Trabajamos principalmente en Barcelona y toda Cataluña, y llegamos a cualquier
          punto de España con nuestro servicio de larga distancia.
        </p>
      </Reveal>

      <Reveal delayMs={100}>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {ZONES.map((zone) => (
            <li
              key={zone}
              className="rounded-lg border border-line bg-paper-raised px-4 py-3 text-sm text-ink"
            >
              {zone}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delayMs={180} className="mt-10">
        <MapEmbed query="Barcelona, Cataluña, España" />
      </Reveal>
    </section>
  );
}
