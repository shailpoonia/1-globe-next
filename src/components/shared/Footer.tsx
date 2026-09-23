import React from 'react'
import Link from 'next/link'
import { BrandLockup } from './BrandLogo'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-card border-t border-border overflow-hidden">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <BrandLockup iconSizeClass="w-8 h-8" textSizeClass="text-xl" />
            </Link>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-xs">
              Performance technology for ecommerce.
            </p>
          </div>

          {/* Column: Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/apps/1-optimiser" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  1-Optimiser
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground/50 font-medium">
                  1-Blog <span className="text-[10px] ml-1 uppercase tracking-wider bg-secondary px-1.5 py-0.5">Soon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/#ecosystem" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Ecosystem
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Legal Text */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pt-8 border-t border-border">
          <div className="text-xs font-medium text-muted-foreground space-y-2">
            <p className="text-foreground font-semibold mb-3">1-globe.com is operated by ONE GLOBE (F.Z.E)</p>
            <p>Ajman Free Zone C1 Building, Office C1 - 1F - SF3669, Ajman, UAE</p>
            <p>Commercial Registration No.: 37795</p>
            <p>VAT TRN: 104933863300003</p>
          </div>
          <p className="text-xs font-medium text-muted-foreground self-start md:self-end">
            &copy; {new Date().getFullYear()} 1-globe.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
