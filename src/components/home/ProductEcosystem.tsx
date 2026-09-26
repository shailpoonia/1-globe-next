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
    <section id="ecosystem" className="bg-background py-16 md:py-24 min-h-[65vh] flex items-center">
      <div className="max-w-content mx-auto w-full px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-6">
            THE 1-GLOBE ECOSYSTEM
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[0.95] text-foreground uppercase">
            EVERY LAYER<br />
            OF THE STORE<br />
            MATTERS.
          </h2>
        </div>

        {/* 3-Layer System Architecture */}
        <div className="flex flex-col gap-8 md:gap-10 border-l border-neutral-800/50 pl-6 md:pl-12 py-2">
          {products.map((product, idx) => {
            const isHighlighted = product.name === '1-OPTIMISER';
            const Icon = product.icon;
            
            return (
              <div key={product.name} className="relative group flex flex-col md:flex-row items-start justify-between gap-8 py-6 md:py-8 border-b border-neutral-900 last:border-0 last:pb-0">
                
                {/* Node Tracker */}
                <div className="absolute -left-[31px] md:-left-[55px] top-10 md:top-12 w-2 h-2 rounded-full bg-background border border-neutral-700 outline outline-4 outline-background" 
                     style={{ borderColor: isHighlighted ? '#00D5FF' : '', backgroundColor: isHighlighted ? '#00D5FF' : '' }} />
                
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-mono text-xs ${isHighlighted ? 'text-primary' : 'text-neutral-500'}`}>{product.number}</span>
                    <div className="w-1 h-1 rounded-full bg-neutral-700" />
                    <Icon className={`w-4 h-4 ${isHighlighted ? 'text-primary' : 'text-neutral-500'}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isHighlighted ? 'text-primary' : 'text-neutral-500'}`}>
                      LAYER {product.number} — {product.layerName}
                    </span>
                  </div>
                  
                  <h3 className={`font-heading font-bold text-3xl sm:text-4xl tracking-tighter leading-[0.9] mb-3 uppercase ${isHighlighted ? 'text-foreground' : 'text-neutral-400'}`}>
                    {product.name}
                  </h3>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isHighlighted ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {product.category}
                  </p>
                  <p className={`text-sm md:text-base font-medium leading-relaxed ${isHighlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {product.description}
                  </p>
                </div>

                {/* Technical visualization / CTA area */}
                <div className="w-full md:w-64 shrink-0 flex flex-col gap-5 pt-2">
                  <div className={`px-4 py-3 border ${isHighlighted ? 'border-primary/20 bg-primary/5' : 'border-neutral-800 bg-neutral-900/30'} rounded-sm`}>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 block mb-1.5">
                      {isHighlighted ? 'Example Optimization' : 'Focus'}
                    </span>
                    <span className={`font-mono text-xs ${isHighlighted ? 'text-primary' : 'text-neutral-400'}`}>
                      {product.metrics}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="inline-flex items-center px-2 py-1 text-[9px] font-bold uppercase tracking-widest border rounded-full self-start"
                          style={{ borderColor: isHighlighted ? 'rgba(0, 213, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)', color: isHighlighted ? '#00D5FF' : '#737373', backgroundColor: isHighlighted ? 'rgba(0, 213, 255, 0.05)' : 'transparent' }}>
                      {product.status.replace('-', ' ')}
                    </div>
                    
                    {product.href && (
                      <Link
                        href={product.href}
                        className={`interactive-btn inline-flex items-center justify-between h-10 px-4 border ${isHighlighted ? 'border-neutral-600 hover:bg-white/5 text-foreground' : 'border-neutral-800 text-neutral-500 pointer-events-none'} bg-transparent text-[10px] font-bold uppercase tracking-widest transition-colors w-full rounded-sm`}
                      >
                        <span>{product.ctaLabel || 'EXPLORE'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
