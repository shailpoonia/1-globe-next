import React from 'react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

// Shared sections for the app pages: "How it works" steps and a grid of capability cards.

export interface AppStep {
  title: string
  body: string
}

export const AppSteps: React.FC<{ headline: React.ReactNode; lead: string; steps: AppStep[] }> = ({ headline, lead, steps }) => (
  <Section id="how" className="section-spacing bg-secondary/20 border-b border-border scroll-mt-32">
    <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
      <div className="mb-12 md:mb-14 flex flex-col gap-4 max-w-2xl">
        <h2 className="text-section-title">{headline}</h2>
        <p className="text-lead">{lead}</p>
      </div>

      <ol className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((step, i) => (
          <li key={step.title} className="bg-card border border-border rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
            <span className="font-heading text-sm font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="text-card-title">{step.title}</h3>
            <p className="text-[15px] leading-relaxed text-neutral-400">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </Section>
)

export interface AppFeature {
  icon: LucideIcon
  title: string
  body: string
}

export const AppFeatureCards: React.FC<{ headline: React.ReactNode; subhead: string; features: AppFeature[] }> = ({ headline, subhead, features }) => (
  <Section id="features" className="section-spacing bg-background border-b border-border scroll-mt-32">
    <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
      <SectionHeader eyebrow="Capabilities" headline={headline} subhead={subhead} align="center" />

      <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map(({ icon: Icon, title, body }) => (
          <li key={title} className="bg-card border border-border rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-primary">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </span>
            <h3 className="text-card-title">{title}</h3>
            <p className="text-[15px] leading-relaxed text-neutral-400">{body}</p>
          </li>
        ))}
      </ul>
    </div>
  </Section>
)
