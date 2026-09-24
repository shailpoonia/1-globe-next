import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background text-foreground selection:bg-primary/20 selection:text-primary px-6 text-center">
      <h1 className="font-heading font-bold text-6xl md:text-8xl tracking-tighter leading-none mb-6">
        404
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground font-medium mb-10 max-w-md">
        The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="interactive-btn inline-flex items-center justify-center h-12 px-8 border border-neutral-700 bg-transparent text-sm font-bold uppercase tracking-widest text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        RETURN TO HOME
      </Link>
    </div>
  )
}
