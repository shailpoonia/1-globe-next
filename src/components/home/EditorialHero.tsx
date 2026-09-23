"use client"
import React, { useState, useEffect } from 'react'
import { ArrowDown, ArrowUpRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const EditorialHero: React.FC = () => {
  const [isMobileOrReducedMotion, setIsMobileOrReducedMotion] = useState(false)

  // Detect mobile viewport or prefers-reduced-motion
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
      className="relative w-full min-h-[85vh] max-h-[1000px] flex flex-col justify-end overflow-hidden bg-background"
      aria-label="Editorial Hero"
    >
      {/* Background Media: Video on desktop, static high-res poster image on mobile or reduced-motion */}
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

        {/* Minimalist overlays for text contrast, avoiding heavy dark muddy gradients */}
        <div className="absolute inset-0 bg-background/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent pointer-events-none" />
      </div>

      {/* Bottom-Left Minimalist Editorial Copy */}
      <div className="relative z-20 w-full max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24 lg:pb-32">
        <div className="space-y-6 max-w-4xl">
          <div className="mb-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Shopify Performance Apps · by 1-globe.com
            </span>
          </div>
          {/* Bold Editorial Headline */}
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-8xl tracking-tighter text-foreground leading-[1.05] uppercase">
            Faster Stores.<br />Zero Code Bloat.<br />More <span className="text-primary">Sales</span>.
          </h1>

          <p className="text-sm uppercase tracking-widest font-semibold text-primary mt-2">
            We don't just shrink your images. We make them work.
          </p>

          {/* Short Subline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed mt-4">
            1-globe.com builds focused Shopify apps that fix your store's foundation — so it loads fast, gets found by search and AI, and turns more of your traffic into buyers. All from inside your admin. No code. No bloat.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <span className="text-xs uppercase tracking-widest border border-border px-3 py-1 bg-background/50 backdrop-blur">Up to 90% lighter images</span>
            <span className="text-xs uppercase tracking-widest border border-border px-3 py-1 bg-background/50 backdrop-blur">Runs inside Shopify</span>
            <span className="text-xs uppercase tracking-widest border border-border px-3 py-1 bg-background/50 backdrop-blur">Set up in minutes</span>
          </div>

          {/* Clean Architectural CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="#ecosystem"
              className="inline-flex items-center gap-2 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] bg-foreground text-background hover:bg-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>Explore Apps</span>
              <ArrowDown className="w-4 h-4" />
            </Link>
            <Link
              href="/apps/1-optimiser"
              className="inline-flex items-center gap-2 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] border border-border bg-transparent text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
