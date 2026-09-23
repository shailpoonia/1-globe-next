# 1-globe.com — Design Brief

**Purpose:** the single source of truth for rebuilding the 1-globe.com website (and future project sites) from scratch in a code editor such as Google Antigravity. Every value below is the **real** design system, extracted from the existing Vite + React + Tailwind + shadcn/ui project — not a reconstruction.

> **Fastest path:** you already have the real `tailwind.config.js` and the global `index.css`. Reuse those two files directly as the foundation (see "Reuse the real files" at the bottom) and use this brief as the human-readable spec + build prompt. Only rebuild the tokens from scratch if you can't carry the files over.

---

## 1. Brand at a glance

- **Feel:** dark, premium, high-tech. A "space / orbit / gravity" metaphor for ecommerce systems.
- **Signature look:** near-black navy background, near-white text, and two vivid brights — **cyan** and **teal/aqua** — used sparingly for accents, CTAs, and the orbit motion.
- **Typeface personality:** geometric grotesk headings (Space Grotesk) over a clean neutral sans (Inter).
- **Signature moves to preserve:** one italic accent word in big headlines; small uppercase eyebrow labels above sections; slow rotating "orbit" animations.

---

## 2. Colors  (authoritative = HSL, as used in CSS variables)

The project stores color as HSL triplets consumed via `hsl(var(--token))`. HSL is the source of truth; the hex column is an approximate reference for humans.

| Token | HSL (real) | ~Hex | Role |
|---|---|---|---|
| `--background` | `220 43% 5%` | `#070B12` | Page background (near-black navy) |
| `--foreground` | `0 0% 96%` | `#F5F5F5` | Primary text |
| `--card` | `211 53% 11%` | `#0E1B2B` | Cards / elevated surfaces |
| `--card-foreground` | `208 100% 97%` | `#F0F9FF` | Text on cards |
| `--popover` | `220 43% 5%` | `#070B12` | Popover background |
| `--primary` | `190 100% 50%` | `#00D5FF` | **Primary bright — cyan.** CTAs, links, focus |
| `--primary-foreground` | `0 0% 29%` | `#4A4A4A` | Text on primary |
| `--secondary` | `211 53% 11%` | `#0E1B2B` | Secondary surface |
| `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on secondary |
| `--muted` | `213 52% 12%` | `#0F1D2E` | Muted surface |
| `--muted-foreground` | `206 29% 59%` | `#7C9BB4` | Secondary / supporting text |
| `--accent` | `168 100% 48%` | `#00F5C4` | **Accent bright — teal/aqua.** Highlights, status |
| `--accent-foreground` | `0 0% 34%` | `#575757` | Text on accent |
| `--destructive` | `0 84% 60%` | `#EF4444` | Errors |
| `--success` | `160 84% 39%` | `#12B77F` | Success / "live" states |
| `--warning` | `38 92% 50%` | `#F5A311` | Warnings / roadmap |
| `--info` | `217 91% 60%` | `#3B82F6` | Info |
| `--border` | `211 45% 19%` | `#1B2F45` | Hairline borders |
| `--input` | `211 45% 19%` | `#1B2F45` | Input borders |
| `--ring` | `190 100% 50%` | `#00D5FF` | Focus ring (cyan) |

**Chart ramp** (cyan tints): `--chart-1..5` = `190 100% 80% / 65% / 50% / 35% / 20%`.

**Usage rule:** the palette is dark by default. Use cyan (primary) and teal (accent) *sparingly* — one accent word per headline, primary CTAs, focus rings, and small status dots. Never flood large areas with the brights.

---

## 3. Typography

**Import (already in the CSS):**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&display=swap');
```

| Token | Stack |
|---|---|
| `--font-sans` (body) | `"Inter", -apple-system, BlinkMacSystemFont, sans-serif` |
| `--font-heading` | `"Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif` |
| `--font-serif` | `ui-serif, Georgia, "Times New Roman", serif` |
| `--font-mono` | `ui-mono, "SF Mono", Monaco, "Cascadia Code", Consolas, monospace` |

**Rules baked into the CSS:**
- `body` uses `--font-sans` (Inter).
- All headings `h1–h6` are forced to `--font-heading` (Space Grotesk) with `!important`.
- Weights available: Space Grotesk 500 & 700; Inter 400 & 500.

**Long-form type scale (from `.page-title` / `.rich-text`):**
- Page title: `clamp(1.875rem, 2vw + 1rem, 2.25rem)`, weight 700, line-height 1.15
- Body copy: 1rem, line-height 1.75, color `--muted-foreground`
- Rich H2: `clamp(1.5rem, 1.5vw + 1rem, 1.875rem)`, weight 700
- Rich H3: `clamp(1.25rem, 1vw + 0.9rem, 1.5rem)`, weight 700
- Rich H4: 1.125rem, weight 600
- Links inside rich text: color `--primary` (cyan), underlined

---

## 4. Spacing, layout, radius, shadow

**Spacing scale** (Tailwind names → effective value):
`xs` 0.5rem · `sm` 1rem · `base` 1.5rem · `lg` 2rem · `xl` 3rem · `xxl` 4rem · `xxxl` 6rem

**Layout:**
- Content max-width: `--width-content` = **72rem** (`max-w-content`)
- Container: centered, padding **2rem**, capped at **1400px** on `2xl`

**Border radius:** `--radius` = **0.5rem (8px)** → `lg` 8px, `md` 6px, `sm` 4px. Button radius = `calc(--radius - 2px)` = 6px.

**Shadows:** subtle, dark. `--shadow-sm` → `--shadow-2xl` defined; elevation on the dark theme comes mostly from `--card` surfaces + hairline borders, not heavy shadows.

---

## 5. Motion (the "orbit" signature)

Keyframes + animations already defined in `tailwind.config.js`:
- `float` — gentle vertical bob (3s)
- `rotate-clockwise` (4s) / `rotate-counter` (3s) — the orbiting rings
- `spin-slow` (3s), `pulse-slow` (2s), `bounce-gentle` (2s)
- `accordion-down` / `accordion-up` (shadcn accordions)

Plugin: `tailwindcss-animate`. Keep these — they create the orbital hero motion. Respect `prefers-reduced-motion` when rebuilding.

---

## 6. Sections / components to build

Rebuild these as reusable components (match the layout of the existing site — use screenshots or the live reference https://1-globe.com):
- **Header / Nav** — logo left, minimal links, primary (cyan) CTA
- **Hero** — eyebrow label, big headline with one italic accent word, orbit animation, dual CTA
- **Portfolio / product cards** — on `--card` surface with hairline borders
- **"Why 1-globe.com"** — feature grid
- **"How it works"** — numbered steps (01–04)
- **Stat / metric band**
- **CTA band** — cyan primary button, glow
- **Footer**

---

## 7. Assets still to add  ([FILL IN])

- `[FILL IN]` **Logo** — download `logo.svg` / `logo.png` from the project's `public/` folder (not in the CSS/config).
- `[FILL IN]` **Favicon** — `public/favicon.ico`.
- `[FILL IN]` **Brand / hero images** — from `public/`.
- `[FILL IN]` **Page copy** — from `content-lib` / `content-plugin` or the `src/` components (or reuse existing marketing copy).

---

## 8. Reuse the real files (recommended)

You already have production-accurate files. Carry them over and strip the Airo-specific bits:

**Keep as-is:** `tailwind.config.js` (remove only the `./dev-tools/src/**` content path), and the global `index.css` (the `:root` tokens + `@layer base/components/utilities`).

**In `index.html`, remove these Airo-only lines when reusing:**
- the `airoShareToken` inline `<script>`
- `<script src="/airo-video-slots.js">` and `<script src="/airo-logo-orientation.js">`
- the `<!--app-head-->` and `<!--app-html-->` SSR placeholders
- the `fs-unmask-airo-app-builder` classes
- `<script src="/analytics.js">` (swap for your own analytics if wanted)
Keep: charset, viewport, favicon link, and the Vite entry `<script type="module" src="/src/main.tsx">`.

**Airo plumbing you can ignore/replace:** `airo-media.json`, `airo-media-folders.json`, `format-overrides-plugin.ts`, `components.json` (shadcn config — keep if you keep shadcn).

---

## 9. Suggested Antigravity prompt

> Build a marketing website for the brand **1-globe.com** from scratch.
> **Stack:** Vite + React + Tailwind CSS + shadcn/ui.
> **Design system:** use the attached `tailwind.config.js` and `index.css` exactly as the source of truth for all colors, fonts, spacing, radius, and animations — do not invent new values. Colors are HSL CSS variables consumed via `hsl(var(--token))`.
> **Look & feel:** dark near-black navy background, cyan (`--primary`) and teal (`--accent`) brights used sparingly, Space Grotesk headings, Inter body. Match the live reference https://1-globe.com and the screenshots in `/reference`.
> **Build reusable components:** Header, Hero (with orbit `float`/`rotate` animation), feature grid, numbered "how it works" steps, stat band, CTA band, Footer.
> **Brand:** use the logo from `/public` and the fonts/colors from the config.
> **Content:** pull copy from `/content`.
> When done, open the built-in browser, compare against the reference, and fix any spacing or type mismatches. Respect `prefers-reduced-motion`.
