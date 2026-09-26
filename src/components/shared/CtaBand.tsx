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
  const primaryButtonClass = 'interactive-btn inline-flex items-center justify-between h-16 px-10 font-bold text-[11px] uppercase tracking-[0.2em] bg-white text-black hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full md:min-w-[320px]'
  const secondaryButtonClass = 'interactive-btn inline-flex items-center justify-center h-16 px-10 font-bold text-[11px] uppercase tracking-[0.2em] border border-neutral-800 bg-transparent text-foreground hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full md:min-w-[320px]'

  return (
    <section id={id} className={`py-32 md:py-48 relative overflow-hidden bg-background border-t border-neutral-900 ${className}`}>
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16 border-b border-neutral-900 pb-20">
          
          <div className="max-w-3xl">
            {eyebrow && (
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-neutral-700" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                  {eyebrow}
                </span>
              </div>
            )}

            <h2 className="font-heading font-bold text-6xl sm:text-7xl md:text-[6rem] tracking-tighter leading-[0.9] text-foreground uppercase mb-10">
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
              <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-[1.3] tracking-tight max-w-xl">
                {subhead}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto shrink-0">
            {primaryIsLink ? (
              <Link href={primaryCtaUrl} className={primaryButtonClass}>
                <span>{primaryCtaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ) : primaryCtaUrl === '#' ? (
              <div className={`${primaryButtonClass} opacity-70 cursor-default bg-neutral-900 text-neutral-500 border border-neutral-800 hover:bg-neutral-900`}>
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
              <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.2em] mt-4 text-center lg:text-left">
                {noteText}
              </p>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}
