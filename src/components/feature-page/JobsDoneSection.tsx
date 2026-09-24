import React from 'react'
import Image from 'next/image'
import { Section } from '@/components/shared/Section'

export const JobsDoneSection: React.FC = () => {
  return (
    <Section className="section-spacing bg-secondary/20 border-b border-border overflow-hidden">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes shrinkBar {
            0%, 15% { width: 100%; background-color: #334155; } 
            40%, 85% { width: 12%; background-color: hsl(var(--primary)); }
            100% { width: 100%; background-color: #334155; }
          }
          .animate-shrink { animation: shrinkBar 6s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
          
          @keyframes labelMB {
            0%, 25% { opacity: 1; } 30%, 100% { opacity: 0; }
          }
          @keyframes labelKB {
            0%, 25% { opacity: 0; } 30%, 85% { opacity: 1; } 90%, 100% { opacity: 0; }
          }
          .animate-label-mb { animation: labelMB 6s infinite; }
          .animate-label-kb { animation: labelKB 6s infinite; }

          @keyframes typeFile {
            0%, 20% { content: "IMG_4837.jpg"; color: #94a3b8; } 
            40%, 85% { content: "wooden-clock.webp"; color: hsl(var(--primary)); }
            100% { content: "IMG_4837.jpg"; color: #94a3b8; }
          }
          .animate-filename::after { content: "IMG_4837.jpg"; animation: typeFile 6s step-end infinite; }
          
          @keyframes typeAlt {
            0%, 25% { content: "null"; color: #f43f5e; } 
            45%, 85% { content: "Handcrafted 12-inch clock"; color: #2dd4bf; }
            100% { content: "null"; color: #f43f5e; }
          }
          .animate-alt::after { content: "null"; animation: typeAlt 6s step-end infinite; }

          @keyframes cropFrame {
            0%, 20% { width: 100%; height: 60%; } /* 16:9 ish */
            35%, 55% { width: 80%; height: 80%; } /* 1:1 */
            70%, 90% { width: 60%; height: 90%; } /* 4:3 portrait */
            100% { width: 100%; height: 60%; }
          }
          .animate-crop { animation: cropFrame 9s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

          @keyframes cleanupFilter {
            0%, 25% { filter: contrast(0.8) brightness(0.6) sepia(0.5); }
            45%, 85% { filter: contrast(1.1) brightness(1) sepia(0); }
            100% { filter: contrast(0.8) brightness(0.6) sepia(0.5); }
          }
          .animate-cleanup { animation: cleanupFilter 6s ease-in-out infinite; }
          
          @keyframes cleanupBg {
            0%, 25% { background-color: #1e293b; }
            45%, 85% { background-color: #ffffff; }
            100% { background-color: #1e293b; }
          }
          .animate-cleanup-bg { animation: cleanupBg 6s ease-in-out infinite; }

          @keyframes bulkPulse {
            0%, 15% { opacity: 0.2; transform: scale(0.95); border-color: #334155; }
            30%, 85% { opacity: 1; transform: scale(1); border-color: hsl(var(--primary)); }
            100% { opacity: 0.2; transform: scale(0.95); border-color: #334155; }
          }
          .animate-bulk-1 { animation: bulkPulse 6s ease-out infinite; animation-delay: 0.0s; }
          .animate-bulk-2 { animation: bulkPulse 6s ease-out infinite; animation-delay: 0.15s; }
          .animate-bulk-3 { animation: bulkPulse 6s ease-out infinite; animation-delay: 0.3s; }
          .animate-bulk-4 { animation: bulkPulse 6s ease-out infinite; animation-delay: 0.45s; }
          .animate-bulk-5 { animation: bulkPulse 6s ease-out infinite; animation-delay: 0.6s; }
          .animate-bulk-6 { animation: bulkPulse 6s ease-out infinite; animation-delay: 0.75s; }
        }
      `}</style>
      
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="mb-16">
          <h2 className="text-section-title mb-6">
            One image. Five jobs done.
          </h2>
          <p className="text-lead max-w-2xl">
            More than just a compression tool. Every image you upload is instantly transformed, tagged, and standardized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {/* Card 1: Compress & Convert */}
          <div className="interactive-card bg-card border border-border p-6 flex flex-col h-64 relative overflow-hidden group">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Compress & convert</h3>
            <p className="text-xs font-medium text-muted-foreground mb-8">Heavy JPEGs become featherweight WebP.</p>
            <div className="mt-auto relative w-full h-12 bg-slate-900 border border-border flex flex-col justify-center px-3">
              <div className="absolute left-0 top-0 bottom-0 animate-shrink z-0" />
              <div className="relative z-10 flex justify-between items-center text-[10px] font-mono font-bold tracking-wider">
                <span className="animate-label-mb text-slate-400 absolute">4.2 MB JPG</span>
                <span className="animate-label-kb text-primary absolute opacity-0">84 KB WEBP</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI names & describes */}
          <div className="interactive-card bg-card border border-border p-6 flex flex-col h-64 relative overflow-hidden group">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">AI names & describes</h3>
            <p className="text-xs font-medium text-muted-foreground mb-8">Metadata written for SEO automatically.</p>
            <div className="mt-auto space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold w-6">File</span>
                <div className="h-6 flex-1 bg-slate-900 border border-slate-800 flex items-center px-2 text-[10px] font-mono animate-filename" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold w-6">Alt</span>
                <div className="h-6 flex-1 bg-slate-900 border border-slate-800 flex items-center px-2 text-[10px] font-mono animate-alt truncate" />
              </div>
            </div>
          </div>

          {/* Card 3: Smart crop */}
          <div className="interactive-card bg-card border border-border p-6 flex flex-col h-64 relative overflow-hidden group">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Smart crop</h3>
            <p className="text-xs font-medium text-muted-foreground mb-8">Images snap perfectly to your store ratio.</p>
            <div className="mt-auto h-24 w-full flex items-center justify-center bg-slate-900 border border-slate-800 border-dashed">
              <div className="animate-crop border-2 border-primary bg-background overflow-hidden relative">
                <Image src="/demo-product.jpg" alt="crop demo" fill sizes="120px" className="object-cover opacity-80" />
                <div className="absolute inset-0 border border-white/20 pointer-events-none grid grid-cols-3 grid-rows-3">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/10" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Background cleanup */}
          <div className="interactive-card bg-card border border-border p-6 flex flex-col h-64 relative overflow-hidden group">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Background cleanup</h3>
            <p className="text-xs font-medium text-muted-foreground mb-8">Messy product shots made studio-ready.</p>
            <div className="mt-auto h-24 w-full border border-slate-800 overflow-hidden relative animate-cleanup-bg flex items-center justify-center">
              <Image src="/demo-product.jpg" alt="cleanup demo" fill sizes="120px" className="object-cover animate-cleanup scale-125" />
            </div>
          </div>

          {/* Card 5: Bulk optimize */}
          <div className="interactive-card bg-card border border-border p-6 flex flex-col h-64 relative overflow-hidden group">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Bulk optimize</h3>
            <p className="text-xs font-medium text-muted-foreground mb-8">Your entire catalog in one single click.</p>
            <div className="mt-auto grid grid-cols-3 grid-rows-2 gap-1.5 w-full h-24">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`bg-slate-900 border border-slate-800 overflow-hidden relative animate-bulk-${i}`}>
                <Image src="/demo-product.jpg" alt="bulk demo" fill sizes="(max-width: 768px) 33vw, 10vw" className="object-cover opacity-60" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}
