import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";
import { SERVICES, whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios de mudanzas — Mudanzas Dokino",
  description: "Mudanzas particulares, de empresa, guardamuebles, plataforma elevadora y larga distancia en Barcelona y toda España.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        label="Lo que hacemos"
        title="Nuestros"
        highlight="servicios."
        subtitle="Mudanzas es nuestra única especialidad. Cada servicio se adapta al tipo de mudanza, al acceso de la vivienda u oficina y al volumen a transportar."
      />

      <section className="relative bg-[#060d1e] py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} {...service} variant="dark" />
            ))}
          </div>

          {/* Process strip */}
          <div className="mt-20">
            <div className="text-center">
              <p className="section-label justify-center text-orange-400">Así funciona</p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-white">3 pasos, sin sorpresas</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { step: "01", title: "Cuéntanos tu mudanza", desc: "Rellena el formulario o escríbenos por WhatsApp con origen, destino y fecha aproximada.", color: "text-orange-400" },
                { step: "02", title: "Recibes un presupuesto exacto", desc: "Una persona revisa tu caso y te manda el precio cerrado — sin cifras automáticas ni sorpresas posteriores.", color: "text-blue-400" },
                { step: "03", title: "El día de la mudanza", desc: "El mismo equipo de la oferta se presenta, recoge todo y lo entrega en el nuevo destino. Así de simple.", color: "text-violet-400" },
              ].map((item) => (
                <div key={item.step} className="relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 backdrop-blur-sm">
                  <span className={`font-heading text-5xl font-black opacity-20 ${item.color}`}>{item.step}</span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  <span className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${item.color.replace("text-", "from-")} to-transparent`} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-orange-500/20 bg-orange-500/5 p-10 text-center">
            <h3 className="font-heading text-2xl font-bold text-white">
              ¿Listo para empezar?
            </h3>
            <p className="mt-3 text-slate-400">
              Pídenos presupuesto ahora — es gratis, sin compromiso y con precio exacto antes de confirmar nada.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/presupuesto/"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Pedir presupuesto gratis
              </Link>
              <a
                href={whatsappHref("Hola, tengo dudas sobre el servicio de mudanzas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.05] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.1]"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
