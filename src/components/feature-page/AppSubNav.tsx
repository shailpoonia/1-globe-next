import React from 'react'
import Link from 'next/link'

interface AppSubNavProps {
  appName: React.ReactNode
  ctaText?: string
}

export const AppSubNav: React.FC<AppSubNavProps> = ({
  appName,
  ctaText = "COMING SOON TO SHOPIFY"
}) => {
  return (
    <div className="sticky top-[4.5rem] z-40 w-full border-b border-border bg-background">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 h-14 flex items-center justify-between gap-3 overflow-hidden">
        {/* Breadcrumb / Back Link */}
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest shrink-0">
          <Link
            href="/"
            className="text-muted-foreground interactive-link flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Back to 1-globe.com home"
          >
            &larr; 1-globe.com
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground">{appName}</span>
        </div>

        {/* Section Jump Links - horizontally scrollable on mobile */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground overflow-x-auto no-scrollbar"
          aria-label="App page sections"
        >
          <a href="#features" className="interactive-link whitespace-nowrap">
            Features
          </a>
          <a href="#faq" className="interactive-link whitespace-nowrap">
            FAQ
          </a>
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:block shrink-0">
          <div className="inline-flex items-center justify-center h-9 px-4 text-[10px] font-bold uppercase tracking-widest bg-secondary text-muted-foreground cursor-not-allowed select-none">
            {ctaText}
          </div>
        </div>
      </div>
    </div>
  )
}
