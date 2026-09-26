import React from 'react'
import { ArrowDown } from 'lucide-react'

export const BrandStatement: React.FC = () => {
  return (
    <section id="why" className="bg-background py-24 md:py-32 lg:py-40">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-6">
                THE REALITY
              </span>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tighter leading-[0.95] text-foreground uppercase mb-6">
                EVERY STORE<br />
                CAN PERFORM<br />
                BETTER.
              </h2>
            </div>
            
            <div className="hidden lg:flex items-center gap-4 text-neutral-600 mt-20">
              <ArrowDown className="w-5 h-5 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                The Foundation
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-16 space-y-12">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-400 font-medium leading-tight">
                Every click, search, campaign and recommendation eventually arrives at the same place: <span className="text-foreground">your store</span>.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-400 font-medium leading-tight">
                The technology underneath that experience matters.
              </p>
            </div>
            
            <div className="pt-8 border-t border-neutral-800/50">
              <p className="text-sm font-mono text-neutral-500 leading-relaxed mb-6">
                01 — Marketing creates demand.<br/>
                02 — The store has to perform.
              </p>
              
              <h3 className="font-heading font-bold text-2xl tracking-tight text-foreground uppercase mb-4">
                1-GLOBE
              </h3>
              <p className="text-base text-neutral-400 leading-relaxed max-w-lg">
                Business first. Technology second. Performance always. We believe in building tools that solve actual technical challenges for online merchants, without sacrificing quality or control.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
