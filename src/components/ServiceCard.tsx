"use client";

import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import TiltCard from "@/components/TiltCard";

const COLORS: Record<string, { iconLight: string; iconDark: string; line: string; glow: string; rgb: string }> = {
  orange: { iconLight: "bg-orange-50 text-orange-500",   iconDark: "bg-orange-500/10 text-orange-400",  line: "from-orange-500 to-amber-400",   glow: "rgba(249,115,22,0.18)",  rgb: "249,115,22" },
  blue:   { iconLight: "bg-blue-50 text-blue-500",       iconDark: "bg-blue-500/10 text-blue-400",      line: "from-blue-500 to-indigo-400",    glow: "rgba(59,130,246,0.18)",  rgb: "59,130,246" },
  violet: { iconLight: "bg-violet-50 text-violet-500",   iconDark: "bg-violet-500/10 text-violet-400",  line: "from-violet-500 to-purple-400",  glow: "rgba(139,92,246,0.18)",  rgb: "139,92,246" },
  amber:  { iconLight: "bg-amber-50 text-amber-500",     iconDark: "bg-amber-500/10 text-amber-400",    line: "from-amber-500 to-yellow-400",   glow: "rgba(245,158,11,0.18)",  rgb: "245,158,11" },
  emerald:{ iconLight: "bg-emerald-50 text-emerald-500", iconDark: "bg-emerald-500/10 text-emerald-400",line: "from-emerald-500 to-teal-400",   glow: "rgba(16,185,129,0.18)",  rgb: "16,185,129" },
};

type Props = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  color?: string;
  variant?: "light" | "dark";
};

export default function ServiceCard({ slug, name, short, icon, color = "orange", variant = "light" }: Props) {
  const c = COLORS[color] ?? COLORS.orange;
  const dark = variant === "dark";

  return (
    <TiltCard intensity={8} glowColor={c.rgb}>
      <Link
        href={`/servicios/${slug}/`}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 ${
          dark
            ? "border-white/[0.07] bg-white/[0.04] backdrop-blur-sm hover:border-white/[0.14] hover:bg-white/[0.07]"
            : "border-line bg-white shadow-sm hover:border-transparent hover:shadow-xl"
        }`}
        style={dark ? { boxShadow: `0 0 0 0 ${c.glow}` } : undefined}
        onMouseEnter={dark ? (e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${c.glow}, inset 0 0 20px 0 ${c.glow.replace("0.18", "0.05")}`; } : undefined}
        onMouseLeave={dark ? (e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${c.glow}`; } : undefined}
      >
        {/* Animated top accent line */}
        <span className={`absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r ${c.line} transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl`} />

        {/* Icon */}
        <div className={`relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${dark ? c.iconDark : c.iconLight}`}>
          <ServiceIcon name={icon} className="h-8 w-8" />
        </div>

        <h3 className={`relative font-heading text-lg font-bold ${dark ? "text-white" : "text-ink"}`}>{name}</h3>
        <p className={`relative mt-2 flex-1 text-sm leading-relaxed ${dark ? "text-slate-400" : "text-ink-muted"}`}>{short}</p>

        <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 transition-colors group-hover:text-orange-400">
          Ver detalle
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </TiltCard>
  );
}
