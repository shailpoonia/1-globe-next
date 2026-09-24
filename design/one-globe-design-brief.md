# 1-GLOBE — Design Brief & Architecture

**Purpose:** This document is the single source of truth for the 1-GLOBE website design system, brand positioning, and technical architecture. It accurately reflects the current state of the repository.

---

## 1. Brand Positioning

- **Brand:** 1-GLOBE
- **Domain:** 1-globe.com
- **Core Positioning:** Ecommerce performance.
- **Primary Brand Promise:** MAKE ECOMMERCE PERFORM.
- **Supporting Message:** Technology that makes online stores faster, smarter and easier to grow.
- **Brand Philosophy:**
  - BUSINESS FIRST.
  - TECHNOLOGY SECOND.
  - PERFORMANCE ALWAYS.

---

## 2. Product Ecosystem

1-GLOBE builds focused technology for ecommerce businesses. The current ecosystem includes:

- **01 — 1-OPTIMISER**
  - Category: Image Performance
  - Status: **AVAILABLE**
  - Description: Compress image payloads, generate descriptive SEO filenames, and write contextual alt text automatically.
- **02 — 1-BLOG**
  - Category: Content Performance
  - Status: **LAUNCHING SOON**
  - Description: Content performance for the modern store.
- **03 — 1-LIST**
  - Category: Product Listing Performance
  - Status: **LAUNCHING SOON**
  - Description: Build product listings structured for search, answer engines and generative discovery.

*Important Note:* Unavailable products (1-BLOG, 1-LIST) do not have live product pages and should never be presented as installable.

---

## 3. Visual Character & Design Principles

The 1-GLOBE visual system is **premium editorial technology**.

- **Palette:** Black / Near-Black, Pure White, Neutral Greys, and the existing 1-GLOBE Blue (`--primary`) used purely as an accent.
- **Typography:** Strong, confident editorial typography that does most of the visual work.
- **Whitespace:** Generous and deliberate.
- **Borders:** Clean, precise, subtle.
- **Motion & Effects:** Restrained. 
- **Voice:** Factual, technical, confident, business-focused. Avoid exaggerated SaaS marketing claims (e.g., "guaranteed ROI"). Avoid generic SaaS elements (e.g., glassmorphism, heavy neon glow).

*What to Avoid:* The legacy "space / orbit / gravity" metaphor and excessive cyan/teal gradients have been retired. The brand is grounded in ecommerce infrastructure.

---

## 4. Current Technology Architecture

- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS (`tailwind.config.ts`, `globals.css`)
- **Components:** Shared reusable components in `src/components/`, building on Radix UI where appropriate.
- **SEO/Schema:** Foundational SEO and JSON-LD structured data architecture is established in the metadata and schema components.

---

## 5. Homepage Structure

The homepage follows a strict narrative sequence designed to walk a merchant from the overarching problem to a specific, measurable solution.

1. **Hero** (`EditorialHero.tsx`): Establishes "MAKE ECOMMERCE PERFORM."
2. **Brand Statement** (`BrandStatement.tsx`): Outlines the problem ("MARKETING CREATES DEMAND. THE STORE HAS TO PERFORM.")
3. **Product Ecosystem** (`ProductEcosystem.tsx`): Introduces the 3-part product family.
4. **Infographic Showcase** (`InfographicShowcase.tsx`): Visualizes the impact of the technology on the storefront payload.
5. **1-OPTIMISER Product Story** (`ProductDetailHome.tsx`): "START WITH THE PRODUCT IMAGE."
6. **Performance Proof** (`PerformanceProof.tsx`): Factual, measurable examples of image payload and metadata optimization.
7. **Brand Philosophy** (`BrandPhilosophy.tsx`): The three core principles.
8. **Merchant Story** (`MerchantStory.tsx`): "BUILT FROM THE MERCHANT'S SIDE."
9. **FAQ** (`FaqSection.tsx`): Genuine questions answered directly.
10. **Final CTA** (`CtaBand.tsx`): Clear frictionless conversion path to explore 1-OPTIMISER.

---

## 6. Typography System

**Font Stack:**
- **Headings** (`--font-heading`): Space Grotesk
- **Body** (`--font-sans`): Inter
- **Monospace** (`--font-mono`): ui-monospace, SF Mono, etc.

**Hierarchy Rules:**
- `body` uses Inter.
- All headings use Space Grotesk.
- Section titles (`.text-section-title`) and massive typographic moments (`.text-hero`) are heavily tracked and bold.
- Supporting elements often use uppercase tracking (`.text-eyebrow`, `.text-sub-eyebrow`).

---

## 7. Color System

Colors are defined in HSL format in `src/app/globals.css` and consumed via Tailwind CSS variables. 

- **Background:** `--background: 0 0% 2%` (Almost pure black)
- **Foreground:** `--foreground: 0 0% 100%` (Pure white)
- **Surfaces:** `--card: 0 0% 5%`, `--secondary: 0 0% 12%`, `--muted: 0 0% 10%`
- **Text:** `--muted-foreground: 0 0% 65%`
- **Borders:** `--border: 0 0% 15%`
- **1-GLOBE Blue (Accent):** `--primary: 190 100% 50%` (`#00D5FF`).
  - *Usage:* Used sparingly for interactive elements, focus rings, specific visual indicators, and to highlight a single critical word in major headlines. It does not flood the screen.

**Functional Colors:**
- `--destructive: 0 84% 60%` (Errors)
- `--success: 160 84% 39%` (Success / Live)
- `--warning: 38 92% 50%` (Warnings)
- `--info: 190 100% 50%` (Info)

---

## 8. Layout & Spacing

- **Container:** Centered with max-width of `1400px`.
- **Content Width:** `--width-content` (`72rem` / `1152px`), ensuring optimal reading length and structural balance.
- **Spacing System:** Extends standard Tailwind spacing with custom token-based spacing (`xs` to `xxxl`).
- **Section Spacing:** The `.section-spacing` utility class provides generous vertical padding (`py-24 md:py-32`) to give sections breathing room.
- **Border Radius:** `--radius: 0.5rem`. Crisp and architectural.

---

## 9. Motion

- Motion is restrained and functional.
- Animations include subtle accordion transitions and fade-ins.
- Legacy sweeping, orbiting, or continuous looping CSS animations have been removed to prioritize performance and an editorial aesthetic.
- The site rigorously respects `prefers-reduced-motion` for accessibility.
