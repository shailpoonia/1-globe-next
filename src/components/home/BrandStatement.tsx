import React from 'react'
import { ArrowDown } from 'lucide-react'

export const BrandStatement: React.FC = () => {
  return (
    <section id="why" className="bg-background py-32 md:py-48">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-neutral-700" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                  THE REALITY
                </span>
              </div>
              <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-5xl lg:text-7xl tracking-tighter leading-[0.9] text-foreground uppercase">
                EVERY STORE<br />
                CAN PERFORM<br />
                BETTER.
              </h2>
            </div>
            
            <div className="hidden md:flex items-center gap-4 text-neutral-600 mt-24">
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                The Foundation
              </span>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-12 lg:pl-24 space-y-16">
            <div className="space-y-8">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-neutral-400 font-medium leading-[1.1] tracking-tight">
                Every click, search, campaign, and recommendation eventually arrives at the same place: <span className="text-white">your store</span>.
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-neutral-400 font-medium leading-[1.1] tracking-tight">
                The technology underneath that experience matters.
              </p>
            </div>
            
            <div className="pt-12 border-t border-neutral-800">
              <div className="flex flex-col gap-2 mb-10">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-primary">01</span>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Marketing creates demand.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-primary">02</span>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">The store has to perform.</p>
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-3xl tracking-tighter text-foreground uppercase mb-4">
                1-GLOBE
              </h3>
              <p className="text-lg text-neutral-400 leading-relaxed max-w-lg">
                Business first. Technology second. Performance always. We build infrastructure that solves actual technical bottlenecks for online merchants—without sacrificing quality, aesthetics, or control.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
