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
                Ecommerce image optimization is the process of reducing file sizes and structuring image data to help a storefront perform better. It balances visual quality with technical efficiency to reduce image payloads and improve discoverability.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When a merchant uploads high-resolution photography directly from a camera to a platform like Shopify, the files are typically large and carry unhelpful filenames. Optimization addresses these technical characteristics before they affect the storefront.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Why should ecommerce stores optimize product images?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Ecommerce stores should optimize product images because heavy payloads can degrade the user experience and negatively impact page-loading performance. Simultaneously, poorly structured images may lack the context useful for discovery systems.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Reducing unnecessarily large image payloads can help reduce the amount of data a browser needs to download and may improve page-loading performance, particularly on slower connections or mobile devices. This can have a positive effect on metrics like Largest Contentful Paint (LCP). From a discoverability perspective, image metadata and surrounding page context can provide useful information about an image. While image understanding capabilities vary between search and AI systems, providing structured information helps ensure your catalog is accessible and understandable.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What image format should ecommerce stores use?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                The appropriate format depends on the image, transparency requirements, browser support, and delivery system. Modern formats such as WebP and AVIF can offer useful compression characteristics, while JPEG and PNG still have legitimate use cases.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                WebP provides strong lossless and lossy compression, often reducing file weights significantly while maintaining perceptual quality. However, modern ecommerce platforms and content delivery networks (CDNs) often handle format selection automatically, negotiating and serving the most efficient format supported by the shopper's browser.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How should ecommerce stores choose image dimensions?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Stores should avoid serving dramatically larger images than the display context requires, balancing visual quality with payload size.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Using appropriate source dimensions prevents the browser from downloading unnecessarily huge source files only to scale them down visually. It is important to consider responsive image delivery and retina/high-density displays, ensuring the platform serves appropriately sized versions of the image based on the user's screen size.
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
                Yes. Generic camera filenames provide little descriptive context about the subject of an image.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Renaming a generic string like <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">IMG_4837.jpg</code> to a descriptive format like <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">handcrafted-wooden-wall-clock-12-inch.webp</code> can provide additional descriptive context that may support storefront discoverability.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Should product images have alt text?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Yes. Alt text is primarily intended to provide an accessible text alternative for people who cannot see an image, and it can also contribute contextual information for search engines.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Product alt text should accurately identify the product and relevant visual characteristics when appropriate, describing meaningful visual information. It should not be stuffed with keywords. Note that decorative images may require different treatment, such as empty alt attributes.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How does image optimization apply to Shopify stores?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Product images are a core part of the Shopify storefront experience. Merchants should consider how images are uploaded, transformed, and delivered by Shopify and their active theme.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                While Shopify provides built-in image delivery and CDN capabilities, initial image size and metadata structure still affect the final page payload and product context. Product image metadata should remain descriptive and accurate. Any optimization tools or apps should complement the existing Shopify workflow rather than unnecessarily disrupting it.
              </p>
            </div>

            <div className="pt-12 pb-4">
              <div className="w-16 h-px bg-border"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Practical optimization checklist</h2>
              <ul className="space-y-4 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">Scale properly:</strong> Avoid serving dramatically larger images than the display requires.</li>
                <li><strong className="text-foreground">Compress consistently:</strong> Ensure images are compressed to reduce payload size.</li>
                <li><strong className="text-foreground">Use modern formats:</strong> Rely on formats like WebP or AVIF where supported and practical.</li>
                <li><strong className="text-foreground">Rename files:</strong> Replace generic camera names with descriptive strings.</li>
                <li><strong className="text-foreground">Write clear alt text:</strong> Accurately describe the product for accessibility and context.</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-8 mt-16 border border-border rounded-sm">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-4">Automate your image optimization</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                1-OPTIMISER is an ecommerce performance tool designed specifically for Shopify stores. It compresses image assets, rewrites generic filenames, and generates contextual alt text to support storefront performance.
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
