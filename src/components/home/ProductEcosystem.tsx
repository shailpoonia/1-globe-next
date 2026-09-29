import React from 'react'
import Link from 'next/link'
import { ArrowRight, Image as ImageIcon, FileText, ListChecks } from 'lucide-react'

import { ENTITY_PRODUCTS } from '@/lib/entities'

const products = [
  { ...ENTITY_PRODUCTS['1-optimiser'], layer: 'Images', icon: ImageIcon, status: 'Coming soon to Shopify', highlight: true },
  { ...ENTITY_PRODUCTS['1-blog'], layer: 'Content', icon: FileText, status: 'Launching soon', highlight: false },
  { ...ENTITY_PRODUCTS['1-list'], layer: 'Product listings', icon: ListChecks, status: 'Launching soon', highlight: false },
]

// Light section: `reading-light` swaps the colour tokens to the light palette.
export const ProductEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="reading-light py-20 md:py-24">
      <div className="max-w-content mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-eyebrow">The 1-GLOBE ecosystem</span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight leading-[1.1] text-foreground">
              Every layer of the store matters
            </h2>
          </div>
          <p className="lg:col-span-5 text-base md:text-lg leading-relaxed text-muted-foreground">
            Every click, search and campaign ends up on your store. We build focused tools for the three layers underneath it.
          </p>
        </div>

        <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => {
            const Icon = p.icon
            return (
              <li
                key={p.id}
                className={`rounded-2xl border p-7 flex flex-col gap-4 ${
                  p.highlight ? 'bg-card border-primary/40 shadow-sm' : 'bg-card border-border'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`flex items-center justify-center w-11 h-11 rounded-xl ${p.highlight ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
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
                <h3 className="font-heading text-2xl font-bold text-foreground">{p.name}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{p.description}</p>
                {p.href ? (
                  <Link
                    href={p.href}
                    className="mt-auto inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:gap-3 transition-all"
                  >
                    {p.ctaLabel || 'Explore'} <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
