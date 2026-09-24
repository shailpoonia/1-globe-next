import React from 'react'
import { Metadata } from 'next'
import { CtaBand } from '@/components/shared/CtaBand'
import { EditorialHero } from '@/components/home/EditorialHero'
import { BrandStatement } from '@/components/home/BrandStatement'

import { ProductEcosystem } from '@/components/home/ProductEcosystem'
import { InfographicShowcase } from '@/components/home/InfographicShowcase'
import { ProductDetailHome } from '@/components/home/ProductDetailHome'
import { PerformanceProof } from '@/components/home/PerformanceProof'
import { BrandPhilosophy } from '@/components/home/BrandPhilosophy'
import { MerchantStory } from '@/components/home/MerchantStory'
import { FaqSection } from '@/components/home/FaqSection'



import { OrganizationSchema, WebSiteSchema } from '@/components/shared/SchemaOrg'

export const metadata: Metadata = {
  title: 'Ecommerce Performance Technology',
  description: '1-GLOBE builds ecommerce performance technology. Our products help online merchants improve image payloads, content structure, and storefront performance.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <OrganizationSchema />
      <WebSiteSchema />
      {/* 01: Hero */}
      <EditorialHero />

      {/* 02: Brand Statement (Includes The Problem narrative) */}
      <BrandStatement />

      {/* 04: Product Ecosystem */}
      <ProductEcosystem />

      {/* 05: Keep existing infographics (Visual storytelling) */}
      <InfographicShowcase />

      {/* 06: Product Detail (1-Optimiser intro) */}
      <ProductDetailHome />

      {/* 07: Performance Proof */}
      <PerformanceProof />

      {/* 08: Brand Philosophy */}
      <BrandPhilosophy />

      {/* 09: Merchant Story */}
      <MerchantStory />

      {/* 10: FAQ */}
      <FaqSection />

      {/* 11: Final CTA */}
      <CtaBand
        headlinePart1="MAKE YOUR STORE"
        italicWord="PERFORM"
        headlinePart2="BETTER."
        subhead="Start with the performance problem."
        primaryCtaText="EXPLORE 1-OPTIMISER"
        primaryCtaUrl="/apps/1-optimiser"
        primaryIsLink={true}
      />
    </div>
  )
}
