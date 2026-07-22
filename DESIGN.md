# Design System: Mudanzas Dokino

## 1. Visual Theme & Atmosphere

A cinematic, nocturnal interface inspired by Barcelona at night — deep navy skies,
industrial orange warmth, and the quiet confidence of a trusted logistics brand.
The atmosphere is premium-dark yet approachable: like the inside of a well-equipped
moving truck at dusk, lit by amber work lights.

- **Density:** 5/10 — Balanced. Content-first without being sparse.
- **Variance:** 6/10 — Offset asymmetric. Hero left-aligned, sections alternate grid rhythm.
- **Motion:** 6/10 — Fluid CSS. Trucks roll, boxes float, wheels spin. Purposeful, not decorative.

The design is dark-first throughout. Pages never flip to light mode.
Every surface sits on the deep navy canvas, separated by subtle slate borders
and glassmorphism cards. Orange is the single accent — it signals trust, action,
and energy. It never competes with itself.

---

## 2. Color Palette & Roles

- **Deep Navy** (`#060d1e`) — Primary page background. The cinematic night sky.
- **Navy Mid** (`#0f172a`) — Footer, secondary surfaces, elevated containers.
- **Navy Card** (`#1e293b`) — Card fills, input backgrounds, hover surfaces.
- **Navy Border** (`rgba(255,255,255,0.07)`) — 1px structural lines between cards and sections.
- **Slate Text** (`#f8fafc`) — Primary headings and body on dark. Near-white, not pure white.
- **Slate Secondary** (`#94a3b8`) — Descriptions, metadata, labels, captions.
- **Slate Muted** (`#64748b`) — Placeholder text, disabled states, footer copyright.
- **Amber Orange** (`#f97316`) — THE single accent. Primary CTAs, brand badges, active states, selection highlight.
- **Orange Dark** (`#ea580c`) — Hover state of primary CTA buttons.
- **Orange Glow** (`rgba(249,115,22,0.15)`) — Card border tints when orange context. Never used as background fill.
- **Emerald Action** (`#10b981`) — WhatsApp-specific CTAs only. Never used generically.
- **Danger Red** (`#ef4444`) — Form validation errors only.

**Strictly banned:** Pure black (`#000000`). Purple of any shade. Neon glow effects.
Blue-purple gradients. Warm/cool gray mixing.

---

## 3. Typography Rules

- **Display / Headings:** `Manrope` — Bold (700–800), track tight (`-0.02em`), balanced text-wrap.
  Hierarchy through weight and size, not color alone. Headlines never exceed `clamp(2.5rem, 6vw, 4.5rem)`.
- **Body:** System sans-serif stack (`ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto`) —
  Regular (400), relaxed leading (1.6–1.75), max 65 characters per line.
- **Labels / UI:** `Manrope` Medium (500–600) for nav items, badge text, button labels.
- **Mono / Metadata:** `ui-monospace` or `Geist Mono` for prices, availability hours, tracking IDs.

**Banned:** `Inter` (too generic for this brand). `Georgia`, `Times New Roman`, `Garamond`
(no serif anywhere — this is a logistics brand, not editorial). Gradient text on large headings.

---

## 4. Hero Section

Left-aligned asymmetric layout. Text column occupies the left 55% of viewport on desktop.
The right 45% holds a cinematic animated SVG illustration: Barcelona night skyline,
a moving truck with spinning wheels, floating cardboard boxes, a mover silhouette,
and headlight glow effects.

- **Headline structure:** Small uppercase badge (orange, tracking-widest) → Large heading
  (Manrope 800, white) → Accent highlight word in orange → Subtitle in slate-secondary.
- **CTAs:** One primary orange pill button ("Pedir presupuesto") + one ghost pill button
  ("Ver servicios"). Both minimum 48px tall. Gap between them: 12px.
- **Trust row below CTAs:** 3 small trust badges (icon + text) — "Sin subcontratas",
  "Respuesta en minutos", "Precio cerrado". Icon-only SVGs, no emojis.
- **Mobile:** Illustration hidden or faint background opacity (0.2). Text column full-width.
  Single-column stacked layout.

**Banned in Hero:** Centered layout. "Scroll to explore" text. Bouncing chevrons.
Secondary "Learn more" links. Stock photo backgrounds.

---

## 5. Component Stylings

**Buttons — Primary (Orange):**
- Fill: `#f97316`. Hover: `#ea580c`. Active: translate Y +1px.
- Border-radius: `0.75rem` (12px). Padding: `0.75rem 1.75rem`.
- Font: Manrope 600, white. No outer glow. No neon shadow.
- Shadow only: `0 4px 14px rgba(249,115,22,0.25)` — tinted to brand color.

**Buttons — Ghost:**
- Border: `1px solid rgba(255,255,255,0.15)`. Background transparent.
- Hover: `background rgba(255,255,255,0.06)`. Text: white.

**Cards:**
- Background: `rgba(30,41,59,0.6)` — semi-transparent navy card with `backdrop-blur`.
- Border: `1px solid rgba(255,255,255,0.07)`.
- Border-radius: `1rem` (16px). Padding: `1.5rem`.
- Hover: border becomes `rgba(249,115,22,0.25)`, subtle translate Y -2px.
- Shadow: `0 4px 24px rgba(0,0,0,0.3)` — diffused, dark-tinted. No white glows.

**Service Icon Chips:**
- Rounded square (`0.75rem`), 48×48px. Background: accent color at 10% opacity.
- Icon SVG in accent color (stroke, not fill). No emojis.

**Form Inputs:**
- Background: `#1e293b`. Border: `1px solid rgba(255,255,255,0.1)`.
- Focus: border `#f97316`, ring `rgba(249,115,22,0.15)`.
- Label: above input, Manrope 500, slate-secondary color. Placeholder: slate-muted.
- Error: red text below field with warning icon SVG.

**Loaders:**
- Skeletal shimmer matching layout shape. No circular spinners.
- Shimmer uses `rgba(255,255,255,0.04)` animated gradient.

---

## 6. Layout Principles

- **CSS Grid first.** No `calc()` percentage hacks. No flexbox math for page layout.
- **Max-width:** `1152px` (`max-w-6xl`) centered for content. Hero and full-bleed sections
  can extend to viewport width with contained inner padding `px-6`.
- **Section vertical rhythm:** `py-20` (80px) for primary sections, `py-14` (56px) for
  supplementary. `clamp(3rem, 8vw, 5rem)` for responsive gap.
- **No overlapping elements.** Every element owns its spatial zone.
  The hero illustration is absolutely positioned but contained in the right 45% — it never
  overlaps the headline text column.
- **Asymmetric grids:** Services use `grid-cols-2` on mobile, `grid-cols-3` on tablet,
  not 3 equal columns on all viewports. Testimonials use 2-column zig-zag on desktop.
- **Dot grid background:** Radial dot pattern `rgba(255,255,255,0.025)` at 48px intervals
  on dark sections. Subtle, not decorative.
- **Mobile collapse:** All multi-column layouts → single column below 768px. No exceptions.
  Horizontal scroll is a critical failure.

---

## 7. Motion & Interaction

- **Wheel spin:** `spin-wheel` keyframe — `rotate(360deg)` infinite 4.5s linear.
  Applied only to truck wheel spoke group via `transform-box: fill-box`.
- **Box float:** `float-box-anim` — `translateY(0px → -18px → 0px)` ease-in-out,
  3.4–4.6s per box with staggered delays (0s, 0.6s, 1.3s, 0.2s).
- **Headlight pulse:** `headlight-pulse` — opacity 0.7 → 1 → 0.7, 2.5s ease-in-out infinite.
- **Page transitions:** Fade-in on mount, 300ms ease-out. No slide animations between routes.
- **Card hover:** `transition: transform 300ms ease, border-color 300ms ease`.
  Translate Y -2px only. Never translate X.
- **CTA buttons:** `transition: background 150ms ease, box-shadow 150ms ease`.
  Active state: `translateY(1px)` for tactile press feedback.
- **Spring defaults:** `stiffness 100, damping 20` for any JS-driven animation.
- **Reduced motion:** All keyframe animations wrap in `@media (prefers-reduced-motion: reduce)`
  with `animation: none`. Motion is enhancement, never requirement.

**Banned:** Linear easing on UI transitions. Animating `width`, `height`, `top`, `left`.
Elements that animate on scroll without a clear hierarchy reason.

---

## 8. Navigation

- **Desktop:** Horizontal top bar, sticky. Background `rgba(6,13,30,0.85)` + `backdrop-blur-md`.
  Logo left, nav links center-right, CTA button rightmost.
  Active link: orange dot below or orange text weight change.
- **Mobile:** Hamburger menu. Full-screen dark overlay. Links stacked vertically, large touch targets (min 48px).
- **Footer:** 4-column grid (desktop) — Brand + tagline, Navigation links, Contact info, Legal links.
  Bottom bar: copyright + aviso legal link + "Web por Lucas y Leo Digital".

---

## 9. Anti-Patterns (Banned)

- No emojis anywhere — use SVG icons with consistent 1.8px stroke width
- No `Inter` font — use `Manrope` for brand character
- No pure black (`#000000`) — deep navy `#060d1e` is the darkest surface
- No neon outer glows — tinted shadows only, never white or purple halos
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionary"
- No purple, violet, or blue-purple gradients — orange is the only warm accent
- No 3-column equal card grids on mobile — always collapse or use 2-column
- No centered Hero layout — text always left-aligned on desktop
- No "Scroll to explore", scroll arrows, or bouncing chevrons
- No fake round numbers ("99.9% uptime", "50K happy customers") — use real or no stats
- No generic placeholder names ("John Doe", "María García", "Carlos López")
- No stock photo hero backgrounds — use the custom SVG illustration
- No light mode — this site is dark-only throughout
- No broken image links — use inline SVG or data URIs for all assets
- No gradient text on main headings — use color contrast via weight, not hue shift
- No custom mouse cursors
- No modal overlays for primary navigation flows
