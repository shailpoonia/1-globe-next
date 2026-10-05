# 1-GLOBE style guide

The reference for building or editing any page of 1-globe.com. It describes the code as it is.
Every brand value below is defined once in code; this guide says where, so nothing gets
copied or hard-coded.

---

## 1. Where each brand value lives

| What | Defined once in | Use it with |
|---|---|---|
| Brand cyan `#00B1FF` | `--brand` in `src/app/globals.css` | `text-brand`, `bg-brand`, `border-brand`, `fill-brand` (or `text-primary`, which follows `--brand`) |
| Darker brand cyan `#0A6E99` (small text on light sections) | `--brand-ink` in `globals.css` | Automatic: `primary` switches to it inside `.reading-light` |
| All other colours (background, card, text, borders, success, warning) | `:root` and `.reading-light` in `globals.css` | Tailwind colour names (`bg-card`, `text-muted-foreground`, `text-success` ...) |
| Font stacks | `fontFamily` in `tailwind.config.ts` | `font-sans`, `font-heading`, `.font-brand` |
| Inter and Space Grotesk files | `next/font` in `src/app/layout.tsx` | Loaded once for the whole site |
| The logo's "1" and the logo lettering | `@font-face '1-GLOBE One'` and `'1-GLOBE Brand'` in `globals.css` | Headings get the "1" automatically; app names use `<AppName>` |
| Logo, app marks, in-text wordmark | `src/components/shared/BrandLogo.tsx` (the only copy of the logo shapes) | `<BrandLockup>`, `<BrandWordmark>`, `<AppMark>`, `<AppLockup>` |
| App names, order, badges, descriptions | `src/lib/entities.ts` (`ENTITY_PRODUCTS`, `PRODUCT_LIST`) | Homepage cards, footer and app pages read from here |

Rules:
- Never write a colour as a hex code in a component. Use a token. To change the brand cyan, edit `--brand` and nothing else.
- Image files cannot read CSS: `src/app/icon.svg`, `favicon.ico`, `apple-icon.png`, `public/1-globe-logo.png` and `public/1-globe-share-image.jpg` carry the cyan baked in. Re-export them when the brand colour changes.
- To add an app: add it to `ENTITY_PRODUCTS` in `entities.ts`, its name to `BRAND_NAMES` and its mark to `MARK_SHAPES` in `BrandLogo.tsx`. Any new letters in its name must exist in the `'1-GLOBE Brand'` font.

## 2. Colour

- Dark by default: background `#0B0F14`, cards `#151C26`, text `#E6EAF0`, secondary text `#B4BCC8`.
- Light sections: add the class `reading-light` to the section. It swaps the tokens to a light palette (background `#ECEFF3`, white cards, dark text). Used for the resource guides and the homepage app cards.
- Brand cyan is an accent: one keyword per headline, the "1-" in app names, links, focus rings, the highlighted card.
- Chart before/after bars: Tailwind `bg-red-500` (before) and `bg-green-500` (after).

## 3. Typography

| Class | Use |
|---|---|
| `.text-page-title` | The H1 of each inner page (ALL CAPS) |
| `.text-hero` | Legal page titles (sentence case) |
| `.text-section-title` | Section headlines (ALL CAPS) |
| `.text-subsection-title` | Titles inside a section |
| `.text-card-title` | Titles inside cards and panels |
| `.text-eyebrow` | Small uppercase label above a headline |
| `.text-lead` | Intro paragraph under a headline |

- Headings: Space Grotesk 500/700, with the logo's "1". Body: Inter 400/500.
- Headline rule on every page except guides and legal pages: ALL CAPS, one keyword in brand cyan (`<span className="text-primary">`), no full stops.
- App names (1-GLOBE, 1-OPTIMIZER, 1-LISTING, 1-BLOG, 1-SOCIAL) are written in the logo lettering with a cyan "1-" in titles, buttons and labels: `<AppName name="1-OPTIMIZER" />`, or `<BrandText>` for a string that contains names. In running text (FAQ questions, paragraphs) use `<BrandText plain>` to keep the normal font and colour only the "1-".

## 4. Layout and components

- Content width `max-w-content` (72rem), side padding `px-6 sm:px-8 lg:px-12`, section rhythm `.section-spacing` (`py-24 md:py-32`).
- Primary button: white fill (`bg-foreground text-background`).
- Secondary button: `.btn-secondary` (light grey fill and border, so it reads as a button on black).
- Hover and press effects: `.interactive-btn`, `.interactive-card`, `.interactive-link`. All respect reduced motion.
- Animations: `tailwindcss-animate` (`animate-in fade-in slide-in-from-top-4 ...`). Always respect `prefers-reduced-motion`.

---

## 5. Voice

Talk to a busy Shopify store owner, not a developer.

1. Lead with the outcome; explain the mechanism in plain words. No jargon (WebP, LCP, alt attribute, schema) without a plain explanation beside it.
2. Second person: "your store", "you". Short, direct sentences.
3. Name the pain honestly before the pitch.
4. Prove it with real specifics (for example 13.8 MB to 1.0 MB on the 1-globe.com hero video). Leave out any figure that is not verified; never fake stats or testimonials, and never let a placeholder render.
5. Keep "how it works" to 3 or 4 simple steps, and handle objections in the FAQ.
6. Keep claims defensible: "helps you get found", never "guaranteed #1". Only describe features that ship.
7. Write your own words; never copy another site's wording, layout or claims.

## 6. Naming

- Company and hub brand: 1-GLOBE (domain 1-globe.com). Legal entity ONE GLOBE (F.Z.E) only in the footer and legal pages.
- Apps, in launch order: 01 1-OPTIMIZER (image performance), 02 1-LISTING (product listing performance), 03 1-BLOG (content performance), 04 1-SOCIAL (social media).
- Spelling is American ("optimize", "optimizer"). The old `/apps/1-optimiser` address redirects to `/apps/1-optimizer`.
- Positioning: THE PERFORMANCE LAYER FOR ECOMMERCE. Philosophy: business first, technology second, performance always.
