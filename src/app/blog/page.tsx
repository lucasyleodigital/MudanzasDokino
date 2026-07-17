import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BLOG_POSTS } from "@/lib/blog-content";

export const metadata: Metadata = {
  title: "Blog — Guías de mudanza",
  description: "Guías prácticas sobre mudanzas: embalaje, planificación y consejos para prepararte sin sorpresas.",
};

const CARD_VISUALS = [
  {
    gradient: "from-indigo-900 via-violet-900 to-purple-900",
    accent: "rgba(139,92,246,0.8)",
    hoverShadow: "hover:shadow-[0_24px_60px_rgba(139,92,246,0.18)]",
    tag: "Embalaje",
    tagColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    readTime: "4 min",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-20 w-20 opacity-80" aria-hidden="true">
        <rect x="8" y="20" width="48" height="36" rx="4" stroke="white" strokeWidth="2.5" />
        <path d="M8 30h48" stroke="white" strokeWidth="2.5" />
        <path d="M24 20V14a8 8 0 0 1 16 0v6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M25 39h14" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    gradient: "from-orange-900 via-amber-900 to-yellow-900",
    accent: "rgba(249,115,22,0.8)",
    hoverShadow: "hover:shadow-[0_24px_60px_rgba(249,115,22,0.18)]",
    tag: "Organización",
    tagColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    readTime: "3 min",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-20 w-20 opacity-80" aria-hidden="true">
        <circle cx="32" cy="32" r="22" stroke="white" strokeWidth="2.5" />
        <path d="M32 18v14l8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 10l4 4M44 10l-4 4" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        label="Guías y consejos"
        title="Blog de"
        highlight="mudanzas."
        subtitle="Artículos breves y prácticos para preparar tu mudanza sin imprevistos — embalaje, organización, plataformas elevadoras y más."
      />

      <section className="relative bg-[#060d1e] py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {BLOG_POSTS.map((post, i) => {
              const vis = CARD_VISUALS[i] ?? CARD_VISUALS[0];
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.06] hover:-translate-y-2 ${vis.hoverShadow}`}
                >
                  {/* Gradient cover */}
                  <div className={`relative h-52 bg-gradient-to-br ${vis.gradient} flex items-center justify-center overflow-hidden`}>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at 30% 70%, ${vis.accent.replace("0.8", "0.3")} 0%, transparent 60%)`,
                      }}
                    />
                    <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                      {vis.icon}
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060d1e] to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold ${vis.tagColor}`}>
                        {vis.tag}
                      </span>
                      <span className="text-xs text-slate-500">{vis.readTime} lectura</span>
                      <span className="ml-auto text-xs text-slate-600">
                        {new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                    </div>

                    <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-white transition-colors group-hover:text-orange-300">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-400 transition-all group-hover:gap-3">
                      Leer artículo
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  {/* Top accent line */}
                  <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-amber-400 transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-10 text-center backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">Más contenido próximamente</p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white">
              ¿Tienes dudas sobre tu mudanza?
            </h3>
            <p className="mt-3 text-slate-400">
              Escríbenos directamente y te resolvemos cualquier pregunta sin compromiso.
            </p>
            <a
              href="https://wa.me/34600000000?text=Hola%2C+tengo+una+pregunta+sobre+una+mudanza."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.09-1.53a9.87 9.87 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.51 13.87c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
              </svg>
              Preguntarnos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
