import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const MerchantStory: React.FC = () => {
  return (
    <section id="merchant-story" className="bg-white text-black py-32 md:py-48">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-neutral-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                MERCHANT STORY
              </span>
            </div>
            
            <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-[0.9] text-black uppercase mb-12">
              BUILT FOR<br />
              THE MERCHANTS<br />
              IN THE TRENCHES.
            </h2>
            
            <div className="space-y-8 text-xl md:text-2xl text-neutral-600 font-medium leading-[1.3] mb-16 tracking-tight">
              <p>
                We started 1-GLOBE because we were tired of generic tools that made grand promises but broke the storefront.
              </p>
              <p>
                We build for the technical merchants, the operators, and the agency partners who know that details actually matter.
              </p>
            </div>
            
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:text-neutral-500 transition-colors"
            >
              <span className="border-b-2 border-black group-hover:border-neutral-500 pb-1 transition-colors">READ OUR STORY</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="w-full aspect-square md:aspect-[4/3] bg-neutral-100 overflow-hidden relative border border-neutral-200">
              {/* Abstract editorial layout representing merchants/orders */}
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                <div className="w-full h-full border border-neutral-300 flex flex-col justify-between p-8 md:p-12 bg-white">
                  <div className="flex justify-between items-start">
                    <div className="w-24 h-px bg-neutral-900" />
                    <div className="w-4 h-4 rounded-full border border-neutral-900 bg-neutral-100" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center max-w-sm">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Store Architecture</div>
                    <div className="text-3xl font-heading font-bold text-neutral-800 uppercase tracking-tighter leading-[0.9]">
                      STRUCTURAL<br/>INTEGRITY
                    </div>
                  </div>

                  <div className="space-y-6 w-full max-w-xs">
                    <div className="w-full h-px bg-neutral-300" />
                    <div className="w-3/4 h-px bg-neutral-300" />
                    <div className="w-4/5 h-px bg-neutral-300" />
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
