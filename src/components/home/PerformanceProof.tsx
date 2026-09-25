import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const PerformanceProof: React.FC = () => {
  return (
    <section id="performance-proof" className="bg-background py-24 md:py-32 lg:py-40 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-6">
            MEASURE THE DIFFERENCE
          </span>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground uppercase mb-8">
            PERFORMANCE<br />
            SHOULD BE<br />
            MEASURABLE.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed max-w-xl">
            Ecommerce performance is not a slogan. It can be observed in the technical assets, data structure and user experience that make up a store.
          </p>
        </div>

        {/* Evidence List */}
        <div className="border-t border-border">
          
          {/* Proof 1: Payload */}
          <div className="py-12 border-b border-border flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start transition-colors hover:bg-white/[0.02]">
            <div className="md:w-64 shrink-0">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">IMAGE PAYLOAD</h3>
              <p className="text-sm font-medium text-neutral-500">Example compression</p>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-4 mb-6">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-600 line-through">18.4 MB</span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary">212 KB</span>
              </div>
              <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                One example of how image optimization can substantially reduce image weight.
              </p>
            </div>
          </div>

          {/* Proof 2: Filename Structure */}
          <div className="py-12 border-b border-border flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start transition-colors hover:bg-white/[0.02]">
            <div className="md:w-64 shrink-0">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">FILENAME STRUCTURE</h3>
              <p className="text-sm font-medium text-neutral-500">Example transformation</p>
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <div className="flex flex-col gap-2 mb-6 font-mono text-sm sm:text-base max-w-xl">
                <div className="text-neutral-500 bg-secondary/30 px-4 py-3 rounded-sm truncate">
                  IMG_4837.jpg
                </div>
                <div className="text-primary bg-primary/10 px-4 py-3 rounded-sm border border-primary/20 truncate shadow-[0_0_15px_rgba(0,213,255,0.05)]">
                  wooden-wall-clock-12-inch.webp
                </div>
              </div>
              <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                Descriptive filenames can provide clearer context about an image and its subject.
              </p>
            </div>
          </div>

          {/* Proof 3: Alt Text Generation */}
          <div className="py-12 border-b border-border flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start transition-colors hover:bg-white/[0.02]">
            <div className="md:w-64 shrink-0">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">METADATA</h3>
              <p className="text-sm font-medium text-neutral-500">Example AI generation</p>
            </div>
            <div className="flex-1">
              <div className="bg-secondary/20 border border-white/5 px-6 py-5 rounded-sm mb-6 max-w-xl">
                <p className="text-foreground text-lg italic font-medium">
                  "Handcrafted 12-inch wooden wall clock, minimalist wall decor"
                </p>
              </div>
              <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                AI-assisted alt text can provide descriptive context for accessibility and image-related discovery.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-start">
          <Link
            href="/apps/1-optimiser"
            className="interactive-btn inline-flex items-center justify-center gap-2 h-14 px-8 border border-neutral-700 bg-transparent text-sm font-bold uppercase tracking-widest text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>EXPLORE 1-OPTIMISER</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
