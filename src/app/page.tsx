import React from 'react'
import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { CtaBand } from '@/components/shared/CtaBand'
import { EditorialHero } from '@/components/home/EditorialHero'

import { ProductEcosystem } from '@/components/home/ProductEcosystem'
import { InfographicShowcase } from '@/components/home/InfographicShowcase'
import { PageWeightProof } from '@/components/home/PageWeightProof'
import { MerchantStory } from '@/components/home/MerchantStory'
import { FaqSection } from '@/components/home/FaqSection'




export const metadata: Metadata = buildMetadata({
  title: '1-GLOBE — Ecommerce Performance Technology for Shopify Stores',
  description: '1-GLOBE builds ecommerce performance technology. Our products help online merchants improve image payloads, content structure, and storefront performance.',
  path: '/',
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <main className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      {/* 1. Hero */}
      <EditorialHero />

      {/* 2. Products (light) */}
      <ProductEcosystem />

      {/* 3. Before/after showcase */}
      <InfographicShowcase />

      {/* 4. Measured proof */}
      <PageWeightProof />

      {/* 5. Why 1-GLOBE (light) */}
      <MerchantStory />

      {/* 6. FAQ */}
      <FaqSection />

      {/* 11: Final CTA */}
      <CtaBand
        headlinePart1="Make your store"
        italicWord="perform"
        headlinePart2="better."
        subhead="Start with the performance problem."
        primaryCtaText="Explore 1-OPTIMISER"
        primaryCtaUrl="/apps/1-optimiser"
        primaryIsLink={true}
        secondaryCtaText="View pricing"
        secondaryCtaUrl="/pricing"
        secondaryIsLink={true}
      />
    </main>
  )
}
