"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, whatsappHref } from "@/lib/constants";

const STATS = [
  { value: "300+", label: "Mudanzas realizadas" },
  { value: "5★", label: "Valoración media" },
  { value: "24h", label: "Respuesta garantizada" },
  { value: "BCN · ESP", label: "Cobertura nacional" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0f172a]">
      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Blue glow top-right */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600 opacity-10 blur-3xl" />
      {/* Orange glow bottom-left */}
      <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-orange-500 opacity-10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pt-14 pb-0 md:grid-cols-[1fr_auto] md:pt-20 lg:gap-16">
        {/* Left: text */}
        <div
          className={`pb-14 transition-all duration-700 ease-out md:pb-20 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
            {SITE.availability} · Barcelona · España
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Tu mudanza,{" "}
            <span className="text-orange-400">perfecta</span>
            <br />
            de principio a fin
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
            Furgonetas propias, plataforma elevadora y equipo directo —{" "}
            <strong className="font-semibold text-white">
              sin intermediarios ni subcontratas
            </strong>
            . Presupuesto personalizado sin compromiso.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/presupuesto/"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Pedir presupuesto gratis
            </Link>
            <a
              href={whatsappHref("Hola, quiero información sobre una mudanza.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Trust badges inline */}
          <div className="mt-8 flex flex-wrap gap-4">
            {["Vehículo propio", "Sin subcontratas", "Seguro de transporte", "Presupuesto gratis"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <circle cx="6.5" cy="6.5" r="6.5" fill="#22c55e" fillOpacity="0.2"/>
                  <path d="M3.5 6.5l2 2 4-4" stroke="#4ade80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Truck illustration */}
        <div
          className={`hidden transition-all delay-200 duration-700 ease-out md:block ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="float-anim pb-2">
            <MovingTruckSVG />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/8 bg-white/4 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/8 px-5 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-5 text-center">
              <span className="font-heading text-2xl font-extrabold text-orange-400">
                {stat.value}
              </span>
              <span className="mt-0.5 text-xs font-medium text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MovingTruckSVG() {
  return (
    <svg
      viewBox="0 0 480 290"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[420px] xl:w-[480px]"
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse cx="260" cy="265" rx="200" ry="10" fill="#000" opacity="0.35" />

      {/* ── CARGO BOX ── */}
      <rect x="145" y="58" width="310" height="175" rx="6" fill="#1d4ed8" />
      {/* Lighter top edge */}
      <rect x="145" y="58" width="310" height="6" rx="3" fill="#2563eb" />
      {/* Rear door panel */}
      <rect x="385" y="58" width="70" height="175" rx="0 5 5 0" fill="#1e40af" />
      <line x1="385" y1="58" x2="385" y2="233" stroke="#1d4ed8" strokeWidth="2" />
      {/* Vertical door handles */}
      <rect x="374" y="135" width="8" height="30" rx="4" fill="#3b82f6" opacity="0.6" />
      {/* Orange stripe */}
      <rect x="145" y="198" width="310" height="20" fill="#f97316" />
      {/* Branding */}
      <text
        x="263"
        y="148"
        textAnchor="middle"
        fill="white"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="17"
        fontWeight="800"
        letterSpacing="1.5"
      >
        MUDANZAS DOKINO
      </text>
      {/* Sub tagline */}
      <text
        x="263"
        y="170"
        textAnchor="middle"
        fill="rgba(255,255,255,0.5)"
        fontFamily="system-ui, sans-serif"
        fontSize="9"
        letterSpacing="3"
      >
        BARCELONA · CATALUÑA · ESPAÑA
      </text>
      {/* Orange diamond logo mark */}
      <polygon points="224,115 234,105 244,115 234,125" fill="#f97316" />

      {/* ── CAB ── */}
      <path
        d="M 55 130 L 148 108 L 148 233 L 52 233 Z"
        fill="#1e40af"
      />
      {/* Cab roof line */}
      <path
        d="M 55 130 Q 85 112 148 108"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Windshield */}
      <path
        d="M 72 148 L 145 126 L 145 222 L 72 222 Z"
        fill="#60a5fa"
        opacity="0.55"
      />
      <path
        d="M 72 148 L 145 126 L 145 222 L 72 222 Z"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Cab door line */}
      <line x1="112" y1="148" x2="112" y2="233" stroke="#1e3a8a" strokeWidth="1.5" />
      {/* Door handle */}
      <rect x="116" y="186" width="18" height="4" rx="2" fill="#93c5fd" opacity="0.6" />
      {/* Side mirror */}
      <rect x="38" y="152" width="18" height="26" rx="4" fill="#334155" />
      <rect x="34" y="157" width="8" height="16" rx="2" fill="#475569" />

      {/* ── FRONT FACE ── */}
      <rect x="44" y="140" width="18" height="88" rx="4 0 0 4" fill="#1e3a8a" />
      {/* Headlight */}
      <rect x="46" y="152" width="14" height="20" rx="3" fill="#fef9c3" />
      <rect x="46" y="152" width="14" height="10" rx="3" fill="white" opacity="0.5" />
      {/* Running light strip */}
      <rect x="46" y="148" width="14" height="3" rx="1.5" fill="#fed7aa" opacity="0.7" />
      {/* Grille */}
      {[188, 195, 202, 209, 216, 223].map((y) => (
        <rect key={y} x="47" y={y} width="12" height="2" rx="1" fill="#1d4ed8" />
      ))}
      {/* Front bumper */}
      <rect x="42" y="228" width="22" height="10" rx="3" fill="#334155" />

      {/* ── REAR LIGHT ── */}
      <rect x="454" y="170" width="10" height="24" rx="3" fill="#fca5a5" />
      <rect x="454" y="165" width="10" height="6" rx="2" fill="#fb923c" opacity="0.8" />

      {/* ── WHEELS ── */}
      {/* Front wheel */}
      <circle cx="100" cy="252" r="28" fill="#1e293b" />
      <circle cx="100" cy="252" r="17" fill="#334155" />
      <circle cx="100" cy="252" r="7" fill="#64748b" />
      <circle cx="100" cy="238" r="2.5" fill="#94a3b8" />
      <circle cx="100" cy="266" r="2.5" fill="#94a3b8" />
      <circle cx="86" cy="245" r="2.5" fill="#94a3b8" />
      <circle cx="114" cy="245" r="2.5" fill="#94a3b8" />
      <circle cx="86" cy="259" r="2.5" fill="#94a3b8" />
      <circle cx="114" cy="259" r="2.5" fill="#94a3b8" />

      {/* Rear axle connector */}
      <rect x="365" y="232" width="58" height="9" rx="4" fill="#1e293b" />

      {/* Rear wheel 1 */}
      <circle cx="375" cy="252" r="28" fill="#1e293b" />
      <circle cx="375" cy="252" r="17" fill="#334155" />
      <circle cx="375" cy="252" r="7" fill="#64748b" />
      <circle cx="375" cy="238" r="2.5" fill="#94a3b8" />
      <circle cx="375" cy="266" r="2.5" fill="#94a3b8" />
      <circle cx="361" cy="245" r="2.5" fill="#94a3b8" />
      <circle cx="389" cy="245" r="2.5" fill="#94a3b8" />

      {/* Rear wheel 2 */}
      <circle cx="420" cy="252" r="28" fill="#1e293b" />
      <circle cx="420" cy="252" r="17" fill="#334155" />
      <circle cx="420" cy="252" r="7" fill="#64748b" />

      {/* ── CHASSIS / UNDERCARRIAGE ── */}
      <rect x="44" y="233" width="416" height="12" rx="2" fill="#1e293b" />

      {/* ── FLOATING BOXES (right side) ── */}
      <rect x="458" y="105" width="30" height="28" rx="4" fill="#f97316" opacity="0.9" />
      <line x1="473" y1="105" x2="473" y2="133" stroke="#ea580c" strokeWidth="1.5" />
      <line x1="458" y1="119" x2="488" y2="119" stroke="#ea580c" strokeWidth="1.5" />

      <rect x="462" y="141" width="24" height="24" rx="4" fill="#3b82f6" opacity="0.85" />
      <line x1="474" y1="141" x2="474" y2="165" stroke="#2563eb" strokeWidth="1.5" />
      <line x1="462" y1="153" x2="486" y2="153" stroke="#2563eb" strokeWidth="1.5" />

      <rect x="460" y="173" width="20" height="18" rx="3" fill="#f97316" opacity="0.7" />

      {/* Ground line */}
      <rect x="40" y="264" width="430" height="6" rx="3" fill="#1e293b" opacity="0.5" />
    </svg>
  );
}
