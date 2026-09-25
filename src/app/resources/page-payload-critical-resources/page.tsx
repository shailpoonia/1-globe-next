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

const slug = 'page-payload-critical-resources'
const resource = getResourceBySlug(slug)

export const metadata: Metadata = {
  title: resource?.title ? `${resource.title} | 1-GLOBE` : 'Page Payload & Critical Resources: A Practical Guide for Ecommerce | 1-GLOBE',
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
      q: "What is page payload?",
      a: "Page payload refers to the total volume and complexity of all resources—such as HTML, CSS, JavaScript, images, fonts, and third-party integrations—that a browser must download, parse, and execute to fully render a page."
    },
    {
      q: "What resources contribute to page payload?",
      a: "The most common contributors to ecommerce page payload are high-resolution product images, third-party marketing and analytics scripts, web fonts, theme CSS files, and the primary JavaScript bundles required for interactive functionality."
    },
    {
      q: "What are critical resources?",
      a: "Critical resources are the specific files the browser absolutely needs early in the rendering process to display the initial, above-the-fold content. This typically includes the initial HTML, critical CSS, and above-the-fold images."
    },
    {
      q: "How do images affect page payload?",
      a: "Images are typically the heaviest single asset type on an ecommerce page. Unoptimized, oversized, or improperly formatted images significantly increase the bytes transferred over the network, consuming bandwidth and delaying rendering."
    },
    {
      q: "Can Shopify apps increase page payload?",
      a: "Yes. Many ecommerce integrations and Shopify apps inject their own CSS, JavaScript, and third-party tracking scripts into the storefront, which can increase the total network requests and JavaScript execution work required by the browser."
    },
    {
      q: "Should all JavaScript be deferred?",
      a: "No. While deferring non-critical JavaScript can improve initial loading times, scripts that provide immediate, necessary user-facing functionality must often be executed early. The treatment of a script depends on its purpose."
    },
    {
      q: "Does reducing page payload improve SEO?",
      a: "Reducing page payload does not guarantee higher search rankings. It can, however, contribute to a stronger technical foundation, reduce rendering bottlenecks, and positively influence field metrics if implemented alongside a comprehensive performance strategy."
    },
    {
      q: "How can I measure ecommerce page payload?",
      a: "Merchants can evaluate payload by comparing before-and-after data using browser developer tools or performance testing services. Key metrics include total transferred bytes, the number of network requests, JavaScript execution time, and Core Web Vitals data."
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
                The speed at which a storefront becomes usable is heavily influenced by the sheer volume of resources it requires. Understanding how HTML, CSS, JavaScript, and imagery combine to form a page's payload empowers developers and merchants to eliminate unnecessary bottlenecks and streamline the shopping experience.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">1. What Is Page Payload?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Page payload represents the entirety of the resources required to construct and operate a web page. This encompasses the initial HTML document, stylesheets (CSS), JavaScript bundles, media (images and video), web fonts, third-party tracking scripts, and other network-delivered assets.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Crucially, payload is not simply "page size" measured in total transferred megabytes. It must be evaluated by both the physical weight (bytes) transferred over the network and the number and complexity of the distinct resources the browser is forced to process.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">2. Why Page Payload Matters for Ecommerce</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Ecommerce pages inherently trend toward becoming resource-heavy. A modern product page often features high-resolution primary product images, multiple variant images, recommendation widgets, customer reviews, marketing and analytics tracking, customer support chat tools, personalization integrations, and complex theme code.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                An increasing volume of resources directly correlates to more work for both the network transferring the data and the browser rendering the interface. While it is inaccurate to claim that simply reducing payload will automatically increase conversions, maintaining a disciplined technical footprint minimizes the friction a shopper experiences, particularly on constrained mobile networks.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">3. What Are Critical Resources?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                A resource is considered "critical" if the browser requires it immediately to render the visible, above-the-fold portion of the page. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Critical assets typically include the initial HTML response, the specific CSS required to structure the visible layout, necessary typography (fonts), above-the-fold imagery (like a product's primary hero shot), and any JavaScript strictly required for the immediate interface to function. Because web architectures vary wildly, "critical" is contextual to the specific storefront. No single resource type is universally critical across all stores.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">4. HTML, CSS and JavaScript Payload</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The text-based assets of a storefront each serve a distinct role in constructing the page:
              </p>
              <ul className="space-y-4 text-lg text-neutral-400 list-disc list-inside">
                <li><strong className="text-foreground">HTML:</strong> Provides the fundamental document structure, text content, and the critical references guiding the browser to fetch subsequent images and scripts.</li>
                <li><strong className="text-foreground">CSS:</strong> Dictates the visual presentation, layout, and typography. Blocking CSS prevents the page from displaying until the browser has parsed the rules.</li>
                <li><strong className="text-foreground">JavaScript:</strong> Powers dynamic behavior, interactive elements, and application logic.</li>
              </ul>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Unlike images, JavaScript carries a dual cost: the bytes transferred over the network, plus the substantial computational work required by the browser to parse, compile, and execute the code.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">5. Images and Page Payload</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Images routinely account for the vast majority of transferred bytes on an ecommerce page. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Unoptimized source dimensions, inefficient formats, and a lack of compression can bloat a page by megabytes. Implementing responsive image techniques (like <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">srcset</code> and <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">sizes</code>), lazy loading below-the-fold media, and establishing strict loading priorities for critical hero images are necessary practices. For a detailed breakdown of image payload reduction, review our guides on <Link href="/resources/ecommerce-image-optimization" className="text-primary hover:underline">ecommerce image optimization</Link> and <Link href="/resources/ecommerce-image-compression-webp" className="text-primary hover:underline">ecommerce image compression & WebP</Link>.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">6. Third-Party Scripts and Apps</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Modern storefronts rely on third-party resources for analytics, advertising pixels, customer reviews, live chat, personalization, and social widgets.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                These external dependencies introduce new network connections, additional JavaScript execution, and unpredictable rendering work outside the merchant's direct control. Third-party scripts are not inherently bad, but their technical cost is cumulative. Merchants should rigorously evaluate whether each specific dependency provides sufficient business value to justify its impact on the page's complexity.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">7. Fonts and Other Supporting Resources</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Beyond core code and imagery, a storefront fetches web fonts, vector icon sets, embedded videos, and miscellaneous assets. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Custom fonts are visually striking but can delay text rendering if they block the page or suffer from network delays. The objective is not the total removal of every supporting asset, but rather ensuring they are loaded appropriately—such as preloading critical fonts while deferring secondary icon libraries.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">8. Critical CSS and Rendering</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                By default, CSS is a render-blocking resource; a browser will halt visual rendering until it has downloaded and parsed external stylesheets. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                "Critical CSS" refers to the practice of extracting only the styles required for the immediate visual layout and inlining them directly into the HTML response. The remaining non-critical CSS can then be deferred to load asynchronously, avoiding unnecessary blocking work. While a sound delivery strategy is important, it does not promise a specific numerical improvement to Core Web Vitals on its own.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">9. JavaScript Loading and Execution</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Optimizing JavaScript payload involves reducing unnecessary code, code-splitting large bundles into smaller chunks, and altering how scripts are fetched using <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">defer</code>, <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">async</code>, or lazy-loading techniques.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                However, it is a mistake to assume every script should be deferred blindly. Scripts required for immediate, user-facing interactivity (such as a critical variant selector or navigation menu) may require early execution. Optimization requires balancing the execution cost against the functional requirements of the page.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">10. How Ecommerce Apps Affect Page Payload</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                For merchants operating on platforms like Shopify, app integrations are a primary source of payload bloat. Apps frequently inject their own styles, structural blocks, tracking pixels, and complex interactive widgets directly into the DOM.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Rather than assuming all apps are problematic, the correct approach is to evaluate the actual storefront behavior. Referencing <Link href="/resources/shopify-image-optimization" className="text-primary hover:underline">Shopify image optimization</Link> and broader <Link href="/resources/ecommerce-performance" className="text-primary hover:underline">ecommerce performance</Link> principles, merchants should regularly audit their app ecosystem to identify integrations that unnecessarily bottleneck the storefront.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">11. How to Audit Page Payload</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                A practical payload audit requires methodical evaluation. While browser developer tools and specialized performance testing services are useful, no single tool provides a complete diagnosis.
              </p>
              <ol className="space-y-3 text-lg text-neutral-400 list-decimal list-inside bg-secondary/10 p-6 rounded border border-border">
                <li>Identify the most important page templates (Homepage, Product, Collection).</li>
                <li>Test a representative sample of those pages under realistic network conditions.</li>
                <li>Record the total transferred bytes.</li>
                <li>Review the network waterfall to identify blocking requests.</li>
                <li>Identify the largest individual resources.</li>
                <li>Evaluate JavaScript execution time.</li>
                <li>Review the contribution of third-party external resources.</li>
                <li>Analyze image loading behavior and formatting.</li>
                <li>Identify resources that can be safely reduced, deferred, or removed.</li>
                <li>Implement changes and retest to verify the delta.</li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">12. What Should Be Reduced, Deferred or Removed?</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                When evaluating resources, classify them into three practical actions depending on their functional necessity:
              </p>
              <ul className="space-y-4 text-lg text-neutral-400">
                <li><strong className="text-foreground">Reduce:</strong> Focus on oversized images, unnecessarily verbose CSS, excessive JavaScript bundles, and duplicated structural assets.</li>
                <li><strong className="text-foreground">Defer:</strong> Target non-critical scripts, heavy functionality located below the fold, and optional interactive widgets that do not impact initial rendering.</li>
                <li><strong className="text-foreground">Remove:</strong> Eliminate unused app integrations, redundant tracking pixels, obsolete theme code, and third-party widgets that no longer serve a business purpose.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">13. Page Payload and Core Web Vitals</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Core Web Vitals—including Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)—are profoundly influenced by resource delivery. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                However, it is crucial to understand that page payload alone does not determine these metrics. A page's performance is the culmination of resource size, fetching priority, network conditions, browser rendering work, layout stability, and JavaScript execution overhead. Reducing payload is highly beneficial, but it does not guarantee automatic CWV compliance.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">14. How to Measure Improvement</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                The only reliable way to measure technical improvement is to compare before and after. 
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Merchants should track total transferred bytes, the sheer number of network requests, the specific payload breakdown (images vs CSS vs JavaScript), and the contribution of third-party domains. While achieving a smaller payload is excellent technical evidence of optimization, it is not the sole metric of success; real-user performance data and stable Core Web Vitals paint the most accurate picture of the storefront experience.
              </p>
            </div>

            <div className="bg-secondary/30 p-8 md:p-12 mt-16 border border-border rounded-lg">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">15. Where 1-GLOBE Fits</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                1-GLOBE approaches ecommerce performance as a comprehensive system spanning multiple disciplines, without relying on unsupported guarantees regarding rankings, conversions, or automatic Core Web Vitals success.
              </p>
              <ul className="space-y-4 text-lg text-neutral-400 mb-6">
                <li><strong className="text-foreground">1-OPTIMISER:</strong> Focused on image performance and source-catalog technical capabilities (currently coming soon).</li>
                <li><strong className="text-foreground">1-BLOG:</strong> Focused on structured content performance (currently launching soon).</li>
                <li><strong className="text-foreground">1-LIST:</strong> Focused on product listing performance for complex discovery environments (currently launching soon).</li>
              </ul>
              <Link href="/apps/1-optimiser" className="interactive-btn inline-flex items-center justify-center h-12 px-8 font-bold text-xs uppercase tracking-widest bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-foreground/90 transition-colors mt-2">
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
                <Link href="/resources/ecommerce-performance" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Performance
                </Link>
                <Link href="/resources/bulk-image-optimization" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Bulk Image Optimization
                </Link>
                <Link href="/resources/ecommerce-image-compression-webp" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Ecommerce Image Compression & WebP
                </Link>
                <Link href="/resources/product-image-alt-text" className="text-primary hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
                  Product Image Alt Text
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
