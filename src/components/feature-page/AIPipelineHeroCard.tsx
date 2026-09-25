import React from 'react'
import Image from 'next/image'
import { Image as ImageIcon, Sparkles, CheckCircle2, Search, ArrowDown, Zap, FileText } from 'lucide-react'

export const AIPipelineHeroCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] mx-auto bg-card border border-border/60 overflow-hidden flex flex-col font-sans rounded-[var(--radius)]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanLine {
          0% { top: 0%; opacity: 0; }
          5% { opacity: 1; }
          18% { top: 100%; opacity: 1; }
          20% { opacity: 0; top: 100%; }
          100% { opacity: 0; top: 0%; }
        }
        @keyframes fadeOutIn {
          0%, 23% { content: "IMG_4837.jpg"; color: #94a3b8; text-shadow: none; }
          25%, 32% { content: "wooden-wall-clock-12-inch.webp"; color: #fff; text-shadow: 0 0 10px #00D5FF, 0 0 20px #00D5FF; }
          35%, 100% { content: "wooden-wall-clock-12-inch.webp"; color: #00D5FF; text-shadow: none; }
        }
        @keyframes highlightFilenameBox {
          0%, 20% { border-color: rgba(30,41,59,1); box-shadow: none; background-color: rgba(15,23,42,0.6); }
          24%, 34% { border-color: rgba(0,213,255,0.5); box-shadow: 0 0 15px rgba(0,213,255,0.15); background-color: rgba(0,213,255,0.05); }
          38%, 100% { border-color: rgba(30,41,59,1); box-shadow: none; background-color: rgba(15,23,42,0.6); }
        }
        @keyframes typewriter {
          0%, 40% { width: 0; opacity: 1; }
          70%, 100% { width: 100%; opacity: 1; }
        }
        @keyframes highlightAltBox {
          0%, 38% { border-color: rgba(30,41,59,1); box-shadow: none; background-color: rgba(15,23,42,0.6); }
          40%, 72% { border-color: rgba(0,213,255,0.5); box-shadow: 0 0 15px rgba(0,213,255,0.15); background-color: rgba(0,213,255,0.05); }
          76%, 100% { border-color: rgba(30,41,59,1); box-shadow: none; background-color: rgba(15,23,42,0.6); }
        }
        @keyframes arrowFlow {
          0%, 72% { opacity: 0.2; transform: translateY(-5px); color: #475569; }
          78%, 100% { opacity: 1; transform: translateY(0); color: #00F5C4; }
        }
        @keyframes badgeGlow {
          0%, 76% { border-color: rgba(51, 65, 85, 0.5); color: #64748b; background-color: transparent; }
          82%, 100% { border-color: rgba(0, 213, 255, 0.4); color: #fff; background-color: rgba(0, 213, 255, 0.1); box-shadow: 0 0 12px rgba(0,213,255,0.15); }
        }
        @keyframes pulseCheck {
          0%, 33% { opacity: 0; transform: scale(0.5); }
          38%, 100% { opacity: 1; transform: scale(1); }
        }

        .animate-scan { animation: scanLine 10s linear infinite; }
        .animate-filename::before { content: "IMG_4837.jpg"; animation: fadeOutIn 10s linear infinite; }
        .animate-filename-box { animation: highlightFilenameBox 10s linear infinite; }
        .animate-typewriter { animation: typewriter 10s steps(40, end) infinite; overflow: hidden; white-space: nowrap; border-right: 2px solid #00D5FF; }
        .animate-alt-box { animation: highlightAltBox 10s linear infinite; }
        .animate-flow { animation: arrowFlow 10s ease-out infinite; }
        .animate-badge { animation: badgeGlow 10s ease-out infinite; }
        .animate-check { animation: pulseCheck 10s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite; }
        
        @media (prefers-reduced-motion) {
          .animate-scan, .animate-filename::before, .animate-typewriter, .animate-flow, .animate-badge, .animate-check, .animate-filename-box, .animate-alt-box {
            animation: none !important;
          }
          .animate-filename::before { content: "wooden-wall-clock-12-inch.webp"; color: #00D5FF; }
          .animate-typewriter { width: 100%; border-right: none; }
          .animate-badge { border-color: rgba(0, 213, 255, 0.4); color: #fff; background-color: rgba(0, 213, 255, 0.1); }
          .animate-check { opacity: 1; transform: scale(1); }
          .animate-filename-box, .animate-alt-box { border-color: rgba(30,41,59,1); background-color: rgba(15,23,42,0.6); }
        }
      `}} />

      {/* Top Image Section with Scanner */}
      <div className="p-5 pb-0">
        <div className="relative rounded-[var(--radius)] overflow-hidden bg-slate-800 border border-slate-700/50 aspect-video isolate">
          <Image 
            src="/Wall-Clock-Artistic-Wooden-12-Inch.webp" 
            alt="Wooden Wall Clock" 
            fill
            sizes="(max-width: 420px) 100vw, 420px"
            className="object-cover opacity-80"
          />
          {/* Scanning Line */}
          <div className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_8px_2px_rgba(0,213,255,0.6)] animate-scan z-10">
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-primary/20 to-transparent -translate-y-full" />
          </div>
          
                    {/* Secondary stat: Compression */}
          <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-[var(--radius)] px-2.5 py-1.5 flex flex-col shadow-lg">
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Example</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-slate-400 line-through">18.4 MB</span>
              <span className="text-[11px] font-bold text-primary flex items-center gap-1">
                <Zap className="w-3 h-3 fill-current" /> 212 KB
              </span>
            </div>
          </div>
          
          <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur border border-slate-700/50 rounded-md px-2 py-0.5 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-medium text-slate-200 uppercase tracking-wider">AI Vision</span>
          </div>
        </div>
      </div>

      {/* AI Rewrite Pipeline Section */}
      <div className="p-5 flex flex-col gap-4 relative z-10">
                {/* Filename Transformation */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <ImageIcon className="w-3 h-3" /> Filename
            </div>
            <span className="text-[8px] bg-slate-800/50 text-slate-500 px-1.5 py-0.5 rounded uppercase">Example</span>
          </div>
          <div className="animate-filename-box border rounded-[var(--radius)] px-3 py-2 text-sm font-mono tracking-tight flex items-center">
            <span className="animate-filename"></span>
            <CheckCircle2 className="w-4 h-4 text-primary ml-auto animate-check" />
          </div>
        </div>

                {/* Alt Text Generation */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FileText className="w-3 h-3" /> AI Alt Text
            </div>
            <span className="text-[8px] bg-slate-800/50 text-slate-500 px-1.5 py-0.5 rounded uppercase">Example</span>
          </div>
          <div className="animate-alt-box border rounded-[var(--radius)] px-3 py-2 text-[13px] text-slate-300 min-h-[38px] flex items-center">
            <div className="animate-typewriter">
              Handcrafted 12-inch wooden wall clock, minimalist wall decor
            </div>
          </div>
        </div>
      </div>

      {/* Arrow connecting to Badges */}
      <div className="flex justify-center -mt-2 -mb-2 relative z-10">
        <ArrowDown className="w-5 h-5 text-slate-600 animate-flow" />
      </div>

      {/* Discoverability Badges */}
      <div className="p-5 pt-4 bg-slate-900/40 border-t border-border/50 relative z-10 mt-auto">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
          Image Context
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="px-2.5 py-1 rounded-full border border-slate-700/50 text-xs font-medium text-slate-500 flex items-center gap-1.5 animate-badge">
            <Search className="w-3 h-3" /> Google
          </div>
          <div className="px-2.5 py-1 rounded-full border border-slate-700/50 text-xs font-medium text-slate-500 flex items-center gap-1.5 animate-badge">
            <ImageIcon className="w-3 h-3" /> Google Images
          </div>
          <div className="px-2.5 py-1 rounded-full border border-slate-700/50 text-xs font-medium text-slate-500 flex items-center gap-1.5 animate-badge">
            <Sparkles className="w-3 h-3" /> AI Search Engines
          </div>
        </div>
      </div>
    </div>
  )
}

