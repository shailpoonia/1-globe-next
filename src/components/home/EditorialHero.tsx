import React from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroVideo } from '@/components/home/HeroVideo'

export const EditorialHero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Editorial Hero"
    >
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <Image
          src="/hero-poster.jpg"
          alt="1-globe.com background"
          fill
          className="object-cover object-[80%_center] opacity-60"
          priority
        />
        
        <div className="opacity-70 mix-blend-lighten absolute inset-0">
          <HeroVideo />
        </div>

        {/* Stronger cinematic gradients to blend the globe into the composition */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none w-full md:w-[80%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* Hero Content - Strong editorial left-alignment */}
      <div className="relative z-20 w-full max-w-content mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">
        <div className="max-w-3xl flex flex-col items-start space-y-12">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-primary/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              ECOMMERCE PERFORMANCE TECHNOLOGY
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tighter leading-[0.9] uppercase text-white relative z-10">
            MAKE<br />
            ECOMMERCE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">PERFORM.</span>
          </h1>

          <div className="space-y-8 max-w-2xl">
            <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-300 font-medium leading-tight">
              1-GLOBE builds technical tools that make online stores faster, smarter, and easier to grow.
            </p>
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest border-l-2 border-primary pl-4 py-1">
              Business first. Technology second. Performance always.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link
              href="#ecosystem"
              className="interactive-btn inline-flex items-center justify-center gap-3 h-14 px-8 font-bold text-[11px] uppercase tracking-widest bg-white text-black hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowDown className="w-4 h-4" />
            </Link>
            <Link
              href="/apps/1-optimiser"
              className="interactive-link inline-flex items-center justify-center gap-3 h-14 px-4 font-bold text-[11px] uppercase tracking-widest text-white hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
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
