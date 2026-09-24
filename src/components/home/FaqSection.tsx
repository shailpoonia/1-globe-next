import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: "What is 1-GLOBE?",
      a: "1-GLOBE builds focused technology for ecommerce businesses. We design tools that address specific operational and performance challenges across the store, from image and content performance to product listing structure."
    },
    {
      q: "Who is 1-GLOBE built for?",
      a: "1-GLOBE is designed for ecommerce businesses and the teams that operate them. The focus is on practical tools that can fit into existing ecommerce workflows rather than adding unnecessary complexity."
    },
    {
      q: "What products does 1-GLOBE offer?",
      a: "The current ecosystem includes 1-OPTIMISER for image performance, 1-BLOG for content performance, and 1-LIST for product listing performance. Product availability may differ as the ecosystem develops."
    },
    {
      q: "What is 1-OPTIMISER?",
      a: "1-OPTIMISER is an image performance tool for Shopify stores. It helps merchants optimize image assets, improve filenames and generate contextual alt text as part of their image management workflow."
    },
    {
      q: "Are 1-BLOG and 1-LIST available?",
      a: "They are currently part of the 1-GLOBE product roadmap and are being prepared for launch. Their purpose is to help merchants improve content and product listing structure for modern search and discovery environments."
    },
    {
      q: "Does 1-GLOBE work with Shopify?",
      a: "1-OPTIMISER is designed for Shopify stores and works with the Shopify catalog workflow. Other 1-GLOBE products may have their own platform requirements as they launch."
    },
    {
      q: "Do I need to replace my existing ecommerce tools?",
      a: "No. 1-GLOBE is designed around focused capabilities rather than requiring merchants to replace their entire ecommerce stack. Each product should address a defined problem within the existing store workflow."
    },
    {
      q: "How does 1-GLOBE think about ecommerce performance?",
      a: "We look at performance as more than a single speed score. Technical assets, content, product data, structure and the customer experience all contribute to how an ecommerce store operates and communicates."
    },
    {
      q: "Where should I start?",
      a: (
        <>
          Start with the problem you are trying to solve. If image performance and image management are the priority, explore 1-OPTIMISER. As additional products become available, they will address other areas of ecommerce performance.
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
                "text": typeof faq.a === "string" ? faq.a : "Start with the problem you are trying to solve. If image performance and image management are the priority, explore 1-OPTIMISER."
              }
            }))
          })
        }}
      />
    </section>
  )
}
