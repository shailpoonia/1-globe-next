import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Section } from '@/components/shared/Section'
import { ArticleToc } from '@/components/shared/ArticleToc'
import Link from 'next/link'
import { getResourceBySlug } from '@/lib/resources'
import { ArticleSchema, ResourceBreadcrumbSchema } from '@/components/shared/ArticleSchemaOrg'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/shared/CtaBand'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { AppName } from '@/components/shared/BrandLogo'

const slug = 'product-content-structure'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = buildMetadata({
  title: resource?.title || 'Product Content Structure: A Practical Guide for Ecommerce',
  description: resource?.description,
  path: `/resources/${slug}`,
  article: resource,
})

export default function ArticlePage() {
  if (!resource) {
    notFound()
  }

  const faqs = [
    {
      q: "What is product content structure?",
      a: "Product content structure is the intentional organization of product information (such as titles, descriptions, attributes, and specifications) into clear, standardized formats that are easily understood by both customers and software systems."
    },
    {
      q: "What should an ecommerce product page include?",
      a: "A comprehensive ecommerce product page should typically include a clear product title, a concise summary, a detailed description, structured technical specifications or attributes, variant details, compatibility or usage information, and relevant FAQs."
    },
    {
      q: "How should product titles be structured?",
      a: "Product titles should prioritize clarity over keyword density. They should typically include the brand or manufacturer, the specific product name or model, the product type, and critical differentiating attributes like size or color."
    },
    {
      q: "What is the difference between product descriptions and attributes?",
      a: "Product descriptions provide narrative context, explaining what a product is, who it is for, and how it is used. Attributes are discrete, structured data points, such as dimensions, weight, or material, that are used for filtering, comparison, and technical specifications."
    },
    {
      q: "Why are consistent product attributes important?",
      a: "Consistent attributes allow customers to accurately compare different products and use faceted navigation effectively. They also ensure that external systems, like product feeds or search engines, can correctly interpret and categorize the catalog."
    },
    {
      q: "Does structured product content improve SEO?",
      a: "Structured content can make a product easier for software systems to understand, which provides better context for indexing. However, no specific content structure guarantees higher rankings, increased traffic, or more sales."
    },
    {
      q: "How does product content relate to answer engines and generative discovery?",
      a: "Generative AI systems and answer engines rely on clear, machine-readable information to synthesize responses. Well-structured product data may provide these systems with more accurate context, though inclusion or specific recommendations are never guaranteed."
    },
    {
      q: "How can I audit product content across a large catalog?",
      a: "Auditing product content requires standardizing attributes, reviewing titles and descriptions for clarity, ensuring consistency across product variants, verifying structured data alignment, and continuously monitoring the central product data source."
    }
  ]

  return (
    <div className="reading-light flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
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
            <div className="flex items-center gap-6 text-sm font-medium text-neutral-400 uppercase tracking-widest">
              <span>Published: {new Date(resource.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </Section>

        {/* Article Body */}
        <Section className="py-20 md:py-32">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 xl:grid xl:grid-cols-[15rem_minmax(0,48rem)] xl:gap-16 xl:justify-center">
            <ArticleToc items={[{"id": "what-is-product-content-structure", "label": "What Is Product Content Structure?"}, {"id": "why-product-content-structure-matters-for-ecommerce", "label": "Why Product Content Structure Matters for Ecommerce"}, {"id": "the-core-elements-of-ecommerce-product-content", "label": "The Core Elements of Ecommerce Product Content"}, {"id": "how-to-structure-a-strong-product-title", "label": "How to Structure a Strong Product Title"}, {"id": "product-descriptions-structure-before-length", "label": "Product Descriptions: Structure Before Length"}, {"id": "product-attributes-and-specifications", "label": "Product Attributes and Specifications"}, {"id": "product-variants-and-option-structure", "label": "Product Variants and Option Structure"}, {"id": "product-content-consistency-across-the-catalog", "label": "Product Content Consistency Across the Catalog"}, {"id": "product-content-for-search-and-discovery", "label": "Product Content for Search and Discovery"}, {"id": "product-content-and-structured-data", "label": "Product Content and Structured Data"}, {"id": "product-faqs-and-supporting-information", "label": "Product FAQs and Supporting Information"}, {"id": "common-product-content-mistakes", "label": "Common Product Content Mistakes"}, {"id": "how-to-audit-product-content-at-scale", "label": "How to Audit Product Content at Scale"}, {"id": "product-content-and-accessibility-usability", "label": "Product Content and Accessibility / Usability"}, {"id": "where-1-listing-fits", "label": "Where 1-LISTING Fits"}, {"id": "frequently-asked-questions", "label": "Frequently Asked Questions"}]} />
            <div className="max-w-3xl mx-auto xl:mx-0 space-y-16 md:space-y-24">
            
            <div className="space-y-6">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                Ecommerce product information is fundamentally different from standard editorial copy. A product page must serve human shoppers evaluating a purchase while simultaneously providing structured data to complex software systems. Product content works best when important information is structured clearly and consistently.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="what-is-product-content-structure" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">1. What Is Product Content Structure?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Product content structure is the organization of product information into distinct, predictable formats. It moves beyond treating a product as merely a title and a single paragraph of copy.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A structured approach categorizes information, separating narrative descriptions from discrete technical specifications, standardizing variant options, and anticipating common questions. This architectural consistency ensures that data is accessible, comparable, and actionable.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="why-product-content-structure-matters-for-ecommerce" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">2. Why Product Content Structure Matters for Ecommerce</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                At a human level, clear structure improves customer understanding. When shoppers can easily locate dimensions, materials, and compatibility, they can make informed comparisons. This consistency directly improves the usability of the storefront.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Technically, clear product information can make a product easier for search and discovery systems to understand by providing machine-readable context. However, it is critical to note that while good structure is a foundational best practice for <Link href="/resources/ecommerce-performance" className="text-primary hover:underline">ecommerce performance</Link>, it does not guarantee rankings, AI visibility, or sales.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="the-core-elements-of-ecommerce-product-content" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">3. The Core Elements of Ecommerce Product Content</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A robust product page relies on an ecosystem of distinct content elements:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">Product Title:</strong> The clear, identifiable name of the product.</li>
                <li><strong className="text-foreground">Short Description:</strong> A brief summary capturing the product's primary value.</li>
                <li><strong className="text-foreground">Full Description:</strong> The detailed narrative explaining use cases and features.</li>
                <li><strong className="text-foreground">Product Attributes & Specifications:</strong> Discrete data points like dimensions, materials, and technical specs.</li>
                <li><strong className="text-foreground">Variants:</strong> Structured options (e.g., size, colour) belonging to a parent product.</li>
                <li><strong className="text-foreground">Supporting Information:</strong> FAQs, compatibility guides, usage instructions, and shipping information.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 id="how-to-structure-a-strong-product-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">4. How to Structure a Strong Product Title</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A strong product title prioritizes identity and clarity. It should clearly state what the product is, incorporating the brand, model, product type, and essential differentiators.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Titles should describe the product rather than act as keyword lists. Overloading a title with repetitive, comma-separated keywords creates a poor user experience and degrades the perceived quality of the catalog.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="product-descriptions-structure-before-length" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">5. Product Descriptions: Structure Before Length</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Merchants often mistake word count for quality. A highly structured, concise description is far more valuable than a lengthy wall of text.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Descriptions should clearly articulate what the product is, who it is intended for, its primary characteristics, and its practical use cases. By formatting information logically (using headers, bullet points, and distinct paragraphs for materials and practical details), merchants ensure that useful information is easily scannable.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="product-attributes-and-specifications" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">6. Product Attributes and Specifications</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Attributes are the structured data points that define a product: dimensions, weight, colour, material, capacity, size, and model numbers.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Consistent attribute naming is critical across a catalog. If one product uses "Color" and another uses "Hue", or if dimensions alternate between inches and centimeters without standardization, storefront filtering and comparison features will break. 
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="product-variants-and-option-structure" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">7. Product Variants and Option Structure</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When a product comes in multiple sizes, colours, or configurations, the content structure must clearly distinguish the parent product from its individual variants.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Each variant must inherit the parent's core description while maintaining its own specific attributes (such as a unique SKU, weight, or specific dimension). Mixing variant information incorrectly or presenting contradictory options within the description text confuses both shoppers and software systems.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="product-content-consistency-across-the-catalog" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">8. Product Content Consistency Across the Catalog</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A single well-structured product page is insufficient if the rest of the catalog is chaotic. Consistency is the foundation of a trustworthy ecommerce site.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                This requires consistent naming conventions, standardized units of measurement, uniform formatting, and identical terminology across all categories. Maintaining a single source of truth for product data (typically a PIM, or Product Information Management system, or a well-organized ecommerce platform backend) prevents conflicting specifications.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="product-content-for-search-and-discovery" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">9. Product Content for Search and Discovery</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Clear, highly organized product information can provide useful context for traditional search engines, internal ecommerce search functions, external product feeds, and emerging generative discovery systems.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When attributes are distinct and descriptions are accurate, these systems can categorize the product more effectively. However, merchants must understand that structured content does not guarantee visibility or inclusion in any search engine or AI system. It merely ensures the product is accurately represented when analyzed.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="product-content-and-structured-data" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">10. Product Content and Structured Data</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                It is important to distinguish between the visible product content a human reads and the structured data (like schema markup) injected into the page code.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Structured data is designed to translate the visible content into a standardized, machine-readable vocabulary (such as schema.org/Product). This markup must accurately and truthfully represent the visible product information. It should never be used to manufacture claims, prices, or attributes that are not supported by the visible page.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="product-faqs-and-supporting-information" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">11. Product FAQs and Supporting Information</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Frequently Asked Questions (FAQs) are highly useful when they address genuine customer concerns regarding compatibility, sizing, materials, installation, care, or specific usage scenarios.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                FAQs should be written to assist the shopper. Generating repetitive, unnatural FAQs merely as a tactic to insert keywords degrades the user experience and compromises the perceived authority of the brand.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="common-product-content-mistakes" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">12. Common Product Content Mistakes</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                When auditing a catalog, watch for these common architectural failures:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li>Keyword stuffing in titles or descriptions.</li>
                <li>Vague titles that fail to identify the product type.</li>
                <li>Duplicate descriptions copied across hundreds of variants.</li>
                <li>Inconsistent or contradictory attributes.</li>
                <li>Missing technical specifications for complex products.</li>
                <li>Excessive boilerplate text that pushes real product data below the fold.</li>
                <li>Making unsupported claims about performance or results.</li>
                <li>Writing exclusively for algorithms instead of the end customer.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 id="how-to-audit-product-content-at-scale" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">13. How to Audit Product Content at Scale</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                Managing product content across a large catalog requires a systematic workflow:
              </p>
              <ol className="space-y-3 text-lg text-neutral-400 list-decimal list-inside bg-secondary/10 p-6 rounded border border-border">
                <li>Identify the primary source of product data.</li>
                <li>Standardize all core attributes and measurement units.</li>
                <li>Check titles for clarity, consistency, and spam.</li>
                <li>Review descriptions for structural logic rather than just length.</li>
                <li>Verify that technical specifications are populated and accurate.</li>
                <li>Check variant structures for proper parent-child relationships.</li>
                <li>Audit catalog-wide consistency.</li>
                <li>Ensure visible content aligns with code-level structured data.</li>
                <li>Review the customer-facing clarity on actual storefront layouts.</li>
                <li>Establish a routine to monitor and maintain data integrity.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 id="product-content-and-accessibility-usability" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">14. Product Content and Accessibility / Usability</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Excellent content structure directly supports storefront accessibility. Information should be understandable, logically organized, and highly readable. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When content is well-structured, it is significantly more useful to people using assistive technologies. Note that written product descriptions serve a different structural purpose than image metadata; for guidance on making visual assets accessible, refer to our guide on <Link href="/resources/product-image-alt-text" className="text-primary hover:underline">product image alt text</Link>.
              </p>
            </div>

            <div className="bg-secondary/30 p-8 md:p-12 mt-16 border border-border rounded-lg">
              <h2 id="where-1-listing-fits" className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 scroll-mt-28">15. Where <AppName name="1-LISTING" /> Fits</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                <Link href="/" className="text-primary hover:underline">1-GLOBE</Link> is building an ecosystem of performance tools to support modern storefront architecture.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                1-LISTING is being developed around product listing performance: helping merchants build product listings with structured content for search, answer engines, and generative discovery. By focusing on data consistency and clear information architecture, it aims to streamline how catalogs are presented to complex systems.
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Note: 1-LISTING is launching next.
              </p>
            </div>

            <div className="pt-12 pb-4">
              <div className="w-16 h-px bg-border"></div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <h2 id="frequently-asked-questions" className="text-3xl font-heading font-bold text-foreground scroll-mt-28">Frequently Asked Questions</h2>
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
                    <Accordion.Content forceMount className="overflow-hidden data-[state=closed]:hidden">
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
              <h2 id="related-resources" className="text-2xl font-heading font-bold text-foreground mb-6 scroll-mt-28">Related Resources</h2>
              <div className="flex flex-col gap-4">
                <Link href="/resources/ecommerce-performance" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Performance
                </Link>
                <Link href="/resources/page-payload-critical-resources" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Page Payload & Critical Resources
                </Link>
                <Link href="/resources/bulk-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Bulk Image Optimization
                </Link>
                <Link href="/resources/shopify-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Shopify Image Optimization
                </Link>
                <Link href="/resources/ecommerce-image-compression-webp" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Image Compression & WebP
                </Link>
                <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Image Optimization
                </Link>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2 mt-4">
                  <span>Return to <AppName name="1-GLOBE" /> Homepage</span>
                </Link>
              </div>
            </div>

          </div>
          </div>
        </Section>

        <CtaBand />
      </main>
    </div>
  )
}
