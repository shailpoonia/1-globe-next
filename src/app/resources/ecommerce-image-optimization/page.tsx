import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'
import Link from 'next/link'
import { getResourceBySlug } from '@/lib/resources'
import { ArticleSchema, ResourceBreadcrumbSchema } from '@/components/shared/ArticleSchemaOrg'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/shared/CtaBand'

const slug = 'ecommerce-image-optimization'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = {
  title: resource?.title || 'Ecommerce Image Optimization',
  description: resource?.description,
  alternates: {
    canonical: `/resources/${slug}`,
  },
}

export default function ArticlePage() {
  if (!resource) {
    notFound()
  }

  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <ArticleSchema resource={resource} />
      <ResourceBreadcrumbSchema resource={resource} />
      
      <main className="flex-1">
        {/* Article Header */}
        <Section className="py-24 md:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <div className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
              <Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link>
              <span className="text-muted-foreground">/</span>
              <span>{resource.category}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 leading-[1.1]">
              {resource.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-8">
              {resource.description}
            </p>
          </div>
        </Section>

        {/* Article Content */}
        <Section className="py-24 bg-background border-b border-border">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-12">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What is ecommerce image optimization?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Ecommerce image optimization is the process of reducing file sizes and structuring image data to help a storefront perform better for both search systems and human visitors. It balances visual quality with technical efficiency to reduce Largest Contentful Paint (LCP) times and improve discoverability.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When a merchant uploads high-resolution photography directly from a camera to a platform like Shopify, the files are typically too large and carry unhelpful filenames. Optimization solves these technical bottlenecks before they slow down the storefront.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Why should ecommerce stores optimize product images?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Ecommerce stores must optimize product images because heavy payloads directly degrade the user experience and negatively impact Core Web Vitals. Simultaneously, poorly structured images lack the context required by search engines and AI generative discovery tools.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                An unoptimized catalog forces mobile users to download megabytes of unnecessary data, increasing bounce rates. From a discoverability perspective, search and answer engines cannot physically see an image; they rely on its filename, format, and alt text to understand what the product is.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What image format should ecommerce stores use?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Ecommerce stores should serve modern, highly efficient formats like WebP or AVIF instead of legacy formats like JPEG or PNG.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                WebP provides superior lossless and lossy compression, often reducing file weights significantly while maintaining perceptual quality. Most modern ecommerce architectures automatically negotiate and serve the best format supported by the shopper's browser.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Does compressing product images affect quality?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Proper image compression reduces file size while aiming to maintain perceptual quality, meaning the human eye cannot easily detect the difference.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                By stripping unnecessary EXIF metadata and applying intelligent compression algorithms, images can become much lighter without appearing pixelated or blurry on standard displays.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Should product images have descriptive filenames?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Yes, product images should have descriptive filenames. Generic camera strings like <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">IMG_4837.jpg</code> provide zero semantic value to search engines.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Renaming a file to <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">handcrafted-wooden-wall-clock-12-inch.webp</code> explicitly tells Google Images, Bing, and AI discovery tools exactly what the asset represents, providing crucial context that supports storefront performance.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Should product images have alt text?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Yes, alt text is a critical component of product image optimization. It provides essential accessibility information for screen readers and acts as a strong contextual signal for search and answer engines.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Effective alt text objectively describes the visual contents of the image in the context of the product. It should be descriptive rather than keyword-stuffed.
              </p>
            </div>

            <div className="pt-12 pb-4">
              <div className="w-16 h-px bg-border"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Practical optimization checklist</h2>
              <ul className="space-y-4 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">Scale properly:</strong> Do not serve 4000px images in a 500px container.</li>
                <li><strong className="text-foreground">Compress consistently:</strong> Ensure every image in your catalog is compressed to reduce payload.</li>
                <li><strong className="text-foreground">Use modern formats:</strong> Serve WebP where supported.</li>
                <li><strong className="text-foreground">Rename files:</strong> Replace generic camera names with descriptive, hyphenated strings.</li>
                <li><strong className="text-foreground">Write clear alt text:</strong> Describe the product accurately for accessibility and search context.</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-8 mt-16 border border-border rounded-sm">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-4">Automate your image optimization</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                1-OPTIMISER is designed specifically for Shopify stores. It compresses image assets, rewrites generic filenames, and generates contextual alt text to support storefront performance.
              </p>
              <Link href="/apps/1-optimiser" className="interactive-btn inline-flex items-center justify-center h-12 px-8 font-bold text-xs uppercase tracking-widest bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-foreground/90 transition-colors">
                Explore 1-OPTIMISER
              </Link>
            </div>

          </div>
        </Section>

        <CtaBand />
      </main>
    </div>
  )
}
