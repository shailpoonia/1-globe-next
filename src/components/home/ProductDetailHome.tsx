import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Image as ImageIcon, Zap, FileText, LayoutTemplate } from 'lucide-react'
import { AIPipelineHeroCard } from '@/components/feature-page/AIPipelineHeroCard'

export const ProductDetailHome: React.FC = () => {
  return (
    <section id="1-optimiser-intro" className="bg-background py-24 md:py-32 lg:py-40">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Evidence Side */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Abstract structural lines */}
              <div className="absolute -left-6 -top-6 w-12 h-12 border-l border-t border-neutral-800" />
              <div className="absolute -right-6 -bottom-6 w-12 h-12 border-r border-b border-neutral-800" />
              
              <div className="w-full">
                <AIPipelineHeroCard />
                <div className="mt-6 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 block">
                    Illustrative result — 1-OPTIMISER processing pipeline
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-6">
              1-OPTIMISER
            </span>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-[0.95] text-foreground uppercase mb-8">
              START WITH<br />
              THE PRODUCT<br />
              IMAGE.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-neutral-400 font-medium leading-relaxed mb-12">
              <p>
                The product image is one of the first things a customer experiences.
              </p>
              <p>
                1-OPTIMISER helps merchants improve the technical quality and performance of those images without turning management into another manual task.
              </p>
            </div>
            
            {/* The Visual Narrative Steps */}
            <div className="relative border-l border-neutral-800 ml-3 pl-8 py-2 space-y-10 mb-12">
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-neutral-700 ring-4 ring-background" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-2">
                  <ImageIcon className="w-4 h-4 text-neutral-500" /> Product Image
                </h4>
                <p className="text-sm text-neutral-500">The raw asset delivered to the storefront.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_rgba(0,213,255,0.5)]" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-primary" /> Optimization
                </h4>
                <p className="text-sm text-neutral-500">Compression, resizing, and WebP format conversion.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-neutral-700 ring-4 ring-background" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-neutral-500" /> AI Metadata
                </h4>
                <p className="text-sm text-neutral-500">Descriptive alt text and filename structuring for context.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-neutral-700 ring-4 ring-background" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-2">
                  <LayoutTemplate className="w-4 h-4 text-neutral-500" /> Storefront Performance
                </h4>
                <p className="text-sm text-neutral-500">Serving appropriate assets to the end user.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/apps/1-optimiser"
                className="interactive-btn inline-flex items-center justify-center gap-2 h-14 px-8 border border-neutral-700 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
              >
                <span>EXPLORE 1-OPTIMISER</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/resources/ecommerce-image-optimization" 
                className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
              >
                Read Optimization Guide →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
