import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '1-OPTIMISER Pricing',
  description: 'Pricing for 1-OPTIMISER. Pay only for what you optimize with one-time image credits.',
  alternates: {
    canonical: '/pricing',
  },
}

export default function PricingPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <main className="flex-1">
        <Section className="section-spacing bg-background border-b border-border">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="text-left mb-20 max-w-3xl">
              <span className="text-eyebrow block mb-6">1-OPTIMISER</span>
              <h1 className="text-hero mb-6">
                IMAGE PERFORMANCE.<br />
                <span className="text-primary italic">WITHOUT THE SUBSCRIPTION.</span>
              </h1>
              <p className="text-lead">
                Start with 100 free image optimizations. When you need more, buy one-time image credits that never expire.
              </p>
              <p className="text-lead mt-4">
                <Link href="/apps/1-optimiser" className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30">
                  Explore 1-OPTIMISER capabilities
                </Link>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Tier 1 */}
              <div className="border border-border bg-card p-8 flex flex-col">
                <div className="mb-6 border-b border-border pb-6">
                  <span className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 block">100 FREE IMAGES</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-heading font-bold text-foreground">$0</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm h-12">
                    Every store starts with 100 free image optimizations.
                  </p>
                </div>
                <div className="flex-1"></div>
                <div className="w-full inline-flex items-center justify-center h-14 font-bold text-xs uppercase tracking-widest bg-secondary text-muted-foreground cursor-not-allowed select-none mt-6">
                  COMING SOON TO SHOPIFY
                </div>
              </div>

              {/* Tier 2 */}
              <div className="border border-border bg-card p-8 flex flex-col">
                <div className="mb-6 border-b border-border pb-6">
                  <span className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 block">100 IMAGE CREDITS</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-heading font-bold text-foreground">$2</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm h-12">
                    One-time purchase.<br />Credits never expire.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">$0.02 / image</p>
                </div>
                <div className="w-full inline-flex items-center justify-center h-14 font-bold text-xs uppercase tracking-widest bg-secondary text-muted-foreground cursor-not-allowed select-none mt-6">
                  COMING SOON TO SHOPIFY
                </div>
              </div>

              {/* Tier 3 */}
              <div className="border border-border bg-card p-8 flex flex-col">
                <div className="mb-6 border-b border-border pb-6">
                  <span className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 block">500 IMAGE CREDITS</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-heading font-bold text-foreground">$10</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm h-12">
                    One-time purchase.<br />Credits never expire.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">$0.02 / image</p>
                </div>
                <div className="w-full inline-flex items-center justify-center h-14 font-bold text-xs uppercase tracking-widest bg-secondary text-muted-foreground cursor-not-allowed select-none mt-6">
                  COMING SOON TO SHOPIFY
                </div>
              </div>

              {/* Tier 4 */}
              <div className="border border-border bg-card p-8 flex flex-col">
                <div className="mb-6 border-b border-border pb-6">
                  <span className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 block">1,000 IMAGE CREDITS</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-heading font-bold text-foreground">$18</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm h-12">
                    One-time purchase.<br />Credits never expire.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">$0.018 / image</p>
                </div>
                <div className="w-full inline-flex items-center justify-center h-14 font-bold text-xs uppercase tracking-widest bg-secondary text-muted-foreground cursor-not-allowed select-none mt-6">
                  COMING SOON TO SHOPIFY
                </div>
              </div>

            </div>

            <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mt-12 mb-16 text-center">
              One-time payment through Shopify Billing. Buy additional image credits when needed.
            </p>

            <div className="border-t border-border pt-16 flex flex-col items-center text-center">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1-OPTIMISER is coming soon.</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                We are finalizing our Shopify integration. Explore the full capabilities of 1-OPTIMISER to see how it can help you build a stronger storefront foundation.
              </p>
              <Link
                href="/apps/1-optimiser"
                className="interactive-btn inline-flex items-center justify-center h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                EXPLORE 1-OPTIMISER
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
