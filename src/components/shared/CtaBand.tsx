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
  eyebrow = 'Get Started',
  headline,
  headlinePart1 = 'Make your store perform.',
  italicWord,
  headlinePart2,
  subhead = 'Explore the 1-globe.com ecosystem.',
  primaryCtaText = 'COMING TO APP STORE',
  primaryCtaUrl = "#",
  primaryIsLink = false,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryIsLink = false,
  noteText = '',
  className = '',
}) => {
  const primaryButtonClass = 'interactive-btn inline-flex items-center gap-1.5 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
  const secondaryButtonClass = 'interactive-btn inline-flex items-center gap-1.5 h-14 px-8 font-bold text-sm uppercase tracking-[0.14em] border border-border bg-transparent text-foreground hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

  return (
    <section id={id} className={`section-spacing relative overflow-hidden bg-background ${className}`}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="mb-6">
            <span className="text-eyebrow !text-primary">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Headline */}
        <h2 className="text-section-title mb-6">
          {headline ? (
            headline
          ) : (
            <>
              {headlinePart1}
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

        {/* Subtext */}
        {subhead && (
          <div className="text-lead mb-10 max-w-2xl mx-auto">
            {subhead}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {primaryIsLink ? (
            <Link href={primaryCtaUrl} className={primaryButtonClass}>
              <span>{primaryCtaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ) : primaryCtaUrl === '#' ? (
            <div className={`${primaryButtonClass} opacity-80 cursor-default`}>
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
              <div className={`${secondaryButtonClass} opacity-80 cursor-default`}>
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
        </div>

        {/* Low-Risk Close Note */}
        {noteText && (
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mt-8">
            {noteText}
          </p>
        )}
      </div>
    </section>
  )
}
