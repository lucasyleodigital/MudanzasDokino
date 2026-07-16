# Blog auto-gestionable (fase 2, aún no activado)

El blog en producción hoy vive como contenido generado en build time dentro
del propio Next.js (`web/src/lib/blog-content.ts`), sin depender de ningún
proyecto Firebase — así el blog funciona desde el primer día, con SEO
correcto (HTML ya renderizado) y sin coste de infraestructura.

Esta carpeta es el plan para cuando el cliente quiera publicar sus propios
artículos sin tocar código, reutilizando el mismo patrón que Reservify
(Firebase Auth + Firestore + panel de admin).

## Por qué no está activado ya

Requiere un proyecto Firebase real (con su Project ID, igual que
`reservify-espaifest-2c567` en EspaiFest) que todavía no existe para Dokino.
Construir el panel de admin contra un proyecto que no existe generaría
código que no se puede probar de verdad — mejor dejarlo especificado y
activarlo cuando el proyecto exista.

## Esquema de datos (colección `posts`)

```
posts/{postId}
  title: string
  slug: string
  excerpt: string
  body: string        // markdown o HTML
  published: boolean
  publishedAt: timestamp
  updatedAt: timestamp
```

`firestore.rules` en esta carpeta ya tiene las reglas de seguridad
correctas: lectura pública solo de posts con `published == true`, escritura
solo para usuarios autenticados.

## Pasos para activarlo

1. Crear un proyecto Firebase para Dokino (igual que se hizo para
   `reservify-espaifest`).
2. Desplegar `firestore.rules` de esta carpeta en ese proyecto.
3. Crear un usuario en Firebase Auth para que el cliente inicie sesión en el
   panel de admin.
4. Construir el panel de admin (formulario de título/contenido/publicar,
   como el de Reservify) que escriba en la colección `posts`.
5. Sustituir `web/src/lib/blog-content.ts` por una función que lea de
   Firestore en build time (o mover el blog a un subdominio con SSR si se
   quiere contenido en tiempo real sin rebuild) — ver brief técnico sección
   6 para el detalle de por qué el renderizado debe seguir siendo HTML real
   y no una SPA leyendo Firestore en el cliente, por SEO.
6. Configurar un webhook: al publicar un post en el panel, disparar un
   rebuild del sitio en Cloudflare Pages para que el HTML estático se
   regenere con el nuevo contenido.
