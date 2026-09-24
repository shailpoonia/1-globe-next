import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { AIPipelineHeroCard } from '@/components/feature-page/AIPipelineHeroCard'

export const ProductDetailHome: React.FC = () => {
  return (
    <section id="1-optimiser-intro" className="bg-background py-24 md:py-32 lg:py-40 border-b border-border overflow-hidden">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
        
        {/* Story & Copy */}
        <div className="flex flex-col max-w-xl order-1">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-6">
            1-OPTIMISER
          </span>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-foreground uppercase mb-8">
            START WITH<br />
            THE PRODUCT IMAGE.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-neutral-400 font-medium leading-relaxed mb-12">
            <p>
              The product image is one of the first things a customer experiences in an online store.
            </p>
            <p>
              1-OPTIMISER helps merchants improve the technical quality and performance of those images without turning image management into another manual task.
            </p>
          </div>
          
          {/* Mobile Only: Visual Demo inserted between copy and feature block */}
          <div className="lg:hidden w-full max-w-md mx-auto mb-12 relative">
            <AIPipelineHeroCard />
            <div className="mt-4 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                Illustrative result
              </span>
            </div>
          </div>

          <div className="mb-10 lg:mt-6 border-t border-border pt-10">
            <span className="text-sm font-bold uppercase tracking-widest text-foreground block mb-4">
              IMAGE PERFORMANCE
            </span>
            <p className="text-base text-neutral-500 leading-relaxed max-w-md">
              Compress image payloads, generate descriptive SEO filenames, and write contextual alt text automatically. All data is synced directly to the Shopify catalog while keeping existing links completely intact.
            </p>
          </div>

          <div>
            <Link
              href="/apps/1-optimiser"
              className="interactive-btn inline-flex items-center justify-center gap-2 h-14 px-8 border border-neutral-700 bg-transparent text-sm font-bold uppercase tracking-widest text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
            >
              <span>EXPLORE 1-OPTIMISER</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Desktop Only: Visual Demo on the right */}
        <div className="hidden lg:block relative w-full lg:max-w-none order-2">
          <div className="flex justify-end">
            <div className="w-full max-w-md">
              <AIPipelineHeroCard />
              <div className="mt-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                  Illustrative result
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
