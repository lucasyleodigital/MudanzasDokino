// Datos centrales del sitio. Todo lo marcado [PENDIENTE] es un valor de
// relleno que hay que sustituir por el dato real antes de lanzar a producción
// (ver README.md, sección "Antes de lanzar").

export const SITE = {
  name: "Mudanzas Dokino",
  legalName: "Elkin Leonardo Vásquez Pulido",
  cif: "Y6878905X",
  fiscalAddress: "Calle Sigüenza, 9 · 08032 Barcelona",
  // [PENDIENTE] dominio final una vez comprado en Cloudflare Registrar
  domain: "mudanzasdokino.com",
  url: "https://mudanzasdokino.com",
  // [PENDIENTE] número de WhatsApp Business definitivo, formato internacional sin "+"
  whatsappNumber: "34600000000",
  // [PENDIENTE] teléfono de contacto público
  phoneDisplay: "PENDIENTE",
  // [PENDIENTE] se configura tras montar Cloudflare Email Routing sobre el dominio real
  contactEmail: "info@mudanzasdokino.com",
  // Ámbito nacional, con foco de contenido inicial en Barcelona y Cataluña
  serviceAreaHeadline: "Barcelona, Cataluña y toda España",
  // [PENDIENTE] confirmar si el 24/7 es de respuesta o de operativa real antes de publicarlo
  availability: "Atención 24/7",
} as const;

export const SERVICES = [
  {
    slug: "particulares",
    name: "Mudanzas particulares",
    short: "Pisos y casas, con o sin embalaje, a cualquier punto del país.",
    icon: "particulares",
    color: "orange",
  },
  {
    slug: "empresas",
    name: "Mudanzas de empresas y oficinas",
    short: "Traslados de oficina planificados para no parar la actividad.",
    icon: "empresas",
    color: "blue",
  },
  {
    slug: "guardamuebles",
    name: "Guardamuebles",
    short: "Almacenaje seguro mientras dura tu mudanza o reforma.",
    icon: "guardamuebles",
    color: "violet",
  },
  {
    slug: "plataforma-elevadora",
    name: "Plataforma elevadora",
    short: "Para pisos altos sin ascensor o accesos complicados.",
    icon: "plataforma-elevadora",
    color: "amber",
  },
  {
    slug: "larga-distancia",
    name: "Mudanzas de larga distancia",
    short: "Cobertura nacional con la misma atención de principio a fin.",
    icon: "larga-distancia",
    color: "emerald",
  },
] as const;

export const PARCEL_SERVICES = [
  {
    name: "Paquetería particular",
    short: "Envío de paquetes y objetos sueltos por toda España.",
    icon: "paqueteria",
    color: "orange",
  },
  {
    name: "Transporte de mercancías",
    short: "Para empresas que mueven mercancía de forma puntual o recurrente.",
    icon: "transporte",
    color: "blue",
  },
  {
    name: "Objetos especiales y frágiles",
    short: "Cuadros, antigüedades, electrónica y maquinaria con embalaje a medida.",
    icon: "guardamuebles",
    color: "violet",
  },
] as const;

export const NAV_LINKS = [
  { href: "/servicios/", label: "Servicios" },
  { href: "/zona-de-cobertura/", label: "Zona de cobertura" },
  { href: "/blog/", label: "Blog" },
  { href: "/preguntas-frecuentes/", label: "FAQs" },
  { href: "/contacto/", label: "Contacto" },
] as const;

export function whatsappHref(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}
