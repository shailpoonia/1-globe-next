import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: "What is 1-GLOBE?",
      a: "1-GLOBE is an ecommerce performance technology company building tools for online merchants. Our product ecosystem focuses on storefront image performance, content performance, and product listing performance."
    },
    {
      q: "What does 1-GLOBE build?",
      a: "1-GLOBE builds targeted technology that addresses specific operational bottlenecks across an online store. This includes image compression engines, metadata generators, and structural data tools designed to improve the technical foundation of ecommerce sites."
    },
    {
      q: "Who is 1-GLOBE built for?",
      a: "1-GLOBE builds technology for online merchants and the teams that operate ecommerce businesses, prioritizing practical tools that integrate directly into existing workflows."
    },
    {
      q: "What is ecommerce performance technology?",
      a: "Ecommerce performance technology is infrastructure designed to help a storefront perform better for both search systems and human visitors. By optimizing technical assets like image payloads and metadata, these tools support a faster, more structured store."
    },
    {
      q: "What products does 1-GLOBE offer?",
      a: "The 1-GLOBE product ecosystem includes 1-OPTIMISER for image performance, 1-BLOG for content performance, and 1-LIST for product listing performance. 1-OPTIMISER is coming soon, while 1-BLOG and 1-LIST are launching soon."
    },
    {
      q: "What is 1-OPTIMISER?",
      a: "1-OPTIMISER is an image performance tool designed specifically for Shopify stores. It compresses image assets, improves filenames, and generates contextual alt text to support storefront performance and image discoverability."
    },
    {
      q: "What is 1-BLOG?",
      a: "1-BLOG is a tool focused on content performance for the modern online store."
    },
    {
      q: "What is 1-LIST?",
      a: "1-LIST is a tool that helps build product listings structured for search, answer engines, and generative discovery."
    },
    {
      q: "Is 1-OPTIMISER available yet?",
      a: "1-OPTIMISER is currently in its final stages and is coming to the Shopify App Store soon."
    },
    {
      q: "Are 1-BLOG and 1-LIST available yet?",
      a: "No. 1-BLOG and 1-LIST are currently part of the 1-GLOBE roadmap and will be launching soon."
    },
    {
      q: "Does 1-GLOBE work with Shopify?",
      a: "1-OPTIMISER is designed specifically for Shopify stores. Future products may have their own platform requirements as they launch."
    },
    {
      q: "Do I need to replace my existing ecommerce tools?",
      a: "No. 1-GLOBE is designed around focused capabilities rather than requiring merchants to replace their entire ecommerce stack."
    },
    {
      q: "Where should I start?",
      a: (
        <>
          Start with the foundation. If image performance and image management are your priority, explore 1-OPTIMISER.
          <div className="mt-6">
            <Link href="/apps/1-optimiser" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors">
              Explore 1-OPTIMISER →
            </Link>
          </div>
        </>
      )
    }
  ]

  return (
    <section id="faq" className="bg-background py-24 md:py-32 lg:py-40 border-b border-border">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 sticky top-32">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-6">
              COMMON QUESTIONS
            </span>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl tracking-tighter leading-[0.95] text-foreground uppercase">
              QUESTIONS<br />
              WORTH<br />
              ANSWERING.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <Accordion.Root type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-border last:border-0"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 items-center justify-between py-6 text-left font-heading font-bold text-lg sm:text-xl text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                      {faq.q}
                      <ChevronDown
                        className="w-5 h-5 text-muted-foreground transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 shrink-0 ml-4"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm sm:text-base text-neutral-400 leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
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
                "text": typeof faq.a === "string" ? faq.a : "Start with the foundation. If image performance and image management are your priority, explore 1-OPTIMISER."
              }
            }))
          })
        }}
      />
    </section>
  )
}
