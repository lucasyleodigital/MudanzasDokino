export type ServiceContent = {
  slug: string;
  name: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  icon: string;
};

export const SERVICES_CONTENT: ServiceContent[] = [
  {
    slug: "particulares",
    name: "Mudanzas particulares",
    metaDescription:
      "Mudanzas de pisos y casas en Barcelona, Cataluña y toda España, con o sin embalaje.",
    intro:
      "Nos encargamos de tu mudanza de principio a fin: desde el embalaje de las cajas hasta colocar los muebles en su sitio en el destino. Trabajamos con furgoneta y equipo propio, así que la persona que recoge tus cosas es la misma que las entrega.",
    includes: [
      "Embalaje de menaje, ropa y objetos frágiles",
      "Desmontaje y montaje de muebles",
      "Transporte con furgoneta propia",
      "Plataforma elevadora si el acceso lo requiere",
      "Protección de suelos, paredes y ascensores durante la carga",
    ],
    icon: "particulares",
  },
  {
    slug: "empresas",
    name: "Mudanzas de empresas y oficinas",
    metaDescription:
      "Traslado de oficinas y locales comerciales sin parar la actividad de tu empresa.",
    intro:
      "Planificamos el traslado de tu oficina para minimizar el tiempo de parón: fuera de horario laboral si hace falta, con el mobiliario y los equipos identificados y protegidos para que la vuelta a la actividad sea inmediata.",
    includes: [
      "Planificación previa por zonas y plantas",
      "Embalaje y protección de equipos informáticos",
      "Desmontaje y montaje de mobiliario de oficina",
      "Traslados fuera de horario laboral",
      "Opción de guardamuebles temporal durante la transición",
    ],
    icon: "empresas",
  },
  {
    slug: "guardamuebles",
    name: "Traslado a guardamuebles",
    metaDescription:
      "Recogemos tus muebles y los trasladamos a un guardamuebles mientras dura tu mudanza o reforma en Barcelona.",
    intro:
      "Cuando la fecha de entrada y salida no cuadran, o mientras dura una reforma, nos encargamos de recoger tus muebles y trasladarlos a un guardamuebles. Cuando estés listo, los buscamos y te los llevamos a tu nuevo domicilio.",
    includes: [
      "Recogida en tu domicilio o local",
      "Traslado al guardamuebles",
      "Entrega programada cuando estés listo",
      "Seguro de transporte incluido en ambos trayectos",
      "Ideal para mudanzas con fecha de entrada ajustada o reformas largas",
    ],
    icon: "guardamuebles",
  },
  {
    slug: "plataforma-elevadora",
    name: "Plataforma elevadora",
    metaDescription:
      "Servicio de plataforma elevadora para mudanzas en pisos altos sin ascensor o con accesos complicados.",
    intro:
      "Cuando el ascensor es pequeño, no existe o los muebles no caben por la escalera, subimos y bajamos la carga por el exterior con plataforma elevadora, sin golpes ni riesgos para tus pertenencias ni para el edificio.",
    includes: [
      "Subida y bajada de muebles voluminosos por fachada",
      "Sin necesidad de desmontar muebles que no caben por la escalera",
      "Reduce tiempos y riesgos frente a la subida manual",
      "Recomendado a partir de 2º-3º piso sin ascensor",
    ],
    icon: "plataforma-elevadora",
  },
  {
    slug: "larga-distancia",
    name: "Mudanzas de larga distancia",
    metaDescription: "Mudanzas de larga distancia con cobertura en toda España.",
    intro:
      "Ya sea a otra provincia o al otro extremo del país, coordinamos la mudanza completa con una única furgoneta y un único equipo de principio a fin, sin cambios de transportista por el camino.",
    includes: [
      "Cobertura nacional",
      "Un único equipo de principio a fin",
      "Planificación de fecha y horario de entrega",
      "Seguimiento durante todo el trayecto",
    ],
    icon: "larga-distancia",
  },
];

export function getServiceContent(slug: string) {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}
