export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  body: string[]; // párrafos
};

// Contenido de lanzamiento del blog (brief técnico, sección 12). Este blog
// vive como contenido generado en build time dentro del propio sitio Next.js
// — no depende de un proyecto Firebase real, que aún no existe (ver
// README.md). Cuando el cliente quiera publicar sus propios artículos sin
// pasar por el código, se puede sustituir esta fuente por el panel
// Firebase/Reservify ya escalado en /firebase-blog-admin.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-embalar-un-armario",
    title: "Cómo embalar un armario para una mudanza sin dañarlo",
    excerpt:
      "El armario es uno de los muebles que más problemas da en una mudanza si no se prepara bien. Te contamos cómo hacerlo paso a paso.",
    date: "2026-07-20",
    body: [
      "Antes de mover un armario, vacíalo por completo. Parece obvio, pero mover un armario cargado es la causa más habitual de bisagras rotas y golpes en el interior.",
      "Si el armario se puede desmontar (puertas, baldas, cajones), es preferible hacerlo. Guarda los tornillos y herrajes en una bolsa con cierre, etiquetada con el nombre del mueble, y pégala por dentro de una de las piezas para que no se pierda.",
      "Protege las esquinas y superficies con mantas de mudanza o cartón corrugado, sujetos con film transparente (nunca cinta adhesiva directa sobre madera barnizada, porque puede levantar el acabado al despegarla).",
      "Si el armario no se puede desmontar, hay que moverlo en vertical siempre que sea posible, y nunca ponerlo boca abajo ni tumbarlo sobre las puertas.",
      "Para pisos altos sin ascensor o con accesos estrechos, un armario grande puede no caber por la escalera. En esos casos usamos plataforma elevadora para subirlo o bajarlo por el exterior sin desmontarlo ni forzar los accesos.",
      "Si tienes dudas sobre cómo embalar un mueble concreto de tu mudanza, cuéntanoslo al pedir presupuesto y te decimos qué necesita cada pieza.",
    ],
  },
  {
    slug: "como-preparar-una-mudanza-rapida",
    title: "Cómo preparar una mudanza rápida cuando el tiempo aprieta",
    excerpt:
      "Cuando la fecha de la mudanza está muy cerca, organizar bien las primeras horas marca la diferencia. Esta es la forma más eficiente de hacerlo.",
    date: "2026-07-20",
    body: [
      "Empieza por lo que menos usas. Ropa de temporada, libros, decoración: son las cajas que puedes cerrar primero sin que afecten a tu día a día mientras terminas de preparar todo lo demás.",
      "Etiqueta cada caja con la habitación de destino, no solo con el contenido. Ahorra muchísimo tiempo el día de la mudanza, tanto a ti como al equipo que la transporta.",
      "Separa en una caja aparte, bien identificada, lo que vas a necesitar el primer día en el destino: cargadores, algo de ropa, artículos de aseo, documentación importante.",
      "Si tienes muebles grandes que no vas a llevar o que hace falta desmontar, decídelo cuanto antes — desmontar en el último momento es lo que más suele retrasar una mudanza con prisa.",
      "Cuando el plazo es muy ajustado, dinos con qué días cuentas al pedir presupuesto. Si hace falta plataforma elevadora o embalaje, lo dejamos organizado para no perder tiempo el día de la mudanza.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
