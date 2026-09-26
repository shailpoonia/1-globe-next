import React from 'react'
import Image from 'next/image'

export interface BrandLockupProps {
  className?: string
}

export const BrandLockup: React.FC<BrandLockupProps> = ({
  className = '',
}) => (
  <div className={`flex items-center gap-3 shrink-0 ${className}`}>
    <Image 
      src="/logo.svg" 
      alt="1-GLOBE Logo" 
      width={36} 
      height={36} 
      className="h-8 w-8 sm:h-9 sm:w-9"
    />
    <span className="font-heading font-bold text-xl sm:text-2xl tracking-tighter text-foreground uppercase">
      1-GLOBE
    </span>
  </div>
)
