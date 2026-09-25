import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'
import Link from 'next/link'
import { getResourceBySlug } from '@/lib/resources'
import { ArticleSchema, ResourceBreadcrumbSchema } from '@/components/shared/ArticleSchemaOrg'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/shared/CtaBand'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const slug = 'product-listing-generative-discovery'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = {
  title: resource?.title ? `${resource.title} | 1-GLOBE` : 'Product Listing & Generative Discovery: A Practical Guide for Ecommerce | 1-GLOBE',
  description: resource?.description,
  alternates: {
    canonical: `/resources/${slug}`,
  },
}

export default function ArticlePage() {
  if (!resource) {
    notFound()
  }

  const faqs = [
    {
      q: "What is a product listing?",
      a: "A product listing is the structured presentation of a product's identity, attributes, description, specifications, variants, and availability, serving as the definitive record of that product on an ecommerce storefront."
    },
    {
      q: "What information should a product listing contain?",
      a: "A strong product listing should contain a clear title, narrative description, structured attributes and specifications, variant details, pricing, availability, brand, standardized identifiers (like SKUs), optimized images, and relevant supporting FAQs."
    },
    {
      q: "How should product titles be structured?",
      a: "Product titles should prioritize clarity by communicating the brand, product name, product type, model, and important differentiating attributes (like size or color) without resorting to keyword stuffing."
    },
    {
      q: "Why are product attributes important?",
      a: "Structured product attributes—such as material, dimensions, and compatibility—ensure consistency across a catalog. This allows customers to compare products accurately and helps search systems categorize the listing effectively."
    },
    {
      q: "How do product feeds relate to product listings?",
      a: "Product feeds distribute the structured information from your storefront product listings to external marketplaces, shopping systems, and advertising platforms. The quality of the feed depends entirely on the accuracy of the underlying listing data."
    },
    {
      q: "Can structured product listings improve SEO?",
      a: "Structured listings can make product information clearer and easier for systems to interpret, which provides better context for traditional search engines. However, optimizing a listing does not guarantee specific rankings or increased search traffic."
    },
    {
      q: "How do product listings relate to answer engines and generative discovery?",
      a: "Answer engines and generative discovery systems synthesize information from the web to answer user queries. Clear, consistent product information may provide clearer context to these downstream systems, though inclusion or AI recommendations are never guaranteed."
    },
    {
      q: "How can I audit product listings at scale?",
      a: "Auditing product listings requires a systematic workflow: verifying the central source of truth, reviewing titles and descriptions, standardizing attributes and specifications, validating variants, checking image metadata, and ensuring data consistency across all external feeds."
    }
  ]

  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <ArticleSchema resource={resource} />
      <ResourceBreadcrumbSchema resource={resource} />
      
      {/* FAQ Schema for AEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <main className="flex-1">
        {/* Article Header */}
        <Section className="py-24 md:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <div className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
              <Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link>
              <span className="text-border">/</span>
              <span>{resource.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-[1.1]">
              {resource.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-8">
              {resource.description}
            </p>
            <div className="flex items-center gap-6 text-sm font-medium text-neutral-500 uppercase tracking-widest">
              <span>Published: {new Date(resource.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </Section>

        {/* Article Body */}
        <Section className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-16 md:space-y-24">
            
            <div className="space-y-6">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                As commerce evolves beyond traditional search engines, the way products are discovered is fundamentally changing. To remain accessible across modern <Link href="/resources/ecommerce-performance" className="text-primary hover:underline">ecommerce performance</Link> environments—spanning on-site search, external product feeds, answer engines, and generative discovery systems—product information must be exceptionally clear, structured, and consistent.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">1. What Is a Product Listing?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A product listing is the structured presentation of a product's identity, attributes, description, specifications, variants, availability, and supporting information. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                It is crucial to distinguish a complete product listing from a simple product description. While a description is a block of narrative text, the listing is the comprehensive, organized data record that defines the product conceptually, visually, and commercially across the storefront.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">2. Why Product Listing Structure Matters</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Structuring a listing correctly establishes a foundation of truth for the catalog. For human shoppers, it enables immediate customer understanding, facilitates accurate product comparison, and supports a consistent browsing experience.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                For machine systems, it provides the necessary context for internal ecommerce search capabilities, traditional search discovery, and external product feeds. While clear structure may help systems interpret product information accurately, it does not guarantee specific rankings or inclusion in search engine results.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">3. The Core Elements of a Strong Product Listing</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A robust listing harmonizes multiple distinct data points. When expanding on basic <Link href="/resources/product-content-structure" className="text-primary hover:underline">product content structure</Link>, the critical elements of a complete listing include:
              </p>
              <ul className="space-y-2 text-lg text-neutral-400 list-disc list-inside">
                <li>Product title and product description</li>
                <li>Product attributes and technical specifications</li>
                <li>Clear variant definitions (size, colour, etc.)</li>
                <li>Accurate pricing and real-time availability</li>
                <li>Brand identity and standardized identifiers (e.g., SKUs)</li>
                <li>Product images and embedded image metadata</li>
                <li>Contextual FAQs and supporting information</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">4. Product Titles and Product Identity</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The product title acts as the primary identifier. Titles should explicitly communicate the brand, the exact product name, the product type, the model, and any important differentiating attributes (such as capacity or color) necessary to distinguish it from similar items.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Clarity and consistency are paramount. Attempting to manipulate search systems by stuffing titles with loosely related keywords degrades usability and obscures the product's actual identity from both users and discovery platforms.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">5. Product Attributes and Specifications</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Structured attributes are the backbone of a functional catalog. Information such as material, physical dimensions, colour, size, capacity, compatibility, and technical specifications must be distinctly categorized.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Equally important are catalog identifiers like the model number, internal SKU, and standardized global identifiers like GTINs. Maintaining absolute consistency in how these attributes are named and formatted across the entire store ensures that filtering and sorting tools function correctly.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">6. Product Variants and Catalog Relationships</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Listings with multiple options must carefully manage the relationship between parent products and their variants. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Each variant must accurately inherit general product information while strictly maintaining its own variant-specific attributes, distinct SKUs, unique availability status, accurate pricing, and corresponding images. Providing contradictory information between a parent description and a variant specification creates irreconcilable logic for external shopping feeds.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">7. Product Images as Listing Information</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Product images are a foundational part of the product information system—they are not merely decorative elements. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                To function as effective listing data, imagery requires appropriate dimensions, highly efficient formats, descriptive filenames, and useful, context-driven alt text. For a deep dive into treating visual assets as structured data, review our guides on <Link href="/resources/product-image-alt-text" className="text-primary hover:underline">product image alt text</Link>, <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:underline">ecommerce image optimization</Link>, and <Link href="/resources/ecommerce-image-compression-webp" className="text-primary hover:underline">ecommerce image compression & WebP</Link>.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">8. Product Feeds and External Discovery</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A product feed is a structured digital file that continuously distributes your catalog data to external destinations, including marketplaces, shopping systems, advertising platforms, and search discovery systems.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Because requirements vary dramatically by destination, establishing a rigorously structured listing on the storefront ensures the resulting feed data is robust. However, merchants should note that merely submitting a well-structured feed does not guarantee inclusion, visibility, or commercial performance on external platforms.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">9. Product Listings and Search</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Traditional and ecommerce search systems operate by evaluating context. To surface a listing accurately, these systems need to understand exactly what the product is, the category it belongs to, its defining attributes, its relevance to a specific user query, and its current availability.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                While content structure provides this context, it is only one part of search visibility. Simply adding more keywords to a listing does not automatically improve rankings and can harm the customer experience.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">10. Product Listings and Answer Engines</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Answer engines are systems designed to synthesize information from multiple web sources into a direct, conversational response. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Clear, unambiguous product information can provide highly useful context for these systems when they process queries about specifications, compatibility, or product categories. However, there is no universal answer-engine ranking formula. Inclusion is never guaranteed, and merchants cannot dictate how a particular system will ultimately interpret or cite their content.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">11. Product Listings and Generative Discovery</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Generative discovery is an evolving category encompassing systems that utilize generative models to help users explore products, options, and ideas. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                These systems favor accurate information, consistent attributes, clear product identity, and trustworthy source context. While optimizing product data helps align a listing with the factual needs of these models, merchants cannot directly control generative-system recommendations, and attempting to artificially engineer "AI visibility" is an unsound strategy.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">12. Structured Data and Product Listings</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                It is vital to understand the distinctions between visible product content, raw catalog data, external product feeds, and structured data (schema markup).
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Schema markup exists to translate the visible, human-readable product information into a standardized vocabulary (like schema.org) for search crawlers. This code-level structured data must always accurately represent the visible product information. Implementing schema correctly is a technical best practice, but it does not imply or guarantee rich results, AI visibility, or increased traffic.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">13. Common Product Listing Problems</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                The most frequent barriers to clear product discovery include:
              </p>
              <ul className="space-y-2 text-lg text-neutral-400 list-disc list-inside">
                <li>Vague titles and missing defining attributes.</li>
                <li>Inconsistent terminology (e.g., mixing imperial and metric units arbitrarily).</li>
                <li>Duplicate content and copied descriptions across distinct variants.</li>
                <li>Contradictory specifications between the description and the data table.</li>
                <li>Incomplete variants and poor image metadata.</li>
                <li>Keyword stuffing and unsupported marketing claims.</li>
                <li>Missing standardized identifiers like SKUs or GTINs.</li>
                <li>Inconsistent product data across different sales channels.</li>
                <li>Outdated availability or pricing information.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">14. How to Audit Product Listings at Scale</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                Maintaining listing integrity across a large store requires a rigorous workflow:
              </p>
              <ol className="space-y-3 text-lg text-neutral-400 list-decimal list-inside bg-secondary/10 p-6 rounded border border-border">
                <li>Identify the authoritative source of truth for catalog data.</li>
                <li>Validate core product identity and brand accuracy.</li>
                <li>Review all titles for structural clarity.</li>
                <li>Review descriptions for narrative accuracy and formatting.</li>
                <li>Standardize all attributes and specifications.</li>
                <li>Validate variant relationships and variant-specific data.</li>
                <li>Review all images and embedded image metadata.</li>
                <li>Verify that code-level structured data matches the visible interface.</li>
                <li>Verify data integrity within external product feeds where applicable.</li>
                <li>Check for strict consistency across all integrated sales channels.</li>
                <li>Establish processes to continuously monitor and maintain the catalog.</li>
              </ol>
            </div>

            <div className="bg-secondary/30 p-8 md:p-12 mt-16 border border-border rounded-lg">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">15. Where 1-LIST Fits</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                1-LIST is being developed around product listing performance: helping merchants build product listings structured for search, answer engines, and generative discovery.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                The core product direction is entirely focused on helping merchants organize complex product information, enforce attribute consistency, and streamline the underlying listing structure. 
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Note: 1-LIST is currently launching soon.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/" className="interactive-btn inline-flex items-center justify-center h-12 px-8 font-bold text-xs uppercase tracking-widest bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-foreground/90 transition-colors">
                  Return to 1-GLOBE
                </Link>
                <Link href="/apps/1-optimiser" className="inline-flex items-center justify-center h-12 px-8 font-bold text-xs uppercase tracking-widest bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                  Explore 1-OPTIMISER
                </Link>
              </div>
            </div>

            <div className="pt-12 pb-4">
              <div className="w-16 h-px bg-border"></div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
              <Accordion.Root type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <Accordion.Item 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-md overflow-hidden"
                  >
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 text-left font-bold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:bg-secondary/50 group">
                        {faq.q}
                        <ChevronDown className="w-5 h-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform duration-300" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="py-5 px-6 pt-0 text-neutral-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>

            {/* Related Resources */}
            <div className="pt-12 border-t border-border mt-16">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Related Resources</h2>
              <div className="flex flex-col gap-4">
                <Link href="/resources/product-content-structure" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Product Content Structure
                </Link>
                <Link href="/resources/ecommerce-performance" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Performance
                </Link>
                <Link href="/resources/page-payload-critical-resources" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Page Payload & Critical Resources
                </Link>
                <Link href="/resources/shopify-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Shopify Image Optimization
                </Link>
                <Link href="/resources/bulk-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Bulk Image Optimization
                </Link>
                <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Image Optimization
                </Link>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2 mt-4">
                  Return to 1-GLOBE Homepage
                </Link>
              </div>
            </div>

          </div>
        </Section>

        <CtaBand />
      </main>
    </div>
  )
}
