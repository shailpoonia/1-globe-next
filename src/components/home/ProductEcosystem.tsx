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
    <section id="ecosystem" className="bg-background py-32 md:py-48">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-24 md:mb-32 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-neutral-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
              THE 1-GLOBE ECOSYSTEM
            </span>
          </div>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.9] text-foreground uppercase">
            EVERY LAYER<br />
            OF THE STORE<br />
            MATTERS.
          </h2>
        </div>

        {/* 3-Layer System Architecture */}
        <div className="flex flex-col border-t border-neutral-900">
          {products.map((product, idx) => {
            const isHighlighted = product.name === '1-OPTIMISER';
            const Icon = product.icon;
            
            return (
              <div 
                key={product.name} 
                className={`group flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 py-16 border-b ${isHighlighted ? 'border-neutral-800' : 'border-neutral-900'} transition-colors duration-500`}
              >
                
                {/* Node / Number */}
                <div className="flex items-center gap-6 shrink-0 w-full lg:w-32">
                  <span className={`font-mono text-sm tracking-widest ${isHighlighted ? 'text-primary' : 'text-neutral-700'}`}>
                    {product.number}
                  </span>
                  <div className={`flex-1 h-px ${isHighlighted ? 'bg-primary/20' : 'bg-neutral-900'} lg:hidden`} />
                </div>
                
                {/* Content Block */}
                <div className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start lg:items-center">
                  
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`w-3.5 h-3.5 ${isHighlighted ? 'text-primary' : 'text-neutral-600'}`} />
                      <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${isHighlighted ? 'text-primary' : 'text-neutral-600'}`}>
                        LAYER {product.number} — {product.layerName}
                      </span>
                    </div>
                    
                    <h3 className={`font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[0.9] mb-4 uppercase ${isHighlighted ? 'text-foreground' : 'text-neutral-500'}`}>
                      {product.name}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${isHighlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {product.category}
                    </p>
                    <p className={`text-base sm:text-lg font-medium leading-relaxed ${isHighlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {product.description}
                    </p>
                  </div>

                  {/* Technical visualization / CTA area */}
                  <div className="w-full lg:w-72 shrink-0 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                        {isHighlighted ? 'Example Optimization' : 'Focus'}
                      </span>
                      <span className={`font-mono text-sm tracking-tight ${isHighlighted ? 'text-primary' : 'text-neutral-500'}`}>
                        {product.metrics}
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="inline-flex items-center px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] border self-start"
                           style={{ borderColor: isHighlighted ? 'rgba(0, 213, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)', color: isHighlighted ? '#00D5FF' : '#737373', backgroundColor: 'transparent' }}>
                        {product.status.replace('-', ' ')}
                      </div>
                      
                      {product.href && (
                        <Link
                          href={product.href}
                          className={`interactive-btn inline-flex items-center justify-between h-14 px-6 border ${isHighlighted ? 'border-neutral-700 hover:border-neutral-500 hover:text-foreground text-neutral-300' : 'border-neutral-900 text-neutral-700 pointer-events-none'} bg-transparent text-[11px] font-bold uppercase tracking-[0.2em] transition-colors w-full`}
                        >
                          <span>{product.ctaLabel || 'EXPLORE'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
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
