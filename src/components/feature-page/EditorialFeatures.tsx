import React from 'react'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

export const EditorialFeatures: React.FC = () => {
  return (
    <Section id="features" className="section-spacing bg-background border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Capabilities"
          headline="Built for the entire catalog."
          subhead="Six precise layers of optimization applied automatically to every product photo."
          align="center"
        />

        <div className="mt-20 space-y-32">
          
          {/* Feature 1: Visual Left / Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-card border border-border flex flex-col items-center justify-center p-12">
               <span className="font-heading font-bold text-7xl text-foreground">90%</span>
               <span className="text-eyebrow mt-4">Payload reduction</span>
            </div>
            <div className="max-w-xl lg:pl-8">
              <h3 className="text-section-title mb-6">Deep Compression</h3>
              <p className="text-lead">
                Reduces file weights by up to 90% without visible quality degradation. Lighter payloads drastically decrease Largest Contentful Paint (LCP) times, improving mobile UX and Core Web Vitals.
              </p>
            </div>
          </div>

          {/* Feature 2: Text Left / Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl lg:order-1 order-2">
              <h3 className="text-section-title mb-6">Auto WebP</h3>
              <p className="text-lead">
                Automatically converts standard JPG and PNG assets into next-generation WebP formats, ensuring modern browsers serve the most efficient image architecture available.
              </p>
            </div>
            <div className="aspect-square bg-card border border-border flex flex-col items-center justify-center p-12 lg:order-2 order-1">
              <div className="flex items-center gap-6 text-2xl font-bold uppercase tracking-widest text-muted-foreground">
                <span className="line-through">.JPG</span>
                <span className="text-primary">.WEBP</span>
              </div>
            </div>
          </div>

          {/* Feature 3: Full Width */}
          <div className="max-w-4xl mx-auto text-center border-y border-border py-20">
            <h3 className="text-section-title mb-6">Bulk Optimization</h3>
            <p className="text-lead max-w-2xl mx-auto">
              Select entire collections or your entire product catalog and optimize thousands of files concurrently. No manual batching required.
            </p>
          </div>

          {/* Feature 4: Visual Left / Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video lg:aspect-square bg-card border border-border flex flex-col items-center justify-center p-8">
              <div className="w-full bg-background border border-border p-4 mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">Original Filename</span>
                <span className="font-mono text-sm text-foreground">IMG_4837.jpg</span>
              </div>
              <div className="w-full bg-background border border-primary/50 p-4">
                <span className="text-xs text-primary uppercase tracking-widest block mb-2">AI Generated</span>
                <span className="font-mono text-sm text-foreground">wooden-wall-clock-12-inch.webp</span>
              </div>
            </div>
            <div className="max-w-xl lg:pl-8">
              <h3 className="text-section-title mb-6">AI Filenames</h3>
              <p className="text-lead">
                Machine learning analyzes the visual contents of your product imagery to rewrite meaningless filenames into descriptive, indexable strings.
              </p>
            </div>
          </div>

          {/* Feature 5: Text Left / Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl lg:order-1 order-2">
              <h3 className="text-section-title mb-6">AI Alt Text</h3>
              <p className="text-lead">
                Automatically generates highly descriptive alt text for every image. Enhances accessibility compliance and provides crucial semantic context for Google Images, ChatGPT, and Perplexity.
              </p>
            </div>
            <div className="aspect-video lg:aspect-square bg-card border border-border flex flex-col items-center justify-center p-8 lg:order-2 order-1">
              <span className="text-sub-eyebrow mb-4 border-b border-border pb-4 w-full text-center">Generated Alt Text</span>
              <p className="text-sm font-mono text-muted-foreground text-center">
                "Handcrafted 12-inch wooden wall clock, minimalist wall décor"
              </p>
            </div>
          </div>

          {/* Feature 6: Full Width */}
          <div className="max-w-4xl mx-auto text-center border-t border-border pt-20">
            <h3 className="text-section-title mb-6">Syncs to Shopify</h3>
            <p className="text-lead max-w-2xl mx-auto">
              All optimizations are written directly back to your Shopify store via the Admin API. No external hosting, no injected scripts, and zero broken links.
            </p>
          </div>

        </div>
      </div>
    </Section>
  )
}
