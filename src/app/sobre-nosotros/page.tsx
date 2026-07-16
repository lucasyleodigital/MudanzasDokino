import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: `Conoce ${SITE.name}, empresa de mudanzas con furgonetas y equipo propio.`,
};

export default function SobreNosotrosPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-ink">Sobre nosotros</h1>
      </Reveal>

      <Reveal delayMs={100} className="mt-6 space-y-5 text-lg text-ink-muted">
        <p>
          {SITE.name} es una empresa de mudanzas especializada en el traslado completo de
          hogares y oficinas: furgonetas propias, equipo propio y plataforma elevadora
          para los accesos más complicados.
        </p>
        <p>
          Nos dedicamos exclusivamente a mudanzas. Eso significa que cada persona que
          recoge tus cosas en origen es la misma que las entrega en destino — sin cambios
          de transportista ni intermediarios por el camino.
        </p>
        <p>
          Trabajamos tanto con particulares como con empresas, y aceptamos también
          colaboraciones con otras empresas de transporte cuando encaja con nuestra
          disponibilidad.
        </p>
      </Reveal>
    </section>
  );
}
