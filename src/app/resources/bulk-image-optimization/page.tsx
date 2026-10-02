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
import { OPTIMIZER_STATUS } from '@/lib/entities'

const slug = 'bulk-image-optimization'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = buildMetadata({
  title: resource?.title || 'Bulk Image Optimization: A Practical Guide for Ecommerce',
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
      q: "What is bulk image optimization?",
      a: "Bulk image optimization is a systematic workflow for processing large batches of images at once. It involves evaluating and modifying formats, dimensions, compression levels, and metadata across a catalog to maintain consistency and reduce unnecessary payload."
    },
    {
      q: "Does bulk image optimization improve SEO?",
      a: "It does not guarantee higher search rankings. However, optimizing images can reduce page payload, improve accessibility, and provide clearer contextual signals (like descriptive filenames and alt text), which are parts of a broader technical SEO foundation."
    },
    {
      q: "Should I compress every ecommerce image?",
      a: "While most ecommerce images benefit from compression, the level of compression should be evaluated carefully. Aggressively compressing every image with the same settings can degrade visual quality on complex product photos."
    },
    {
      q: "What image format should ecommerce stores use?",
      a: "There is no universally best format. WebP is highly efficient for most standard delivery, JPEG remains excellent for complex photographs, and PNG is necessary when an image requires transparency."
    },
    {
      q: "Should product images be resized before uploading?",
      a: "Yes. Uploading unnecessarily massive source images forces platforms to process oversized files. Resizing them to align with their maximum intended display size prevents wasted resources, provided they are not artificially enlarged."
    },
    {
      q: "Can bulk image optimization damage image quality?",
      a: "Yes. Using overly aggressive lossy compression or indiscriminately resizing images without review can introduce artifacts, blurriness, or pixelation, which is why testing on a small batch is critical."
    },
    {
      q: "Does Shopify automatically optimize product images?",
      a: "Shopify's built-in delivery system handles storefront transformations and serves appropriate formats dynamically. However, merchant-side source optimization provides control over the original catalog dimensions, source compression, and metadata before delivery."
    },
    {
      q: "How should I optimize a large Shopify image catalog?",
      a: "Start by inventorying the catalog to identify oversized assets. Establish acceptable quality parameters, test a small batch of varied images, review the visual results, and then process the larger catalog systematically while verifying the impact."
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
            <ArticleToc items={[{"id": "what-is-bulk-image-optimization", "label": "What Is Bulk Image Optimization?"}, {"id": "why-ecommerce-stores-need-bulk-image-optimization", "label": "Why Ecommerce Stores Need Bulk Image Optimization"}, {"id": "what-should-be-optimized", "label": "What Should Be Optimized?"}, {"id": "bulk-compression", "label": "Bulk Compression"}, {"id": "resizing-oversized-ecommerce-images", "label": "Resizing Oversized Ecommerce Images"}, {"id": "choosing-image-formats", "label": "Choosing Image Formats"}, {"id": "bulk-image-optimization-and-shopify", "label": "Bulk Image Optimization and Shopify"}, {"id": "bulk-optimization-vs-manual-optimization", "label": "Bulk Optimization vs Manual Optimization"}, {"id": "how-to-optimize-a-large-catalog-safely", "label": "How to Optimize a Large Catalog Safely"}, {"id": "common-bulk-optimization-mistakes", "label": "Common Bulk Optimization Mistakes"}, {"id": "bulk-image-optimization-and-seo", "label": "Bulk Image Optimization and SEO"}, {"id": "bulk-image-optimization-and-accessibility", "label": "Bulk Image Optimization and Accessibility"}, {"id": "how-to-measure-the-result", "label": "How to Measure the Result"}, {"id": "where-1-optimizer-fits", "label": "Where 1-OPTIMIZER Fits"}, {"id": "frequently-asked-questions", "label": "Frequently Asked Questions"}]} />
            <div className="max-w-3xl mx-auto xl:mx-0 space-y-16 md:space-y-24">
            
            <div className="space-y-6">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                As an ecommerce store grows, managing image assets individually becomes unsustainable. Manually resizing and compressing hundreds or thousands of product photos creates operational bottlenecks. Bulk image optimization allows merchants to process large catalogs systematically, establishing consistency without sacrificing necessary visual fidelity.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="what-is-bulk-image-optimization" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">1. What Is Bulk Image Optimization?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Bulk image optimization is a structured workflow for processing many images simultaneously. It is not simply a command to "compress everything." Instead, it is a systematic approach to reducing unnecessary image payload, resizing oversized files, selecting appropriate file formats, and improving metadata, all while carefully preserving the acceptable visual quality of the products.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A successful bulk workflow ensures that every image in a catalog adheres to established technical standards, maintaining consistency across the entire storefront.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="why-ecommerce-stores-need-bulk-image-optimization" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">2. Why Ecommerce Stores Need Bulk Image Optimization</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Ecommerce stores frequently manage vast product catalogs. A single product might have a primary image, several variant images, and contextual lifestyle shots. Multiplied across hundreds of products and collection pages, a store can easily accumulate thousands of distinct image assets.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Without a bulk workflow, merchants face repetitive manual work, often leading to inconsistent dimensions and unnecessarily large file uploads that bloat the storefront payload. While optimization does not automatically improve search rankings, reigning in a massive, unmanaged catalog is critical for maintaining an efficient technical foundation.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="what-should-be-optimized" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">3. What Should Be Optimized?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A comprehensive optimization strategy addresses several distinct layers of an image asset:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">File Size:</strong> The total bytes transferred over the network.</li>
                <li><strong className="text-foreground">Dimensions:</strong> The pixel width and height of the source file.</li>
                <li><strong className="text-foreground">Format:</strong> The encoding method (JPEG, PNG, WebP).</li>
                <li><strong className="text-foreground">Quality:</strong> The visual fidelity and clarity of the product.</li>
                <li><strong className="text-foreground">Metadata:</strong> The descriptive context, such as filenames and alt attributes.</li>
              </ul>
              <p className="text-lg text-neutral-400 leading-relaxed">
                It is also vital to clearly distinguish source-image optimization (cleaning up the original catalog files) from storefront delivery optimization (how a platform serves those files dynamically to users).
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="bulk-compression" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">4. Bulk Compression</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Compression reduces the file size of an image, typically through either lossy methods (removing data to achieve smaller sizes) or lossless methods (preserving exact visual data). Selecting the right quality settings requires evaluating the visual-quality tradeoffs. Aggressive compression can introduce artifacts that damage the crispness of product photography.
              </p>
              <div className="bg-secondary/30 p-6 rounded-md my-8 border border-border">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Illustrative Example</span>
                <p className="text-sm text-neutral-400">
                  An unoptimized raw camera file might start at <strong className="text-foreground">18.4 MB</strong>. By appropriately resizing the dimensions and applying WebP compression, the final delivered asset could be reduced to <strong className="text-foreground">212 KB</strong>. This illustrates how resizing and compression can substantially reduce image payload while allowing the merchant to evaluate the resulting visual quality.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 id="resizing-oversized-ecommerce-images" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">5. Resizing Oversized Ecommerce Images</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Uploading a massive source file forces the browser or server to expend resources unnecessarily. Appropriate dimensions depend heavily on the specific storefront design and theme requirements for desktop, mobile, and high-density (retina) displays.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                While images should be large enough to support zoom features and high-resolution screens, they should avoid unnecessarily gigantic dimensions. Importantly, images should never be artificially enlarged merely to meet an arbitrary target, as scaling up degrades quality.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="choosing-image-formats" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">6. Choosing Image Formats</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                There is no single format that is universally best for every image in a catalog. The appropriate format depends on the content:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">JPEG:</strong> Continues to perform well for complex photographs and detailed product shots without transparency.</li>
                <li><strong className="text-foreground">PNG:</strong> Necessary when an image requires a transparent background or sharp, solid-color graphics.</li>
                <li><strong className="text-foreground">WebP:</strong> A modern format offering strong lossy and lossless compression, highly effective for general web delivery.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 id="bulk-image-optimization-and-shopify" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">7. Bulk Image Optimization and Shopify</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When working within Shopify, it is important to understand the boundary between the merchant's source catalog (the files uploaded to the admin) and Shopify's storefront delivery (the CDN delivering images to the browser).
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Shopify's built-in image delivery infrastructure can automatically serve appropriate formats dynamically based on browser support. A bulk image optimizer does not replace this infrastructure. Instead, it allows merchants to manage their <Link href="/resources/shopify-image-optimization" className="text-primary hover:underline">Shopify image optimization</Link> at the source level—ensuring original assets have logical dimensions, clean metadata, and controlled source compression before they enter Shopify's delivery pipeline.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="bulk-optimization-vs-manual-optimization" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">8. Bulk Optimization vs Manual Optimization</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Both manual and bulk workflows have specific uses depending on catalog scale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-secondary/20 p-6 border border-border rounded">
                  <h3 className="font-bold text-foreground mb-4">Manual Workflow</h3>
                  <ul className="space-y-2 text-sm text-neutral-400 list-disc list-inside">
                    <li>Process images individually</li>
                    <li>Higher repetitive manual effort</li>
                    <li>Easier to inspect every single file visually</li>
                    <li>Highly suitable for small batches</li>
                    <li>Can become inconsistent at large scales</li>
                  </ul>
                </div>
                <div className="bg-secondary/20 p-6 border border-border rounded">
                  <h3 className="font-bold text-foreground mb-4">Bulk Workflow</h3>
                  <ul className="space-y-2 text-sm text-neutral-400 list-disc list-inside">
                    <li>Process many images systematically</li>
                    <li>Significantly lower repetitive effort</li>
                    <li>Requires strict safeguards and batch review</li>
                    <li>Highly useful for larger catalogs</li>
                    <li>Can improve structural consistency</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 id="how-to-optimize-a-large-catalog-safely" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">9. How to Optimize a Large Catalog Safely</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                Applying sweeping changes to thousands of images requires caution. A safe practical workflow includes:
              </p>
              <ol className="space-y-3 text-lg text-neutral-400 list-decimal list-inside bg-secondary/10 p-6 rounded border border-border">
                <li>Inventory the catalog to understand its current state.</li>
                <li>Identify oversized or uncompressed images.</li>
                <li>Establish acceptable technical and quality parameters.</li>
                <li>Test the parameters on a small, varied batch.</li>
                <li>Compare before/after files for payload and artifacts.</li>
                <li>Check live product pages to ensure the layout remains stable.</li>
                <li>Verify that visual quality meets brand standards.</li>
                <li>Verify generated filenames or alt text (if applicable).</li>
                <li>Process the larger catalog systematically.</li>
                <li>Measure the final results against the initial baseline.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 id="common-bulk-optimization-mistakes" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">10. Common Bulk Optimization Mistakes</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Attempting to automate without oversight often leads to errors. Common mistakes include:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li>Applying overly aggressive compression that ruins product details.</li>
                <li>Excessive resizing that breaks zoom functionality.</li>
                <li>Converting every image to JPEG, thereby removing useful transparency from PNGs.</li>
                <li>Overwriting original assets without safeguards or backups.</li>
                <li>Changing filenames without understanding how they reference existing product variants.</li>
                <li>Generating poor, repetitive alt text or resorting to keyword stuffing.</li>
                <li>Ignoring the visual context in which the image is displayed.</li>
                <li>Failing to actually measure the storefront payload impact.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 id="bulk-image-optimization-and-seo" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">11. Bulk Image Optimization and SEO</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A streamlined catalog can contribute to a healthier technical foundation. Reducing page payload and establishing clearer contextual signals—such as descriptive filenames and useful alt text—can help machines interpret the store. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                However, it must be explicitly stated: image optimization does not guarantee higher search rankings. It is simply one piece of <Link href="/resources/ecommerce-performance" className="text-primary hover:underline">ecommerce performance</Link>. Image SEO operates distinctly from broader page SEO, relying on the intersection of image delivery and surrounding descriptive context.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="bulk-image-optimization-and-accessibility" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">12. Bulk Image Optimization and Accessibility</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A bulk workflow often includes metadata management. Meaningful <Link href="/resources/product-image-alt-text" className="text-primary hover:underline">product image alt text</Link> is a critical accessibility requirement for screen readers. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When generating text at scale, merchants must ensure they avoid keyword stuffing and repetitive descriptions. Purely decorative images should be handled appropriately, keeping visible product information distinct from hidden alt attributes to prevent confusing experiences for assistive technology users.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="how-to-measure-the-result" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">13. How to Measure the Result</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The success of a bulk optimization effort should be measured through factual signals rather than promised performance improvements. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Merchants can measure the total reduction in image file size across the processed batch, the final page payload of key collections, and the consistency of the new image dimensions. Operational metrics—such as the number of images optimized, skipped, or failed—help verify the workflow. Finally, the visual quality of the storefront and basic storefront performance signals should be reviewed to ensure the effort yielded a tangible technical benefit without compromising the brand.
              </p>
            </div>

            <div className="bg-secondary/30 p-8 md:p-12 mt-16 border border-border rounded-lg">
              <h2 id="where-1-optimizer-fits" className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 scroll-mt-28">14. Where <AppName name="1-OPTIMIZER" /> Fits</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                1-OPTIMIZER is being developed to help Shopify merchants work with image optimization systematically at catalog scale. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                The current implementation includes image compression, resizing, WebP conversion, AI-assisted alt text and descriptive filename generation, keyword suggestions, individual or catalog/collection processing, and image editing capabilities. It provides an optimization history and optional theme extension capabilities to evaluate storefront performance signals.
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-8">
                Note: {OPTIMIZER_STATUS.full}
              </p>
              <Link href="/apps/1-optimizer" className="interactive-btn inline-flex items-center justify-center h-12 px-8 font-semibold text-xs bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-foreground/90 transition-colors">
                <span>Explore <AppName name="1-OPTIMIZER" /></span>
              </Link>
            </div>

            <div className="pt-12 pb-4">
              <div className="w-16 h-px bg-border"></div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <h2 id="frequently-asked-questions" className="text-3xl font-heading font-bold text-foreground scroll-mt-28">15. Frequently Asked Questions</h2>
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
                <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Image Optimization
                </Link>
                <Link href="/resources/product-image-alt-text" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Product Image Alt Text
                </Link>
                <Link href="/resources/shopify-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Shopify Image Optimization
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
