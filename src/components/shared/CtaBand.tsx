import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BrandText } from '@/components/shared/BrandLogo'
import { OPTIMIZER_STATUS } from '@/lib/entities'

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
  headlinePart1 = 'Build',
  italicWord = 'every layer',
  headlinePart2 = 'for performance',
  subhead = 'The foundational tools for high-performance ecommerce.',
  primaryCtaText = OPTIMIZER_STATUS.short,
  primaryCtaUrl = "#",
  primaryIsLink = false,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryIsLink = false,
  noteText = '',
  className = '',
}) => {
  const primaryButtonClass = 'interactive-btn inline-flex items-center justify-between h-14 px-8 font-semibold text-[13px] bg-foreground text-background hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-w-[240px]'
  const secondaryButtonClass = 'interactive-btn inline-flex items-center justify-center h-14 px-8 font-semibold text-[13px] btn-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden bg-background border-t border-neutral-900 ${className}`}>
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-b border-neutral-900 pb-16">
          
          <div className="max-w-xl">
            {eyebrow && (
              <span className="text-eyebrow block mb-6">
                {eyebrow}
              </span>
            )}

            <h2 className="text-section-title mb-6">
              {headline ? (
                headline
              ) : (
                <>
                  {headlinePart1}{' '}<br />
                  {italicWord && (
                    <>
                      {' '}
                      <span className="text-primary">{italicWord}</span>{' '}
                    </>
                  )}
                  {headlinePart2}
                </>
              )}
            </h2>

            {subhead && (
              <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed max-w-md">
                {subhead}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            {primaryIsLink ? (
              <Link href={primaryCtaUrl} className={primaryButtonClass}>
                <span><BrandText>{primaryCtaText}</BrandText></span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ) : primaryCtaUrl === '#' ? (
              <div className={`${primaryButtonClass} opacity-70 cursor-default bg-neutral-900 text-neutral-400 border border-neutral-800 hover:bg-neutral-900`}>
                <span><BrandText>{primaryCtaText}</BrandText></span>
              </div>
            ) : (
              <a
                href={primaryCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButtonClass}
              >
                <span><BrandText>{primaryCtaText}</BrandText></span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {secondaryCtaText && secondaryCtaUrl && (
              secondaryIsLink ? (
                <Link href={secondaryCtaUrl} className={secondaryButtonClass}>
                  <span><BrandText>{secondaryCtaText}</BrandText></span>
                </Link>
              ) : secondaryCtaUrl === '#' ? (
                <div className={`${secondaryButtonClass} opacity-70 cursor-default hover:bg-transparent`}>
                  <span><BrandText>{secondaryCtaText}</BrandText></span>
                </div>
              ) : (
                <a
                  href={secondaryCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryButtonClass}
                >
                  <span><BrandText>{secondaryCtaText}</BrandText></span>
                </a>
              )
            )}
            
            {noteText && (
              <p className="text-xs text-neutral-600 font-bold uppercase tracking-widest mt-2 text-center md:text-left">
                {noteText}
              </p>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}
