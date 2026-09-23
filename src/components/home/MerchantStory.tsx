import React from 'react'
import { Section } from '@/components/shared/Section'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const MerchantStory: React.FC = () => {
  return (
    <Section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              Built from the merchant's side of the counter.
            </h2>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-end space-y-6 text-lg text-muted-foreground leading-relaxed pt-2 lg:pt-0 font-medium">
            <p>
              1-globe.com wasn't born in a software incubator. It was engineered out of practical necessity while operating real ecommerce businesses.
            </p>
            <p>
              We experienced firsthand the friction of bloated "all-in-one" apps that slowed down themes and provided questionable ROI. We realized that true scale requires precision tools—technology built to fix exact operational problems without collateral damage to site speed.
            </p>
            <div className="pt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors border-b-2 border-foreground pb-1 hover:border-primary"
              >
                <span>Read our full story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}
