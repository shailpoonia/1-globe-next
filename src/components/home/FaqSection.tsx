import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { BrandText } from '@/components/shared/BrandLogo'

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: "What is 1-GLOBE?",
      a: "1-GLOBE is an ecommerce performance technology company building tools for online merchants. Our product ecosystem focuses on storefront image performance, product listing performance, content performance and social presence."
    },
    {
      q: "What is ecommerce performance technology?",
      a: "Ecommerce performance technology is infrastructure designed to help a storefront perform better for both search systems and human visitors. By optimizing technical assets like image payloads and metadata, these tools support a faster, more structured store."
    },
    {
      q: "What products does 1-GLOBE offer?",
      a: "The 1-GLOBE product ecosystem includes 1-OPTIMIZER for image performance, 1-SOCIAL for a consistent social presence, 1-LISTING for product listing performance and 1-BLOG for content performance. 1-OPTIMIZER is coming soon to Shopify, 1-SOCIAL launches next, and 1-LISTING and 1-BLOG are launching soon."
    },
    {
      q: "What is 1-OPTIMIZER?",
      a: "1-OPTIMIZER is an image performance tool for Shopify stores. It provides tools for image optimization (compression, resizing, WebP conversion), AI-assisted image metadata (alt text, filenames, keyword suggestions for merchant review), image editing, a storefront performance theme extension, store-scope controls, and optimization history."
    },
    {
      q: "Is 1-OPTIMIZER available yet?",
      a: "1-OPTIMIZER is currently in its final stages and is coming to the Shopify App Store soon."
    },
    {
      q: "Does 1-GLOBE work with Shopify?",
      a: "1-OPTIMIZER is designed specifically for Shopify stores. Future products may have their own platform requirements as they launch."
    },
    {
      q: "Do I need to replace my existing ecommerce tools?",
      a: "No. 1-GLOBE is designed around focused capabilities rather than requiring merchants to replace their entire ecommerce stack."
    },
    {
      q: "Where should I start?",
      a: (
        <>
          Start with the foundation. If image performance and catalog management are your priority, explore 1-OPTIMIZER and read our resources on ecommerce image optimization.
          <div className="mt-8 flex flex-col gap-4">
            <Link href="/apps/1-optimizer" className="inline-flex items-center text-[13px] font-bold uppercase tracking-[0.12em] text-foreground border border-neutral-800 bg-neutral-900/50 px-4 py-2 hover:bg-neutral-800 transition-colors w-max">
              Explore 1-OPTIMIZER →
            </Link>
            <Link href="/resources/ecommerce-image-optimization" className="inline-flex items-center text-[13px] font-semibold text-neutral-400 hover:text-foreground transition-colors w-max">
              Read: Ecommerce Image Optimization →
            </Link>
          </div>
        </>
      )
    }
  ]

  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-400 block mb-6">
              COMMON QUESTIONS
            </span>
            <h2 className="text-section-title">
              Questions{' '}<br />
              worth{' '}<br />
              <span className="text-primary">answering</span>
            </h2>
          </div>

          <div className="lg:col-span-7 pt-2">
            <Accordion.Root type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-neutral-800/60 last:border-0"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 items-center justify-between py-6 text-left font-heading font-bold text-lg sm:text-xl text-neutral-300 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                      <BrandText plain>{faq.q}</BrandText>
                      <ChevronDown
                        className="w-5 h-5 text-neutral-600 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-foreground shrink-0 ml-4"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content forceMount className="overflow-hidden text-sm sm:text-base text-neutral-400 leading-relaxed data-[state=closed]:hidden">
                    <div className="pb-8 pr-8 font-medium">
                      {faq.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
          
        </div>
      </div>
      
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
                "text": typeof faq.a === "string" ? faq.a : "Start with the foundation. If image performance and catalog management are your priority, explore 1-OPTIMIZER and read our resources on ecommerce image optimization."
              }
            }))
          })
        }}
      />
    </section>
  )
}
