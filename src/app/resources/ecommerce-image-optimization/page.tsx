import { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Section } from '@/components/shared/Section'
import { ArticleToc } from '@/components/shared/ArticleToc'
import Link from 'next/link'
import { getResourceBySlug } from '@/lib/resources'
import { ArticleSchema, ResourceBreadcrumbSchema } from '@/components/shared/ArticleSchemaOrg'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/shared/CtaBand'
import { AppName } from '@/components/shared/BrandLogo'

const slug = 'ecommerce-image-optimization'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = buildMetadata({
  title: resource?.title || 'Ecommerce Image Optimization',
  description: resource?.description,
  path: `/resources/${slug}`,
  article: resource,
})

export default function ArticlePage() {
  if (!resource) {
    notFound()
  }

  return (
    <div className="reading-light flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
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
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 xl:grid xl:grid-cols-[15rem_minmax(0,48rem)] xl:gap-16 xl:justify-center">
            <ArticleToc items={[{"id": "what-is-ecommerce-image-optimization", "label": "What is ecommerce image optimization?"}, {"id": "why-should-ecommerce-stores-optimize-product-images", "label": "Why should ecommerce stores optimize product images?"}, {"id": "what-image-format-should-ecommerce-stores-use", "label": "What image format should ecommerce stores use?"}, {"id": "how-should-ecommerce-stores-choose-image-dimensions", "label": "How should ecommerce stores choose image dimensions?"}, {"id": "does-compressing-product-images-affect-quality", "label": "Does compressing product images affect quality?"}, {"id": "should-product-images-have-descriptive-filenames", "label": "Should product images have descriptive filenames?"}, {"id": "should-product-images-have-alt-text", "label": "Should product images have alt text?"}, {"id": "how-does-image-optimization-apply-to-shopify-stores", "label": "How does image optimization apply to Shopify stores?"}, {"id": "practical-optimization-checklist", "label": "Practical optimization checklist"}]} />
            <div className="max-w-3xl mx-auto xl:mx-0 space-y-12">
            
            <div className="space-y-6">
              <h2 id="what-is-ecommerce-image-optimization" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">What is ecommerce image optimization?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Ecommerce image optimization is a critical subset of broader <Link href="/resources/ecommerce-performance" className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30">ecommerce performance</Link>. It is the process of reducing file sizes and structuring image data to help a storefront perform better, balancing visual quality with technical efficiency to reduce image payloads and improve discoverability.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When a merchant uploads high-resolution photography directly from a camera to a platform like Shopify, the files are typically large and carry unhelpful filenames. Optimization addresses these technical characteristics before they affect the storefront.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="why-should-ecommerce-stores-optimize-product-images" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">Why should ecommerce stores optimize product images?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Ecommerce stores should optimize product images because heavy payloads can degrade the user experience and negatively impact page-loading performance. Simultaneously, poorly structured images may lack the context useful for discovery systems.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Reducing unnecessarily large image payloads can help reduce the amount of data a browser needs to download and may improve page-loading performance, particularly on slower connections or mobile devices. This can have a positive effect on metrics like Largest Contentful Paint (LCP). From a discoverability perspective, image metadata and surrounding page context can provide useful information about an image. While image understanding capabilities vary between search and AI systems, providing structured information helps ensure your catalog is accessible and understandable.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="what-image-format-should-ecommerce-stores-use" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">What image format should ecommerce stores use?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                The appropriate format depends on the image, transparency requirements, browser support, and delivery system. Modern formats such as WebP and AVIF can offer useful compression characteristics, while JPEG and PNG still have legitimate use cases.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                WebP provides strong lossless and lossy compression, often reducing file weights significantly while maintaining perceptual quality. However, modern ecommerce platforms and content delivery networks (CDNs) often handle format selection automatically, negotiating and serving the most efficient format supported by the shopper's browser.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="how-should-ecommerce-stores-choose-image-dimensions" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">How should ecommerce stores choose image dimensions?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Stores should avoid serving dramatically larger images than the display context requires, balancing visual quality with payload size.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Using appropriate source dimensions prevents the browser from downloading unnecessarily huge source files only to scale them down visually. It is important to consider responsive image delivery and retina/high-density displays, ensuring the platform serves appropriately sized versions of the image based on the user's screen size.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="does-compressing-product-images-affect-quality" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">Does compressing product images affect quality?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Proper image compression reduces file size while aiming to maintain perceptual quality, meaning the human eye cannot easily detect the difference.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                By stripping unnecessary EXIF metadata and applying intelligent compression algorithms, images can become much lighter without appearing pixelated or blurry on standard displays.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="should-product-images-have-descriptive-filenames" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">Should product images have descriptive filenames?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Yes. Generic camera filenames provide little descriptive context about the subject of an image.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Renaming a generic string like <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">IMG_4837.jpg</code> to a descriptive format like <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">handcrafted-wooden-wall-clock-12-inch.webp</code> can provide additional descriptive context that may support storefront discoverability.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="should-product-images-have-alt-text" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">Should product images have alt text?</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Yes. Alt text is primarily intended to provide an accessible text alternative for people who cannot see an image, and it can also contribute contextual information for search engines.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Product alt text should accurately identify the product and relevant visual characteristics when appropriate, describing meaningful visual information. It should not be stuffed with keywords. Note that decorative images may require different treatment, such as empty alt attributes.
              </p>
            </div>

            <div className="space-y-6">
              <h2 id="how-does-image-optimization-apply-to-shopify-stores" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">How does image optimization apply to Shopify stores?</h2>
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
              <h2 id="practical-optimization-checklist" className="text-3xl md:text-4xl font-heading font-bold text-foreground scroll-mt-28">Practical optimization checklist</h2>
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
                1-OPTIMIZER is an ecommerce performance tool designed specifically for Shopify stores. It compresses image assets, rewrites generic filenames, and generates contextual alt text to support storefront performance.
              </p>
              <Link href="/apps/1-optimizer" className="interactive-btn inline-flex items-center justify-center h-12 px-8 font-semibold text-xs bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-foreground/90 transition-colors">
                <span>Explore <AppName name="1-OPTIMIZER" /></span>
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
