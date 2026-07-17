import { SITE } from "@/lib/constants";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: SITE.name,
    url: SITE.url,
    email: SITE.contactEmail,
    areaServed: "ES",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
