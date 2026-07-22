"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/constants";
import Counter from "@/components/Counter";
import TruckAnimation from "@/components/TruckAnimation";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-[94vh] overflow-hidden bg-[#060d1e] noise-overlay flex flex-col">

      {/* ── Background: dot grid only (no particle field) ────── */}
      <div className="scan-line" />

      {/* Orange blobs only — DESIGN.md: no purple */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[800px] w-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.45) 0%, rgba(249,115,22,0.15) 40%, transparent 70%)", animation: "blob-drift 14s ease-in-out infinite", filter: "blur(40px)" }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)", animation: "blob-drift-alt 18s ease-in-out infinite", filter: "blur(60px)" }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 grid-pulse"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      />

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 items-center py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">

            {/* Left column — text */}
            <div
              className={`md:col-span-7 flex flex-col justify-center transition-all duration-1000 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-orange-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
                </span>
                Barcelona · Cataluña · España
              </span>

              {/* Headline */}
              <h1 className="mt-6 font-heading font-extrabold leading-[1.05] text-white">
                <div className="reveal-line">
                  <span className="block text-5xl md:text-6xl lg:text-7xl">Tu mudanza,</span>
                </div>
                <div className="reveal-line">
                  <span className="block text-5xl text-gradient-orange glow-orange md:text-6xl lg:text-7xl">perfecta.</span>
                </div>
                <div className="reveal-line">
                  <span className="block mt-1 text-3xl font-bold text-slate-300 md:text-4xl lg:text-5xl">De principio a fin.</span>
                </div>
              </h1>

              {/* Subtext */}
              <p
                className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
                style={{ animation: "clip-up 1s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
              >
                Furgonetas propias, plataforma elevadora y equipo directo.{" "}
                <strong className="font-semibold text-slate-200">Sin subcontratas, sin intermediarios.</strong>{" "}
                Presupuesto exacto antes de confirmar nada.
              </p>

              {/* CTAs */}
              <div
                className="mt-8 flex flex-wrap gap-3"
                style={{ animation: "clip-up 1s cubic-bezier(0.16,1,0.3,1) 0.75s both" }}
              >
                <Link
                  href="/presupuesto/"
                  className="btn-glow group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/50 hover:shadow-2xl"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Pedir presupuesto gratis
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <a
                  href={whatsappHref("Hola, quiero información sobre una mudanza.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-2.5 rounded-xl border border-white/10 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#4ade80" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
                  </svg>
                  WhatsApp directo
                </a>
              </div>

              {/* Trust badges */}
              <div
                className="mt-8 flex flex-wrap gap-5"
                style={{ animation: "clip-up 1s cubic-bezier(0.16,1,0.3,1) 0.9s both" }}
              >
                {["Vehículo propio", "Sin subcontratas", "Seguro de transporte", "Presupuesto gratis"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="7" fill="rgba(74,222,128,0.15)" />
                      <path d="M4 7l2 2 4-4" stroke="#4ade80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — circular container with 3D animation */}
            <div
              className={`hidden md:flex md:col-span-5 items-center justify-center transition-all duration-1000 delay-300 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative flex h-[380px] w-[380px] items-center justify-center lg:h-[420px] lg:w-[420px]">
                {/* Outer circle border */}
                <div className="absolute inset-0 rounded-full border border-white/[0.06] bg-gradient-to-tr from-slate-900/80 to-transparent" />
                {/* Inner pulse ring */}
                <div className="absolute inset-4 rounded-full bg-orange-500/5 animate-pulse" />
                {/* Three.js animation clipped to circle */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <TruckAnimation className="h-full w-full" />
                </div>
                {/* Spinning dashed ring */}
                <div className="animate-wheel-border pointer-events-none absolute inset-0 rounded-full border-2 border-dashed border-orange-500/20" />
                {/* Floating glass card — top right */}
                <div className="glass-card absolute -right-4 -top-4 flex items-center gap-2 rounded-xl px-3 py-2 shadow-xl">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                  </div>
                  <span className="font-heading text-xs font-bold text-white">+300 mudanzas</span>
                </div>
                {/* Floating glass card — bottom left */}
                <div className="glass-card absolute -bottom-3 -left-4 flex items-center gap-2 rounded-xl px-3 py-2 shadow-xl">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-heading text-xs font-bold tracking-widest text-white">GPS ACTIVO</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.06] bg-white/[0.02] backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.06] px-6 md:grid-cols-4">
          <StatItem label="Mudanzas realizadas">
            <Counter target={300} suffix="+" className="font-heading text-3xl font-extrabold text-gradient-orange" />
          </StatItem>
          <StatItem label="Valoración media">
            <Counter target={5} suffix="★" className="font-heading text-3xl font-extrabold text-gradient-orange" />
          </StatItem>
          <StatItem label="Respuesta garantizada">
            <Counter target={24} suffix="h" className="font-heading text-3xl font-extrabold text-gradient-orange" />
          </StatItem>
          <StatItem label="Cobertura nacional">
            <span className="font-heading text-3xl font-extrabold text-gradient-orange">BCN·ESP</span>
          </StatItem>
        </div>
      </div>
    </section>
  );
}

function StatItem({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-6 text-center">
      {children}
      <span className="text-xs font-medium text-slate-500">{label}</span>
    </div>
  );
}
