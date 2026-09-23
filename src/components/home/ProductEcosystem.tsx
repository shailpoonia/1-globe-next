import React from 'react'
import Link from 'next/link'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Card } from '@/components/shared/Card'
import { ArrowRight } from 'lucide-react'

export const ProductEcosystem: React.FC = () => {
  return (
    <Section id="ecosystem" className="py-24 md:py-32 bg-background border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <SectionHeader
          eyebrow="The Apps"
          headline={<>One store problem. One focused <span className="text-primary italic">app</span>.</>}
          subhead="A slow, unreadable store leaks the traffic your ads and SEO bring in. 1-globe.com fixes it one problem at a time — a focused app for each, so nothing is left to chance. This is a platform, and it's growing."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <Card className="hover:border-primary/50 transition-colors group flex flex-col h-full">
            <div className="mb-8 flex-1">
              <div className="w-12 h-12 bg-foreground text-background font-bold flex items-center justify-center text-xs tracking-widest mb-6">
                1-OPT
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                1-Optimiser
              </h3>
              <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">
                Shopify Image Optimizer
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shrink product photos up to 90%, write SEO filenames and alt text so Google and AI can read them, and sync it all back live — with zero broken links.
              </p>
              <div className="bg-secondary/30 p-4 rounded-md">
                <p className="text-sm font-medium text-foreground">
                  <span className="font-bold text-primary">18.4 MB → 212 KB</span> — 98% lighter, same quality
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-border flex items-center justify-between text-sm font-bold uppercase tracking-widest">
              <span className="text-primary">Live now</span>
              <Link 
                href="/apps/1-optimiser" 
                className="flex items-center gap-1 group-hover:translate-x-1 transition-transform hover:text-primary cursor-pointer"
              >
                See how it works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Card>

          <Card className="opacity-50 cursor-not-allowed pointer-events-none select-none grayscale-[50%] flex flex-col h-full">
            <div className="mb-8 flex-1">
              <div className="w-12 h-12 bg-secondary text-foreground font-bold flex items-center justify-center text-xs tracking-widest mb-6 opacity-80">
                1-BLG
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-2">
                1-Blog
              </h3>
              <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">
                Shopify Blog & Content
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Turn your store into a content engine — SEO blog posts that pull in shoppers, written for how people (and AI) actually search.
              </p>
            </div>
            <div className="pt-6 border-t border-border flex items-center justify-between text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
              <span>Coming Soon</span>
            </div>
          </Card>

          <Card className="opacity-50 cursor-not-allowed pointer-events-none select-none grayscale-[50%] flex flex-col h-full">
            <div className="mb-8 flex-1">
              <div className="w-12 h-12 bg-secondary text-foreground font-bold flex items-center justify-center text-xs tracking-widest mb-6 opacity-80">
                1-LST
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-2">
                1-Listings
              </h3>
              <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">
                Product Listing Optimizer
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Make every product listing complete, consistent, and search-ready — so your catalog works as hard as your ads do.
              </p>
            </div>
            <div className="pt-6 border-t border-border flex items-center justify-between text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
              <span>Coming Soon</span>
            </div>
          </Card>

        </div>

      </div>
    </Section>
  )
}
