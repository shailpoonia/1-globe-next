import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'
import Link from 'next/link'
import { getAllResources } from '@/lib/resources'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/shared/CtaBand'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Learn how ecommerce performance works. 1-GLOBE publishes practical guidance for merchants covering storefront performance, image performance, content, and discovery.',
  alternates: {
    canonical: '/resources',
  },
}

export default function ResourcesPage() {
  const resources = getAllResources();

  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <main className="flex-1">
        <Section className="section-spacing border-b border-border bg-secondary/30">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <span className="text-eyebrow block mb-6">Resources</span>
            <h1 className="text-hero mb-8 max-w-3xl">
              Learn how ecommerce <span className="text-primary italic">performance</span> works.
            </h1>
            <p className="text-lead max-w-2xl">
              1-GLOBE publishes practical guidance for merchants and ecommerce teams covering storefront performance, image performance, content, product listings, search, answer engines, and generative discovery.
            </p>
          </div>
        </Section>

        <Section className="section-spacing bg-background border-b border-border">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map(resource => (
                <Link 
                  key={resource.slug} 
                  href={`/resources/${resource.slug}`}
                  className="interactive-card flex flex-col bg-card border border-border p-8 h-full transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                    {resource.category}
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 leading-tight">
                    {resource.title}
                  </h2>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed flex-1 mb-8">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground mt-auto">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        <CtaBand />
      </main>
    </div>
  )
}
