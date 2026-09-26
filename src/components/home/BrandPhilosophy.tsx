import React from 'react'
import { ArrowDown } from 'lucide-react'

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="bg-background py-24 md:py-32 lg:py-40">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Manifesto Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 md:mb-40">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-10">
            THE 1-GLOBE PHILOSOPHY
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[0.95] text-foreground uppercase">
            BUSINESS FIRST.<br />
            TECHNOLOGY SECOND.<br />
            <span className="text-primary">PERFORMANCE ALWAYS.</span>
          </h2>
          <div className="mt-16 w-px h-24 bg-gradient-to-b from-neutral-800 to-transparent mx-auto" />
        </div>

        {/* The Three Principles - No Cards, Pure Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 border-t border-neutral-800 pt-16">
          
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">01</span>
            <h3 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight text-foreground uppercase mb-6 leading-tight">
              SOLVE THE<br />BUSINESS PROBLEM
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed font-medium">
              We do not build technology for the sake of technology. Every feature, update, and architecture decision must serve the merchant's core objective: running a healthier, more efficient store.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">02</span>
            <h3 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight text-foreground uppercase mb-6 leading-tight">
              BUILD THE RIGHT<br />TECHNOLOGY
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed font-medium">
              We respect the platform. We write clean code, respect standard APIs, and focus on stability. A store's architecture should be strengthened by apps, not burdened by them.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">03</span>
            <h3 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight text-foreground uppercase mb-6 leading-tight">
              MEASURE THE<br />PERFORMANCE
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed font-medium">
              If it matters, it can be measured. From kilobyte savings to metadata generation, we build visibility into our tools so you know exactly what is changing in your store.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
