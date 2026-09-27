import React from 'react'
import Image from 'next/image'

export interface BrandLockupProps {
  className?: string
}

// Official 1-GLOBE mark, traced to vector: public/logo-mark.svg (856 x 640).
export const BrandLockup: React.FC<BrandLockupProps> = ({
  className = '',
}) => (
  <div className={`flex items-center gap-3 shrink-0 ${className}`}>
    <Image
      src="/logo-mark.svg"
      alt=""
      width={856}
      height={640}
      unoptimized
      className="h-8 w-auto sm:h-9"
    />
    <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-foreground uppercase">
      1-GLOBE
    </span>
  </div>
)
