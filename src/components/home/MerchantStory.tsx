"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, BarChart3, Image as ImageIcon, LayoutTemplate, Database, Zap } from 'lucide-react'

export const MerchantStory: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const slides = [0, 1, 2]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const newIndex = Math.round(scrollLeft / clientWidth)
      if (newIndex !== currentSlide) {
        setCurrentSlide(newIndex)
      }
    }
  }

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      scrollContainerRef.current.scrollTo({ left: index * clientWidth, behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length
    scrollTo(next)
  }

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length
    scrollTo(prev)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [currentSlide, isAutoPlaying])

  return (
    <section id="merchant-story" className="bg-foreground text-background py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Text */}
          <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-6">
              MERCHANT STORY
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[0.95] text-background uppercase mb-6">
              BUILT FOR<br />THE MERCHANTS<br />IN THE TRENCHES.
            </h2>
            <div className="space-y-4 text-base md:text-lg text-neutral-600 font-medium leading-relaxed mb-10">
              <p>
                We started 1-GLOBE because we were tired of generic tools that made grand promises but broke the storefront.
              </p>
              <p>
                We build for the technical merchants, the operators, and the agency partners who know that details actually matter.
              </p>
            </div>
            
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-background hover:text-neutral-500 transition-colors"
            >
              <span className="border-b border-background group-hover:border-neutral-500 pb-1 transition-colors">Read our story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Interactive Case Study */}
          <div className="lg:col-span-7 order-1 lg:order-2 w-full">
            
            {/* The Visual Box */}
            <div 
              className="w-full bg-background text-foreground border border-neutral-800 rounded-sm overflow-hidden flex flex-col"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              onFocus={() => setIsAutoPlaying(false)}
              onBlur={() => setIsAutoPlaying(true)}
            >
              
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/30">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4 text-neutral-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                    Illustrative ecommerce growth scenario
                  </span>
                </div>
                <div className="font-mono text-xs text-neutral-500">
                  0{currentSlide + 1} / 03
                </div>
              </div>

              {/* Slider Container */}
              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                
                {/* Slide 1: THE START */}
                <div className="min-w-full snap-center p-8 md:p-12 min-h-[400px] flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">01 — THE START</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-8">Revenue Progression</h3>
                  
                  <div className="flex-1 flex items-end gap-2 md:gap-4 h-full pt-8 relative">
                    <div className="absolute top-0 left-0 w-full h-px border-t border-dashed border-neutral-800" />
                    <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-neutral-800" />
                    
                    {/* Abstract Graph */}
                    {[1, 1.2, 1.1, 1.5, 1.4, 2, 2.5, 3.2, 4.5, 6, 8, 12].map((val, i) => (
                      <div key={i} className="flex-1 bg-neutral-800 hover:bg-neutral-700 transition-colors relative group" style={{ height: `${val * 8}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-[9px] font-mono px-2 py-1 border border-neutral-700 rounded z-10 whitespace-nowrap">
                          Mo {i+1}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-800/50">
                    <span className="font-mono text-sm text-neutral-400">$400 / mo</span>
                    <ArrowRight className="w-4 h-4 text-neutral-600" />
                    <span className="font-mono text-xl md:text-2xl font-bold text-foreground">$30,000 / mo</span>
                  </div>
                </div>

                {/* Slide 2: THE CONSTRAINTS */}
                <div className="min-w-full snap-center p-8 md:p-12 min-h-[400px] flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4 block">02 — WHAT WAS HOLDING IT BACK</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-8">Technical Constraints</h3>
                  
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="border border-neutral-800 bg-neutral-900/20 p-4 md:p-6 flex flex-col justify-center">
                      <ImageIcon className="w-5 h-5 text-neutral-500 mb-4" />
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Image Payload</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">Massive uncompressed assets slowing down initial render.</p>
                    </div>
                    <div className="border border-neutral-800 bg-neutral-900/20 p-4 md:p-6 flex flex-col justify-center">
                      <LayoutTemplate className="w-5 h-5 text-neutral-500 mb-4" />
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Content Structure</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">Poor editorial hierarchy reducing search visibility.</p>
                    </div>
                    <div className="border border-neutral-800 bg-neutral-900/20 p-4 md:p-6 flex flex-col justify-center">
                      <Database className="w-5 h-5 text-neutral-500 mb-4" />
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Product Data</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">Missing attributes creating discoverability gaps.</p>
                    </div>
                    <div className="border border-neutral-800 bg-neutral-900/20 p-4 md:p-6 flex flex-col justify-center">
                      <Zap className="w-5 h-5 text-neutral-500 mb-4" />
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Storefront Perf</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">Core Web Vitals failing key mobile thresholds.</p>
                    </div>
                  </div>
                </div>

                {/* Slide 3: WHAT CHANGED */}
                <div className="min-w-full snap-center p-8 md:p-12 min-h-[400px] flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">03 — WHAT CHANGED</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-8">Targeted Interventions</h3>
                  
                  <div className="flex-1 flex items-end gap-2 md:gap-4 h-full pt-8 relative">
                    {/* Intervention markers */}
                    <div className="absolute top-1/3 left-[40%] w-px h-2/3 bg-primary/50 border-l border-dashed border-primary z-0" />
                    <div className="absolute top-1/4 left-[65%] w-px h-3/4 bg-primary/50 border-l border-dashed border-primary z-0" />
                    
                    <div className="absolute top-[30%] left-[40%] -translate-x-1/2 bg-primary/10 border border-primary/30 text-primary text-[9px] font-bold uppercase px-2 py-1 rounded">
                      Img Opt
                    </div>
                    <div className="absolute top-[20%] left-[65%] -translate-x-1/2 bg-primary/10 border border-primary/30 text-primary text-[9px] font-bold uppercase px-2 py-1 rounded">
                      Data Struct
                    </div>

                    {/* Abstract Graph */}
                    {[1, 1.2, 1.1, 1.5, 1.4, 2, 3.5, 5.2, 7.5, 9, 10.5, 12].map((val, i) => (
                      <div key={i} className={`flex-1 transition-colors relative z-10 ${i >= 6 ? 'bg-primary/80 hover:bg-primary' : 'bg-neutral-800 hover:bg-neutral-700'}`} style={{ height: `${val * 8}%` }} />
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-neutral-800/50">
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Addressing core technical debt allowed marketing spend to convert efficiently, enabling scale.
                    </p>
                  </div>
                </div>

              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-between p-4 border-t border-neutral-800 bg-neutral-900/30">
                <div className="flex gap-1">
                  {slides.map((slide) => (
                    <button 
                      key={slide} 
                      onClick={() => scrollTo(slide)}
                      className={`h-1 rounded-full transition-all duration-300 ${slide === currentSlide ? 'w-8 bg-primary' : 'w-4 bg-neutral-700 hover:bg-neutral-500'}`}
                      aria-label={`Go to slide ${slide + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2 text-neutral-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <div className="w-px h-4 bg-neutral-800 mx-2" />
                  <button 
                    onClick={prevSlide}
                    className="p-2 border border-neutral-800 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-2 border border-neutral-800 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
            </div>
            {/* End Visual Box */}

          </div>

        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .snap-x {
            scroll-behavior: auto !important;
          }
        }
      `}} />
    </section>
  )
}
