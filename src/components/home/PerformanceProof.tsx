import React from 'react'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

export const PerformanceProof: React.FC = () => {
  return (
    <Section className="section-spacing bg-background border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <SectionHeader
          
          headline="The difference is measurable."
          subhead="Engineering impact backed by verified performance metrics, not abstract claims."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="flex flex-col items-center justify-center p-8 border border-border bg-card">
            <span className="text-5xl font-heading font-bold text-foreground mb-4">98%</span>
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Payload Reduction</span>
            <p className="mt-4 text-sm text-muted-foreground max-w-[200px] leading-relaxed">
              18.4 MB source asset reduced to 212 KB WebP with no perceived quality loss.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-8 border border-border bg-card">
            <span className="text-5xl font-heading font-bold text-foreground mb-4">100%</span>
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">API Automation</span>
            <p className="mt-4 text-sm text-muted-foreground max-w-[200px] leading-relaxed">
              Zero manual file exports. Metadata and formats are pushed directly via Shopify Admin API.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-8 border border-border bg-card">
            <span className="text-5xl font-heading font-bold text-foreground mb-4">LCP</span>
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Core Web Vitals</span>
            <p className="mt-4 text-sm text-muted-foreground max-w-[200px] leading-relaxed">
              Lightweight assets drastically improve Largest Contentful Paint timings for mobile storefronts.
            </p>
          </div>

        </div>
      </div>
    </Section>
  )
}
