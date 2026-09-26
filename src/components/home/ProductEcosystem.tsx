import React from 'react'
import Link from 'next/link'
import { ArrowRight, Layers, LayoutTemplate, Database } from 'lucide-react'

import { ENTITY_PRODUCTS } from '@/lib/entities'

const products = [
  {
    ...ENTITY_PRODUCTS['1-optimiser'],
    layerName: 'IMAGE',
    icon: Layers,
    metrics: '18.4 MB → 212 KB'
  },
  {
    ...ENTITY_PRODUCTS['1-blog'],
    layerName: 'CONTENT',
    icon: LayoutTemplate,
    metrics: 'Context & Discovery'
  },
  {
    ...ENTITY_PRODUCTS['1-list'],
    layerName: 'PRODUCT LISTINGS',
    icon: Database,
    metrics: 'Structure & Feeds'
  }
];

export const ProductEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="bg-background py-24 md:py-32 lg:py-40">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-6">
            THE 1-GLOBE ECOSYSTEM
          </span>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground uppercase">
            EVERY LAYER<br />
            OF THE STORE<br />
            MATTERS.
          </h2>
        </div>

        {/* 3-Layer System Architecture */}
        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden md:block absolute left-[39px] top-10 bottom-10 w-px bg-neutral-800" />
          
          <div className="flex flex-col gap-12 lg:gap-16">
            {products.map((product, idx) => {
              const isHighlighted = product.name === '1-OPTIMISER';
              const Icon = product.icon;
              
              return (
                <div key={product.name} className="relative group flex flex-col md:flex-row items-start gap-8 md:gap-16">
                  
                  {/* Node / Number */}
                  <div className="flex items-center gap-6 md:w-20 shrink-0 relative z-10">
                    <div className={`w-20 h-20 md:w-20 md:h-20 flex items-center justify-center border ${isHighlighted ? 'border-primary/50 bg-primary/5' : 'border-neutral-800 bg-background'} rounded-sm`}>
                      <span className={`font-heading text-2xl font-bold ${isHighlighted ? 'text-primary' : 'text-neutral-600'}`}>
                        {product.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Block */}
                  <div className={`flex-1 w-full border ${isHighlighted ? 'border-neutral-700/50 hover:border-neutral-600/80' : 'border-neutral-800/50'} bg-black/40 p-8 md:p-12 rounded-sm transition-colors duration-500`}>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start">
                      
                      <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                          <Icon className={`w-4 h-4 ${isHighlighted ? 'text-primary' : 'text-neutral-500'}`} />
                          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isHighlighted ? 'text-primary' : 'text-neutral-500'}`}>
                            LAYER {product.number} — {product.layerName}
                          </span>
                        </div>
                        
                        <h3 className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-[0.9] mb-4 uppercase ${isHighlighted ? 'text-foreground' : 'text-neutral-400'}`}>
                          {product.name}
                        </h3>
                        <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${isHighlighted ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          {product.category}
                        </p>
                        <p className={`text-base sm:text-lg font-medium leading-relaxed ${isHighlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          {product.description}
                        </p>
                      </div>

                      {/* Technical visualization / CTA area */}
                      <div className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
                        <div className={`p-4 border ${isHighlighted ? 'border-primary/20 bg-primary/5' : 'border-neutral-800 bg-neutral-900/50'} rounded-sm`}>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                            {isHighlighted ? 'Example Optimization' : 'Focus'}
                          </span>
                          <span className={`font-mono text-xs ${isHighlighted ? 'text-primary' : 'text-neutral-400'}`}>
                            {product.metrics}
                          </span>
                        </div>

                        <div className="flex flex-col gap-4 mt-auto">
                          <div className="inline-flex items-center px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border rounded-full self-start"
                               style={{ borderColor: isHighlighted ? 'rgba(0, 213, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)', color: isHighlighted ? '#00D5FF' : '#737373', backgroundColor: isHighlighted ? 'rgba(0, 213, 255, 0.05)' : 'transparent' }}>
                            {product.status.replace('-', ' ')}
                          </div>
                          
                          {product.href && (
                            <Link
                              href={product.href}
                              className={`interactive-btn inline-flex items-center justify-between h-12 px-6 border ${isHighlighted ? 'border-neutral-600 hover:bg-white/5 text-foreground' : 'border-neutral-800 text-neutral-500 pointer-events-none'} bg-transparent text-[11px] font-bold uppercase tracking-widest transition-colors w-full`}
                            >
                              <span>{product.ctaLabel || 'EXPLORE'}</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
