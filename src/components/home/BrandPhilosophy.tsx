import React from 'react'
import { Section } from '@/components/shared/Section'

export const BrandPhilosophy: React.FC = () => {
  return (
    <Section className="section-spacing bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-section-title !text-background mb-10">
          Business First.<br />
          Technology Second.<br />
          Performance Always.
        </h2>
        <div className="text-lead !text-background/80 max-w-3xl mx-auto space-y-6">
          <p>
            We don't build software just to add another dashboard to your stack. Every line of code is designed to solve a structural bottleneck in your storefront.
          </p>
          <p>
            When your infrastructure is invisible, your products aren't. We prioritize the fundamentals—speed, indexability, and clean architecture—so the marketing dollars you spend actually convert.
          </p>
        </div>
      </div>
    </Section>
  )
}
