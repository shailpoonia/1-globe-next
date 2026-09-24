import React from 'react'

export interface SectionProps {
  id?: string
  variant?: 'default' | 'card' | 'muted' | 'gradient'
  spacing?: 'default' | 'compact' | 'hero' | 'none'
  className?: string
  containerClassName?: string
  children: React.ReactNode
  fullWidth?: boolean
}

export const Section: React.FC<SectionProps> = ({
  id,
  variant = 'default',
  spacing = 'default',
  className = '',
  containerClassName = '',
  children,
  fullWidth = false,
}) => {
  const variantStyles = {
    default: 'bg-background text-foreground',
    card: 'bg-card/40 border-y border-border text-foreground',
    muted: 'bg-muted/30 border-y border-border text-foreground',
    gradient: 'bg-gradient-to-b from-background via-card/20 to-background text-foreground',
  }

  const spacingStyles = {
    default: 'section-spacing',
    compact: 'py-12 sm:py-16',
    hero: 'section-spacing',
    none: '',
  }

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${variantStyles[variant]} ${spacingStyles[spacing]} ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <div className={`max-w-content mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
          {children}
        </div>
      )}
    </section>
  )
}
