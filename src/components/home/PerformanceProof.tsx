import React from 'react'
import Link from 'next/link'
import { ArrowRight, Database, FileText, CheckCircle2 } from 'lucide-react'

export const PerformanceProof: React.FC = () => {
  return (
    <section id="performance-proof" className="bg-background py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header - 2 Col Composition to bring evidence sooner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16 min-h-[30vh]">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-4">
              MEASURE THE DIFFERENCE
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tighter leading-[0.95] text-foreground uppercase">
              PERFORMANCE<br />
              SHOULD BE<br />
              MEASURABLE.
            </h2>
          </div>
          <div className="md:max-w-sm md:pb-2">
            <p className="text-base md:text-lg text-neutral-400 font-medium leading-relaxed">
              Ecommerce performance is not a slogan. It can be observed in the technical assets, data structure and user experience that make up a store.
            </p>
          </div>
        </div>

        {/* Evidence Grid - Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Evidence: Payload */}
          <div className="lg:col-span-8 flex flex-col border border-neutral-800 bg-black/40 p-8 lg:p-10">
            <div className="mb-auto">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-10">
                EVIDENCE 01 — IMAGE PAYLOAD
              </span>
              
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
                <div>
                  <span className="block text-xs text-neutral-600 font-bold uppercase tracking-widest mb-3">Original</span>
                  <span className="text-5xl md:text-6xl font-heading font-bold text-neutral-600 line-through tracking-tighter">18.4 MB</span>
                </div>
                <div className="hidden md:block pb-2 px-6 text-neutral-700"><ArrowRight className="w-8 h-8" /></div>
                <div>
                  <span className="block text-xs text-primary font-bold uppercase tracking-widest mb-3">Optimized Example</span>
                  <span className="text-6xl md:text-7xl font-heading font-bold text-foreground tracking-tighter">
                    212<span className="text-3xl md:text-4xl text-primary ml-2">KB</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-neutral-800/50 pt-6 flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
                One example of how image optimization can substantially reduce image weight without destroying visual quality.
              </p>
              <Database className="w-6 h-6 text-neutral-700" />
            </div>
          </div>

          {/* Secondary Evidence Stack */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Filename Structure */}
            <div className="flex-1 flex flex-col border border-neutral-800 bg-black/40 p-6 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-6">
                EVIDENCE 02 — FILENAMES
              </span>
              <div className="space-y-3 mb-6">
                <div className="font-mono text-[11px] text-neutral-500 bg-neutral-900/50 p-3 border border-neutral-800">
                  IMG_4837.jpg
                </div>
                <div className="font-mono text-[11px] text-primary bg-primary/5 p-3 border border-primary/20 flex justify-between items-center">
                  <span className="truncate pr-2">wooden-wall-clock-12-inch.webp</span>
                  <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                </div>
              </div>
              <p className="text-sm text-neutral-400 mt-auto leading-relaxed">
                Descriptive filenames provide clearer context about an image's subject.
              </p>
            </div>

            {/* AI Metadata */}
            <div className="flex-1 flex flex-col border border-neutral-800 bg-black/40 p-6 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-6">
                EVIDENCE 03 — METADATA
              </span>
              <div className="bg-neutral-900/80 border-l-2 border-primary p-4 mb-6">
                <p className="text-sm text-neutral-300 font-medium italic">
                  "Handcrafted 12-inch wooden wall clock, minimalist wall decor"
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800/50">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  AI-assisted alt text structure.
                </p>
                <FileText className="w-5 h-5 text-neutral-700" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
