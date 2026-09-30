import React from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroVideo } from '@/components/home/HeroVideo'
import { AppLockup } from '@/components/shared/BrandLogo'

export const EditorialHero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Editorial Hero"
    >
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <Image
          src="/hero-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[80%_center] opacity-60"
          loading="eager"
          fetchPriority="high"
        />
        
        <div className="opacity-70 mix-blend-lighten absolute inset-0">
          <HeroVideo />
        </div>

        {/* Stronger cinematic gradients to blend the globe into the composition */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none w-full md:w-[80%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* Hero Content - Strong editorial left-alignment */}
      <div className="relative z-20 w-full max-w-content mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-20">
        <div className="max-w-3xl flex flex-col items-start space-y-10">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-primary/50" />
            <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-primary">
              ECOMMERCE PERFORMANCE TECHNOLOGY
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-5xl sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem] tracking-tight leading-[1.05] uppercase text-white relative z-10">
            THE{' '}<br />
            <span className="text-primary">PERFORMANCE LAYER</span>{' '}<br />
            FOR ECOMMERCE
          </h1>

          <div className="space-y-8 max-w-2xl">
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 font-medium leading-tight">
              1-GLOBE builds technical tools that make online stores faster, smarter, and easier to grow.
            </p>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-l-2 border-primary pl-4 py-1">
              Business first. Technology second. Performance always.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link
              href="#ecosystem"
              className="interactive-btn inline-flex items-center justify-center gap-3 h-14 px-8 font-semibold text-[13px] bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
            >
              <span>Explore products</span>
              <ArrowDown className="w-4 h-4" />
            </Link>
            <Link
              href="/apps/1-optimizer"
              className="interactive-btn inline-flex items-center justify-center gap-3 h-14 px-8 font-semibold text-[13px] btn-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2.5">Discover <AppLockup app="optimizer" name="1-OPTIMIZER" className="text-[15px]" /></span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
