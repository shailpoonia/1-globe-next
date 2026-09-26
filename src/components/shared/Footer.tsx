import React from 'react'
import Link from 'next/link'
import { BrandLockup } from './BrandLogo'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-neutral-900 pt-24 pb-12">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Section - Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary mb-8">
              <BrandLockup />
            </Link>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tighter text-foreground uppercase leading-tight mb-6">
              MAKE ECOMMERCE<br />
              <span className="text-neutral-500">PERFORM.</span>
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-600">
              ECOMMERCE PERFORMANCE TECHNOLOGY
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:justify-end">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-2">Products</span>
              <Link href="/apps/1-optimiser" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-foreground transition-colors">1-OPTIMISER</Link>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-700 cursor-default">1-BLOG</span>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-700 cursor-default">1-LIST</span>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-2">Company</span>
              <Link href="/about" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-foreground transition-colors">About</Link>
              <Link href="/pricing" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-foreground transition-colors">Contact</Link>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-2">Knowledge</span>
              <Link href="/resources" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-foreground transition-colors">Resources</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal & Info */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-12 border-t border-neutral-900">
          <div className="flex flex-col gap-2 max-w-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">
              ONE GLOBE (F.Z.E)
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Ajman Free Zone C1 Building<br />
              Office C1 - 1F - SF3669, Ajman, UAE<br />
              TRN: 104933863300003
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-700">
              &copy; {currentYear} 1-GLOBE
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
