import React from 'react'
import { Section } from '@/components/shared/Section'

export const BrandStatement: React.FC = () => {
  return (
    <Section className="py-32 md:py-48 bg-background border-b border-border overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.05] uppercase mb-10">
          Every Store<br />
          Can Perform<br />
          Better.
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          The technology behind an ecommerce business should work as hard as the marketing driving people to it.
        </p>
      </div>
    </Section>
  )
}
