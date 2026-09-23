import React from 'react'
import { Metadata } from 'next'
import { CtaBand } from '@/components/shared/CtaBand'
import { EditorialHero } from '@/components/home/EditorialHero'
import { BrandStatement } from '@/components/home/BrandStatement'
import { TheProblem } from '@/components/home/TheProblem'
import { ProductEcosystem } from '@/components/home/ProductEcosystem'
import { InfographicShowcase } from '@/components/home/InfographicShowcase'
import { ProductDetailHome } from '@/components/home/ProductDetailHome'
import { PerformanceProof } from '@/components/home/PerformanceProof'
import { BrandPhilosophy } from '@/components/home/BrandPhilosophy'
import { MerchantStory } from '@/components/home/MerchantStory'
import { FaqSection } from '@/components/home/FaqSection'

export const metadata: Metadata = {
  title: '1-globe.com | Shopify Image Optimizer',
  description: 'Faster Stores. Zero Code Bloat. More Sales. 1-globe.com builds focused Shopify apps that fix your store\'s foundation.'
}

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      {/* 01: Hero */}
      <EditorialHero />

      {/* 02: Brand Statement */}
      <BrandStatement />

      {/* 03: The Problem */}
      <TheProblem />

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
      <CtaBand />
    </div>
  )
}
