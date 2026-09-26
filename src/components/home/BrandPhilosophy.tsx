import React from 'react'

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="bg-background py-32 md:py-48">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Manifesto Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-32 md:mb-48">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-[1px] bg-neutral-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
              THE 1-GLOBE PHILOSOPHY
            </span>
            <div className="w-8 h-[1px] bg-neutral-700" />
          </div>
          
          <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] tracking-tighter leading-[0.85] text-foreground uppercase">
            BUSINESS FIRST.<br />
            TECHNOLOGY SECOND.<br />
            <span className="text-neutral-500">PERFORMANCE ALWAYS.</span>
          </h2>
        </div>

        {/* The Three Principles - Pure Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20 border-t border-neutral-900 pt-20">
          
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-widest text-primary mb-8 block">01</span>
            <h3 className="font-heading font-bold text-3xl lg:text-4xl tracking-tighter text-foreground uppercase mb-6 leading-none">
              SOLVE THE<br />BUSINESS PROBLEM
            </h3>
            <p className="text-lg text-neutral-500 leading-relaxed max-w-sm">
              We do not build technology for the sake of technology. Every feature, update, and architecture decision must serve the merchant's core objective: running a healthier, more efficient store.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-widest text-primary mb-8 block">02</span>
            <h3 className="font-heading font-bold text-3xl lg:text-4xl tracking-tighter text-foreground uppercase mb-6 leading-none">
              BUILD THE RIGHT<br />TECHNOLOGY
            </h3>
            <p className="text-lg text-neutral-500 leading-relaxed max-w-sm">
              We respect the platform. We write clean code, respect standard APIs, and focus on stability. A store's architecture should be strengthened by apps, not burdened by them.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-widest text-primary mb-8 block">03</span>
            <h3 className="font-heading font-bold text-3xl lg:text-4xl tracking-tighter text-foreground uppercase mb-6 leading-none">
              MEASURE THE<br />PERFORMANCE
            </h3>
            <p className="text-lg text-neutral-500 leading-relaxed max-w-sm">
              If it matters, it can be measured. From kilobyte savings to metadata generation, we build visibility into our tools so you know exactly what is changing in your store.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
