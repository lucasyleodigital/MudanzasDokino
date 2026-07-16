import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import TiltCard from "@/components/TiltCard";

type Props = {
  slug: string;
  name: string;
  short: string;
  icon: string;
};

export default function ServiceCard({ slug, name, short, icon }: Props) {
  return (
    <TiltCard intensity={8}>
      <Link
        href={`/servicios/${slug}/`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-sm transition-colors duration-300 hover:border-orange-200"
      >
        {/* Animated top accent line */}
        <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />

        {/* Background glow on hover */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50/0 to-orange-50/0 transition-all duration-500 group-hover:from-orange-50/60 group-hover:to-transparent" />

        {/* Icon */}
        <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 transition-all duration-300 group-hover:bg-orange-100 group-hover:scale-110">
          <ServiceIcon name={icon} className="h-8 w-8" />
        </div>

        <h3 className="relative font-heading text-lg font-bold text-ink">{name}</h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{short}</p>

        <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 transition-colors group-hover:text-orange-600">
          Ver detalle
          <svg
            width="14" height="14" viewBox="0 0 16 16" fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </TiltCard>
  );
}
