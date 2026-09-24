"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Search, Image as ImageIcon, FileText, CheckCircle2, XCircle, ChevronRight, RefreshCw } from 'lucide-react'

export const GoogleSearchAnimationCard: React.FC = () => {
  const [step, setStep] = useState(0)
  

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    
    if (mediaQuery.matches) {
      setStep(3)
      return
    }

    let timeout: NodeJS.Timeout
    const nextStep = () => {
      setStep(prev => {
        const next = prev >= 3 ? 0 : prev + 1
        
        let delay = 2000
        if (next === 0) delay = 1500 // Before
        else if (next === 1) delay = 2000 // Transform
        else if (next === 2) delay = 1500 // Re-scan
        else if (next === 3) delay = 2500 // After

        timeout = setTimeout(nextStep, delay)
        return next
      })
    }

    timeout = setTimeout(nextStep, 1500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full interactive-card bg-card border border-border p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center overflow-hidden relative">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes typeTextFast {
            from { width: 0; }
            to { width: 100%; }
          }
          .typing-effect-fast {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            animation: typeTextFast 1.5s steps(40, end);
          }
        `}} />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-cyan-500/5 blur-[80px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-teal-500/5 blur-[80px] pointer-events-none rounded-full" />

        {/* Left Side: Your Store */}
        <div className="w-full lg:w-[45%] flex flex-col gap-5 relative z-10">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2">
            Your Store
          </div>

          {/* Product Image Box */}
          <div className="relative aspect-video rounded-[var(--radius)] overflow-hidden bg-slate-800 border border-slate-700 shadow-inner">
            <Image 
              src="/demo-product.jpg" 
              alt="Product" 
              fill
              className={`object-cover transition-all duration-1000 ${step === 0 ? 'blur-md scale-110 opacity-70' : 'blur-0 scale-100 opacity-90'}`}
            />
            
            {/* Step 0: Bad Badge */}
            <div className={`absolute top-3 left-3 transition-opacity duration-500 ${step === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-rose-500/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm border border-rose-500">
                <XCircle className="w-3.5 h-3.5" /> No readable data
              </div>
            </div>
            
            {/* Step >= 1: Good Badge */}
            <div className={`absolute top-3 left-3 transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-teal-500/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm border border-teal-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> AI Vision · Read
              </div>
            </div>
          </div>

          {/* Metadata Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {/* Filename */}
            <div className={`p-3.5 rounded-[var(--radius)] border transition-all duration-500 ${step === 1 ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,213,255,0.15)]' : step >= 2 ? 'border-slate-600 bg-slate-800/50' : 'border-slate-700 bg-slate-800/50'}`}>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <ImageIcon className="w-3 h-3" /> Filename
              </div>
              <div className={`font-mono text-[11px] sm:text-[12px] truncate transition-colors duration-300 ${step >= 1 ? 'text-cyan-400' : 'text-slate-400'}`}>
                {step >= 1 ? 'hand-block-print-floral-quilted-comforter-cream-coral.webp' : 'IMG-20260115-WA0032.jpg'}
              </div>
            </div>

            {/* Alt Text */}
            <div className={`p-3.5 rounded-[var(--radius)] border transition-all duration-500 ${step === 1 ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,213,255,0.15)]' : step >= 2 ? 'border-slate-600 bg-slate-800/50' : 'border-slate-700 bg-slate-800/50'}`}>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3 h-3" /> Alt Text
              </div>
              <div className={`text-[12px] transition-colors duration-300 min-h-[36px] flex items-center ${step >= 1 ? 'text-slate-200' : 'text-slate-600 italic'}`}>
                {step >= 1 ? (
                  <span className={step === 1 ? 'typing-effect-fast' : ''}>Cream floral hand block print cotton quilted comforter with coral and blue border, styled on a luxury bed</span>
                ) : (
                  '[empty]'
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Connector / Divider */}
        <div className="hidden lg:flex flex-col items-center justify-center opacity-30 px-2 relative z-10">
          <ChevronRight className="w-8 h-8 text-slate-500" />
        </div>

        {/* Right Side: Google Search Results */}
        <div className="w-full lg:w-[55%] flex flex-col relative z-10">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4 lg:mb-6 flex justify-between items-center h-5">
            <span>Search Engines & AI</span>
            {step === 2 && (
              <span className="flex items-center gap-1.5 text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 animate-pulse">
                <RefreshCw className="w-3 h-3 animate-spin" /> Re-scanning...
              </span>
            )}
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-4 sm:p-6 w-full">
            {/* Search Bar */}
            <div className={`bg-slate-800 border rounded-full h-12 px-4 flex items-center gap-3 mb-8 transition-colors duration-300 ${step === 2 ? 'border-cyan-500/50 shadow-[0_0_10px_rgba(0,213,255,0.1)]' : 'border-slate-600 shadow-inner'}`}>
              <Search className={`w-5 h-5 transition-colors ${step === 2 ? 'text-cyan-400 animate-pulse' : 'text-slate-400'}`} />
              <div className="text-slate-200 font-medium font-sans w-full">
                hand block print comforter
              </div>
            </div>

            {/* Results Area */}
            <div className="space-y-5 relative">
              
              {/* Competitor Result 1 */}
              <div className={`flex items-center gap-4 transition-all duration-700 ${step === 2 ? 'opacity-30' : 'opacity-100'}`}>
                <div className="w-16 h-16 rounded-[var(--radius)] bg-slate-800 border border-slate-700 flex-shrink-0"></div>
                <div className="w-full space-y-2">
                  <div className="h-3 w-1/3 bg-slate-700 rounded-full"></div>
                  <div className="h-2.5 w-2/3 bg-slate-800 rounded-full"></div>
                </div>
              </div>

              {/* Your Product Slot */}
              <div className={`relative overflow-hidden flex items-center gap-4 p-3.5 rounded-[var(--radius)] border transition-all duration-700 ${
                step < 3 ? 'border-rose-500/20 bg-rose-500/5' :
                'border-teal-500/50 bg-teal-500/10 shadow-[0_0_20px_rgba(0,245,196,0.15)] scale-[1.02]'
              }`}>
                {/* Highlight flash */}
                <div className={`absolute inset-0 bg-teal-400 mix-blend-overlay transition-opacity duration-500 ${step === 3 ? 'opacity-10' : 'opacity-0'}`} />

                <div className={`relative w-16 h-16 rounded-[var(--radius)] overflow-hidden flex items-center justify-center border shrink-0 transition-all duration-500 ${step >= 3 ? 'border-teal-500/40 bg-slate-900 shadow-lg' : 'border-rose-500/20 bg-rose-500/10'}`}>
                  {step >= 3 ? (
                    <Image src="/demo-product.jpg" fill className="object-cover animate-in fade-in zoom-in duration-500" alt="Result" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-500/50" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-bold mb-1.5 flex items-center gap-2 transition-colors duration-500 ${step >= 3 ? 'text-teal-400' : 'text-rose-400'}`}>
                    Your Product: {step >= 3 ? 'Found' : 'Not Found'}
                    {step >= 3 && <span className="px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 ml-2">Top Result</span>}
                  </div>
                  {step >= 3 ? (
                    <div className="text-xs text-slate-300 truncate font-mono">
                      hand-block-print-floral...
                    </div>
                  ) : (
                    <div className="h-2 w-3/4 bg-rose-500/10 rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Competitor Result 2 */}
              <div className={`flex items-center gap-4 transition-all duration-700 ${step === 2 ? 'opacity-30' : 'opacity-100'}`}>
                <div className="w-16 h-16 rounded-[var(--radius)] bg-slate-800 border border-slate-700 flex-shrink-0"></div>
                <div className="w-full space-y-2">
                  <div className="h-3 w-2/5 bg-slate-700 rounded-full"></div>
                  <div className="h-2.5 w-1/2 bg-slate-800 rounded-full"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic Caption */}
      <div className="mt-8 text-center max-w-lg mx-auto">
        <p className={`text-sm md:text-base font-semibold transition-colors duration-500 ${step === 0 ? 'text-rose-400' : 'text-teal-400'}`}>
          {step === 0 
            ? "Google can't read your photo — so shoppers never find you." 
            : "1-OPTIMISER makes it readable — now you show up."}
        </p>
      </div>
    </div>
  )
}
