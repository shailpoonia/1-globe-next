import React from 'react'

export interface SectionHeaderProps {
  eyebrow?: string
  /** ALL CAPS headline; wrap the one keyword in <span className="text-primary">. */
  headline: React.ReactNode
  subhead?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  headline,
  subhead,
  align = 'center',
  className = '',
}) => {
  const isCentered = align === 'center'

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCentered ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <div className={`mb-4 ${isCentered ? 'flex justify-center' : ''}`}>
          <span className="text-eyebrow">{eyebrow}</span>
        </div>
      )}

      <h2 className="text-section-title mb-6">{headline}</h2>

      {subhead && (
        <div className={`text-lead ${isCentered ? 'mx-auto' : ''}`}>{subhead}</div>
      )}
    </div>
  )
}
