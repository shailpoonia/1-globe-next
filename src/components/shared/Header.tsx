"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { BrandLockup } from './BrandLogo'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileMenuOpen(false)
    } else {
      // If we're on another page, let the default behavior navigate to /#hash
      // But we can intercept and navigate cleanly:
      e.preventDefault()
      setMobileMenuOpen(false)
      router.push('/' + hash)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Left: Navigation (Desktop) */}
          <nav className="hidden xl:flex items-center gap-8 flex-1">
            <a
              href="/#ecosystem"
              onClick={(e) => handleNavClick(e, '#ecosystem')}
              className="text-sm font-semibold text-foreground/80 interactive-link uppercase tracking-[0.1em] whitespace-nowrap"
            >
              Products
            </a>
            <a
              href="/#why"
              onClick={(e) => handleNavClick(e, '#why')}
              className="text-sm font-semibold text-foreground/80 interactive-link uppercase tracking-[0.1em] whitespace-nowrap"
            >
              Why 1-GLOBE
            </a>
            <Link
              href="/about"
              className={`text-sm font-semibold interactive-link uppercase tracking-[0.1em] whitespace-nowrap ${
                pathname === '/about'
                  ? '!text-primary'
                  : 'text-foreground/80'
              }`}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-semibold interactive-link uppercase tracking-[0.1em] whitespace-nowrap ${
                pathname === '/pricing'
                  ? '!text-primary'
                  : 'text-foreground/80'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className={`text-sm font-semibold interactive-link uppercase tracking-[0.1em] whitespace-nowrap ${
                pathname === '/resources' || pathname.startsWith('/resources/')
                  ? '!text-primary'
                  : 'text-foreground/80'
              }`}
            >
              Resources
            </Link>
          </nav>

          {/* Center: Brand Lockup */}
          <div className="flex justify-start xl:justify-center flex-shrink-0">
            <Link
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="1-globe.com Home"
            >
              <BrandLockup />
            </Link>
          </div>

          {/* Right: Primary CTA */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 flex-1">
            <Link
              href="/apps/1-optimiser"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 h-10 px-6 border border-neutral-700 bg-transparent text-xs font-bold uppercase tracking-widest text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>EXPLORE 1-OPTIMISER</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="xl:hidden p-2 text-foreground/90 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-background pt-24 px-6 pb-10 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-6 pt-4">
            <a
              href="/#ecosystem"
              onClick={(e) => handleNavClick(e, '#ecosystem')}
              className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="/#why"
              onClick={(e) => handleNavClick(e, '#why')}
              className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
            >
              Why 1-GLOBE
            </a>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-heading font-bold transition-colors ${
                pathname === '/about'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-heading font-bold transition-colors ${
                pathname === '/pricing'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-heading font-bold transition-colors ${
                pathname === '/resources' || pathname.startsWith('/resources/')
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Resources
            </Link>
          </nav>

          <div className="pt-6 border-t border-border flex flex-col gap-4">
            <Link
              href="/apps/1-optimiser"
              onClick={() => setMobileMenuOpen(false)}
              className="interactive-btn w-full h-14 border border-neutral-700 bg-transparent text-foreground font-bold uppercase tracking-widest flex items-center justify-center gap-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>EXPLORE 1-OPTIMISER</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
