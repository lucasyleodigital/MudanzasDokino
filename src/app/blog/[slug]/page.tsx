import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-content";
import { whatsappHref } from "@/lib/constants";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
  };

  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Reveal>
        <Link href="/blog/" className="text-sm font-medium text-accent hover:underline">
          ← Volver al blog
        </Link>
        <p className="mt-4 text-xs font-medium text-ink-muted">
          {new Date(post.date).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink">{post.title}</h1>
      </Reveal>

      <Reveal delayMs={100} className="mt-8 space-y-4">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-ink-muted">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <Reveal delayMs={180} className="mt-10 rounded-xl border border-line bg-accent-soft p-6">
        <p className="font-heading text-lg font-bold text-ink">¿Tienes una mudanza en mente?</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/presupuesto/"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Pedir presupuesto
          </Link>
          <a
            href={whatsappHref("Hola, he leído vuestro blog y quiero pedir información.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line bg-paper-raised px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent"
          >
            WhatsApp
          </a>
        </div>
      </Reveal>
    </article>
  );
}
