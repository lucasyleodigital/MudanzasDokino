"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, whatsappHref } from "@/lib/constants";
import Counter from "@/components/Counter";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#060d1e] flex flex-col">
      {/* ── Animated blobs ─────────────────────────────── */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
          animation: "blob-drift 12s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
          animation: "blob-drift-alt 9s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-[40%] h-[350px] w-[350px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          animation: "blob-drift 15s ease-in-out infinite 3s",
        }}
      />

      {/* ── Grid overlay ───────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_460px] md:py-20 lg:gap-20">

          {/* Left: copy */}
          <div
            className={`transition-all duration-1000 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
              </span>
              Barcelona · Cataluña · España
            </span>

            {/* Headline */}
            <h1 className="mt-6 font-heading font-extrabold leading-[1.05] text-white">
              <span className="block text-5xl md:text-6xl lg:text-7xl">
                Tu mudanza,
              </span>
              <span className="block text-5xl text-gradient-orange md:text-6xl lg:text-7xl">
                perfecta.
              </span>
              <span className="block mt-1 text-3xl font-bold text-slate-300 md:text-4xl lg:text-5xl">
                De principio a fin.
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Furgonetas propias, plataforma elevadora y equipo directo.{" "}
              <strong className="font-semibold text-slate-200">
                Sin subcontratas, sin intermediarios.
              </strong>{" "}
              Presupuesto exacto antes de confirmar nada.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/presupuesto/"
                className="btn-glow group inline-flex items-center gap-2.5 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Pedir presupuesto gratis
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <a
                href={whatsappHref("Hola, quiero información sobre una mudanza.")}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2.5 rounded-xl px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#4ade80" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"/>
                </svg>
                WhatsApp directo
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-5">
              {[
                "Vehículo propio",
                "Sin subcontratas",
                "Seguro de transporte",
                "Presupuesto gratis",
              ].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="7" fill="rgba(74,222,128,0.15)"/>
                    <path d="M4 7l2 2 4-4" stroke="#4ade80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: truck */}
          <div
            className={`hidden transition-all delay-300 duration-1000 ease-out md:flex md:items-end md:justify-center ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="float-anim">
              <TruckSVG />
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ────────────────────────────────── */}
      <div className="relative border-t border-white/[0.06] bg-white/[0.03] backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.06] px-6 md:grid-cols-4">
          <StatItem>
            <Counter target={300} suffix="+" className="font-heading text-3xl font-extrabold text-gradient-orange" />
            <span className="text-xs font-medium text-slate-500">Mudanzas realizadas</span>
          </StatItem>
          <StatItem>
            <Counter target={5} suffix="★" className="font-heading text-3xl font-extrabold text-gradient-orange" />
            <span className="text-xs font-medium text-slate-500">Valoración media</span>
          </StatItem>
          <StatItem>
            <Counter target={24} suffix="h" className="font-heading text-3xl font-extrabold text-gradient-orange" />
            <span className="text-xs font-medium text-slate-500">Respuesta garantizada</span>
          </StatItem>
          <StatItem>
            <span className="font-heading text-3xl font-extrabold text-gradient-orange">BCN·ESP</span>
            <span className="text-xs font-medium text-slate-500">Cobertura nacional</span>
          </StatItem>
        </div>
      </div>
    </section>
  );
}

function StatItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1 py-6 text-center">
      {children}
    </div>
  );
}

function TruckSVG() {
  return (
    <svg
      viewBox="0 0 520 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[460px] drop-shadow-2xl"
      aria-hidden="true"
    >
      {/* Glow under truck */}
      <ellipse cx="275" cy="278" rx="210" ry="14" fill="#f97316" opacity="0.12" />
      <ellipse cx="275" cy="280" rx="180" ry="8" fill="#000" opacity="0.3" />

      {/* ── CARGO BOX ── */}
      {/* Main body */}
      <rect x="155" y="52" width="330" height="185" rx="7" fill="#1d4ed8" />
      {/* Roof strip */}
      <rect x="155" y="52" width="330" height="7" rx="4" fill="#2563eb" />
      {/* Body gradient overlay */}
      <rect x="155" y="52" width="330" height="185" rx="7"
        fill="url(#bodyGrad)" />
      {/* Side reflection */}
      <rect x="155" y="52" width="60" height="185"
        fill="url(#sideRefl)" rx="7 0 0 7" />

      {/* Rear door panel */}
      <rect x="412" y="52" width="73" height="185" rx="0 6 6 0" fill="#1e40af" />
      <line x1="412" y1="52" x2="412" y2="237" stroke="#1d4ed8" strokeWidth="1.5" />
      {/* Door handle */}
      <rect x="400" y="136" width="9" height="32" rx="4.5" fill="#3b82f6" opacity="0.55" />

      {/* Orange branding stripe */}
      <rect x="155" y="205" width="330" height="22" fill="#f97316" />
      {/* Stripe shine */}
      <rect x="155" y="205" width="330" height="8" fill="rgba(255,255,255,0.12)" />

      {/* Company name */}
      <text x="270" y="155" textAnchor="middle"
        fill="white" fontFamily="Manrope, system-ui, sans-serif"
        fontSize="18" fontWeight="800" letterSpacing="2">
        MUDANZAS DOKINO
      </text>
      <text x="270" y="176" textAnchor="middle"
        fill="rgba(255,255,255,0.4)" fontFamily="system-ui, sans-serif"
        fontSize="8.5" letterSpacing="4">
        BARCELONA · CATALUÑA · ESPAÑA
      </text>

      {/* Logo diamond */}
      <polygon points="230,120 242,108 254,120 242,132" fill="#f97316" />
      <polygon points="230,120 242,108 254,120 242,132" fill="url(#diamondGrad)" />

      {/* ── CAB ── */}
      <path d="M 52 122 L 158 98 L 158 237 L 46 237 Z" fill="#1e40af" />
      {/* Cab roof curve */}
      <path d="M 52 122 Q 85 105 158 98" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" />
      {/* Windshield */}
      <path d="M 68 140 L 153 118 L 153 227 L 68 227 Z" fill="#60a5fa" opacity="0.5" />
      <path d="M 68 140 L 153 118 L 153 227 L 68 227 Z" fill="none" stroke="#93c5fd" strokeWidth="1.5" opacity="0.35" />
      {/* Windshield glare */}
      <path d="M 72 142 L 140 122 L 140 148 L 72 162 Z" fill="rgba(255,255,255,0.06)" />
      {/* Cab door line */}
      <line x1="108" y1="142" x2="108" y2="237" stroke="#1e3a8a" strokeWidth="1.5" />
      {/* Door handle */}
      <rect x="112" y="182" width="20" height="4.5" rx="2.25" fill="#93c5fd" opacity="0.5" />
      {/* Side mirror */}
      <rect x="36" y="146" width="19" height="26" rx="4" fill="#334155" />
      <rect x="31" y="151" width="8" height="16" rx="2" fill="#475569" />

      {/* ── FRONT FACE ── */}
      <rect x="40" y="135" width="20" height="97" rx="4 0 0 4" fill="#1e3a8a" />
      {/* Headlight */}
      <rect x="41" y="148" width="17" height="22" rx="3" fill="#fef9c3" />
      <rect x="41" y="148" width="17" height="10" rx="3" fill="white" opacity="0.55" />
      {/* DRL strip */}
      <rect x="41" y="145" width="17" height="3.5" rx="1.75" fill="#fed7aa" opacity="0.75" />
      {/* Grille */}
      {[190, 198, 206, 214, 222, 230].map((y) => (
        <rect key={y} x="42" y={y} width="15" height="2" rx="1" fill="#1d4ed8" />
      ))}
      {/* Bumper */}
      <rect x="38" y="232" width="24" height="12" rx="3" fill="#334155" />

      {/* Rear light */}
      <rect x="482" y="170" width="11" height="26" rx="3" fill="#fca5a5" />
      <rect x="482" y="165" width="11" height="7" rx="2" fill="#fb923c" opacity="0.8" />

      {/* ── WHEELS ── */}
      {/* Front */}
      <circle cx="96" cy="260" r="30" fill="#1e293b" />
      <circle cx="96" cy="260" r="19" fill="#334155" />
      <circle cx="96" cy="260" r="8" fill="#64748b" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle key={deg}
          cx={96 + 14 * Math.cos((deg * Math.PI) / 180)}
          cy={260 + 14 * Math.sin((deg * Math.PI) / 180)}
          r="2.5" fill="#94a3b8" />
      ))}

      {/* Axle */}
      <rect x="372" y="240" width="62" height="10" rx="5" fill="#1e293b" />

      {/* Rear L */}
      <circle cx="382" cy="260" r="30" fill="#1e293b" />
      <circle cx="382" cy="260" r="19" fill="#334155" />
      <circle cx="382" cy="260" r="8" fill="#64748b" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle key={deg}
          cx={382 + 14 * Math.cos((deg * Math.PI) / 180)}
          cy={260 + 14 * Math.sin((deg * Math.PI) / 180)}
          r="2.5" fill="#94a3b8" />
      ))}

      {/* Rear R */}
      <circle cx="432" cy="260" r="30" fill="#1e293b" />
      <circle cx="432" cy="260" r="19" fill="#334155" />
      <circle cx="432" cy="260" r="8" fill="#64748b" />

      {/* Chassis */}
      <rect x="38" y="237" width="458" height="14" rx="3" fill="#1e293b" />

      {/* ── FLOATING BOXES ── */}
      {/* Box 1 orange */}
      <rect x="496" y="100" width="34" height="31" rx="4" fill="#f97316" opacity="0.95" />
      <line x1="513" y1="100" x2="513" y2="131" stroke="#ea580c" strokeWidth="1.5" />
      <line x1="496" y1="115" x2="530" y2="115" stroke="#ea580c" strokeWidth="1.5" />
      <text x="500" y="127" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif" fontSize="8">FRÁGIL</text>

      {/* Box 2 blue */}
      <rect x="499" y="140" width="27" height="26" rx="4" fill="#2563eb" opacity="0.85" />
      <line x1="512" y1="140" x2="512" y2="166" stroke="#1d4ed8" strokeWidth="1.5" />
      <line x1="499" y1="153" x2="526" y2="153" stroke="#1d4ed8" strokeWidth="1.5" />

      {/* Box 3 small orange */}
      <rect x="502" y="175" width="20" height="18" rx="3" fill="#f97316" opacity="0.65" />

      {/* ── Defs ── */}
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="black" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="sideRefl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="diamondGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </svg>
  );
}
