import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Image as ImageIcon, Zap, FileText, LayoutTemplate, ArrowRight } from 'lucide-react'
import { AIPipelineHeroCard } from '@/components/feature-page/AIPipelineHeroCard'

export const ProductDetailHome: React.FC = () => {
  return (
    <section id="1-optimiser-intro" className="bg-background py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Evidence Side */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Abstract structural corners */}
              <div className="absolute -left-4 -top-4 w-8 h-8 border-l border-t border-neutral-700/50" />
              <div className="absolute -right-4 -bottom-4 w-8 h-8 border-r border-b border-neutral-700/50" />
              
              <div className="w-full relative z-10 p-2">
                <AIPipelineHeroCard />
                <div className="mt-6 text-center flex items-center justify-center gap-4">
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-neutral-700" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                1-OPTIMISER
              </span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-[0.9] text-foreground uppercase mb-6">
              START WITH<br />
              THE PRODUCT<br />
              IMAGE.
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-neutral-400 font-medium leading-[1.4] mb-10 tracking-tight">
              <p>
                The product image is one of the first technical payloads a customer experiences.
              </p>
              <p className="text-neutral-500">
                1-OPTIMISER helps merchants improve the technical quality of those images without turning management into another manual task.
              </p>
            </div>
            
            {/* The Visual Narrative Steps */}
            <div className="relative border-l border-neutral-800 ml-2 pl-6 py-1 space-y-6 mb-10">
              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 bg-neutral-700 outline outline-4 outline-background" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-3 mb-1">
                  <ImageIcon className="w-3.5 h-3.5 text-neutral-500" /> Product Image
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">The raw asset delivered to the storefront.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 bg-primary outline outline-4 outline-background" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-3 mb-1">
                  <Zap className="w-3.5 h-3.5 text-primary" /> Optimization
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">Compression, resizing, and WebP format conversion.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 bg-neutral-700 outline outline-4 outline-background" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-3 mb-1">
                  <FileText className="w-3.5 h-3.5 text-neutral-500" /> AI Metadata
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">Descriptive alt text and filename structuring for context.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 bg-neutral-700 outline outline-4 outline-background" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground flex items-center gap-3 mb-1">
                  <LayoutTemplate className="w-3.5 h-3.5 text-neutral-500" /> Storefront Performance
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">Serving appropriate assets to the end user.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/apps/1-optimiser"
                className="interactive-btn inline-flex items-center justify-center gap-3 h-12 px-8 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
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
