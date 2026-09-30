import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { ENTITY_PRODUCTS } from '@/lib/entities'
import { AppMark, AppName, BrandText } from '@/components/shared/BrandLogo'

const products = [
  { ...ENTITY_PRODUCTS['1-optimizer'], layer: 'Images', mark: 'optimizer' as const, status: 'Coming soon to Shopify', highlight: true },
  { ...ENTITY_PRODUCTS['1-blog'], layer: 'Content', mark: 'blog' as const, status: 'Launching soon', highlight: false },
  { ...ENTITY_PRODUCTS['1-list'], layer: 'Product listings', mark: 'list' as const, status: 'Launching soon', highlight: false },
]

// Light section: `reading-light` swaps the colour tokens to the light palette.
export const ProductEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="reading-light py-20 md:py-24">
      <div className="max-w-content mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-eyebrow">The <AppName name="1-GLOBE" /> ecosystem</span>
            <h2 className="text-section-title">
              <span className="text-primary">Every layer</span> of the store matters
            </h2>
          </div>
          <p className="lg:col-span-5 text-base md:text-lg leading-relaxed text-muted-foreground">
            Every click, search and campaign ends up on your store. We build focused tools for the three layers underneath it.
          </p>
        </div>

        <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => {
            return (
              <li
                key={p.id}
                className={`rounded-2xl border p-7 flex flex-col gap-4 ${
                  p.highlight ? 'bg-card border-primary/40 shadow-sm' : 'bg-card border-border'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`flex items-center justify-center w-14 h-14 rounded-xl text-foreground ${p.highlight ? 'bg-primary/10' : 'bg-secondary'}`}>
                    <AppMark app={p.mark} className="h-8 w-auto" />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      p.highlight ? 'bg-primary text-primary-foreground' : 'border border-border text-muted-foreground'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  {p.number} · {p.layer}
                </span>
                <h3 className="text-card-title"><AppName name={p.name} /></h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{p.description}</p>
                {p.href ? (
                  <Link
                    href={p.href}
                    className="mt-auto inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:gap-3 transition-all"
                  >
                    <BrandText>{p.ctaLabel || 'Explore'}</BrandText> <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="mt-auto text-sm text-muted-foreground">More details at launch</span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
