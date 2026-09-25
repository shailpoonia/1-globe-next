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

const slug = 'product-image-alt-text'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = {
  title: resource?.title || 'Product Image Alt Text: A Practical Guide for Ecommerce',
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
      q: "What is alt text for a product image?",
      a: "Alt text (alternative text) is a descriptive text attribute added to an image tag. It provides a text alternative for users who cannot see the image, such as those using screen readers, and adds contextual information about the image's content."
    },
    {
      q: "What makes good ecommerce alt text?",
      a: "Good ecommerce alt text accurately describes the meaningful visual details of the product shown in the image—such as its type, color, material, and defining features—while remaining concise and avoiding keyword stuffing."
    },
    {
      q: "Should product image alt text contain keywords?",
      a: "Relevant terminology should be used if it naturally describes the product in the image. However, inserting unrelated search terms or repeating keyword lists (keyword stuffing) creates a poor accessibility experience and should be avoided."
    },
    {
      q: "How long should product image alt text be?",
      a: "There is no strict character limit for SEO. Alt text should be concise and descriptive, with the appropriate length depending on the image and the information it needs to convey. The priority should be accuracy, usefulness, and accessibility."
    },
    {
      q: "Should every product image have different alt text?",
      a: "Yes, if the images show different angles, details, or contexts. The alt text should describe what is uniquely meaningful about that specific image rather than repeating the exact same text across the entire gallery."
    },
    {
      q: "Should alt text include the product name?",
      a: "It can, especially if the product name helps accurately identify the item. However, it should not merely copy the product title if doing so fails to describe what is actually happening visually in that specific image."
    },
    {
      q: "Is alt text the same as product description?",
      a: "No. A product description provides broad commercial and technical information about the item for shoppers. Alt text specifically describes the visual content and purpose of a single image."
    },
    {
      q: "Does alt text guarantee better Google rankings?",
      a: "No. Alt text is one component of broader image optimization. It can provide context to help machines interpret the image, but it does not guarantee higher rankings, traffic, or visibility."
    },
    {
      q: "How should decorative ecommerce images be handled?",
      a: "Images that are purely decorative and convey no meaningful information (such as abstract background shapes or generic aesthetic dividers) should typically use an empty alt attribute (alt=\"\") so screen readers can skip them."
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
                Writing accurate product image alt text requires a careful balance. Ecommerce merchants must provide accessible descriptions that accurately convey the visual context of a product without succumbing to the outdated practice of keyword stuffing.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">1. What is product image alt text?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Alt text (alternative text) is an HTML attribute applied to image tags. Its primary purpose is to provide a text-based alternative for individuals who cannot see the image. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When a user visits a storefront using a screen reader, the software reads the alt text aloud, allowing them to understand the image's content. Ecommerce images specifically require meaningful descriptions because the visual appearance of a product is critical to the shopping experience. Note that alt text is distinct from a visible caption; alt text lives in the code and typically only appears visually if an image fails to load.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">2. Why alt text matters for ecommerce</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Fundamentally, alt text matters because of accessibility. Every shopper deserves to understand what a product looks like, regardless of how they browse the internet. Providing an inclusive experience is a core part of operating a professional storefront.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Beyond accessibility, alt text contributes to the contextual understanding of a page. Search engines and discovery tools cannot "see" an image the way a human does. They rely on surrounding text, filenames, and alt text to parse the image's purpose and subject matter. While alt text alone does not guarantee image-search traffic, it provides necessary context within a broader page structure.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">3. What should ecommerce product image alt text contain?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Effective alt text is specific and descriptive. Depending on the product, useful alt text might describe:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">Product type:</strong> What exactly is the item?</li>
                <li><strong className="text-foreground">Color and material:</strong> Is it a black leather jacket or a blue denim jacket?</li>
                <li><strong className="text-foreground">Pattern or style:</strong> Does it have stripes, a floral print, or a minimalist design?</li>
                <li><strong className="text-foreground">Important visual details:</strong> Does a backpack have visible side pockets?</li>
                <li><strong className="text-foreground">Context/Purpose:</strong> Is the product being modeled outdoors or shown flat against a white background?</li>
              </ul>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Not every attribute belongs in every description. The goal is to convey the most important visual information as concisely as possible.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">4. Product image alt text examples</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Reviewing practical examples across different product categories illustrates the difference between poor and effective descriptions.
              </p>
              
              <div className="space-y-8 mt-8">
                <div className="bg-secondary/20 p-6 rounded-md border border-border">
                  <h3 className="font-bold text-foreground mb-4">Home Decor</h3>
                  <p className="text-sm text-neutral-500 mb-1">Poor:</p>
                  <p className="text-red-400 mb-4 line-through">"wooden wall clock wooden clock wall clock buy wall clock"</p>
                  <p className="text-sm text-neutral-500 mb-1">Better:</p>
                  <p className="text-primary font-medium">"12-inch wooden wall clock with black hands"</p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-md border border-border">
                  <h3 className="font-bold text-foreground mb-4">Clothing</h3>
                  <p className="text-sm text-neutral-500 mb-1">Poor:</p>
                  <p className="text-red-400 mb-4 line-through">"image of a shirt"</p>
                  <p className="text-sm text-neutral-500 mb-1">Better:</p>
                  <p className="text-primary font-medium">"Men's short-sleeve button-down shirt in navy blue floral print"</p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-md border border-border">
                  <h3 className="font-bold text-foreground mb-4">Electronics</h3>
                  <p className="text-sm text-neutral-500 mb-1">Poor:</p>
                  <p className="text-red-400 mb-4 line-through">"laptop computer"</p>
                  <p className="text-sm text-neutral-500 mb-1">Better:</p>
                  <p className="text-primary font-medium">"Silver 15-inch laptop open on a desk, showing a backlit keyboard"</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">5. How long should product image alt text be?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                There is no universal, magic character limit mandated by search engines. However, for accessibility, screen readers often read alt text in a continuous stream. Exceedingly long descriptions can become frustrating for users to listen to.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                As a practical guideline, keep alt text concise enough to communicate the meaningful visual information without unnecessary detail. There is no universal character target that should override accuracy and usefulness. If a product requires extensive explanation, that information belongs in the visible product content rather than being packed into the alt attribute.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">6. Alt text vs product title vs product description</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                It is important not to conflate different data structures on an ecommerce page. Each serves a specific purpose:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">Alt Text:</strong> Describes the image's meaningful visual content and purpose.</li>
                <li><strong className="text-foreground">Product Title:</strong> Identifies the name of the product.</li>
                <li><strong className="text-foreground">Product Description:</strong> Provides broader commercial, technical, and marketing information.</li>
                <li><strong className="text-foreground">Structured Data:</strong> Provides machine-readable JSON-LD (like Schema.org/Product) to define prices, availability, and reviews.</li>
              </ul>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Alt text is not a substitute for structured data, nor should it simply be a copy-and-paste of the product title if the title fails to describe the image visually.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">7. Should keywords be included in product image alt text?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Relevant, descriptive terminology should be used when it naturally and accurately describes the image. If you are selling a "leather hiking boot," it is entirely appropriate for those words to appear in the alt text of a photo showing the boot.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                However, you should not repeat keywords, create keyword lists, or insert unrelated search terms. Writing alt text primarily for search engines usually results in "keyword stuffing," which creates an actively poor experience for users relying on screen readers.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">8. Common product image alt text mistakes</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When auditing a storefront's alt text, look out for these widespread errors:
              </p>
              <ul className="space-y-3 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">Starting with "image of":</strong> Screen readers already announce that the element is an image. (Exceptions exist, such as "Illustration of..." or "Oil painting of..." where the medium matters).</li>
                <li><strong className="text-foreground">Keyword stuffing:</strong> Listing search terms rather than describing the photo.</li>
                <li><strong className="text-foreground">Total repetition:</strong> Using the exact same alt text across an entire gallery of 10 different images.</li>
                <li><strong className="text-foreground">Irrelevant details:</strong> Describing background props that have nothing to do with the product being sold.</li>
                <li><strong className="text-foreground">Mechanical copying:</strong> Blindly setting the alt text to equal the product title without checking if it makes sense visually.</li>
                <li><strong className="text-foreground">Treating decorative images like products:</strong> Writing descriptions for abstract background shapes that should be ignored by screen readers.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">9. Alt text for multiple product images</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Most ecommerce products feature multiple images. If every image in a gallery has the exact same alt text, a screen reader user will hear the same phrase repeated endlessly. Instead, descriptions should reflect what is meaningfully different about each image.
              </p>
              <div className="bg-secondary/20 p-6 rounded-md border border-border mt-6">
                <p className="text-primary font-medium mb-3">Image 1: "12-inch wooden wall clock with black hands"</p>
                <p className="text-primary font-medium mb-3">Image 2: "Side view of 12-inch wooden wall clock showing the frame depth"</p>
                <p className="text-primary font-medium mb-3">Image 3: "Close-up of wooden clock face and black hands"</p>
                <p className="text-primary font-medium">Image 4: "12-inch wooden wall clock mounted on a white living room wall"</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">10. Product image alt text and accessibility</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Writing meaningful text alternatives is a pillar of web accessibility. It allows users utilizing assistive technologies to engage with the visual aspects of a storefront.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When an image is purely decorative—meaning it adds no information and is only there for aesthetic reasons—it is often best practice to leave the alt attribute empty (<code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">alt=""</code>). This tells the screen reader to skip the image entirely, preventing the user from being bogged down by unnecessary repetition. While accurate alt text is critical for accessibility, writing good alt text does not automatically make a store legally compliant; it is merely one necessary step in a broader inclusive design approach.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">11. Product image alt text and search/discovery</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Search engines use multiple signals to understand a page and its imagery. These signals include the page title, surrounding text, product schema, image filenames, and image alt text.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Alt text can provide additional context to help machines interpret the image. However, it is critical to understand that alt text is one part of a broader image optimization strategy. It does not guarantee better rankings, nor does it guarantee visibility in Google Images or recommendations by generative AI engines. It simply ensures that when a system attempts to parse your storefront, accurate textual context is available.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">12. How to audit product image alt text</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Reviewing a catalog's alt text requires evaluating both the technical presence of the attribute and the quality of the content. Look closely at your most important product pages and ask whether the text genuinely serves someone who cannot see the screen.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">13. Product image alt text checklist</h2>
              <ul className="space-y-4 text-lg text-neutral-400 list-decimal list-inside bg-secondary/20 p-8 rounded border border-border">
                <li><strong className="text-foreground">Is the image meaningful?</strong> If no, use an empty alt attribute.</li>
                <li><strong className="text-foreground">Does the alt text describe what matters?</strong> Focus on the visual reality of the product.</li>
                <li><strong className="text-foreground">Is it specific to this image?</strong> Don't reuse the exact same text for an entire gallery.</li>
                <li><strong className="text-foreground">Is it concise?</strong> Avoid unnecessary rambling.</li>
                <li><strong className="text-foreground">Does it avoid keyword stuffing?</strong> Ensure it reads naturally as a sentence or phrase.</li>
                <li><strong className="text-foreground">Does it avoid unnecessary phrases?</strong> Remove "Image of" or "Picture of".</li>
                <li><strong className="text-foreground">Does it match the actual image?</strong> Don't describe features that aren't visible in the specific photo.</li>
                <li><strong className="text-foreground">Are multiple images differentiated?</strong> Include angles, close-ups, or context in the description.</li>
                <li><strong className="text-foreground">Are decorative images handled appropriately?</strong> Prevent screen readers from announcing structural graphics.</li>
                <li><strong className="text-foreground">Does the surrounding content provide context?</strong> Ensure the page itself makes sense alongside the image.</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-8 md:p-12 mt-16 border border-border rounded-lg">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">14. How 1-OPTIMISER approaches image metadata</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                1-OPTIMISER is an image performance tool being built for Shopify. Rather than forcing merchants to manually type descriptions for thousands of variants, the current 1-OPTIMISER implementation includes AI-assisted alt text and descriptive filename generation.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                The application analyzes the visual contents of the image and proposes descriptive, non-stuffed alt text. However, generated metadata is strictly subject to merchant review. Store owners must approve the suggestions before they are saved to the catalog, ensuring human oversight remains central to the accessibility workflow.
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
              <h2 className="text-3xl font-heading font-bold text-foreground">15. Frequently Asked Questions</h2>
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
                <Link href="/resources/shopify-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Shopify Image Optimization
                </Link>
                <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Image Optimization
                </Link>
                <Link href="/resources/ecommerce-performance" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Performance
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
