import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export interface CtaBandProps {
  id?: string
  eyebrow?: string
  headline?: React.ReactNode
  headlinePart1?: string
  italicWord?: string
  headlinePart2?: string
  subhead?: React.ReactNode
  primaryCtaText?: string
  primaryCtaUrl?: string
  primaryIsLink?: boolean
  secondaryCtaText?: string
  secondaryCtaUrl?: string
  secondaryIsLink?: boolean
  noteText?: string
  className?: string
}

export const CtaBand: React.FC<CtaBandProps> = ({
  id = 'cta',
  eyebrow = 'Take Control',
  headline,
  headlinePart1 = 'Make your store',
  italicWord,
  headlinePart2 = 'perform.',
  subhead = 'The foundational tools for high-performance ecommerce.',
  primaryCtaText = 'COMING SOON TO SHOPIFY',
  primaryCtaUrl = "#",
  primaryIsLink = false,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryIsLink = false,
  noteText = '',
  className = '',
}) => {
  const primaryButtonClass = 'interactive-btn inline-flex items-center justify-between h-16 px-8 font-bold text-[11px] uppercase tracking-widest bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-w-[280px]'
  const secondaryButtonClass = 'interactive-btn inline-flex items-center justify-center h-16 px-8 font-bold text-[11px] uppercase tracking-widest border border-neutral-800 bg-transparent text-foreground hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

  return (
    <section id={id} className={`py-32 md:py-48 relative overflow-hidden bg-background border-t border-neutral-900 ${className}`}>
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-16 border-b border-neutral-900 pb-16">
          
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-6">
                {eyebrow}
              </span>
            )}

            <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground uppercase mb-8">
              {headline ? (
                headline
              ) : (
                <>
                  {headlinePart1}<br />
                  {italicWord && (
                    <>
                      {' '}
                      <em className="italic">{italicWord}</em>
                    </>
                  )}
                  {headlinePart2}
                </>
              )}
            </h2>

            {subhead && (
              <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed max-w-lg">
                {subhead}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            {primaryIsLink ? (
              <Link href={primaryCtaUrl} className={primaryButtonClass}>
                <span>{primaryCtaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ) : primaryCtaUrl === '#' ? (
              <div className={`${primaryButtonClass} opacity-70 cursor-default bg-neutral-900 text-neutral-500 border border-neutral-800`}>
                <span>{primaryCtaText}</span>
              </div>
            ) : (
              <a
                href={primaryCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButtonClass}
              >
                <span>{primaryCtaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {secondaryCtaText && secondaryCtaUrl && (
              secondaryIsLink ? (
                <Link href={secondaryCtaUrl} className={secondaryButtonClass}>
                  <span>{secondaryCtaText}</span>
                </Link>
              ) : secondaryCtaUrl === '#' ? (
                <div className={`${secondaryButtonClass} opacity-70 cursor-default`}>
                  <span>{secondaryCtaText}</span>
                </div>
              ) : (
                <a
                  href={secondaryCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryButtonClass}
                >
                  <span>{secondaryCtaText}</span>
                </a>
              )
            )}
            
            {noteText && (
              <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest mt-4 text-center md:text-left">
                {noteText}
              </p>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}
