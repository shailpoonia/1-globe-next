import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'
import { CtaBand } from '@/components/shared/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Built by a merchant, for merchants. 1-GLOBE builds business-first ecommerce performance technology.',
  alternates: {
    canonical: '/about',
  },
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
              1-GLOBE is an ecommerce performance technology company building tools for online merchants. It's built by operators who have run real Shopify stores and spent decades building brands — so every app starts from a problem we've actually lived, not one we imagined from a spec sheet.
            </p>
          </div>
        </Section>

        {/* Narrative Section */}
        <Section className="section-spacing bg-background border-b border-border">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 text-lead">
            <p>
              We focus our technology on three core areas of the modern storefront: image performance, content performance, and product listing performance. We hit these exact walls ourselves: a heavy, slow catalog lacking proper structure, and legacy setups we were afraid to touch in case we broke the storefront.
            </p>
            <p>
              We'd spent careers making brands desirable—so we weren't about to let a broken technical foundation quietly cost us momentum. We built the fix—starting with <Link href="/apps/1-optimiser" className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30">1-OPTIMISER image performance</Link>.
            </p>
            <p>
              That's the difference. These aren't apps written by a code shop guessing what merchants need. They carry two decades of real brand and store-building experience — business judgment poured into software, not just code that automates a task. This operational experience also shapes the practical <Link href="/resources/ecommerce-performance" className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30">ecommerce performance resources</Link> we publish for merchants.
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
