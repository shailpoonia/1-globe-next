import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const MerchantStory: React.FC = () => {
  return (
    <section id="merchant-story" className="bg-background py-24 md:py-32 lg:py-40 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Headline */}
          <div className="lg:col-span-6 sticky top-32">
            <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground uppercase">
              BUILT FROM<br />
              THE MERCHANT'S<br />
              SIDE.
            </h2>
          </div>
          
          {/* Right Column - Story & Philosophy */}
          <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-4">
            <div className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed space-y-6 mb-12">
              <p>
                1-GLOBE was built around the practical problems ecommerce businesses encounter every day. 
              </p>
              <p>
                The goal is not to add another layer of software to the store. It is to build focused technology that solves a specific problem, integrates into the existing ecommerce workflow, and improves the underlying experience—removing the friction of unnecessary complexity and disconnected tools.
              </p>
              
            </div>
            
            <div className="pb-16 mb-16 border-b border-border">
              <Link
                href="/about"
                className="interactive-btn inline-flex items-center justify-center gap-2 h-14 px-8 border border-neutral-700 bg-transparent text-sm font-bold uppercase tracking-widest text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-fit"
              >
                <span>READ THE 1-GLOBE STORY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Product Connection */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-6">
                THE WORK CONTINUES
              </span>
              <ul className="flex flex-col gap-4">
                <li className="flex items-baseline gap-4 group">
                  <span className="text-sm font-heading font-bold text-neutral-700 group-hover:text-primary transition-colors">01</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                    <Link href="/apps/1-optimiser" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">
                      1-OPTIMISER
                    </Link>
                    <span className="text-primary px-1">/</span> <span className="text-neutral-400">IMAGE PERFORMANCE</span>
                  </span>
                </li>
                <li className="flex items-baseline gap-4 group">
                  <span className="text-sm font-heading font-bold text-neutral-700 group-hover:text-primary transition-colors">02</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                    1-BLOG <span className="text-primary px-1">/</span> <span className="text-neutral-400">CONTENT PERFORMANCE</span>
                  </span>
                </li>
                <li className="flex items-baseline gap-4 group">
                  <span className="text-sm font-heading font-bold text-neutral-700 group-hover:text-primary transition-colors">03</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                    1-LIST <span className="text-primary px-1">/</span> <span className="text-neutral-400">PRODUCT LISTING PERFORMANCE</span>
                  </span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
