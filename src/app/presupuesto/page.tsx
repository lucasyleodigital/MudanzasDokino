import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PresupuestoTabs from "@/components/presupuesto/PresupuestoTabs";

export const metadata: Metadata = {
  title: "Pedir presupuesto",
  description:
    "Solicita presupuesto para mudanzas o paquetería. Te respondemos con precio cerrado, sin sorpresas.",
};

export default function PresupuestoPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-ink">Pedir presupuesto</h1>
        <p className="mt-3 text-ink-muted">
          Selecciona el tipo de servicio, cuéntanos los detalles y te respondemos con
          precio cerrado — no es un cálculo automático.
        </p>
      </Reveal>

      <div className="mt-10">
        <PresupuestoTabs />
      </div>
    </section>
  );
}
