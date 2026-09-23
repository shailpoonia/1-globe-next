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
              className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors uppercase tracking-[0.1em] whitespace-nowrap"
            >
              Apps
            </a>
            <a
              href="/#why"
              onClick={(e) => handleNavClick(e, '#why')}
              className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors uppercase tracking-[0.1em] whitespace-nowrap"
            >
              Why 1-globe.com
            </a>
            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors uppercase tracking-[0.1em] whitespace-nowrap ${
                pathname === '/about'
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-semibold transition-colors uppercase tracking-[0.1em] whitespace-nowrap ${
                pathname === '/pricing'
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* Center: Brand Lockup */}
          <div className="flex justify-start xl:justify-center flex-shrink-0">
            <Link
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="1-globe.com Home"
            >
              <BrandLockup
                iconSizeClass="w-8 h-8 sm:w-9 sm:h-9"
                textSizeClass="text-lg sm:text-xl"
              />
            </Link>
          </div>

          {/* Right: Primary CTA */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 flex-1">
            <div
              className="hidden sm:inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.14em] font-bold text-muted-foreground bg-secondary px-4 sm:px-6 py-2.5 cursor-not-allowed select-none"
              title="Coming to the Shopify App Store"
            >
              <span>Coming to App Store</span>
            </div>

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
              Apps
            </a>
            <a
              href="/#why"
              onClick={(e) => handleNavClick(e, '#why')}
              className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
            >
              Why 1-globe.com
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
          </nav>

          <div className="pt-6 border-t border-border flex flex-col gap-4">
            <div
              className="w-full h-14 bg-secondary text-muted-foreground font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-sm cursor-not-allowed select-none"
            >
              <span>Coming to App Store</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
