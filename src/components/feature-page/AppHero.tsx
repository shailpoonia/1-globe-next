import React from 'react'

export interface AppHeroProps {
  eyebrow?: string
  headline?: React.ReactNode
  subhead?: React.ReactNode
  primaryCtaText?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
  heroMoment?: React.ReactNode
}

export const AppHero: React.FC<AppHeroProps> = ({
  eyebrow = "1-Optimiser",
  headline = "Make every product image work harder.",
  subhead = "Compress, optimize and improve image discoverability across your Shopify catalog without touching your code.",
  primaryCtaText = "Coming to App Store",
  secondaryCtaText = "See how it works",
  secondaryCtaUrl = "#how",
  heroMoment
}) => {
  return (
    <section className="relative section-spacing border-b border-border overflow-hidden bg-background">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="mb-6">
              <span className="text-eyebrow">
                {eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-hero mb-6">
              {headline}
            </h1>

            {/* Subhead */}
            <div className="text-lead max-w-xl mb-10">
              {subhead}
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <div
                className="inline-flex items-center justify-center h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] bg-secondary text-muted-foreground cursor-not-allowed select-none w-full sm:w-auto"
              >
                {primaryCtaText}
              </div>
              <a
                href={secondaryCtaUrl}
                className="inline-flex items-center justify-center h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] border border-border bg-transparent text-foreground hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
              >
                {secondaryCtaText}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Moment */}
          <div className="lg:col-span-7 flex items-center justify-center relative">
            {heroMoment}
          </div>
          
        </div>
      </div>
    </section>
  )
}
