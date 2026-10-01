import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Section } from '@/components/shared/Section'
import Link from 'next/link'
import { AppName } from '@/components/shared/BrandLogo'

export const metadata: Metadata = buildMetadata({
  title: '1-OPTIMIZER Pricing',
  description: 'Pricing for 1-OPTIMIZER. Pay only for what you optimize with one-time image credits.',
  path: '/pricing',
})

export default function PricingPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <main className="flex-1">
        <Section className="section-spacing bg-background border-b border-border">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="text-left mb-20 max-w-3xl">
              <span className="text-eyebrow block mb-6"><AppName name="1-OPTIMIZER" /></span>
              <h1 className="text-page-title mb-6">
                Image performance{' '}<br />
                <span className="text-primary">Without the subscription</span>
              </h1>
              <p className="text-lead">
                Start with 100 free image optimizations. When you need more, buy one-time image credits that never expire.
              </p>
              <p className="text-lead mt-4">
                <Link href="/apps/1-optimizer" className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30">
                  Explore 1-OPTIMIZER capabilities
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
                <div className="w-full inline-flex items-center justify-center h-14 font-semibold text-xs bg-secondary text-muted-foreground cursor-not-allowed select-none mt-6">
                  Coming soon to Shopify
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
                    One-time purchase.{' '}<br />Credits never expire.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">$0.02 / image</p>
                </div>
                <div className="w-full inline-flex items-center justify-center h-14 font-semibold text-xs bg-secondary text-muted-foreground cursor-not-allowed select-none mt-6">
                  Coming soon to Shopify
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
                    One-time purchase.{' '}<br />Credits never expire.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">$0.02 / image</p>
                </div>
                <div className="w-full inline-flex items-center justify-center h-14 font-semibold text-xs bg-secondary text-muted-foreground cursor-not-allowed select-none mt-6">
                  Coming soon to Shopify
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
                    One-time purchase.{' '}<br />Credits never expire.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">$0.018 / image</p>
                </div>
                <div className="w-full inline-flex items-center justify-center h-14 font-semibold text-xs bg-secondary text-muted-foreground cursor-not-allowed select-none mt-6">
                  Coming soon to Shopify
                </div>
              </div>

            </div>

            <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mt-12 mb-16 text-center">
              One-time payment through Shopify Billing. Buy additional image credits when needed.
            </p>

            <div className="border-t border-border pt-16 flex flex-col items-center text-center">
              <h2 className="text-card-title uppercase mb-4"><AppName name="1-OPTIMIZER" /> is <span className="text-primary">coming soon</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                We are finalizing our Shopify integration. Explore the full capabilities of 1-OPTIMIZER to see how it can help you build a stronger storefront foundation.
              </p>
              <Link
                href="/apps/1-optimizer"
                className="interactive-btn inline-flex items-center justify-center h-14 px-8 font-semibold text-sm bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Explore <AppName name="1-OPTIMIZER" /></span>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
