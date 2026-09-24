import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'
import Link from 'next/link'
import { getResourceBySlug } from '@/lib/resources'
import { ArticleSchema, ResourceBreadcrumbSchema } from '@/components/shared/ArticleSchemaOrg'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/shared/CtaBand'

const slug = 'ecommerce-performance'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = {
  title: resource?.title || 'Ecommerce Performance: A Practical Guide',
  description: resource?.description,
  alternates: {
    canonical: `/resources/${slug}`,
  },
}

export default function EcommercePerformancePage() {
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What does ecommerce performance mean?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Ecommerce performance is the combined efficiency of a storefront's technical infrastructure, page-loading speed, and how effectively its content is structured for both human shoppers and discovery systems.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Historically, "performance" was viewed strictly as server response times. Today, modern ecommerce performance encompasses how quickly a page becomes visually complete, how accessible its elements are, and how clearly its product information is communicated to search engines and AI discovery tools.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Why does page-loading performance matter?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Page-loading performance matters because a fast, responsive storefront helps provide a frictionless shopping experience and may reduce bounce rates, particularly on mobile devices.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Shoppers have limited patience for slow interfaces. Heavy page payloads can delay rendering, keeping the user waiting before they can interact with the product. Measuring improvements in metrics like Largest Contentful Paint (LCP) can provide useful insight into how users experience the speed of your catalog.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How do image payloads impact storefront performance?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Unoptimized product images are often the largest contributor to heavy page payloads, significantly increasing the time it takes for a page to load fully.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Uploading raw, high-resolution photography directly from a camera forces the browser to download unnecessary data. Reducing these payloads through proper compression and appropriate dimension scaling can help lower bandwidth consumption and improve loading times. For a deeper dive into managing visual assets, read our complete <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30">guide to ecommerce image optimization</Link>.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Why is content structure important for discovery?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Content structure is important because search engines and answer engines rely on well-organized information to understand what a product is and when it is relevant to a query.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A visually appealing product listing is not enough if the underlying data is a disorganized block of text. Meaningful product information, accurate metadata, and semantic HTML (like proper H1/H2 tagging) provide crucial context. Structuring your product listings effectively helps ensure that discovery platforms can accurately parse and represent your catalog.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How does accessibility intersect with ecommerce performance?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Accessibility ensures that your storefront can be used by everyone, and many accessibility practices natively support technical performance and structured discovery.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                For instance, writing descriptive alt text for product images is primarily an accessibility requirement for screen readers, but it also provides valuable context to search indexers. A clean, accessible document structure naturally makes information easier to understand for both assistive technologies and machine-learning models.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What are the considerations for generative discovery and AI?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                As answer engines and AI generative discovery tools evolve, they increasingly rely on accurate, machine-readable product data rather than simply scanning for keywords.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                To support discovery in these newer paradigms, merchants should focus on clarity, factual accuracy, and structured content. Descriptive filenames, precise product attributes, and clear technical specifications provide the context these systems look for when synthesizing answers for users.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How does performance apply to Shopify storefronts?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                While Shopify provides a robust global infrastructure, merchants are still responsible for the weight of the assets they upload and the quality of the data they input.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Shopify's CDN handles delivery efficiently, but an uncompressed 5MB image still requires a 5MB transfer. Likewise, Shopify's theme engine outputs the metadata you provide—if your filenames are generic and your alt text is missing, the platform cannot invent context for you. Apps and customizations should complement the core platform without introducing unnecessary render-blocking scripts or heavy tracking payloads.
              </p>
            </div>

            <div className="pt-12 pb-4">
              <div className="w-16 h-px bg-border"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">A practical merchant checklist for performance</h2>
              <ul className="space-y-4 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">Compress images:</strong> Reduce unnecessary payload to support faster page loading.</li>
                <li><strong className="text-foreground">Size appropriately:</strong> Ensure image dimensions match their intended display size.</li>
                <li><strong className="text-foreground">Structure content:</strong> Use clear, semantic headings and descriptive product attributes.</li>
                <li><strong className="text-foreground">Provide context:</strong> Use descriptive filenames and accurate alt text for all critical assets.</li>
                <li><strong className="text-foreground">Monitor metrics:</strong> Keep an eye on Core Web Vitals, specifically LCP, to measure improvements over time.</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-8 mt-16 border border-border rounded-sm">
              <h3 className="text-lg font-bold uppercase tracking-widest text-foreground mb-4">Start with your image foundation</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Images are often the heaviest part of a storefront. 1-OPTIMISER is designed specifically for Shopify stores to compress image assets, rewrite generic filenames, and generate contextual alt text to support storefront performance.
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
