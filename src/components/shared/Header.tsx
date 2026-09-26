'use client'

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
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Products', href: '/#ecosystem' },
    { name: 'Why 1-GLOBE', href: '/#merchant-story' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.split('#')[1]
      if (pathname === '/') {
        e.preventDefault()
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
          setMobileMenuOpen(false)
        }
      } else {
        setMobileMenuOpen(false)
        router.push(href)
      }
    } else {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-neutral-900 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Desktop Nav - Left */}
          <nav className="hidden lg:flex items-center gap-10 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-1 ${
                  pathname === link.href ? 'text-foreground' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo - Center */}
          <div className="flex-shrink-0 flex justify-center lg:flex-1">
            <Link 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="1-globe.com Home"
            >
              <BrandLockup />
            </Link>
          </div>

          {/* CTA - Right */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <Link
              href="/apps/1-optimiser"
              className="interactive-btn flex items-center justify-center h-12 px-6 font-bold text-[10px] uppercase tracking-[0.2em] border border-neutral-800 bg-background text-foreground hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Explore 1-OPTIMISER
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-neutral-900 shadow-xl overflow-hidden">
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-bold uppercase tracking-[0.15em] ${
                  pathname === link.href ? 'text-foreground' : 'text-neutral-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-neutral-900">
              <Link
                href="/apps/1-optimiser"
                onClick={(e) => handleNavClick(e, '/apps/1-optimiser')}
                className="interactive-btn flex items-center justify-center w-full h-14 font-bold text-[11px] uppercase tracking-[0.2em] bg-white text-black"
              >
                Explore 1-OPTIMISER
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
