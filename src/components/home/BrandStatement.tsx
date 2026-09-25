import React from 'react'

export const BrandStatement: React.FC = () => {
  return (
    <section id="why" className="bg-background py-24 md:py-32 lg:py-40 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24 lg:mb-40">
          <div className="lg:col-span-7">
            <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground uppercase">
              EVERY STORE<br />
              CAN PERFORM<br />
              BETTER.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6 space-y-6 max-w-lg">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              Every click, search, campaign and recommendation eventually arrives at the same place: your store.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              The technology underneath that experience matters.
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h3 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-neutral-600 uppercase">
              MARKETING CREATES<br />
              <span className="text-foreground">DEMAND.</span>
            </h3>
            <div className="h-px w-full max-w-xs bg-border my-8 lg:my-10"></div>
            <h3 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-neutral-600 uppercase">
              THE STORE<br />
              <span className="text-primary">HAS TO PERFORM.</span>
            </h3>
          </div>
          <div className="lg:col-span-5 lg:pt-6 max-w-lg">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold text-foreground tracking-wider uppercase">
                ONE GLOBE 🌍
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
                Building AI-powered, next-generation ecommerce solutions.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                Building the technology behind the next generation of commerce.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

