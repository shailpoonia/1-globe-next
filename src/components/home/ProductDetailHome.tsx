import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { AIPipelineHeroCard } from '@/components/feature-page/AIPipelineHeroCard'

export const ProductDetailHome: React.FC = () => {
  return (
    <Section id="1-optimiser-intro" className="py-24 md:py-32 bg-secondary/20 border-b border-border overflow-hidden">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Copy */}
        <div className="max-w-xl">
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground block mb-4">
              1-Optimiser
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              Make every product image work harder.
            </h2>
            <p className="text-lg sm:text-xl font-medium text-muted-foreground leading-relaxed">
              Compress, optimize and improve the discoverability of your Shopify images without touching your code.
            </p>
          </div>
          <Link
            href="/apps/1-optimiser"
            className="inline-flex items-center gap-2 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] bg-foreground text-background hover:bg-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>Explore 1-Optimiser</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Visual pipeline card reused from the feature page */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
          <AIPipelineHeroCard />
        </div>

      </div>
    </Section>
  )
}
