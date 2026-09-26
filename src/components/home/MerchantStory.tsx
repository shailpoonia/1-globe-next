import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const MerchantStory: React.FC = () => {
  return (
    <section id="merchant-story" className="bg-foreground text-background py-24 md:py-32 lg:py-40">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-8">
              MERCHANT STORY
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[0.95] text-background uppercase mb-8">
              BUILT FOR<br />THE MERCHANTS<br />IN THE TRENCHES.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-neutral-600 font-medium leading-relaxed mb-12">
              <p>
                We started 1-GLOBE because we were tired of generic tools that made grand promises but broke the storefront.
              </p>
              <p>
                We build for the technical merchants, the operators, and the agency partners who know that details actually matter.
              </p>
            </div>
            
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-background hover:text-neutral-500 transition-colors"
            >
              <span className="border-b border-background group-hover:border-neutral-500 pb-1 transition-colors">Read our story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden rounded-sm relative">
              <div className="absolute inset-0 bg-neutral-200" />
              {/* Abstract editorial layout representing merchants/orders */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <div className="w-3/4 h-3/4 border border-black/10 flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-1 bg-black/20" />
                    <div className="w-8 h-8 rounded-full border border-black/20" />
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-1 bg-black/10" />
                    <div className="w-2/3 h-1 bg-black/10" />
                    <div className="w-4/5 h-1 bg-black/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
