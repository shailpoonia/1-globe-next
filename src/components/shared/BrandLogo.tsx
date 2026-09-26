import React from 'react'
import Image from 'next/image'

export interface BrandLockupProps {
  className?: string
}

export const BrandLockup: React.FC<BrandLockupProps> = ({
  className = '',
}) => (
  <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
    <Image 
      src="/logo.svg" 
      alt="1-GLOBE Logo" 
      width={24} 
      height={24} 
      className="h-6 w-6"
    />
    <span className="font-heading font-bold text-lg sm:text-xl tracking-tighter text-foreground uppercase pt-0.5">
      1-GLOBE
    </span>
  </div>
)
