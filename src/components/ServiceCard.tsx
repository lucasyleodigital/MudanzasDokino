import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import TiltCard from "@/components/TiltCard";

const COLOR_CLASSES: Record<string, { icon: string; line: string }> = {
  orange: { icon: "bg-orange-50 text-orange-500 group-hover:bg-orange-100", line: "from-orange-500 via-orange-400 to-amber-400" },
  blue:   { icon: "bg-blue-50 text-blue-500 group-hover:bg-blue-100",       line: "from-blue-500 via-blue-400 to-indigo-400" },
  violet: { icon: "bg-violet-50 text-violet-500 group-hover:bg-violet-100", line: "from-violet-500 via-violet-400 to-purple-400" },
  amber:  { icon: "bg-amber-50 text-amber-500 group-hover:bg-amber-100",    line: "from-amber-500 via-amber-400 to-yellow-400" },
  emerald:{ icon: "bg-emerald-50 text-emerald-500 group-hover:bg-emerald-100", line: "from-emerald-500 via-emerald-400 to-teal-400" },
};

type Props = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  color?: string;
};

export default function ServiceCard({ slug, name, short, icon, color = "orange" }: Props) {
  const c = COLOR_CLASSES[color] ?? COLOR_CLASSES.orange;

  return (
    <TiltCard intensity={8}>
      <Link
        href={`/servicios/${slug}/`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:border-transparent hover:shadow-xl"
      >
        {/* Animated top accent line */}
        <span className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${c.line} transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl`} />

        {/* Icon */}
        <div className={`relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${c.icon}`}>
          <ServiceIcon name={icon} className="h-8 w-8" />
        </div>

        <h3 className="relative font-heading text-lg font-bold text-ink">{name}</h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{short}</p>

        <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 transition-colors group-hover:text-orange-600">
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
