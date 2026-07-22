"use client";

import { useState } from "react";
import QuoteForm from "@/components/presupuesto/QuoteForm";
import ParcelForm from "@/components/presupuesto/ParcelForm";

const TABS = [
  {
    id: "mudanza" as const,
    label: "Mudanza",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
    desc: "Pisos, oficinas, larga distancia, plataforma elevadora…",
  },
  {
    id: "paqueteria" as const,
    label: "Paquetería y transporte",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    desc: "Paquetes, palés, carga general, objetos frágiles…",
  },
] as const;

type TabId = typeof TABS[number]["id"];

export default function PresupuestoTabs() {
  const [active, setActive] = useState<TabId>("mudanza");

  return (
    <div>
      {/* Tab selector */}
      <div className="mb-8 grid grid-cols-2 gap-3">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`flex flex-col items-start gap-2 rounded-xl border-2 p-4 text-left transition-all duration-200 ${
              active === tab.id
                ? "border-orange-500 bg-orange-500/10 text-orange-400"
                : "border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-orange-500/30 hover:bg-white/[0.06]"
            }`}
          >
            <span className={active === tab.id ? "text-orange-400" : "text-slate-500"}>
              {tab.icon}
            </span>
            <span className="font-heading text-sm font-bold leading-tight">{tab.label}</span>
            <span className="text-xs leading-relaxed opacity-75">{tab.desc}</span>
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="glass-card rounded-xl p-6 sm:p-8">
        {active === "mudanza" ? <QuoteForm /> : <ParcelForm />}
      </div>
    </div>
  );
}
