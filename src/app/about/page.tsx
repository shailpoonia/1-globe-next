import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'
import { CtaBand } from '@/components/shared/CtaBand'

export const metadata: Metadata = {
  title: 'About | 1-globe.com',
  description: 'Built by a merchant, not a code factory. Performance technology for ecommerce.'
}

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="section-spacing border-b border-border bg-secondary/30">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <span className="text-eyebrow block mb-6">About</span>
            <h1 className="text-hero mb-8 max-w-3xl">
              Built by a merchant,<br />
              not a <span className="text-primary italic">code factory</span>.
            </h1>
            <p className="text-lead max-w-2xl">
              1-globe.com comes from the other side of the counter. It's built by operators who have run real Shopify stores and spent decades building brands — so every app starts from a problem we've actually lived, not one we imagined from a spec sheet.
            </p>
          </div>
        </Section>

        {/* Narrative Section */}
        <Section className="section-spacing bg-background border-b border-border">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 text-lead">
            <p>
              We hit these exact walls ourselves: a heavy, slow catalog that Google and shoppers couldn't see, and rankings we were afraid to touch in case we broke them. We'd spent careers making brands findable and desirable — so we weren't about to let a broken foundation quietly cost us sales. We built the fix.
            </p>
            <p>
              That's the difference. These aren't apps written by a code shop guessing what merchants need. They carry two decades of real brand and store-building experience — business judgment poured into software, not just code that automates a task.
            </p>
            <p className="text-foreground font-bold text-xl uppercase tracking-widest mt-12">
              Business sense first. Code second. Always.
            </p>
          </div>
        </Section>

        <CtaBand />
      </main>
    </div>
  )
}
