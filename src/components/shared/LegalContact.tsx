import React from 'react'
import { company } from '@/lib/seo'

// Company details box at the end of the legal pages.
export const LegalContact: React.FC<{ emailLabel: string; email: string }> = ({ emailLabel, email }) => (
  <div className="rounded-xl border border-border bg-card p-6 space-y-2 text-xs">
    <div>
      <strong className="text-foreground block">Legal Entity:</strong>
      <span>{company.legalName}</span>
    </div>
    <div>
      <strong className="text-foreground block">Registered Address:</strong>
      <span>{company.street}, {company.city}, {company.country}</span>
    </div>
    <div>
      <strong className="text-foreground block mt-2">Commercial Registration No.:</strong>
      <span>{company.registrationNo}</span>
    </div>
    <div>
      <strong className="text-foreground block mt-2">VAT TRN:</strong>
      <span>{company.trn}</span>
    </div>
    <div>
      <strong className="text-foreground block">{emailLabel}</strong>
      <a href={`mailto:${email}`} className="text-primary hover:underline">
        {email}
      </a>
    </div>
  </div>
)
