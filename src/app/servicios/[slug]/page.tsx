import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <div
      className="min-h-screen bg-[#060d1e]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {/* ── Hero section ──────────────────────────────── */}
      <section className="relative border-b border-white/[0.06] py-20 md:py-28">
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
              Nuestros servicios
            </span>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/presupuesto/"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Pedir presupuesto
              </Link>
              <a
                href={whatsappHref(`Hola, quiero información sobre ${service.name.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.08]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#4ade80" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What's included ───────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="section-label text-orange-400">Qué incluye</p>
            <h2 className="mt-4 font-heading text-2xl font-extrabold text-white md:text-3xl">
              Todo lo que cubre este servicio
            </h2>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.includes.map((item, i) => (
              <Reveal key={item} delayMs={i * 40}>
                <li className="glass-card flex items-start gap-4 rounded-xl px-5 py-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-slate-300">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Trust strip ───────────────────────────────── */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap justify-center gap-8 md:justify-between">
            {[
              { text: "Sin subcontratas" },
              { text: "Seguro de transporte" },
              { text: "Presupuesto cerrado" },
              { text: "Equipo propio" },
            ].map((b) => (
              <span key={b.text} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="8" fill="rgba(74,222,128,0.12)" />
                  <path d="M5 8l2 2 4-4" stroke="#4ade80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA section ───────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8 md:p-12">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.12) 0%, transparent 60%)",
                }}
              />
              <div className="relative text-center">
                <p className="section-label justify-center text-orange-400">
                  ¿Listo para tu mudanza?
                </p>
                <h3 className="mt-4 font-heading text-2xl font-extrabold text-white md:text-3xl">
                  Solicita tu presupuesto sin compromiso
                </h3>
                <p className="mt-3 text-slate-400">
                  Te respondemos con precio cerrado — no un cálculo automático, sino una persona que
                  conoce tu caso.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href="/presupuesto/"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
                  >
                    Pedir presupuesto gratis
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <a
                    href={whatsappHref(`Hola, quiero información sobre ${service.name.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.08]"
                  >
                    Preguntar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
