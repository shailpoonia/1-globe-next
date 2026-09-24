import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'

export const metadata: Metadata = {
  title: 'Pricing | 1-GLOBE',
  description: 'Pricing for 1-OPTIMISER. Simple, merchant-aligned plans starting at $0, with zero surprises.',
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
              <span className="text-eyebrow block mb-6">Pricing</span>
              <h1 className="text-hero mb-6">
                Simple, merchant-aligned pricing with zero <span className="text-primary italic">surprises</span>.
              </h1>
              <p className="text-lead">
                Free to install, test on your own store, and cancel anytime. Billing is handled securely through the Shopify App Store.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Tier 1 */}
              <div className="border border-border bg-card p-10 flex flex-col">
                <div className="mb-8 border-b border-border pb-8">
                  <span className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 block">Free Starter</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-heading font-bold text-foreground">$0</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm h-10">
                    Perfect for new stores testing the infrastructure.
                  </p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium border-b border-border/50 pb-2">
                    Up to 50 images/month
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground border-b border-border/50 pb-2">
                    WebP conversion
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground border-b border-border/50 pb-2">
                    Basic alt text
                  </li>
                </ul>
                <div className="w-full inline-flex items-center justify-center h-14 font-bold text-xs uppercase tracking-widest bg-secondary text-muted-foreground cursor-not-allowed select-none">
                  Start free
                </div>
              </div>

              {/* Tier 2 */}
              <div className="border-2 border-foreground bg-background p-10 flex flex-col relative transform lg:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Most Popular
                </div>
                <div className="mb-8 border-b border-border pb-8">
                  <span className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 block">Growth</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-heading font-bold text-foreground">$9.99</span>
                    <span className="text-muted-foreground font-medium text-sm">/ month</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm h-10">
                    Full automation for growing catalogs.
                  </p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium border-b border-border/50 pb-2">
                    Unlimited images
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium border-b border-border/50 pb-2">
                    AI alt text & filenames
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium border-b border-border/50 pb-2">
                    Bulk collections
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium border-b border-border/50 pb-2">
                    Crop to any size
                  </li>
                </ul>
                <div className="w-full inline-flex items-center justify-center h-14 font-bold text-xs uppercase tracking-widest bg-secondary text-muted-foreground cursor-not-allowed select-none">
                  Add to Shopify
                </div>
              </div>

              {/* Tier 3 */}
              <div className="border border-border bg-card p-10 flex flex-col">
                <div className="mb-8 border-b border-border pb-8">
                  <span className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 block">Pro Catalog</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-heading font-bold text-foreground">$19.99</span>
                    <span className="text-muted-foreground font-medium text-sm">/ month</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm h-10">
                    High volume capacity for large inventories.
                  </p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium border-b border-border/50 pb-2">
                    Everything in Growth
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium border-b border-border/50 pb-2">
                    Background removal
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium border-b border-border/50 pb-2">
                    Priority processing
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground font-medium">
                    Large-catalog support & priority help
                  </li>
                </ul>
                <div className="w-full inline-flex items-center justify-center h-14 font-bold text-xs uppercase tracking-widest bg-secondary text-muted-foreground cursor-not-allowed select-none">
                  Add to Shopify
                </div>
              </div>

            </div>

            <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mt-12 text-center">
              All plans billed through Shopify · Cancel anytime
            </p>
          </div>
        </Section>
      </main>
    </div>
  )
}
