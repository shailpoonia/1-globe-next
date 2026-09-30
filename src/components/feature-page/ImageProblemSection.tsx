import React from 'react'
import Image from 'next/image'
import { FileX, VolumeX, Timer, ArrowRight, ArrowDown } from 'lucide-react'

const problems = [
  {
    icon: FileX,
    title: 'Meaningless file names',
    body: (
      <>
        <code className="font-mono text-foreground">IMG_4837.jpg</code> tells Google Images and AI search nothing about the product in the photo.
      </>
    ),
  },
  {
    icon: VolumeX,
    title: 'Missing alt text',
    body: 'Shoppers using screen readers hear nothing useful, and search engines lose the context that describes your product.',
  },
  {
    icon: Timer,
    title: 'Oversized files',
    body: 'Heavy images make product pages slower to load, especially on mobile connections.',
  },
]

const before = [
  { label: 'File name', value: 'IMG_4837.jpg', mono: true },
  { label: 'Alt text', value: 'none', tone: 'bad' },
  { label: 'Screen reader', value: '"Image" or the file name read aloud' },
  { label: 'Search context', value: 'None from the image itself' },
  { label: 'File size', value: '18.4 MB', strong: true },
]

const after = [
  { label: 'File name', value: 'wooden-wall-clock-12-inch.webp', mono: true },
  { label: 'Alt text', value: '"Handcrafted 12-inch wooden wall clock, minimalist wall decor"' },
  { label: 'Screen reader', value: 'Reads the description above' },
  { label: 'Search context', value: 'Product type, size, material and style' },
  { label: 'File size', value: '212 KB', strong: true, tone: 'good' },
]

const steps = [
  { n: '01', title: 'Scan', body: 'Pick an image, a product, a collection or your whole catalog.' },
  { n: '02', title: 'Describe', body: 'AI suggests descriptive file names and alt text for each image.' },
  { n: '03', title: 'You review', body: 'Check and edit every suggestion. Nothing is saved until you approve it.', highlight: true },
  { n: '04', title: 'Optimize and save', body: 'Compress, resize and convert to WebP, then save back to Shopify.' },
]

type Row = { label: string; value: string; mono?: boolean; strong?: boolean; tone?: string }

function Facts({ rows }: { rows: Row[] }) {
  return (
    <dl className="m-0 grid grid-cols-[8.5rem_minmax(0,1fr)] gap-y-3 text-sm sm:text-[15px] leading-relaxed">
      {rows.map((r) => (
        <React.Fragment key={r.label}>
          <dt className="text-neutral-500">{r.label}</dt>
          <dd
            className={[
              'm-0 break-words',
              r.mono ? 'font-mono' : '',
              r.strong ? 'font-heading font-bold text-lg' : '',
              r.tone === 'bad' ? 'text-destructive' : r.tone === 'good' ? 'text-primary' : 'text-foreground',
            ].join(' ')}
          >
            {r.value}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

export const ImageProblemSection: React.FC = () => {
  return (
    <section id="why-images" className="bg-background py-20 md:py-28 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12 md:gap-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-16">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-destructive">The hidden cost of messy images</span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight leading-[1.1] text-foreground">
              Your photos look great. To search engines, they say almost nothing.
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-neutral-400 md:max-w-sm">
            Shoppers see the product. Google, AI search and screen readers only see the file name, the alt text and the file size.
          </p>
        </div>

        <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map(({ icon: Icon, title, body }) => (
            <li key={title} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-3">
              <Icon className="w-7 h-7 text-destructive" aria-hidden="true" />
              <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
              <p className="text-[15px] sm:text-base leading-relaxed text-neutral-400">{body}</p>
            </li>
          ))}
        </ul>

        <figure className="m-0 bg-neutral-950 border border-border rounded-2xl p-6 sm:p-10 flex flex-col gap-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-heading text-xl sm:text-2xl font-bold text-foreground">What machines see, before and after 1-OPTIMIZER</span>
            <span className="text-sm text-neutral-500">Illustrative example</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] items-stretch gap-4 lg:gap-0">
            <div className="bg-card border border-destructive/30 rounded-xl p-6 flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <Image src="/Wall-Clock-Artistic-Wooden-12-Inch.webp" alt="" fill sizes="80px" className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-destructive">Before</span>
                  <span className="text-[15px] text-neutral-400">Same photo the shopper sees</span>
                </div>
              </div>
              <Facts rows={before} />
            </div>
            <div className="flex items-center justify-center" aria-hidden="true">
              <ArrowRight className="hidden lg:block w-7 h-7 text-primary" />
              <ArrowDown className="lg:hidden w-7 h-7 text-primary" />
            </div>
            <div className="bg-card border border-primary/30 rounded-xl p-6 flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <Image src="/Wall-Clock-Artistic-Wooden-12-Inch.webp" alt="Handcrafted 12-inch wooden wall clock on a white wall" fill sizes="80px" className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">After</span>
                  <span className="text-[15px] text-neutral-400">Same photo, now described</span>
                </div>
              </div>
              <Facts rows={after} />
            </div>
          </div>
        </figure>

        <div className="flex flex-col gap-6">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">How 1-OPTIMIZER gets you there</h3>
          <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className={`rounded-2xl p-6 flex flex-col gap-2.5 border ${s.highlight ? 'bg-secondary border-destructive' : 'bg-card border-border'}`}
              >
                <span className={`font-heading text-sm font-bold ${s.highlight ? 'text-destructive' : 'text-primary'}`}>
                  {s.n} · {s.title}
                </span>
                <p className="text-[15px] leading-relaxed text-neutral-400">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
