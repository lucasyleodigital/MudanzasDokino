import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";

type Props = {
  slug: string;
  name: string;
  short: string;
  icon: string;
};

export default function ServiceCard({ slug, name, short, icon }: Props) {
  return (
    <Link
      href={`/servicios/${slug}/`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/8"
    >
      {/* Orange accent line on hover */}
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-orange-400 transition-transform duration-300 group-hover:scale-x-100" />

      {/* Icon container */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 transition-colors group-hover:bg-orange-100">
        <ServiceIcon name={icon} className="h-8 w-8" />
      </div>

      <h3 className="font-heading text-lg font-bold text-ink">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{short}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 transition-colors group-hover:text-orange-600">
        Ver detalle
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
