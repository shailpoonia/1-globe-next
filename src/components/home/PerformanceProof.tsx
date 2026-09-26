import React from 'react'
import { ArrowRight, Database, FileText, CheckCircle2 } from 'lucide-react'

export const PerformanceProof: React.FC = () => {
  return (
    <section id="performance-proof" className="bg-background py-32 md:py-48">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-neutral-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
              MEASURE THE DIFFERENCE
            </span>
          </div>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.9] text-foreground uppercase mb-10">
            PERFORMANCE<br />
            SHOULD BE<br />
            MEASURABLE.
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-[1.2] max-w-2xl tracking-tight">
            Ecommerce performance is not a slogan. It can be observed in the technical assets, data structure and user experience that make up a store.
          </p>
        </div>

        {/* Evidence Grid - Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Evidence: Payload */}
          <div className="lg:col-span-8 flex flex-col pt-4 border-t border-neutral-900">
            <div className="mb-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 block mb-12">
                EVIDENCE 01 — IMAGE PAYLOAD
              </span>
              
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
                <div>
                  <span className="block text-xs text-neutral-600 font-bold uppercase tracking-widest mb-4">Original</span>
                  <span className="text-6xl md:text-8xl font-heading font-bold text-neutral-700 line-through tracking-tighter">18.4 MB</span>
                </div>
                <div className="hidden md:block pb-6 px-6 text-neutral-800">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <div>
                  <span className="block text-xs text-primary font-bold uppercase tracking-widest mb-4">Optimized Example</span>
                  <span className="text-7xl md:text-[8rem] font-heading font-bold text-white tracking-tighter leading-none">
                    212<span className="text-5xl md:text-7xl text-primary ml-2">KB</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <p className="text-lg text-neutral-500 max-w-md leading-relaxed">
                One example of how image optimization can substantially reduce image weight without destroying visual quality.
              </p>
              <Database className="w-8 h-8 text-neutral-800" />
            </div>
          </div>

          {/* Secondary Evidence Stack */}
          <div className="lg:col-span-4 flex flex-col gap-16">
            
            {/* Filename Structure */}
            <div className="flex-1 flex flex-col pt-4 border-t border-neutral-900">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 block mb-8">
                EVIDENCE 02 — FILENAMES
              </span>
              <div className="space-y-4 mb-8">
                <div className="font-mono text-xs text-neutral-600 p-4 border border-neutral-900">
                  IMG_4837.jpg
                </div>
                <div className="font-mono text-xs text-primary p-4 border border-primary/20 bg-primary/5 flex justify-between items-center">
                  <span>wooden-wall-clock-12-inch.webp</span>
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
              </div>
              <p className="text-base text-neutral-500 mt-auto leading-relaxed">
                Descriptive filenames provide clearer context about an image's subject.
              </p>
            </div>

            {/* AI Metadata */}
            <div className="flex-1 flex flex-col pt-4 border-t border-neutral-900">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 block mb-8">
                EVIDENCE 03 — METADATA
              </span>
              <div className="border-l-2 border-primary pl-6 mb-8">
                <p className="text-lg text-neutral-300 font-medium leading-[1.4]">
                  "Handcrafted 12-inch wooden wall clock, minimalist wall decor"
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-base text-neutral-500 leading-relaxed max-w-[200px]">
                  AI-assisted alt text structure.
                </p>
                <FileText className="w-6 h-6 text-neutral-800" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
