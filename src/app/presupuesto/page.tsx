import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import QuoteForm from "@/components/presupuesto/QuoteForm";

export const metadata: Metadata = {
  title: "Pedir presupuesto",
  description:
    "Solicita presupuesto para tu mudanza: origen, destino, accesos y servicios extra. Te respondemos por email o WhatsApp.",
};

export default function PresupuestoPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-ink">Pedir presupuesto</h1>
        <p className="mt-3 text-ink-muted">
          Cuéntanos los detalles de tu mudanza. Un miembro del equipo revisa tu solicitud
          y te responde con un presupuesto ajustado — no es un cálculo automático.
        </p>
      </Reveal>

      <div className="mt-10 rounded-xl border border-line bg-paper-raised p-6 sm:p-8">
        <QuoteForm />
      </div>
    </section>
  );
}
