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

const slug = 'ecommerce-image-compression-webp'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = {
  title: resource?.title || 'Ecommerce Image Compression & WebP: A Practical Guide',
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
      q: "What is image compression?",
      a: "Image compression is the process of reducing the file size of an image through encoding techniques. It works by identifying and removing redundant or unnecessary data to minimize the bytes required to store and deliver the image."
    },
    {
      q: "What is WebP?",
      a: "WebP is a modern image format developed by Google that supports both lossy and lossless compression, as well as transparency. It can often provide smaller file sizes than traditional formats like JPEG and PNG, depending on the encoding settings."
    },
    {
      q: "Is WebP better than JPEG?",
      a: "Not universally. While WebP can often achieve smaller file sizes for equivalent visual quality, JPEG remains highly effective and universally supported for complex product photography. The superior format depends on the specific image and the delivery context."
    },
    {
      q: "Should every ecommerce image be converted to WebP?",
      a: "There is no universal rule requiring every image to be WebP. While it is highly efficient for general web delivery, factors like existing storefront delivery pipelines, source catalog requirements, and specific photographic complexity may make other formats appropriate in certain situations."
    },
    {
      q: "How much should an ecommerce image be compressed?",
      a: "There is no universal compression percentage or file-size target. The appropriate level depends on the image's dimensions, subject complexity, and the brand's visual quality requirements. The goal is an appropriate balance, not simply the smallest possible file."
    },
    {
      q: "Does image compression improve SEO?",
      a: "Image compression does not guarantee higher search rankings. However, it can reduce page payload and may contribute to more efficient page delivery, which is one piece of a broader technical foundation for ecommerce performance."
    },
    {
      q: "Does Shopify automatically optimize images?",
      a: "Yes, Shopify's delivery infrastructure dynamically serves appropriate image formats (like WebP) to supported browsers. However, optimizing your source catalog before uploading gives you control over the baseline dimensions, source compression, and metadata."
    },
    {
      q: "Can image compression reduce image quality?",
      a: "Yes. Aggressive lossy compression works by discarding visual data, which can introduce artifacts, blurriness, banding, and a loss of fine product details if pushed too far."
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
                Image files often represent a significant portion of an ecommerce page's total payload. Understanding how compression and format selection work allows merchants to reduce unnecessary bytes while rigorously preserving the visual quality required for product presentation.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">1. What Is Image Compression?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Image compression is the technical process of reducing the file size of an image. It achieves this by mathematically identifying and removing redundant or less critical visual data. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The core tension in image compression is the balance between visual quality and file size. A smaller file transfers over a network more rapidly, but reducing the file size too aggressively degrades the image. Therefore, the goal of ecommerce optimization is not simply creating the smallest possible file, but finding the optimal intersection of file size, image dimensions, visual quality, format, and delivery context.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">2. Why Image Compression Matters for Ecommerce</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Ecommerce storefronts rely heavily on visual media. A typical product page might load a primary photograph, several high-resolution variant images, and contextual lifestyle imagery. Across large catalogs, unoptimized images can drastically inflate page payload.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When network transfer requirements are highâ€”especially on mobile connectionsâ€”delivering massive, uncompressed files becomes inefficient. Systematic compression can reduce this image payload and may contribute to more efficient page delivery. However, it should be clearly understood that compressing images does not automatically improve search rankings or guarantee increased conversions.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">3. Lossy vs Lossless Compression</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                There are two primary categories of image compression, each serving distinct purposes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-secondary/20 p-6 border border-border rounded">
                  <h3 className="font-bold text-foreground mb-4">Lossy Compression</h3>
                  <ul className="space-y-2 text-sm text-neutral-400 list-disc list-inside">
                    <li>Permanently removes some visual information.</li>
                    <li>Generally produces significantly smaller files.</li>
                    <li>Highly useful for most complex product photographs.</li>
                    <li>Visual quality must be carefully evaluated to avoid artifacts.</li>
                  </ul>
                </div>
                <div className="bg-secondary/20 p-6 border border-border rounded">
                  <h3 className="font-bold text-foreground mb-4">Lossless Compression</h3>
                  <ul className="space-y-2 text-sm text-neutral-400 list-disc list-inside">
                    <li>Preserves the exact original visual data mathematically.</li>
                    <li>Usually produces larger files than comparable lossy compression.</li>
                    <li>Useful for simple graphics or situations where exact preservation matters.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">4. What Is WebP?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                WebP is a modern image format developed by Google specifically for the web. Its primary advantage is versatility: it supports both lossy and lossless compression, and unlike standard JPEG, it supports transparency (alpha channels).
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Depending on the specific image and the encoding settings used, WebP can be smaller than equivalent JPEGs or PNGs while maintaining comparable visual fidelity. It is a powerful tool for reducing payload, though it requires intentional implementation.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">5. WebP vs JPEG vs PNG</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Format choice depends entirely on the nature of the image being delivered. There is no universal winner.
              </p>
              <ul className="space-y-4 text-lg text-neutral-400">
                <li><strong className="text-foreground">JPEG:</strong> An established standard that continues to perform exceptionally well for complex photographs and detailed imagery lacking transparency.</li>
                <li><strong className="text-foreground">PNG:</strong> Essential when an image requires a transparent background, or for sharp, solid-color graphics where lossless characteristics are useful.</li>
                <li><strong className="text-foreground">WebP:</strong> Capable of handling both complex photographs and transparency, making it highly effective for modern web delivery across varied lossy and lossless use cases.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">6. How Much Should an Ecommerce Image Be Compressed?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                There is no universal compression percentage, slider setting, or file-size target that applies correctly to every ecommerce image. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The acceptable level of compression depends heavily on the image dimensions, subject complexity, surface textures, presence of transparency, brand requirements, product zoom capabilities, and the device density of the intended display. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Merchants should evaluate compression by comparing the original image directly against the compressed image, weighing the technical file size reduction against the resulting visual quality.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">7. Image Quality vs File Size</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Aggressive lossy compression introduces visible degradation. Common issues include compression artifacts, blurriness, "ringing" around sharp edges, color banding in smooth gradients, and the loss of fine product details (like fabric weaves or intricate jewelry facets).
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Ecommerce product imagery is a critical part of the customer experience. Reducing bytes should not come at the expense of necessary product context. A highly compressed image that looks terrible fails its primary commercial purpose, regardless of how fast it loads.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">8. Image Dimensions and Compression Work Together</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Compression is only one optimization layer. Pixel dimensions represent the foundational size of the asset.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A very large source image that is heavily compressed can still be unnecessarily large in pixel dimensions for its intended display. Conversely, a small image with poor visual quality cannot be fixed through compression. Resizing oversized source files to appropriate maximum dimensionsâ€”while ensuring product zoom and high-density displays are supported, and avoiding unnecessary enlargementâ€”must happen alongside compression formatting.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">9. Should Every Ecommerce Image Be Converted to WebP?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                No universal rule dictates that every single image must be converted to WebP. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                While WebP is highly efficient, there are situations where another format remains appropriate. Considerations include the need for specific transparency behaviors, the handling of uniquely complex photographic details, the requirements of the existing storefront pipeline, browser delivery edge cases, and the structural requirements of the merchant's source catalog. Blindly converting every image without testing is not recommended.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">10. WebP and Shopify</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Implementing WebP requires understanding the relationship between the merchant's source catalog and Shopify's image delivery infrastructure.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Shopify's content delivery network (CDN) dynamically serves appropriate formats (including WebP and AVIF) to supported browsers automatically. A merchant-side optimizer controlling the source catalog operates at a different layer than Shopify's CDN. While <Link href="/resources/shopify-image-optimization" className="text-primary hover:underline">Shopify image optimization</Link> at the source level ensures original assets have logical dimensions and baseline compression, it does not replace Shopify's dynamic delivery capabilities.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">11. How to Compress Ecommerce Images Safely</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                Before applying a single compression setting to an entire catalog, merchants should follow a practical testing workflow:
              </p>
              <ol className="space-y-3 text-lg text-neutral-400 list-decimal list-inside bg-secondary/10 p-6 rounded border border-border">
                <li>Inventory the image catalog.</li>
                <li>Identify oversized source assets.</li>
                <li>Establish brand visual quality requirements.</li>
                <li>Choose appropriate maximum dimensions.</li>
                <li>Test compression settings on varied samples.</li>
                <li>Compare the resulting visual quality against the original.</li>
                <li>Compare the resulting file size.</li>
                <li>Test representative product images for artifacts.</li>
                <li>Process the catalog once settings are verified.</li>
                <li>Review important live product pages.</li>
                <li>Measure the final payload result.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">12. Common Image Compression Mistakes</h2>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li>Choosing the smallest possible file regardless of visual quality.</li>
                <li>Applying the exact same quality setting to every diverse image type.</li>
                <li>Converting every image to WebP without testing visual outcomes.</li>
                <li>Compressing already-optimized images unnecessarily, causing generation loss.</li>
                <li>Resizing too aggressively, breaking product zoom features.</li>
                <li>Ignoring transparency requirements when switching formats.</li>
                <li>Destroying fine product details through overly aggressive lossy algorithms.</li>
                <li>Overwriting original source files without backups or safeguards.</li>
                <li>Measuring success solely by file size reduction rather than evaluating visual quality.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">13. How to Measure Image Compression</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Factual measurement requires looking at multiple signals. Merchants can compare the original file size against the compressed file size to calculate percentage reduction, but that percentage is merely a measurementâ€”not the goal itself.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A complete measurement approach evaluates the final image dimensions, the total page image payload, the number of processed, skipped, or failed images during bulk operations, and most importantly, the retained visual quality alongside any page-level performance signals.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">14. Image Compression, SEO and Accessibility</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Compression can reduce an image's payload, while useful filenames and <Link href="/resources/product-image-alt-text" className="text-primary hover:underline">product image alt text</Link> provide descriptive context. Proper accessibility depends on meaningful alternative text and appropriate image semantics.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                However, <Link href="/resources/ecommerce-performance" className="text-primary hover:underline">ecommerce performance</Link> is multifaceted. Image compression itself does not guarantee higher rankings, Google Images visibility, generative AI recommendations, increased traffic, or increased conversions. It serves to build a structurally sound foundation for the storefront.
              </p>
            </div>

            <div className="bg-secondary/30 p-8 md:p-12 mt-16 border border-border rounded-lg">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">15. Where 1-OPTIMISER Fits</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                1-OPTIMISER is being developed to help Shopify merchants work with image optimization systematically and safely.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                The current implementation supports image compression, resizing, WebP conversion, AI-assisted alt text and descriptive filename generation, keyword suggestions, individual processing, and catalog or collection processing. It maintains an optimization history and provides optional theme extension capabilities to monitor storefront performance signals.
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
                <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Image Optimization
                </Link>
                <Link href="/resources/bulk-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Bulk Image Optimization
                </Link>
                <Link href="/resources/shopify-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Shopify Image Optimization
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
