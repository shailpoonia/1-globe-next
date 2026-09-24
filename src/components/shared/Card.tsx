import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  featured?: boolean
  as?: 'div' | 'article'
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  featured = false,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={`border bg-card text-card-foreground p-8 lg:p-10 h-full flex flex-col interactive-card ${
        featured
          ? 'border-primary'
          : 'border-border'
      } ${className}`}
    >
      {children}
    </Component>
  )
}
