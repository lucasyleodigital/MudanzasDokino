# Web de Mudanzas Dokino

Sitio construido siguiendo [`Brief tecnico - Web Mudanzas Dokino.md`](../Brief%20tecnico%20-%20Web%20Mudanzas%20Dokino.md) (carpeta padre). Next.js 16 (App Router, export estático) + Tailwind v4, listo para desplegar en Cloudflare Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` (o el puerto indicado en consola).

```bash
npm run build            # genera la exportación estática en /out
npm run lint              # ESLint sobre src/
npm run typecheck:functions   # type-check de las Cloudflare Pages Functions (excluidas del build de Next)
```

## Estructura

```
src/app/            páginas (App Router), una carpeta por ruta
src/components/     componentes compartidos
src/lib/            constantes, validación (zod), contenido de servicios/FAQs/blog
functions/api/      Cloudflare Pages Functions (envío de formularios vía Resend)
functions/_lib/      rate limiting, verificación Turnstile, sanitización
public/images/       assets — hoy placeholders SVG, ver "Higgsfield" abajo
firebase-blog-admin/ especificación del blog auto-gestionable (fase 2, no activada)
```

## Variables de entorno (Cloudflare Pages → Settings → Environment variables)

| Variable | Para qué |
|---|---|
| `RESEND_API_KEY` | Envío de emails desde `functions/api/*` |
| `NOTIFY_TO_EMAIL` | Buzón que recibe los presupuestos/contactos (ej. `info@mudanzasdokino.com`) |
| `NOTIFY_FROM_EMAIL` | Remitente verificado en Resend sobre el dominio real |
| `TURNSTILE_SECRET_KEY` | Verificación server-side del anti-spam (Cloudflare Turnstile) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Site key pública del widget (build-time) |
| `RATE_LIMIT_KV` | *Binding* de KV de Cloudflare (no variable de texto) — opcional; sin él el rate limiting se omite de forma segura |

Sin `TURNSTILE_SECRET_KEY` configurada, `verifyTurnstile` deja pasar las solicitudes (para no bloquear desarrollo) — **hay que configurarla antes de producción**.

## Despliegue en Cloudflare Pages

1. Conectar el repo (o subir `/out` tras `npm run build`) como proyecto de Cloudflare Pages.
2. Framework preset: Next.js (static export) — build command `npm run build`, output directory `out`.
3. Las Functions de `/functions` se despliegan automáticamente por convención de Cloudflare Pages.
4. Configurar las variables de entorno de la tabla anterior.
5. Dominio personalizado: una vez comprado en Cloudflare Registrar, enlazarlo al proyecto Pages.

## Antes de lanzar a producción — pendientes reales

Estos son bloqueantes externos, no técnicos — el código ya está listo para recibir los datos reales (ver `src/lib/constants.ts`, marcado con `[PENDIENTE]` en cada caso):

- [ ] Comprar el dominio `mudanzasdokino.com` en Cloudflare Registrar
- [ ] Verificar el dominio en Resend (`RESEND_API_KEY`, `NOTIFY_FROM_EMAIL`)
- [ ] Configurar Cloudflare Email Routing + alias de envío en Gmail para `info@mudanzasdokino.com`
- [ ] Dar de alta el sitio en Cloudflare Turnstile y añadir `TURNSTILE_SECRET_KEY` / `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- [ ] Número de WhatsApp Business definitivo → `src/lib/constants.ts` (`SITE.whatsappNumber`)
- [ ] Teléfono de contacto público → `SITE.phoneDisplay`
- [ ] Confirmar si el "24/7" es de respuesta o de operativa real (aparece en el Hero)
- [ ] Logo real (vectorial) y fotos — hoy el hero y los iconos son SVG placeholder propios (ver siguiente sección)
- [ ] Crear el KV namespace de Cloudflare y enlazarlo como `RATE_LIMIT_KV` si se quiere rate limiting activo desde el día uno

## Higgsfield — assets 3D pendientes

El brief técnico especifica renders 3D de Higgsfield para el hero y el set de iconos de servicios (sección 6). **No se pudieron generar en esta sesión: el workspace de Higgsfield está sin créditos**, y el modelo recomendado (Recraft V4.1) requiere un plan superior al actual.

Mientras tanto, `public/images/hero-furgoneta.svg` y `public/images/icons/*.svg` son una ilustración propia en SVG, en la paleta de marca, para que el sitio no tenga huecos ni imágenes rotas. Son fáciles de sustituir:

1. Generar las piezas reales con Higgsfield siguiendo los prompts de la sección 6 del brief.
2. Guardarlas como `.png` en `public/images/hero-furgoneta.png` y `public/images/icons/<slug>.png`.
3. Cambiar la extensión `.svg` → `.png` en `src/components/Hero.tsx` y `src/components/ServiceIcon.tsx`.
4. Añadir una imagen `og:image` real (1200×630) en `src/app/layout.tsx` — hoy no hay ninguna por evitar un enlace roto.

## El blog hoy vs. mañana

El blog vive como contenido definido en `src/lib/blog-content.ts` y se pre-renderiza como HTML estático en build time — esto es deliberado: da SEO correcto y cero coste de infraestructura desde el primer día, sin depender de un proyecto Firebase que aún no existe.

`firebase-blog-admin/` documenta el plan completo para cuando el cliente quiera publicar sus propios artículos sin tocar código (mismo patrón que Reservify: Firebase Auth + Firestore + panel de admin). Incluye ya las `firestore.rules` correctas — solo falta un proyecto Firebase real para activarlo.

## Formularios

`src/lib/validation.ts` define los esquemas zod compartidos entre el cliente (`QuoteForm.tsx`, `ContactForm.tsx`) y las Functions de servidor — la validación de servidor es la que realmente protege, la de cliente solo mejora la experiencia. Incluye honeypot anti-bot y saneado contra inyección de cabeceras en los emails.

El formulario de presupuesto es intencionadamente **no automático**: el mensaje de confirmación deja claro que una persona revisa cada solicitud antes de responder.
