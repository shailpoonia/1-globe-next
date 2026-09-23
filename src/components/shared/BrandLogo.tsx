import React from 'react'

export interface BrandLockupProps {
  iconSizeClass?: string
  textSizeClass?: string
  className?: string
}

export const BrandLockup: React.FC<BrandLockupProps> = ({
  className = '',
}) => (
  <div className={`flex items-center shrink-0 ${className}`}>
    <img 
      src="/logo.jpeg" 
      alt="1-globe.com Logo" 
      className="h-8 sm:h-9 w-auto object-contain mix-blend-screen"
    />
  </div>
)
