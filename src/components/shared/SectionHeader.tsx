import React from 'react'

export interface SectionHeaderProps {
  eyebrow?: string
  headline?: React.ReactNode
  headlinePart1?: string
  italicWord?: string
  headlinePart2?: string
  subhead?: React.ReactNode
  align?: 'left' | 'center'
  size?: 'normal' | 'large'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  headline,
  headlinePart1,
  italicWord,
  headlinePart2,
  subhead,
  align = 'center',
  size = 'normal',
  className = '',
}) => {
  const isCentered = align === 'center'
  
  // Adjusted sizes to be more restrained by default
  const headlineSize = size === 'large' 
    ? "text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight" 
    : "text-3xl sm:text-4xl tracking-tight"

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCentered ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl'
      } ${className}`}
    >
      {/* Eyebrow Label */}
      {eyebrow && (
        <div className={`mb-4 ${isCentered ? 'flex justify-center' : ''}`}>
          <span className="text-eyebrow">
            {eyebrow}
          </span>
        </div>
      )}

      {/* Main Headline */}
      <h2 className={`text-section-title mb-6`}>
        {headline ? (
          headline
        ) : (
          <>
            {headlinePart1}
            {italicWord && (
              <>
                {' '}
                <em className="italic text-primary">{italicWord}</em>
              </>
            )}
            {headlinePart2}
          </>
        )}
      </h2>

      {/* Subhead */}
      {subhead && (
        <div
          className={`text-lead ${
            isCentered ? 'mx-auto' : ''
          }`}
        >
          {subhead}
        </div>
      )}
    </div>
  )
}
