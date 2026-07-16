import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BLOG_POSTS } from "@/lib/blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guías prácticas sobre mudanzas: embalaje, planificación y consejos.",
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <Reveal>
        <h1 className="font-heading text-4xl font-extrabold text-ink">Blog</h1>
        <p className="mt-3 text-ink-muted">
          Guías cortas para preparar tu mudanza sin sorpresas.
        </p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {BLOG_POSTS.map((post, i) => (
          <Reveal key={post.slug} delayMs={i * 80}>
            <Link
              href={`/blog/${post.slug}/`}
              className="block rounded-xl border border-line bg-paper-raised p-6 transition-colors hover:border-accent"
            >
              <p className="text-xs font-medium text-ink-muted">
                {new Date(post.date).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 font-heading text-xl font-bold text-ink">{post.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
