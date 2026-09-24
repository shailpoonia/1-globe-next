import React from 'react'

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="brand-philosophy" className="bg-background py-24 md:py-32 lg:py-40 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Core Manifesto */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-6">
            THE 1-GLOBE APPROACH
          </span>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground uppercase mb-10">
            BUSINESS FIRST.<br />
            TECHNOLOGY SECOND.<br />
            PERFORMANCE ALWAYS.
          </h2>
          <div className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed max-w-3xl space-y-6">
            <p>
              Technology should solve a business problem. The goal is not to add more software to an ecommerce store. The goal is to make the store perform better.
            </p>
            <p>
              1-GLOBE builds the ecommerce performance technology—from image processing to content architecture—that helps online stores operate faster and reach more customers.
            </p>
          </div>
        </div>

        {/* Editorial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-t border-border pt-16 lg:pt-24">
          
          {/* Principle 1 */}
          <div className="flex flex-col group">
            <span className="font-heading text-3xl font-bold text-neutral-700 group-hover:text-primary transition-colors mb-6 block">01</span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              SOLVE THE BUSINESS PROBLEM
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Every tool begins by identifying a structural bottleneck that prevents a storefront from operating at peak efficiency. We build technology around the real operational needs of ecommerce businesses.
            </p>
            {/* Connection to products */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-1">Execution</span>
              <span className="text-xs font-bold text-foreground uppercase tracking-widest">1-OPTIMISER <span className="text-primary px-1">/</span> IMAGE PERFORMANCE</span>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="flex flex-col group">
            <span className="font-heading text-3xl font-bold text-neutral-700 group-hover:text-primary transition-colors mb-6 block">02</span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              BUILD THE RIGHT TECHNOLOGY
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-10">
              When infrastructure is invisible, the product stands out. We prioritize native integration, speed, indexability, and clean architecture over superficial dashboards and generic software patterns.
            </p>
            {/* Connection to products */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-1">Execution</span>
              <span className="text-xs font-bold text-foreground uppercase tracking-widest">1-BLOG <span className="text-primary px-1">/</span> CONTENT PERFORMANCE</span>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="flex flex-col group">
            <span className="font-heading text-3xl font-bold text-neutral-700 group-hover:text-primary transition-colors mb-6 block">03</span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              MEASURE THE PERFORMANCE
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Results must be observable in the technical assets, data structures, and user experiences that make up the store. If an engineering choice doesn't drive measurable performance, it is removed.
            </p>
            {/* Connection to products */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-1">Execution</span>
              <span className="text-xs font-bold text-foreground uppercase tracking-widest">1-LIST <span className="text-primary px-1">/</span> PRODUCT LISTING PERFORMANCE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
