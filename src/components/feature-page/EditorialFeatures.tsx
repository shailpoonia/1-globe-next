import React from 'react'
import Image from 'next/image'
import { Crop, Scaling, Pencil, Layers, WandSparkles, Sparkles, Check } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

/* Light-theme illustration panel. `reading-light` swaps the colour tokens to the light palette. */
function Panel({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className="reading-light m-0 rounded-2xl border border-border p-5 sm:p-8 flex flex-col gap-4">
      <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm flex flex-col gap-5">{children}</div>
      <figcaption className="text-xs text-muted-foreground">{label}</figcaption>
    </figure>
  )
}

function Toggle({ label, on = true }: { label: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b border-border last:border-0">
      <span className="text-sm text-foreground">{label}</span>
      <span
        aria-hidden="true"
        className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${on ? 'bg-primary' : 'bg-neutral-700'}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-[#fff] shadow transition-all ${on ? 'left-[1.375rem]' : 'left-0.5'}`} />
      </span>
      <span className="sr-only">{on ? 'On' : 'Off'}</span>
    </div>
  )
}

function Chip({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${
        active ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-secondary text-muted-foreground'
      }`}
    >
      {children}
    </span>
  )
}

const thumb = (
  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-border">
    <Image src="/Wall-Clock-Artistic-Wooden-12-Inch.webp" alt="" fill sizes="64px" className="object-cover" />
  </div>
)

/* ---------- One illustration per feature ---------- */

const OptimizationVisual = (
  <Panel label="Illustrative settings and result">
    <div className="flex items-center gap-4">
      {thumb}
      <div className="flex flex-col gap-1 min-w-0">
        <span className="font-mono text-sm text-foreground truncate">wooden-wall-clock-12-inch</span>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground line-through">4.2 MB JPG</span>
          <span className="text-muted-foreground">→</span>
          <span className="font-semibold text-primary">84 KB WebP</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground">Quality</span>
          <span className="font-semibold text-foreground">80%</span>
        </div>
        <div className="relative h-2 rounded-full bg-secondary">
          <div className="absolute inset-y-0 left-0 w-[80%] rounded-full bg-primary" />
          <span className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#fff] border-2 border-primary" />
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-foreground">Max width</span>
        <span className="font-mono text-foreground">2048 px</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground">Format</span>
        <div className="flex gap-2">
          <Chip>Keep original</Chip>
          <Chip active>WebP</Chip>
        </div>
      </div>
    </div>
  </Panel>
)

const MetadataVisual = (
  <Panel label="Illustrative review screen">
    <div className="flex items-center gap-4">
      {thumb}
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> AI suggestions ready for review
      </span>
    </div>
    <dl className="m-0 flex flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <dt className="text-xs font-semibold text-muted-foreground">Alt text</dt>
        <dd className="m-0 rounded-lg border border-border bg-secondary px-3 py-2 text-foreground">
          Handcrafted 12-inch wooden wall clock, minimalist wall decor
        </dd>
      </div>
      <div className="flex flex-col gap-1.5">
        <dt className="text-xs font-semibold text-muted-foreground">File name</dt>
        <dd className="m-0 rounded-lg border border-border bg-secondary px-3 py-2 font-mono text-foreground break-all">
          wooden-wall-clock-12-inch.webp
        </dd>
      </div>
      <div className="flex flex-col gap-1.5">
        <dt className="text-xs font-semibold text-muted-foreground">Keyword suggestions</dt>
        <dd className="m-0 flex flex-wrap gap-2">
          <Chip>wall clock</Chip>
          <Chip>wooden</Chip>
          <Chip>12-inch</Chip>
          <Chip>minimalist decor</Chip>
        </dd>
      </div>
    </dl>
    <div className="flex justify-end gap-2">
      <span className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground">Edit</span>
      <span className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Approve</span>
    </div>
  </Panel>
)

const editTools = [
  { icon: WandSparkles, label: 'Enhance' },
  { icon: Crop, label: 'Crop' },
  { icon: Scaling, label: 'Resize' },
  { icon: Pencil, label: 'Draw' },
  { icon: Layers, label: 'Background' },
  { icon: Sparkles, label: 'Generate' },
]

const EditingVisual = (
  <Panel label="Illustrative editor">
    <ul className="m-0 p-0 list-none grid grid-cols-3 sm:grid-cols-6 gap-2">
      {editTools.map(({ icon: Icon, label }, i) => (
        <li
          key={label}
          className={`flex flex-col items-center gap-1.5 rounded-lg border px-2 py-2.5 text-xs ${
            i === 1 ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground'
          }`}
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
    <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden bg-secondary">
      <Image src="/demo-product.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover opacity-40" />
      <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 aspect-square rounded-md overflow-hidden border-2 border-primary">
        <Image src="/demo-product.jpg" alt="" fill sizes="220px" className="object-cover" />
      </div>
      <span className="absolute bottom-3 right-3 rounded-md bg-card px-2 py-1 text-xs font-semibold text-primary">1:1 square</span>
    </div>
  </Panel>
)

const PerformanceVisual = (
  <Panel label="Illustrative theme extension settings">
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-foreground">1-OPTIMISER theme extension</span>
      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
        <Check className="w-3.5 h-3.5" aria-hidden="true" /> Active
      </span>
    </div>
    <div className="flex flex-col">
      <Toggle label="Lazy-load images below the fold" />
      <Toggle label="Responsive image sizes" />
      <Toggle label="Preload the main product image" />
      <Toggle label="Defer offscreen galleries" on={false} />
    </div>
  </Panel>
)

const ControlVisual = (
  <Panel label="Illustrative scope and confirmation">
    <div className="flex flex-col gap-2.5">
      <span className="text-xs font-semibold text-muted-foreground">Apply to</span>
      <div className="flex flex-wrap gap-2">
        <Chip>One image</Chip>
        <Chip>A product</Chip>
        <Chip active>A collection</Chip>
        <Chip>Whole catalog</Chip>
      </div>
    </div>
    <div className="rounded-lg border border-border bg-secondary p-4 flex flex-col gap-3">
      <span className="text-sm font-semibold text-foreground">Save changes to Shopify?</span>
      <span className="text-sm text-muted-foreground">
        Images in the collection &ldquo;Wall clocks&rdquo; will be updated. You can review each one first.
      </span>
      <div className="flex justify-end gap-2">
        <span className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">Review first</span>
        <span className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Confirm and save</span>
      </div>
    </div>
  </Panel>
)

const ReviewVisual = (
  <Panel label="Illustrative history">
    <span className="text-sm font-semibold text-foreground">Optimization history</span>
    <ul className="m-0 p-0 list-none flex flex-col">
      {[
        { scope: 'Collection · Wall clocks', what: 'Compressed, WebP, alt text' },
        { scope: 'Product · Oak mantel clock', what: 'Alt text, file names' },
        { scope: 'Single image · Hero banner', what: 'Resized, compressed' },
      ].map((row) => (
        <li key={row.scope} className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-sm font-medium text-foreground truncate">{row.scope}</span>
            <span className="text-xs text-muted-foreground">{row.what}</span>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-primary"><Check className="w-4 h-4" aria-hidden="true" /> Saved</span>
        </li>
      ))}
    </ul>
  </Panel>
)

const features = [
  {
    title: 'Image optimization',
    body: 'Compress images, resize them and optionally convert them to WebP to reduce image payload size while giving merchants control over optimization settings.',
    visual: OptimizationVisual,
  },
  {
    title: 'AI image metadata',
    body: 'AI-assisted tools to generate image-specific alt text, descriptive filenames, and keyword suggestions for merchant review to support contextual metadata.',
    visual: MetadataVisual,
  },
  {
    title: 'Image editing',
    body: 'Enhance, crop, resize, draw, change backgrounds, and generate images natively within the app.',
    visual: EditingVisual,
  },
  {
    title: 'Storefront performance',
    body: 'Includes a Shopify theme extension with configurable performance features to support lazy loading, responsive images, image preloading, and related storefront optimizations.',
    visual: PerformanceVisual,
  },
  {
    title: 'Store control',
    body: 'Merchants can process images individually or across supported product, collection, and catalog scopes, explicitly confirming changes before saving them to Shopify.',
    visual: ControlVisual,
  },
  {
    title: 'Measure and review',
    body: 'Provides storefront performance checks and visibility into selected image and theme-extension performance signals, alongside optimization history.',
    visual: ReviewVisual,
  },
]

export const EditorialFeatures: React.FC = () => {
  return (
    <Section id="features" className="section-spacing bg-background border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Capabilities"
          headline="Built for the entire catalog."
          subhead="Six layers of optimization and control for your storefront infrastructure."
          align="center"
        />

        <div className="mt-16 md:mt-20 flex flex-col gap-20 lg:gap-24">
          {features.map((f, i) => {
            const visualFirst = i % 2 === 0
            return (
              <div key={f.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={visualFirst ? 'lg:order-1' : 'lg:order-2'}>{f.visual}</div>
                <div className={`max-w-xl flex flex-col gap-5 ${visualFirst ? 'lg:order-2 lg:pl-4' : 'lg:order-1'}`}>
                  <span className="font-heading text-sm font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-section-title">{f.title}</h3>
                  <p className="text-lead">{f.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
