"use client"
import React, { useState, useEffect } from 'react'
import { ArrowDown, ArrowUpRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const EditorialHero: React.FC = () => {
  const [isMobileOrReducedMotion, setIsMobileOrReducedMotion] = useState(false)

  useEffect(() => {
    const checkCondition = () => {
      const isMobile = window.innerWidth < 768
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
      setIsMobileOrReducedMotion(isMobile || prefersReducedMotion)
    }

    checkCondition()
    window.addEventListener('resize', checkCondition)

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionQuery.addEventListener('change', checkCondition)

    return () => {
      window.removeEventListener('resize', checkCondition)
      motionQuery.removeEventListener('change', checkCondition)
    }
  }, [])

  return (
    <section
      className="relative w-full min-h-[90vh] max-h-[1100px] flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Editorial Hero"
    >
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {isMobileOrReducedMotion ? (
          <Image
            src="/hero-poster.jpg"
            alt="1-globe.com background"
            fill
            className="object-cover object-center opacity-100"
            priority
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            className="w-full h-full object-cover object-center opacity-100"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Lighter overlays to make the globe more visible, mostly darkening the left side for text readability */}
        <div className="absolute inset-0 bg-background/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content - Left aligned, max-width, lots of whitespace */}
      <div className="relative z-20 w-full max-w-content mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        <div className="max-w-2xl flex flex-col items-start space-y-8">
          
          <div className="mb-4">
            <span className="text-eyebrow">
              Shopify Performance Apps · by 1-globe.com
            </span>
          </div>
          
          <h1 className="text-hero">
            Faster Stores.<br />Zero Code Bloat.<br />More <span className="text-primary">Sales</span>.
          </h1>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.15em] font-bold text-primary">
              We don't just shrink your images. We make them work.
            </p>
            <p className="text-lead max-w-xl">
              Fix your store's foundation to load fast and turn more traffic into buyers.
            </p>
          </div>

          {/* Three small light badge chips */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur text-foreground">Up to 90% lighter</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur text-foreground">Runs in Shopify</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur text-foreground">No Code</span>
          </div>

          {/* CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="#ecosystem"
              className="interactive-btn inline-flex items-center justify-center gap-2 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
            >
              <span>Explore Apps</span>
              <ArrowDown className="w-4 h-4" />
            </Link>
            <Link
              href="/apps/1-optimiser"
              className="interactive-btn inline-flex items-center justify-center gap-2 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] border border-border bg-transparent text-foreground hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
            >
              <span>See 1-Optimiser</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
