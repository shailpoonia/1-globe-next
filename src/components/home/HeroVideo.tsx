'use client'

import React, { useState, useEffect } from 'react'

export const HeroVideo: React.FC = () => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load on desktop and if user has no reduced motion preference
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isDesktop && !prefersReducedMotion) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          setShouldLoad(true)
        })
      } else {
        // Fallback for Safari
        const timeout = setTimeout(() => {
          setShouldLoad(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover object-center opacity-100 hidden md:block motion-reduce:hidden animate-in fade-in duration-1000"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  )
}
