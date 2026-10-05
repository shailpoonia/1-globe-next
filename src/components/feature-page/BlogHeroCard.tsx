import React from 'react'
import Image from 'next/image'
import { ArrowDown, CheckCircle2, FileText, Gauge, Package } from 'lucide-react'

// Static illustration for the 1-BLOG page: one catalog product becomes a structured draft.
const outline = [
  { h: 'Where Sanganer block printing comes from', confidence: 'High' },
  { h: 'How each pattern is printed by hand', confidence: 'High' },
  { h: 'Styling a block-printed comforter', confidence: 'High' },
  { h: 'Caring for hand-printed cotton', confidence: 'Check' },
]

export const BlogHeroCard: React.FC = () => (
  <div className="relative w-full max-w-[420px] mx-auto bg-card border border-border/60 overflow-hidden flex flex-col font-sans rounded-[var(--radius)]">
    {/* Source product */}
    <div className="p-5 flex flex-col gap-3">
      <div className="text-[13px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1.5"><Package className="w-3.5 h-3.5" aria-hidden="true" /> From your catalog</span>
        <span className="text-[11px] bg-slate-800/50 text-slate-400 px-1.5 py-0.5 rounded uppercase">Example</span>
      </div>
      <div className="flex items-center gap-4 border border-slate-700/50 bg-slate-900/40 rounded-[var(--radius)] p-3">
        <div className="relative w-14 h-14 rounded-md overflow-hidden shrink-0 border border-slate-700/50">
          <Image src="/demo-product.jpg" alt="" fill sizes="56px" className="object-cover" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold text-slate-200 truncate">Ivory Quilted Comforter</span>
          <span className="text-xs text-slate-400 truncate">Hand block printed · Cotton · Queen</span>
        </div>
      </div>
    </div>

    <div className="flex justify-center -mt-1 -mb-1" aria-hidden="true">
      <ArrowDown className="w-5 h-5 text-primary" />
    </div>

    {/* Generated draft */}
    <div className="p-5 flex flex-col gap-4">
      <div className="text-[13px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
        <FileText className="w-3.5 h-3.5" aria-hidden="true" /> Blog draft
      </div>
      <div className="border border-primary/40 bg-primary/5 rounded-[var(--radius)] p-4 flex flex-col gap-3">
        <h4 className="text-[15px] font-semibold leading-snug text-slate-100">The Art of Sanganer Hand Block Printing: A Bedroom Story</h4>
        <ol className="m-0 p-0 list-none flex flex-col gap-2">
          {outline.map(({ h, confidence }) => (
            <li key={h} className="flex items-start gap-2.5 text-[13px] text-slate-300">
              <span className="font-mono text-[11px] text-primary pt-0.5">H2</span>
              <span className="flex-1">{h}</span>
              <span className={`shrink-0 text-[11px] font-semibold uppercase tracking-wider ${confidence === 'High' ? 'text-success' : 'text-warning'}`}>{confidence}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>

    {/* Status */}
    <div className="p-5 pt-4 bg-slate-900/40 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-2">
        <span className="px-2.5 py-1 rounded-full border border-slate-700/50 text-xs font-medium text-slate-400">Source: your catalog</span>
        <span className="px-2.5 py-1 rounded-full border border-slate-700/50 text-xs font-medium text-slate-400 flex items-center gap-1.5"><Gauge className="w-3 h-3 text-success" aria-hidden="true" /> Confidence: high</span>
      </div>
      <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
        <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Ready for your review
      </span>
    </div>
  </div>
)
