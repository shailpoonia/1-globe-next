import React from 'react'
import { Section } from '@/components/shared/Section'
import { GoogleSearchAnimationCard } from './GoogleSearchAnimationCard'

export const TheProblem: React.FC = () => {
  return (
    <Section id="why" className="section-spacing bg-secondary/30 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="mb-16 max-w-4xl text-left">
          <span className="text-eyebrow block mb-6">Why 1-globe.com</span>
          <h2 className="text-section-title mb-6">
            Your ads and SEO aren't broken. Your store's <span className="text-primary italic">foundation</span> is.
          </h2>
          <p className="text-lead">
            You pay for traffic and work on your SEO — but it leaks away on a store that's slow and invisible to search. It's a Ferrari engine on a cracked chassis: all that power has nowhere to go. 1-globe.com fixes the chassis — one focused app per problem — so every rupee you spend on ads and SEO finally pays off.
          </p>
        </div>

        <div className="max-w-4xl">
          <GoogleSearchAnimationCard />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 border-b border-border pb-3">Your store loads faster</h4>
            <p className="text-sm font-semibold text-foreground mb-2">Slow pages lose the sale before it starts.</p>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">
              Shoppers leave stores that lag, and Google pushes slow stores down. We make your pages load fast — so you stop losing buyers you already paid to bring in.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 border-b border-border pb-3">Google and AI can finally read your store</h4>
            <p className="text-sm font-semibold text-foreground mb-2">Search reads text, not pictures.</p>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">
              Most stores are invisible in image search because their photos have no descriptions. We fix that — so Google Images, ChatGPT, and Perplexity can find and recommend your products.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 border-b border-border pb-3">Nothing breaks — you keep the rankings you built</h4>
            <p className="text-sm font-semibold text-foreground mb-2">Fixing your store shouldn't cost you your SEO.</p>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">
              Renaming or re-uploading images the normal way breaks links and wipes out rankings. We change everything in place inside Shopify — zero broken links, zero lost SEO.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 border-b border-border pb-3">One click, zero bloat</h4>
            <p className="text-sm font-semibold text-foreground mb-2">It runs inside Shopify and leaves no mess.</p>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">
              No code, no external dashboards, no scripts slowing your theme. Install in a click; if you ever leave, your store is spotless.
            </p>
          </div>
        </div>

      </div>
    </Section>
  )
}
