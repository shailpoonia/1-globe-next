import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Image as ImageIcon, Zap, FileText, LayoutTemplate, ArrowRight } from 'lucide-react'
import { AIPipelineHeroCard } from '@/components/feature-page/AIPipelineHeroCard'

export const ProductDetailHome: React.FC = () => {
  return (
    <section id="1-optimiser-intro" className="bg-background py-32 md:py-48">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Evidence Side */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Abstract structural corners */}
              <div className="absolute -left-4 -top-4 w-8 h-8 border-l border-t border-neutral-700/50" />
              <div className="absolute -right-4 -bottom-4 w-8 h-8 border-r border-b border-neutral-700/50" />
              
              <div className="w-full relative z-10 p-2">
                <AIPipelineHeroCard />
                <div className="mt-8 text-center flex items-center justify-center gap-4">
                  <div className="h-px bg-neutral-800 flex-1" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600 block">
                    Illustrative result — 1-OPTIMISER processing pipeline
                  </span>
                  <div className="h-px bg-neutral-800 flex-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-neutral-700" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                1-OPTIMISER
              </span>
            </div>
            
            <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-[0.9] text-foreground uppercase mb-10">
              START WITH<br />
              THE PRODUCT<br />
              IMAGE.
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl lg:text-3xl text-neutral-400 font-medium leading-[1.2] mb-16 tracking-tight">
              <p>
                The product image is one of the first technical payloads a customer experiences.
              </p>
              <p className="text-neutral-500">
                1-OPTIMISER helps merchants improve the technical quality of those images without turning management into another manual task.
              </p>
            </div>
            
            {/* The Visual Narrative Steps */}
            <div className="relative border-l border-neutral-800 ml-3 pl-8 py-2 space-y-12 mb-16">
              <div className="relative">
                <div className="absolute -left-[37px] top-1.5 w-2 h-2 bg-neutral-700 outline outline-4 outline-background" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-3 mb-2">
                  <ImageIcon className="w-4 h-4 text-neutral-500" /> Product Image
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">The raw asset delivered to the storefront.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] top-1.5 w-2 h-2 bg-primary outline outline-4 outline-background" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-3 mb-2">
                  <Zap className="w-4 h-4 text-primary" /> Optimization
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">Compression, resizing, and WebP format conversion.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] top-1.5 w-2 h-2 bg-neutral-700 outline outline-4 outline-background" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-3 mb-2">
                  <FileText className="w-4 h-4 text-neutral-500" /> AI Metadata
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">Descriptive alt text and filename structuring for context.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] top-1.5 w-2 h-2 bg-neutral-700 outline outline-4 outline-background" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-3 mb-2">
                  <LayoutTemplate className="w-4 h-4 text-neutral-500" /> Storefront Performance
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">Serving appropriate assets to the end user.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/apps/1-optimiser"
                className="interactive-btn inline-flex items-center justify-center gap-4 h-16 px-10 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
              >
                <span>EXPLORE 1-OPTIMISER</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/resources/ecommerce-image-optimization" 
                className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
              >
                <span>Read Optimization Guide</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
