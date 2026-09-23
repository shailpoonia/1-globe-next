# 1-globe.com — Style Guide (synced to current code)

Two parts: **Design system** (the real tokens + the patterns the live components use) and **Voice** (how the copy should read). Use this as the single reference when building or editing any section so new work matches what's already there.

---

# PART 1 — DESIGN SYSTEM (as built)

## Colors (HSL tokens in index.css, consumed via `hsl(var(--token))`)
| Token | HSL | ~Hex | Use |
|---|---|---|---|
| `--background` | 220 43% 5% | #070B12 | Page background (near-black navy) |
| `--foreground` | 0 0% 96% | #F5F5F5 | Primary text; also white pill buttons |
| `--card` | 211 53% 11% | #0E1B2B | Card / elevated surfaces |
| `--secondary` | 211 53% 11% | #0E1B2B | Alt section backgrounds (often at /20–/30 opacity) |
| `--muted-foreground` | 206 29% 59% | #7C9BB4 | Secondary/supporting text, eyebrows |
| `--primary` | 190 100% 50% | #00D5FF | **Cyan** — accent word, links, focus rings, "Live" |
| `--accent` | 168 100% 48% | #00F5C4 | **Teal** — small status/glow accents only |
| `--border` | 211 45% 19% | #1B2F45 | Hairline borders, dividers |
| `--success/--warning/--destructive` | — | — | status states |

**Rule:** dark by default. Use cyan (primary) and teal (accent) **sparingly** — one accent per section.

## Typography
- **Fonts:** headings `Space Grotesk` (`--font-heading`), body `Inter` (`--font-sans`). Loaded weights: Space Grotesk 500/700, Inter 400/500. All `h1–h6` forced to `--font-heading` via `!important`.
- **Hero headline:** `font-heading font-bold uppercase tracking-tighter leading-[1.05]`, size `text-5xl sm:text-6xl md:text-8xl`.
- **Section title:** `font-heading font-bold tracking-tight leading-[1.1]`, size `text-3xl sm:text-4xl md:text-5xl`.
- **Eyebrow / label:** `text-sm font-semibold uppercase tracking-widest text-muted-foreground`.
- **Body / lead:** `text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed`.
- **Big stat number:** `text-5xl font-heading font-bold text-foreground`.

## Layout & spacing
- **Section vertical rhythm:** `py-24 md:py-32`, usually with `border-b border-border`.
- **Content width:** `max-w-content` (`--width-content` = 72rem).
- **Container padding:** `px-6 sm:px-8 lg:px-12`.
- **Hero:** `min-h-[85vh] max-h-[1000px]`, content bottom-aligned.

## Buttons
- **Primary (white pill):** `h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] bg-foreground text-background`, hover `bg-foreground/90`.
- **Secondary (ghost):** same sizing, `border border-border bg-transparent text-foreground`, hover `bg-white/5`.
- Focus: `focus-visible:ring-2 focus-visible:ring-primary`.

## Cards
- Surface `bg-card` (or `bg-secondary/20–30`), `border border-border`, consistent radius and padding. One shared card style everywhere — equal sizes within a row (`items-stretch` / `h-full`). "Coming soon" cards: `opacity-50 grayscale-[50%] cursor-not-allowed pointer-events-none`.

## Motion
- Signature animations: `float`, `rotate-clockwise`, `rotate-counter` (orbit), `spin-slow`, `pulse-slow` (via `tailwindcss-animate`), plus the custom AI-vision / infographic animations.
- **Always** respect `@media (prefers-reduced-motion: reduce)` — disable continuous motion, show a static state.

## Hero video overlay (current, brightened)
- Video `opacity-100`; overlays `bg-background/10` + `bg-gradient-to-t from-background/60 via-background/10 to-transparent`. Keep the bottom darker (where headline/buttons sit) so text stays readable.

---

# PART 2 — VOICE (how the copy should read)

Inspired by clear modern SaaS communication — principles only, never copied wording. Talk to a busy Shopify store owner, not a developer.

1. **Benefit-chain, plain language.** Lead with the outcome; explain the mechanism in simple words. No jargon (WebP, LCP, CLS, alt attribute, schema, "assets", "entities", "semantic structure") without a plain explanation right beside it.
2. **Second person.** "Your store," "you." Short sentences, direct.
3. **Name the pain honestly first.** Show you understand the frustration before the pitch.
4. **Prove it with real specifics.** 18.4 MB → 212 KB, up to 90% lighter. Mark unverified figures `[FILL IN]`; never fake stats or testimonials.
5. **Position against the painful alternative** (manual work, bloated apps) — a simple comparison.
6. **Keep "how it works" to 3–4 dead-simple steps.**
7. **Handle objections in the FAQ.**
8. **Low-risk close:** "Free to start," "runs inside Shopify," "cancel anytime."
9. **Stay outcome-focused** — every feature ties back to speed, discoverability, trust, or sales.
10. **Keep claims defensible.** Engines "can understand/recommend" and you "climb in search" / "get found" — never "guaranteed #1." Backlinks are "earned over time," never "generated." Blog→revenue is a compounding channel, not instant.

## Brand naming
- Hub/company brand: **1-globe.com** everywhere (never "1-GLOBE" caps as a name, though nav labels may be uppercased via CSS). Legal entity **ONE GLOBE (F.Z.E)** only in footer fine print / legal pages.
- Apps: **1-Optimiser** (paired with descriptor "Shopify Image Optimizer" on first mention), **1-Blog**, **1-Listings**. Keep "image optimizer" (American spelling) in titles/meta for SEO.

## ⚠️ Current drift to correct (live site)
These sections drifted into jargon — fix toward plain language:
- "Heavy Assets / Invisible Content / Inefficient Workflows" → "Your images are too heavy / Google can't read your photos / Fixing it usually breaks your links."
- "Targeted technology that resolves the root causes of poor store performance without adding superficial bloat" → plainer, benefit-led.
- 1-Blog "authoritative entities / semantic structure" → "real posts that pull in shoppers and earn backlinks over time."
- Hero "Make ecommerce perform / Built for the layers that matter" → consider a plainer, benefit-led headline.

## Do NOT
Copy any other site's wording, layout, testimonials, or claims. Match approaches; write your own words.
