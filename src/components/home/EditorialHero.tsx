import React from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroVideo } from '@/components/home/HeroVideo'

export const EditorialHero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] max-h-[1100px] flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Editorial Hero"
    >
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        {/* Optimized LCP Poster Image */}
        <Image
          src="/hero-poster.jpg"
          alt="1-globe.com background"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        
        {/* Video overlay - only loads on desktop with no reduced motion after idle */}
        <div className="opacity-80 mix-blend-lighten absolute inset-0">
          <HeroVideo />
        </div>

        {/* Clean, editorial overlays for strong text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Hero Content - Strong editorial left-alignment */}
      <div className="relative z-20 w-full max-w-content mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="max-w-3xl flex flex-col items-start space-y-8 lg:space-y-10">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              1-GLOBE - ECOMMERCE PERFORMANCE TECHNOLOGY
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tighter leading-[0.95] uppercase text-white">
            MAKE<br />
            ECOMMERCE<br />
            <span className="text-primary">PERFORM.</span>
          </h1>

          <div className="space-y-6 pt-2 max-w-2xl">
            <p className="text-xl sm:text-2xl text-neutral-300 font-medium leading-snug">
              1-GLOBE builds ecommerce performance technology that makes online stores faster, smarter, and easier to grow.
            </p>
            <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest">
              Business first. Technology second. Performance always.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="#ecosystem"
              className="interactive-btn inline-flex items-center justify-center gap-2 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] bg-white text-black hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowDown className="w-4 h-4" />
            </Link>
            <Link
              href="/apps/1-optimiser"
              className="interactive-btn inline-flex items-center justify-center gap-2 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] border border-neutral-700 bg-transparent text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
            >
              <span>DISCOVER 1-OPTIMISER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
