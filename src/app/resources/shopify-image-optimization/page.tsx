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

const slug = 'shopify-image-optimization'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = {
  title: resource?.title ? `${resource.title} | 1-GLOBE` : 'Shopify Image Optimization: A Practical Guide | 1-GLOBE',
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
      q: "What is Shopify image optimization?",
      a: "Shopify image optimization is the process of preparing images for a Shopify storefront by balancing visual quality, file size, dimensions, and appropriate formats to ensure pages load efficiently without serving unnecessarily large payloads."
    },
    {
      q: "What image format should I use for Shopify?",
      a: "The appropriate format depends on the visual content. WebP often provides strong compression for standard product photos, while JPEG and PNG remain useful for specific use cases like highly detailed photographs or images requiring transparency. Shopify automatically serves supported formats based on the browser."
    },
    {
      q: "Should Shopify product images be WebP?",
      a: "WebP is generally a highly efficient format for ecommerce product images, as it supports both lossy and lossless compression. However, the decision should be based on the specific image and whether WebP provides a better balance of quality and file size than the original JPEG or PNG."
    },
    {
      q: "How large should Shopify product images be?",
      a: "Shopify product images should ideally match the maximum size they will be rendered at on the storefront. Uploading a massive original file forces the platform to process larger assets, so it is best to resize images to appropriate dimensions before uploading, ensuring responsive images can be generated effectively."
    },
    {
      q: "Should all Shopify images be lazy loaded?",
      a: "No. While lazy loading is beneficial for images below the fold, critical above-the-fold images—like the main hero banner or primary product image—should generally be loaded immediately to improve the Largest Contentful Paint (LCP) performance metric."
    },
    {
      q: "Does alt text help with accessibility?",
      a: "Yes, alt text is fundamentally an accessibility feature. It provides a text alternative for users who rely on screen readers and describes the content and purpose of an image when the image cannot be displayed."
    },
    {
      q: "Can image optimization affect storefront performance?",
      a: "Yes. Unoptimized, oversized images are a common cause of heavy page payloads. Optimizing image sizes and formats can reduce the amount of data a browser must download, which may contribute to a faster, more responsive shopping experience."
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
                Shopify image optimization requires finding the right balance between visual fidelity and technical efficiency. It involves configuring dimensions, formats, responsive delivery, loading behavior, and accessibility context so that a storefront operates effectively.
              </p>
              <div className="bg-secondary/30 border-l-4 border-primary p-6 mt-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">Key Takeaway</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Shopify image optimization is the process of preparing product and storefront images so they deliver the visual quality a merchant needs without sending unnecessarily large image payloads. The work can include choosing appropriate dimensions and formats, serving responsive images, controlling loading behavior, and writing useful image metadata.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">1. Why image optimization matters for Shopify stores</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Product imagery often accounts for the majority of a page's total weight. When a merchant uploads an unnecessarily large image, it can increase the total bytes transferred to the shopper's browser. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                This payload matters. Oversized images can delay rendering, consuming bandwidth that could be used for other critical resources. This is especially true on mobile devices, where connection speeds may vary. However, visual quality remains crucial for ecommerce. True optimization is a careful balance—reducing file sizes while retaining the crispness and detail shoppers expect, rather than simply making every image as small as possible.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">2. Start with image dimensions</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                One of the most common payload issues occurs when a merchant uploads a massive source image, but the storefront only displays it at a fraction of that size. The rendered size (how large the image appears on screen) is often much smaller than the source dimensions (the actual pixel width of the file).
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Responsive image techniques allow browsers to request an appropriately sized version of an image rather than downloading the massive original. Within Shopify themes, developers frequently use the <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">image_url</code> filter combined with the <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">image_tag</code> to generate these responsive image attributes automatically, though implementations vary depending on the specific theme architecture.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">3. Responsive images: srcset and sizes</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Modern browsers support responsive images using two critical HTML attributes: <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">srcset</code> and <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">sizes</code>.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">srcset</code> attribute provides the browser with a list of multiple image candidates at different widths. The <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">sizes</code> attribute tells the browser how wide the image will be rendered relative to the viewport layout. By combining these, the browser can evaluate the user's screen width and device pixel density, and then download only the most appropriate image candidate from the <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">srcset</code> list.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">4. Choose appropriate image formats</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Selecting the right file format is foundational. The most common formats are JPEG, PNG, and WebP:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">JPEG:</strong> Excellent for complex photographs with many colors.</li>
                <li><strong className="text-foreground">PNG:</strong> Ideal for graphics requiring transparency or sharp lines, though file sizes can be heavy.</li>
                <li><strong className="text-foreground">WebP:</strong> A modern format that supports both transparency and strong compression, making it highly useful for web delivery.</li>
              </ul>
              <p className="text-lg text-neutral-400 leading-relaxed">
                While WebP is an excellent format for many ecommerce scenarios, it is not a universal replacement for every single image. The best format always depends on the specific visual content. Shopify's image delivery system can handle important aspects of image transformation and responsive delivery at the storefront layer. Merchant-side optimization is a separate concern: it can help maintain a cleaner, more manageable source catalog by addressing image dimensions, source formats, compression, filenames, and metadata before or alongside storefront delivery.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">5. Compression: Reduce payload without destroying quality</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Image compression can be lossy (removing some data to reduce file size) or lossless (reducing size without losing visual data). Finding the right quality settings requires preventing unnecessary enlargement and always checking the final visual output.
              </p>
              <div className="bg-secondary/30 p-6 rounded-md my-8 border border-border">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Illustrative Example</span>
                <p className="text-sm text-neutral-400">
                  An unoptimized raw camera file might start at <strong className="text-foreground">18.4 MB</strong>. By appropriately resizing the dimensions and applying WebP compression, the final delivered asset could be reduced to <strong className="text-foreground">212 KB</strong>. This illustrates how resizing and compression can substantially reduce image payload while allowing the merchant to evaluate the resulting visual quality.
                </p>
              </div>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The ideal compression settings depend heavily on the individual image's complexity and colors.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">6. Lazy loading and image loading priority</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Not all images need to be loaded the moment a shopper opens a page. Images located below the fold—further down the page—can often be "lazy loaded," meaning the browser delays downloading them until the user scrolls near them.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                However, indiscriminate lazy loading can be counterproductive. Important above-the-fold imagery, particularly the image responsible for the Largest Contentful Paint (LCP) metric like a main product photo, should typically load as quickly as possible. Merchants should consult current Shopify and Google developer guidance to understand which critical images to prioritize.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">7. Product image alt text</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Alt text is fundamentally an accessibility feature. It provides a text alternative for users relying on screen readers. Alt text should describe the meaningful content or purpose of the image accurately.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Merchants should avoid keyword stuffing and repetitive keyword lists. Avoid starting descriptions with generic phrases like "image of" unless necessary. Furthermore, purely decorative images may require different treatment, such as an empty alt attribute, to prevent screen readers from announcing unnecessary visual clutter.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">8. Descriptive image filenames</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A raw filename like <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">IMG_4837.jpg</code> offers no descriptive context. Renaming the asset to something precise, such as <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">wooden-wall-clock-12-inch.jpg</code>, can provide limited but useful contextual clues about the image subject.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Filenames are just one part of a larger technical foundation. They do not determine visibility on their own, but writing descriptive filenames is a standard best practice for maintaining an organized and comprehensible catalog structure.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">9. Image context matters</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                An image does not exist in a vacuum. Search engines and discovery tools use multiple signals to understand an image, including the surrounding text, the product information on the page, useful captions, and the overall relevance of the page content.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Placing an optimized image on a well-structured, descriptive page provides much clearer context than the image file alone. Descriptive metadata is designed to help, but the holistic context of the storefront is what ultimately supports a machine's understanding of the asset.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">10. Accessibility</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Accessibility and technical optimization are deeply intertwined. Meaningful alt text provides an accessible text alternative for users who cannot see the image and can also provide additional textual context about the image.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Avoiding keyword stuffing also helps keep alt text useful and understandable for people using screen readers.
              </p>
            </div>

            <div className="pt-12 pb-4">
              <div className="w-16 h-px bg-border"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">11. How to audit your Shopify image library</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                Merchants can review their catalogs using this practical checklist:
              </p>
              <ol className="space-y-4 text-lg text-neutral-400 list-decimal list-inside">
                <li><strong className="text-foreground">Identify oversized images:</strong> Locate assets with unnecessarily massive file sizes.</li>
                <li><strong className="text-foreground">Check dimensions:</strong> Verify that source dimensions roughly align with their maximum intended display size.</li>
                <li><strong className="text-foreground">Review formats:</strong> Ensure JPEG, PNG, or WebP are being used logically.</li>
                <li><strong className="text-foreground">Review compression:</strong> Check if image payloads can be reduced without unacceptable quality loss.</li>
                <li><strong className="text-foreground">Check responsive delivery:</strong> Confirm the theme utilizes srcset and sizes properly.</li>
                <li><strong className="text-foreground">Check loading behavior:</strong> Ensure LCP images aren't lazily loaded.</li>
                <li><strong className="text-foreground">Review alt text:</strong> Check for descriptive, non-stuffed accessibility text.</li>
                <li><strong className="text-foreground">Review filenames:</strong> Look for generic camera output names.</li>
                <li><strong className="text-foreground">Check for repeated assets:</strong> Remove unnecessary duplicate files.</li>
                <li><strong className="text-foreground">Measure pages:</strong> Test representative product pages using standard performance tools.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">12. Common Shopify image optimization mistakes</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When auditing a storefront, merchants frequently encounter these common pitfalls:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li>Uploading unnecessarily huge source images.</li>
                <li>Resizing images visually with CSS while still forcing the browser to download the huge source file.</li>
                <li>Using the exact same giant image candidate across every breakpoint.</li>
                <li>Lazy loading critical above-the-fold imagery indiscriminately.</li>
                <li>Keyword stuffing alt text instead of describing the image.</li>
                <li>Leaving generic camera filenames intact.</li>
                <li>Converting every single image to WebP without checking if a PNG/JPEG would be smaller or better for transparency.</li>
                <li>Compressing an image so aggressively that visible quality suffers.</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-8 md:p-12 mt-16 border border-border rounded-lg">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">13. Where 1-OPTIMISER fits</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                1-OPTIMISER is being developed as an image performance tool for Shopify stores. It brings image optimization, AI-assisted image metadata, image editing, catalog scope controls, and selected storefront performance tools into one workflow.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                The current 1-OPTIMISER implementation includes compression, resizing, optional WebP conversion, AI-assisted alt text and descriptive filenames for merchant review, keyword suggestions, image editing including background changes, optimization history logs, and an optional storefront performance theme extension. All image modifications require merchant review before being saved to Shopify.
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-8">
                Note: 1-OPTIMISER is currently coming soon.
              </p>
              <Link href="/apps/1-optimiser" className="interactive-btn inline-flex items-center justify-center h-12 px-8 font-bold text-xs uppercase tracking-widest bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-foreground/90 transition-colors">
                Explore 1-OPTIMISER
              </Link>
            </div>

            <div className="pt-12 pb-4">
              <div className="w-16 h-px bg-border"></div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-bold text-foreground">14. Frequently Asked Questions</h2>
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
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">15. Related Resources</h2>
              <div className="flex flex-col gap-4">
                <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Read the broader guide: Ecommerce Image Optimization
                </Link>
                <Link href="/resources/ecommerce-performance" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Understand the foundation: Ecommerce Performance
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
