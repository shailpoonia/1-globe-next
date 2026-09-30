import React from 'react'

// Measured on the live 1-globe.com homepage (desktop) before and after the 26 Sep 2026 update.
// Before: Google PageSpeed Insights. After: browser network measurement.
const BEFORE_MB = 14.3
const AFTER_MB = 1.5
const OTHER_MB = 0.5 // code, images, fonts, HTML and CSS; unchanged by the update

const pct = (mb: number) => `${(mb / BEFORE_MB) * 100}%`

export const PageWeightProof: React.FC = () => {
  return (
    <section id="performance-proof" className="bg-neutral-950 py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <span className="text-eyebrow">Measure the difference</span>
            <h2 className="text-section-title">
              Performance should be <span className="text-primary">measurable</span>
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-neutral-400 md:max-w-md">
            We applied our own advice to this website. Here is what the homepage weighed on a desktop visit, before and after.
          </p>
        </div>

        <figure className="m-0 bg-card border border-border rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-heading text-lg sm:text-xl font-bold text-foreground">1-globe.com homepage, desktop</span>
              <span className="text-sm sm:text-base text-neutral-500">Total page weight transferred</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-heading text-4xl sm:text-5xl font-bold leading-none text-primary">≈90%</span>
              <span className="text-sm sm:text-base text-neutral-400">lighter</span>
            </div>
          </div>

          <div className="flex flex-col gap-6" role="img" aria-label={`Homepage weight: ${BEFORE_MB} MB before, ${AFTER_MB} MB after. The hero video went from 13.8 MB to 1.0 MB; everything else stayed about ${OTHER_MB} MB.`}>
            {/* Phones: label and value on one line, bar full width below. Larger screens: one row. */}
            <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[4.5rem_minmax(0,1fr)_6rem] items-center gap-x-4 gap-y-2">
              <span className="sm:order-1 text-sm sm:text-base font-semibold text-foreground">Before</span>
              <span className="sm:order-3 font-heading text-lg sm:text-2xl font-bold text-foreground text-right">{BEFORE_MB} MB</span>
              <div className="col-span-2 sm:col-span-1 sm:order-2 flex h-9 sm:h-11 rounded-lg overflow-hidden">
                <div className="bg-destructive" style={{ width: pct(BEFORE_MB - OTHER_MB) }} />
                <div className="bg-neutral-600" style={{ width: pct(OTHER_MB) }} />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[4.5rem_minmax(0,1fr)_6rem] items-center gap-x-4 gap-y-2">
              <span className="sm:order-1 text-sm sm:text-base font-semibold text-foreground">After</span>
              <span className="sm:order-3 font-heading text-lg sm:text-2xl font-bold text-foreground text-right">{AFTER_MB} MB</span>
              <div className="col-span-2 sm:col-span-1 sm:order-2 flex h-9 sm:h-11">
                <div className="flex rounded-lg overflow-hidden" style={{ width: pct(AFTER_MB), minWidth: '1.5rem' }}>
                  <div className="bg-primary" style={{ width: `${((AFTER_MB - OTHER_MB) / AFTER_MB) * 100}%` }} />
                  <div className="bg-neutral-600" style={{ width: `${(OTHER_MB / AFTER_MB) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>

          <ul className="m-0 p-0 list-none flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-6 text-sm sm:text-base text-neutral-400">
            <li className="flex items-center gap-2.5"><span aria-hidden="true" className="w-3.5 h-3.5 rounded bg-destructive" />Hero video before: 13.8 MB</li>
            <li className="flex items-center gap-2.5"><span aria-hidden="true" className="w-3.5 h-3.5 rounded bg-primary" />Hero video after: 1.0 MB</li>
            <li className="flex items-center gap-2.5"><span aria-hidden="true" className="w-3.5 h-3.5 rounded bg-neutral-600" />Everything else, unchanged: about 0.5 MB</li>
          </ul>
        </figure>

        <p className="text-sm leading-relaxed text-neutral-500">
          Measured on the live homepage before and after the 26 September 2026 update: Google PageSpeed Insights (before) and browser network measurement (after).
        </p>
      </div>
    </section>
  )
}
