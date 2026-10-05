import React from 'react'
import Image from 'next/image'
import { CalendarDays, CheckCircle2, Clock, Gauge } from 'lucide-react'

// Static illustration for the 1-SOCIAL page: one dashboard with a week of posts across channels.
const week = [
  { day: 'Mon', post: 'published' },
  { day: 'Tue', post: 'published' },
  { day: 'Wed', post: 'next' },
  { day: 'Thu', post: null },
  { day: 'Fri', post: 'scheduled' },
  { day: 'Sat', post: 'scheduled' },
  { day: 'Sun', post: null },
] as const

const channels = ['Instagram', 'Facebook', 'TikTok']

export const SocialHeroCard: React.FC = () => (
  <div className="relative w-full max-w-[420px] mx-auto bg-card border border-border/60 overflow-hidden flex flex-col font-sans rounded-[var(--radius)]">
    {/* Week view */}
    <div className="p-5 flex flex-col gap-3">
      <div className="text-[13px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" aria-hidden="true" /> This week</span>
        <span className="text-[11px] bg-slate-800/50 text-slate-400 px-1.5 py-0.5 rounded uppercase">Example</span>
      </div>
      <ul className="m-0 p-0 list-none grid grid-cols-7 gap-1.5">
        {week.map(({ day, post }) => (
          <li key={day} className="flex flex-col items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase text-slate-500">{day}</span>
            <span
              className={`w-full h-12 rounded-md border flex items-center justify-center ${
                post === 'next'
                  ? 'border-primary bg-primary/15'
                  : post === 'scheduled'
                    ? 'border-primary/40 bg-primary/5'
                    : post === 'published'
                      ? 'border-slate-700/50 bg-slate-800/60'
                      : 'border-slate-800 bg-transparent'
              }`}
            >
              {post === 'published' && <CheckCircle2 className="w-3.5 h-3.5 text-success" aria-hidden="true" />}
              {(post === 'scheduled' || post === 'next') && <Clock className="w-3.5 h-3.5 text-primary" aria-hidden="true" />}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4 text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-success" aria-hidden="true" /> Published</span>
        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-primary" aria-hidden="true" /> Scheduled</span>
      </div>
    </div>

    {/* Next post */}
    <div className="px-5 pb-5 flex flex-col gap-3">
      <div className="text-[13px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between gap-3">
        <span>Next post · Wed 10:00</span>
        <span className="flex items-center gap-1.5 text-[11px] text-success"><Gauge className="w-3 h-3" aria-hidden="true" /> Confidence: high</span>
      </div>
      <div className="border border-primary/40 bg-primary/5 rounded-[var(--radius)] p-3 flex gap-3">
        <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0 border border-slate-700/50">
          <Image src="/round-blue-mango-wood-serving-tray.webp" alt="Round Blue Mango Wood Serving Tray with a blue and white floral enamel base and cut-out handles" fill sizes="80px" className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="m-0 text-[13px] leading-relaxed text-slate-300">
            Solid mango wood with a blue and white floral enamel finish. Our round serving tray brings colour to every table.
          </p>
          <span className="text-[11px] text-slate-500">Source: your catalog</span>
        </div>
      </div>
    </div>

    {/* Channels */}
    <div className="p-5 pt-4 bg-slate-900/40 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-2">
        {channels.map((c) => (
          <span key={c} className="px-2.5 py-1 rounded-full border border-primary/40 bg-primary/10 text-xs font-medium text-slate-200">{c}</span>
        ))}
      </div>
      <span className="text-xs font-semibold text-primary">Auto-publish on</span>
    </div>
  </div>
)
