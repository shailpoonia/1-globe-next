"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { 
  ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles, CheckCircle2, 
  Search, FileText, ArrowRight, MousePointerClick, Link as LinkIcon, ShoppingBag, Zap, TrendingUp, PenTool
} from 'lucide-react'

export const InfographicShowcase: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0))
    }, 8000) // 8s per slide
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section className="w-full section-spacing bg-background border-t border-border/50 overflow-hidden relative">

      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="The Transformation"
          headline="See the difference."
          subhead="Visualizing how ecommerce image and content workflows can change the technical foundation of a storefront."
          align="center"
        />

        <div 
          className="max-w-4xl mx-auto mt-12 sm:mt-16 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Tab / Dots Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveSlide(0)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeSlide === 0 ? 'bg-primary/10 text-primary border border-primary/30' : 'bg-secondary/50 text-neutral-500 border border-border hover:text-neutral-300'}`}
            >
              <div className={`w-2 h-2 rounded-full ${activeSlide === 0 ? 'bg-primary animate-pulse' : 'bg-neutral-600'}`} />
              1-OPTIMISER · IMAGE PERFORMANCE
            </button>
            <button 
              onClick={() => setActiveSlide(1)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeSlide === 1 ? 'bg-primary/10 text-primary border border-primary/30' : 'bg-secondary/50 text-neutral-500 border border-border hover:text-neutral-300'}`}
            >
              <div className={`w-2 h-2 rounded-full ${activeSlide === 1 ? 'bg-primary animate-pulse' : 'bg-neutral-600'}`} />
              1-BLOG · LAUNCHING SOON
            </button>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full rounded-2xl bg-secondary/30 border border-border overflow-hidden min-h-[500px]">
            {/* Nav Arrows */}
            <button 
              onClick={() => setActiveSlide(prev => prev === 0 ? 1 : 0)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveSlide(prev => prev === 0 ? 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide 1 */}
            <div className={`absolute inset-0 w-full h-full p-8 lg:p-12 transition-opacity duration-700 ${activeSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
              <Slide1Content />
            </div>

            {/* Slide 2 */}
            <div className={`absolute inset-0 w-full h-full p-8 lg:p-12 transition-opacity duration-700 ${activeSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
              <Slide2Content />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm font-semibold text-neutral-400">
              From comforters to sneakers to cookware — if your store has product photos, <span className="text-primary">1-GLOBE</span> makes them work.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Slide 1 CSS Animations */
        @keyframes s1-scanLine { 0% { top: 0%; opacity: 0; } 5% { opacity: 1; } 18% { top: 100%; opacity: 1; } 20% { opacity: 0; top: 100%; } 100% { opacity: 0; top: 0%; } }
        @keyframes s1-filenameChange { 
          0%, 23% { content: "IMG-20260115-WA0032.jpg"; color: #94a3b8; } 
          25%, 32% { content: "hand-block-print-floral-quilted-comforter-cream-coral.webp"; color: #fff; text-shadow: 0 0 10px #00D5FF; } 
          35%, 100% { content: "hand-block-print-floral-quilted-comforter-cream-coral.webp"; color: #00D5FF; } 
        }
        @keyframes s1-typewriter { 0%, 40% { width: 0; opacity: 1; } 70%, 100% { width: 100%; opacity: 1; } }
        @keyframes s1-badgeGlow { 
          0%, 76% { border-color: rgba(51, 65, 85, 0.5); color: #64748b; background-color: transparent; } 
          82%, 100% { border-color: rgba(0, 213, 255, 0.4); color: #fff; background-color: rgba(0, 213, 255, 0.1); box-shadow: 0 0 12px rgba(0,213,255,0.15); } 
        }

        .s1-animate-scan { animation: s1-scanLine 8s linear infinite; }
        .s1-animate-filename::before { content: "IMG-20260115-WA0032.jpg"; animation: s1-filenameChange 8s linear infinite; }
        .s1-animate-typewriter { animation: s1-typewriter 8s steps(60, end) infinite; overflow: hidden; white-space: nowrap; border-right: 2px solid #00D5FF; }
        .s1-animate-badge { animation: s1-badgeGlow 8s ease-out infinite; }
        
        /* Slide 2 CSS Animations */
        @keyframes s2-nodeActive {
          0%, 10% { border-color: rgba(51, 65, 85, 1); background-color: rgba(30, 41, 59, 0.5); color: #64748b; }
          15%, 100% { border-color: rgba(0, 245, 196, 0.5); background-color: rgba(0, 245, 196, 0.1); color: #00F5C4; box-shadow: 0 0 15px rgba(0,245,196,0.2); }
        }
        @keyframes s2-arrowFlow {
          0%, 10% { color: #334155; }
          15%, 100% { color: #00F5C4; filter: drop-shadow(0 0 5px rgba(0,245,196,0.5)); }
        }

        .s2-node-1 { animation: s2-nodeActive 10s ease-out infinite; animation-delay: 0s; }
        .s2-arrow-1 { animation: s2-arrowFlow 10s ease-out infinite; animation-delay: 1.5s; }
        .s2-node-2 { animation: s2-nodeActive 10s ease-out infinite; animation-delay: 2s; }
        .s2-arrow-2 { animation: s2-arrowFlow 10s ease-out infinite; animation-delay: 3.5s; }
        .s2-node-3 { animation: s2-nodeActive 10s ease-out infinite; animation-delay: 4s; }
        .s2-arrow-3 { animation: s2-arrowFlow 10s ease-out infinite; animation-delay: 5.5s; }
        .s2-node-4 { animation: s2-nodeActive 10s ease-out infinite; animation-delay: 6s; }
        .s2-arrow-4 { animation: s2-arrowFlow 10s ease-out infinite; animation-delay: 7.5s; }
        .s2-node-5 { animation: s2-nodeActive 10s ease-out infinite; animation-delay: 8s; }

        @media (prefers-reduced-motion) {
          .s1-animate-scan, .s1-animate-filename::before, .s1-animate-typewriter, .s1-animate-badge, .s2-node-1, .s2-arrow-1, .s2-node-2, .s2-arrow-2, .s2-node-3, .s2-arrow-3, .s2-node-4, .s2-arrow-4, .s2-node-5 { animation: none !important; }
          .s1-animate-filename::before { content: "hand-block-print-floral-quilted-comforter-cream-coral.webp"; color: #00D5FF; }
          .s1-animate-typewriter { width: 100%; border-right: none; }
          .s1-animate-badge { border-color: rgba(0, 213, 255, 0.4); color: #fff; background-color: rgba(0, 213, 255, 0.1); }
          .s2-node-1, .s2-node-2, .s2-node-3, .s2-node-4, .s2-node-5 { border-color: rgba(0, 245, 196, 0.5); background-color: rgba(0, 245, 196, 0.1); color: #00F5C4; }
          .s2-arrow-1, .s2-arrow-2, .s2-arrow-3, .s2-arrow-4 { color: #00F5C4; }
        }
      `}} />
    </section>
  )
}

// =========================================================================
// SLIDE 1: 1-OPTIMISER
// =========================================================================
const Slide1Content: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-3xl mx-auto">
        
        {/* Visual Box */}
        <div className="relative w-full md:w-1/2 bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden aspect-video shadow-xl">
          <Image src="/demo-product.jpg" alt="Comforter" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
          <div className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_8px_2px_rgba(0,213,255,0.6)] s1-animate-scan z-10">
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-primary/20 to-transparent -translate-y-full" />
          </div>
          <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg px-2.5 py-1.5 flex flex-col shadow-lg">
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Example</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-slate-400 line-through">8.2 MB</span>
              <span className="text-[11px] font-bold text-primary flex items-center gap-1">
                <Zap className="w-3 h-3 fill-current" /> 240 KB
              </span>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur border border-slate-700/50 rounded-md px-2 py-0.5 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-medium text-slate-200 uppercase tracking-wider">AI Vision</span>
          </div>
        </div>

        {/* Info Box */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="space-y-1.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <ImageIcon className="w-3 h-3" /> Filename
            </div>
            <div className="border border-slate-800 bg-slate-900/60 rounded-lg px-3 py-2 text-xs font-mono tracking-tight flex items-center overflow-hidden">
              <span className="s1-animate-filename truncate"></span>
            </div>
          </div>
          
          <div className="space-y-1.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <FileText className="w-3 h-3" /> AI Alt Text
            </div>
            <div className="border border-slate-800 bg-slate-900/60 rounded-lg px-3 py-2 text-[12px] text-slate-300 min-h-[50px] flex items-center">
              <div className="s1-animate-typewriter">
                Cream floral hand block print cotton quilted<br/>comforter with coral and blue border
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Image Context</div>
            <div className="flex flex-wrap gap-2">
              <div className="px-2 py-1 rounded-full border border-slate-700/50 text-[10px] font-medium text-slate-500 flex items-center gap-1 s1-animate-badge">
                <Search className="w-3 h-3" /> Google
              </div>
              <div className="px-2 py-1 rounded-full border border-slate-700/50 text-[10px] font-medium text-slate-500 flex items-center gap-1 s1-animate-badge">
                <ImageIcon className="w-3 h-3" /> Images
              </div>
              <div className="px-2 py-1 rounded-full border border-slate-700/50 text-[10px] font-medium text-slate-500 flex items-center gap-1 s1-animate-badge">
                <Sparkles className="w-3 h-3" /> AI Search
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center px-4 md:px-12">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Clean images. Readable tags. Meaningful context for your catalog.</h3>
        <p className="text-sm text-slate-400">Sound familiar? Half your catalog is probably named IMG-2026-WA001.jpg right now.</p>
      </div>
    </div>
  )
}

// =========================================================================
// SLIDE 2: 1-BLOG
// =========================================================================
const Slide2Content: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Animated Flow Diagram */}
        <div className="w-full flex flex-row items-center justify-between gap-1 md:gap-3 mb-10 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
          
          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-800/50 text-slate-500 flex items-center justify-center s2-node-1 relative shrink-0">
              <ImageIcon className="w-5 h-5" />
              <CheckCircle2 className="w-4 h-4 text-primary absolute -bottom-1 -right-1 bg-slate-900 rounded-full" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 text-center leading-tight">Optimized<br/>Product</span>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-700 shrink-0 s2-arrow-1" />

          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-800/50 text-slate-500 flex items-center justify-center s2-node-2 shrink-0">
              <PenTool className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 text-center leading-tight">1-BLOG<br/>Drafts Post</span>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-700 shrink-0 s2-arrow-2" />

          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-800/50 text-slate-500 flex items-center justify-center s2-node-3 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 text-center leading-tight">Discovery &<br/>Context</span>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-700 shrink-0 s2-arrow-3" />

          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-800/50 text-slate-500 flex items-center justify-center s2-node-4 shrink-0">
              <MousePointerClick className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 text-center leading-tight">Readers<br/>Click</span>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-700 shrink-0 s2-arrow-4" />

          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-800/50 text-slate-500 flex items-center justify-center s2-node-5 shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 text-center leading-tight">Store Visit</span>
          </div>

        </div>

        {/* Mock Blog Card */}
        <div className="w-full max-w-md bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden shadow-xl mb-8 group flex items-start p-4 gap-4">
           <div className="relative w-20 h-20 rounded-md bg-slate-700 overflow-hidden shrink-0">
             <Image src="/demo-product.jpg" alt="Comforter thumbnail" fill sizes="80px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
           </div>
           <div>
             <div className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1">Blog Post Published</div>
             <h4 className="text-sm font-semibold text-slate-200 leading-tight mb-2">The Art of Sanganer Hand Block Printing — A Bedroom Story</h4>
             <div className="text-[11px] text-slate-400 flex items-center gap-1">
               <LinkIcon className="w-3 h-3" /> Links directly to product
             </div>
           </div>
        </div>

      </div>

      <div className="text-center px-4 md:px-12">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">Once your products are readable, 1-BLOG is designed to help create structured content around them.</h3>
        <p className="text-sm text-neutral-400">Content designed to provide useful context for merchants and their audience.</p>
      </div>
    </div>
  )
}
