import React from 'react'
import Image from 'next/image'
import { Section } from '@/components/shared/Section'

// What 1-OPTIMISER does, one card per job, each with a small static before/after.
// Static on purpose: calmer to read, and it works the same with reduced motion.

function Card({
  title,
  body,
  children,
  className = '',
}: {
  title: string
  body: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`bg-card border border-border rounded-2xl p-6 sm:p-7 flex flex-col gap-6 ${className}`}>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
        <p className="text-[15px] leading-relaxed text-neutral-400">{body}</p>
      </div>
      <div className="mt-auto">{children}</div>
    </div>
  )
}

const scopes = [
  { label: 'One image', active: false },
  { label: 'A product', active: false },
  { label: 'A collection', active: true },
  { label: 'Whole catalog', active: false },
]

export const JobsDoneSection: React.FC = () => {
  return (
    <Section className="section-spacing bg-secondary/20 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 md:mb-14 flex flex-col gap-4 max-w-2xl">
          <h2 className="text-section-title">Optimization workflows.</h2>
          <p className="text-lead">
            1-OPTIMISER provides tools to compress, edit, and standardize images across your catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {/* 1. Compress & convert */}
          <Card
            className="lg:col-span-3"
            title="Compress and convert"
            body="Heavy JPEGs become lightweight WebP files, resized to the dimensions your theme actually uses."
          >
            <div className="flex flex-col gap-4" role="img" aria-label="Example: a 4.2 MB JPG becomes an 84 KB WebP.">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Before · JPG</span>
                  <span className="font-heading font-bold text-foreground">4.2 MB</span>
                </div>
                <div className="h-3 rounded-full bg-destructive/80" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">After · WebP</span>
                  <span className="font-heading font-bold text-primary">84 KB</span>
                </div>
                <div className="h-3 rounded-full bg-secondary">
                  <div className="h-3 rounded-full bg-primary" style={{ width: '4%', minWidth: '0.75rem' }} />
                </div>
              </div>
            </div>
          </Card>

          {/* 2. AI names & describes */}
          <Card
            className="lg:col-span-3"
            title="AI names and describes"
            body="Descriptive file names and alt text are suggested for every image, ready for you to review."
          >
            <dl className="m-0 grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 gap-y-3 text-sm">
              <dt className="pt-2 text-neutral-500 font-semibold">File</dt>
              <dd className="m-0 flex flex-col gap-1.5">
                <span className="font-mono text-neutral-500 line-through decoration-destructive/70">IMG_4837.jpg</span>
                <span className="font-mono text-primary break-all">wooden-wall-clock-12-inch.webp</span>
              </dd>
              <dt className="pt-2 text-neutral-500 font-semibold">Alt</dt>
              <dd className="m-0 flex flex-col gap-1.5">
                <span className="text-destructive">Missing</span>
                <span className="text-foreground">&ldquo;Handcrafted 12-inch wooden wall clock, minimalist wall decor&rdquo;</span>
              </dd>
            </dl>
          </Card>

          {/* 3. Smart crop */}
          <Card
            className="lg:col-span-2"
            title="Smart crop"
            body="Images are cropped to your store's aspect ratio, keeping the product in frame."
          >
            <div className="relative h-36 rounded-xl overflow-hidden bg-neutral-950 border border-border">
              <Image src="/demo-product.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 360px" className="object-cover opacity-35" />
              <div className="absolute inset-y-3 left-1/2 -translate-x-1/2 aspect-square rounded-lg overflow-hidden border-2 border-primary">
                <Image src="/demo-product.jpg" alt="" fill sizes="140px" className="object-cover" />
              </div>
              <span className="absolute bottom-2 right-2 rounded-md bg-neutral-950/80 px-2 py-0.5 text-xs font-semibold text-primary">1:1</span>
            </div>
          </Card>

          {/* 4. Background cleanup */}
          <Card
            className="lg:col-span-2"
            title="Background cleanup"
            body="Busy or uneven backgrounds are cleaned up so product shots look consistent."
          >
            <div className="grid grid-cols-2 gap-3">
              <figure className="m-0 flex flex-col gap-2">
                <div className="relative h-28 rounded-xl overflow-hidden border border-border">
                  <Image src="/demo-product.jpg" alt="" fill sizes="180px" className="object-cover [filter:brightness(0.6)_sepia(0.5)_contrast(0.85)]" />
                </div>
                <figcaption className="text-xs text-neutral-500">Before</figcaption>
              </figure>
              <figure className="m-0 flex flex-col gap-2">
                <div className="relative h-28 rounded-xl overflow-hidden border border-primary/40">
                  <Image src="/demo-product.jpg" alt="" fill sizes="180px" className="object-cover" />
                </div>
                <figcaption className="text-xs text-primary">After</figcaption>
              </figure>
            </div>
          </Card>

          {/* 5. Scope control */}
          <Card
            className="md:col-span-2 lg:col-span-2"
            title="Scope control"
            body="Work on a single image or thousands at once. You choose what gets processed."
          >
            <ul className="m-0 p-0 list-none grid grid-cols-2 gap-2.5">
              {scopes.map((s) => (
                <li
                  key={s.label}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium border ${
                    s.active ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-secondary/40 text-neutral-400'
                  }`}
                >
                  {s.label}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  )
}
