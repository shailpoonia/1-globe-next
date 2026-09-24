import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { ENTITY_PRODUCTS } from '@/lib/entities'

const products = [
  ENTITY_PRODUCTS['1-optimiser'],
  ENTITY_PRODUCTS['1-blog'],
  ENTITY_PRODUCTS['1-list']
];

export const ProductEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="bg-background py-24 md:py-32 lg:py-40 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="max-w-3xl mb-20 md:mb-32">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-6">
            THE 1-GLOBE ECOSYSTEM
          </span>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground uppercase">
            EVERY LAYER<br />
            OF THE STORE<br />
            MATTERS.
          </h2>
        </div>

        <div className="flex flex-col border-t border-border">
          {products.map((product) => {
            const isHighlighted = product.name === '1-OPTIMISER';
            
            return (
              <div 
                key={product.name} 
                className="group flex flex-col md:flex-row items-start md:items-baseline py-12 lg:py-16 border-b border-border gap-6 md:gap-12 transition-colors hover:bg-white/[0.02]"
              >
                {/* Number */}
                <div className="md:w-20 shrink-0">
                  <span className={`font-heading text-xl sm:text-2xl tracking-tighter font-bold ${isHighlighted ? 'text-primary' : 'text-neutral-600'}`}>
                    {product.number}
                  </span>
                </div>
                
                {/* Core Info */}
                <div className="flex-1 max-w-xl">
                  <h3 className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9] mb-4 uppercase ${isHighlighted ? 'text-foreground' : 'text-neutral-500'}`}>
                    {product.name}
                  </h3>
                  <p className={`text-sm sm:text-base font-bold uppercase tracking-widest mb-6 ${isHighlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {product.category}
                  </p>
                  <p className={`text-lg sm:text-xl font-medium leading-relaxed max-w-md ${isHighlighted ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {product.description}
                  </p>
                  
                  {/* Extra Technical Emphasis for Live Products */}
                  {isHighlighted && (
                    <div className="mt-8 bg-secondary/20 border border-white/5 p-4 rounded-sm inline-block">
                      <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 mb-2">Example Optimisation</p>
                      <p className="text-sm font-medium text-foreground tracking-wide">
                        <span className="font-bold text-primary">18.4 MB → 212 KB</span> — lighter payload, same quality
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA & Status */}
                <div className="md:w-64 shrink-0 mt-8 md:mt-0 flex md:justify-end">
                  {product.href ? (
                    <Link
                      href={product.href}
                      className="interactive-btn inline-flex items-center justify-center gap-2 px-8 h-12 border border-neutral-700 bg-transparent text-sm font-bold uppercase tracking-widest text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full md:w-auto"
                    >
                      <span>{product.ctaLabel || 'EXPLORE'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center h-12 px-2 text-sm font-bold uppercase tracking-widest text-neutral-600">
                      {product.status === 'coming-soon' ? 'COMING SOON' : 'LAUNCHING SOON'}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
