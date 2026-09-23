import React from 'react'
import { Section } from '@/components/shared/Section'

export const BrandPhilosophy: React.FC = () => {
  return (
    <Section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] mb-10">
          Business First.<br />
          Technology Second.<br />
          Performance Always.
        </h2>
        <div className="text-lg sm:text-xl font-medium text-background/80 leading-relaxed max-w-3xl mx-auto space-y-6">
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
