import React from 'react'
import Link from 'next/link'
import { BrandLockup } from './BrandLogo'
import { SocialLinks } from './SocialLinks'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Section - Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary mb-6">
              <BrandLockup />
            </Link>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-foreground leading-tight mb-4">
              Make ecommerce{' '}<br />
              <span className="text-primary">perform</span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
              ECOMMERCE PERFORMANCE TECHNOLOGY
            </p>
            <SocialLinks />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-end">
            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Products</span>
              <Link href="/apps/1-optimizer" className="text-xs font-semibold text-neutral-400 hover:text-foreground transition-colors">1-OPTIMIZER</Link>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 cursor-default">1-BLOG</span>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 cursor-default">1-LIST</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Company</span>
              <Link href="/about" className="text-xs font-semibold text-neutral-400 hover:text-foreground transition-colors">About</Link>
              <Link href="/pricing" className="text-xs font-semibold text-neutral-400 hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/contact" className="text-xs font-semibold text-neutral-400 hover:text-foreground transition-colors">Contact</Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Knowledge</span>
              <Link href="/resources" className="text-xs font-semibold text-neutral-400 hover:text-foreground transition-colors">Resources</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal & Info */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-8 border-t border-neutral-900">
          <div className="flex flex-col gap-2 max-w-sm">
            <p className="text-[13px] font-bold uppercase tracking-widest text-neutral-400">
              ONE GLOBE (F.Z.E)
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Ajman Free Zone C1 Building{' '}<br />
              Office C1 - 1F - SF3669, Ajman, UAE{' '}<br />
              Commercial Registration No.: 37795{' '}<br />
              TRN: 104933863300003
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <Link href="/privacy" className="text-[13px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[13px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
            <span className="text-[13px] font-bold uppercase tracking-widest text-neutral-400">
              &copy; {currentYear} 1-GLOBE
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
