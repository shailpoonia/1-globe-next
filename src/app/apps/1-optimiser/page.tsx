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

import { SoftwareAppSchema, AppBreadcrumbSchema } from '@/components/shared/AppSchemaOrg'

export const metadata: Metadata = {
  title: '1-Optimiser | Shopify Image Optimizer',
  description: 'Make every product image work harder. Compress, optimize and improve image discoverability across your Shopify catalog.',
  alternates: {
    canonical: '/apps/1-optimiser',
  },
}

export default function ImageOptimizerPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <SoftwareAppSchema 
        name="1-Optimiser" 
        description="Make every product image work harder. Compress, optimize and improve image discoverability across your Shopify catalog."
      />
      <AppBreadcrumbSchema appName="1-Optimiser" appSlug="1-optimiser" />
      {/* App Sub-Navigation */}
      <AppSubNav
        appName={
          <div className="flex items-baseline gap-2">
            <span>1-Optimiser</span>
            <span className="hidden sm:inline-block text-xs font-medium text-muted-foreground uppercase tracking-wide">Shopify Image Optimizer</span>
          </div>
        }
        ctaText="Coming to App Store"
      />

      {/* 1. App Hero with AI Pipeline Card */}
      <AppHero
        headline={<>You don't have a traffic problem. You have a <span className="text-primary italic">foundation</span> problem.</>}
        subhead={
          <div className="space-y-6">
            <p>You're paying for ads and doing SEO — but your store keeps leaking sales. It's not the ads or the SEO that's broken. It's what they're driving traffic to.</p>
            <div className="bg-secondary/30 p-6 border-l-2 border-primary mt-6">
              <p className="font-bold text-foreground mb-2">It's like putting a Ferrari engine on a cracked chassis.</p>
              <p className="text-sm">All that horsepower — your ad spend, your SEO effort — hits a store with heavy images, filenames Google can't read, and photos invisible to AI search. The power has nowhere to go. 1-Optimiser rebuilds the chassis so your ads and SEO finally pay off.</p>
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
      <CtaBand />
    </div>
  )
}
