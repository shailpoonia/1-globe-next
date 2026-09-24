import React from 'react'
import { Section } from '@/components/shared/Section'

export const BrandStatement: React.FC = () => {
  return (
    <Section className="py-32 md:py-48 bg-background border-b border-border overflow-hidden relative">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="text-section-title mb-8">
            Every Store Can Perform Better.
          </h2>
          <div className="space-y-6">
            <p className="text-lead">
              The technology behind an ecommerce business should work as hard as the marketing driving people to it.
            </p>
            <p className="text-lead">
              1-globe.com builds focused Shopify apps that fix your store's foundation — so it loads fast, gets found by search and AI, and turns more of your traffic into buyers. All from inside your admin. No code. No bloat.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
