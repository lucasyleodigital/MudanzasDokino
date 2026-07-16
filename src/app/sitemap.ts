import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "servicios",
    "zona-de-cobertura",
    "sobre-nosotros",
    "preguntas-frecuentes",
    "presupuesto",
    "contacto",
    "blog",
    "aviso-legal",
    "politica-de-privacidad",
    "politica-de-cookies",
  ].map((path) => ({
    url: `${SITE.url}/${path ? `${path}/` : ""}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE.url}/servicios/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
