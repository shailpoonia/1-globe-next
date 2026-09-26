import React from 'react'
import Link from 'next/link'
import { BrandLockup } from './BrandLogo'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background pt-32 pb-16">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Section - Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 mb-32">
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary mb-12">
              <BrandLockup />
            </Link>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tighter text-foreground uppercase leading-[0.9] mb-8">
              MAKE ECOMMERCE<br />
              <span className="text-neutral-500">PERFORM.</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-neutral-800" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600">
                ECOMMERCE PERFORMANCE TECHNOLOGY
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:justify-end">
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600 mb-2">Products</span>
              <Link href="/apps/1-optimiser" className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors">1-OPTIMISER</Link>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-800 cursor-default">1-BLOG</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-800 cursor-default">1-LIST</span>
            </div>
            
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600 mb-2">Company</span>
              <Link href="/about" className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors">About</Link>
              <Link href="/pricing" className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors">Pricing</Link>
              <Link href="/contact" className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600 mb-2">Knowledge</span>
              <Link href="/resources" className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors">Resources</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal & Info */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pt-12 border-t border-neutral-900">
          <div className="flex flex-col gap-3 max-w-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
              ONE GLOBE (F.Z.E)
            </p>
            <p className="text-xs text-neutral-500 leading-[1.6]">
              Ajman Free Zone C1 Building<br />
              Office C1 - 1F - SF3669, Ajman, UAE<br />
              Commercial Registration No.: 37795<br />
              TRN: 104933863300003
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">
              &copy; {currentYear} 1-GLOBE
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
