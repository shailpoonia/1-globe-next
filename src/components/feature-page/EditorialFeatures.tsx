import React from 'react'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

export const EditorialFeatures: React.FC = () => {
  return (
    <Section id="features" className="section-spacing bg-background border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Capabilities"
          headline="Built for the entire catalog."
          subhead="Six layers of optimization and control for your storefront infrastructure."
          align="center"
        />

        <div className="mt-20 space-y-32">
          
          {/* Feature 1: Visual Left / Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square interactive-card bg-card border border-border flex flex-col items-center justify-center p-12">
               <span className="font-heading font-bold text-7xl text-foreground">01</span>
               <span className="text-eyebrow mt-4">Optimization</span>
            </div>
            <div className="max-w-xl lg:pl-8">
              <h3 className="text-section-title mb-6">Image Optimization</h3>
              <p className="text-lead">
                Compress images, resize them and optionally convert them to WebP formats to reduce payload size without compromising visual quality.
              </p>
            </div>
          </div>

          {/* Feature 2: Text Left / Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl lg:order-1 order-2">
              <h3 className="text-section-title mb-6">AI Image Metadata</h3>
              <p className="text-lead">
                Generate image-specific ALT text, descriptive filenames, and keyword suggestions to improve contextual metadata across the catalog.
              </p>
            </div>
            <div className="aspect-square interactive-card bg-card border border-border flex flex-col items-center justify-center p-12 lg:order-2 order-1">
               <span className="font-heading font-bold text-7xl text-foreground">02</span>
               <span className="text-eyebrow mt-4">Metadata</span>
            </div>
          </div>

          {/* Feature 3: Visual Left / Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square interactive-card bg-card border border-border flex flex-col items-center justify-center p-12">
               <span className="font-heading font-bold text-7xl text-foreground">03</span>
               <span className="text-eyebrow mt-4">Editing</span>
            </div>
            <div className="max-w-xl lg:pl-8">
              <h3 className="text-section-title mb-6">Image Editing</h3>
              <p className="text-lead">
                Enhance, crop, resize, draw, change backgrounds, and generate images natively within the app.
              </p>
            </div>
          </div>

          {/* Feature 4: Text Left / Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl lg:order-1 order-2">
              <h3 className="text-section-title mb-6">Storefront Performance</h3>
              <p className="text-lead">
                Use the Shopify theme extension to support lazy loading, responsive images, image preloading, and related storefront optimizations.
              </p>
            </div>
            <div className="aspect-square interactive-card bg-card border border-border flex flex-col items-center justify-center p-12 lg:order-2 order-1">
               <span className="font-heading font-bold text-7xl text-foreground">04</span>
               <span className="text-eyebrow mt-4">Performance</span>
            </div>
          </div>

          {/* Feature 5: Visual Left / Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square interactive-card bg-card border border-border flex flex-col items-center justify-center p-12">
               <span className="font-heading font-bold text-7xl text-foreground">05</span>
               <span className="text-eyebrow mt-4">Control</span>
            </div>
            <div className="max-w-xl lg:pl-8">
              <h3 className="text-section-title mb-6">Store Control</h3>
              <p className="text-lead">
                Choose the store, collection, product, or image scope and explicitly confirm changes before saving them to Shopify.
              </p>
            </div>
          </div>

          {/* Feature 6: Text Left / Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl lg:order-1 order-2">
              <h3 className="text-section-title mb-6">Measure & Review</h3>
              <p className="text-lead">
                Review optimization history, track image savings, and access storefront image measurements to evaluate performance.
              </p>
            </div>
            <div className="aspect-square interactive-card bg-card border border-border flex flex-col items-center justify-center p-12 lg:order-2 order-1">
               <span className="font-heading font-bold text-7xl text-foreground">06</span>
               <span className="text-eyebrow mt-4">Review</span>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}
