import React from 'react'

export interface BrandLockupProps {
  className?: string
}

export const BrandLockup: React.FC<BrandLockupProps> = ({
  className = '',
}) => (
  <div className={`flex items-center gap-3 shrink-0 ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" fill="none" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
      <circle cx="18" cy="18" r="10" stroke="#ffffff" strokeWidth="1.6"/>
      <g transform="rotate(-22 18 18)">
        <ellipse cx="18" cy="18" rx="16" ry="5.6" stroke="#00D5FF" strokeWidth="1.5"/>
        <circle cx="34" cy="18" r="1.8" fill="#00D5FF"/>
      </g>
    </svg>
    <span className="font-heading font-bold text-xl sm:text-2xl tracking-tighter text-foreground uppercase">
      1-GLOBE
    </span>
  </div>
)
