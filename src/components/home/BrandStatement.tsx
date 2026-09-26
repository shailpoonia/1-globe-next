import React from 'react'
import { ArrowDown } from 'lucide-react'

export const BrandStatement: React.FC = () => {
  return (
    <section id="why" className="bg-background py-16 md:py-24 flex items-center min-h-[55vh]">
      <div className="max-w-content mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-6">
                THE REALITY
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] text-foreground uppercase mb-6">
                EVERY STORE<br />
                CAN PERFORM<br />
                BETTER.
              </h2>
            </div>
            
            <div className="hidden lg:flex items-center gap-4 text-neutral-600 mt-12">
              <ArrowDown className="w-5 h-5 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                The Foundation
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-16 space-y-10">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-tight">
                Every click, search, campaign and recommendation eventually arrives at the same place: <span className="text-foreground">your store</span>.
              </p>
              <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-tight">
                The technology underneath that experience matters.
              </p>
            </div>
            
            <div className="pt-6 border-t border-neutral-800/50 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-sm font-mono text-neutral-500 leading-relaxed">
                  01 — Marketing creates demand.<br/>
                  02 — The store has to perform.
                </p>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-heading font-bold text-xl tracking-tight text-foreground uppercase mb-3">
                  1-GLOBE
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                  Business first. Technology second. Performance always. We build infrastructure that solves actual technical bottlenecks for online merchants, without sacrificing quality, aesthetics, or control.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
