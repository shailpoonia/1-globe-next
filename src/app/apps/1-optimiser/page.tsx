import React from 'react'
import { Metadata } from 'next'
import { CtaBand } from '@/components/shared/CtaBand'
import { AppSubNav } from '@/components/feature-page/AppSubNav'
import { AppHero } from '@/components/feature-page/AppHero'
import { JobsDoneSection } from '@/components/feature-page/JobsDoneSection'
import { AIPipelineHeroCard } from '@/components/feature-page/AIPipelineHeroCard'
import { EditorialFeatures } from '@/components/feature-page/EditorialFeatures'
import { PerformanceProof } from '@/components/home/PerformanceProof'
import { AppFaqSection } from '@/components/feature-page/AppFaqSection'

import { ENTITY_PRODUCTS } from '@/lib/entities'
import { SoftwareAppSchema, AppBreadcrumbSchema } from '@/components/shared/AppSchemaOrg'

export const metadata: Metadata = {
  title: '1-OPTIMISER | Shopify Image Optimizer',
  description: ENTITY_PRODUCTS['1-optimiser'].description,
  alternates: {
    canonical: '/apps/1-optimiser',
  },
}

export default function ImageOptimizerPage() {
  const product = ENTITY_PRODUCTS['1-optimiser'];

  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <SoftwareAppSchema 
        name={product.name} 
        description={product.description}
        slug={product.id}
        {...(product['@id'] && { '@id': product['@id'] })}
        offers={[
          {
            '@type': 'Offer',
            name: 'Free Starter',
            price: '0',
            priceCurrency: 'USD'
          },
          {
            '@type': 'Offer',
            name: 'Growth',
            price: '9.99',
            priceCurrency: 'USD'
          },
          {
            '@type': 'Offer',
            name: 'Pro Catalog',
            price: '19.99',
            priceCurrency: 'USD'
          }
        ]}
      />
      <AppBreadcrumbSchema appName="1-OPTIMISER" appSlug="1-optimiser" />
      {/* App Sub-Navigation */}
      <AppSubNav
        appName={
          <div className="flex items-baseline gap-2">
            <span>1-OPTIMISER</span>
            <span className="hidden sm:inline-block text-xs font-medium text-muted-foreground uppercase tracking-wide">Shopify Image Optimizer</span>
          </div>
        }
        ctaText="Coming to App Store"
      />

      {/* 1. App Hero with AI Pipeline Card */}
      <AppHero
        headline={<>Build a stronger <span className="text-primary italic">foundation</span> for your catalog.</>}
        subhead={
          <div className="space-y-6">
            <p>Marketing drives traffic, but your storefront infrastructure dictates performance. Heavy payloads and missing metadata can undermine your acquisition efforts.</p>
            <div className="bg-secondary/30 p-6 border-l-2 border-primary mt-6">
              <p className="font-bold text-foreground mb-2">Image performance matters.</p>
              <p className="text-sm">Large image files slow down page speeds, while generic filenames and missing alt text provide limited context for search and AI discovery. 1-OPTIMISER automatically compresses your images and enriches your metadata, helping you build a faster, more discoverable storefront.</p>
            </div>
          </div>
        }
        primaryCtaText="Coming to App Store"
        secondaryCtaText="See how it works"
        secondaryCtaUrl="#how"
        heroMoment={<AIPipelineHeroCard />}
      />

      {/* 2. Editorial Features Layout */}
      <JobsDoneSection />

      {/* 2. Editorial Features Layout */}
      <EditorialFeatures />

      {/* 3. Proof */}
      <PerformanceProof />

      {/* 4. Objection-Busting App FAQ */}
      <AppFaqSection />

      {/* 5. Shared Final CTA Band */}
      <CtaBand 
        headlinePart1="READY FOR"
        italicWord="BETTER"
        headlinePart2="PERFORMANCE?"
        subhead="Start optimizing your catalog today."
        primaryCtaText="Coming to App Store"
        primaryCtaUrl="#"
        secondaryCtaText="View pricing"
        secondaryCtaUrl="/pricing"
        secondaryIsLink={true}
      />
    </div>
  )
}
