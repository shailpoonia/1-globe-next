import React from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroVideo } from '@/components/home/HeroVideo'

export const EditorialHero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Editorial Hero"
    >
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <Image
          src="/hero-poster.jpg"
          alt="1-globe.com background"
          fill
          className="object-cover object-[80%_center] opacity-50 mix-blend-luminosity"
          priority
        />
        
        <div className="opacity-60 mix-blend-lighten absolute inset-0">
          <HeroVideo />
        </div>

        {/* Deep cinematic gradients to push the globe back and frame the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none w-full lg:w-[85%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Hero Content - Editorial left-alignment */}
      <div className="relative z-20 w-full max-w-content mx-auto px-6 sm:px-8 lg:px-12 pt-40 pb-32">
        <div className="max-w-4xl flex flex-col items-start space-y-16">
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-px bg-neutral-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
              ECOMMERCE PERFORMANCE TECHNOLOGY
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-[4rem] leading-[0.9] sm:text-7xl md:text-8xl lg:text-[8rem] tracking-tighter uppercase text-white relative z-10">
            MAKE<br />
            ECOMMERCE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-600">PERFORM.</span>
          </h1>

          <div className="space-y-10 max-w-2xl pl-2 md:pl-4 border-l border-neutral-800">
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-neutral-300 font-medium leading-[1.3]">
              1-GLOBE builds technical tools that make online stores faster, smarter, and easier to grow.
            </p>
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em]">
              Business first. Technology second. Performance always.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link
              href="#ecosystem"
              className="interactive-btn group inline-flex items-center justify-center gap-4 h-16 px-10 font-bold text-[11px] uppercase tracking-[0.2em] bg-white text-black hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto transition-colors"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </Link>
            <Link
              href="/apps/1-optimiser"
              className="interactive-link group inline-flex items-center justify-center gap-4 h-16 px-6 font-bold text-[11px] uppercase tracking-[0.2em] text-white hover:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto transition-colors"
            >
              <span>DISCOVER 1-OPTIMISER</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
