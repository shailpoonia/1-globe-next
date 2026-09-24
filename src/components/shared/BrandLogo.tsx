import React from 'react'
import Image from 'next/image'

export interface BrandLockupProps {
  iconSizeClass?: string
  textSizeClass?: string
  className?: string
}

export const BrandLockup: React.FC<BrandLockupProps> = ({
  className = '',
}) => (
  <div className={`flex items-center shrink-0 ${className}`}>
    <Image 
      src="/logo.jpeg" 
      alt="1-globe.com Logo" 
      width={120}
      height={36}
      priority
      className="h-8 sm:h-9 w-auto object-contain mix-blend-screen"
    />
  </div>
)
