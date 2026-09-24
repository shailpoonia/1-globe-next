import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

export const AppFaqSection: React.FC = () => {  const faqs = [
    {
      q: "What is 1-OPTIMISER?",
      a: "1-OPTIMISER is an image performance tool designed for Shopify stores. It helps merchants optimize image files, improve image metadata, and work with image editing and storefront performance tools."
    },
    {
      q: "How does 1-OPTIMISER work?",
      a: "1-OPTIMISER connects to your Shopify catalog and provides tools to optimize image files and image metadata. Depending on the workflow, merchants can process images individually, by collection, product or broader catalog scope, review changes, and confirm updates before they are saved to Shopify."
    },
    {
      q: "Why do product images matter to ecommerce storefronts?",
      a: "Product images are an important part of ecommerce storefront performance and product presentation. Large image payloads can contribute to heavier pages and slower loading experiences, while descriptive alt text and filenames can provide clearer context for accessibility and image-related discovery."
    },
    {
      q: "Does compression affect image quality?",
      a: "Compression can reduce file size while aiming to maintain useful visual quality. 1-OPTIMISER provides optimization controls so merchants can choose settings appropriate for their images and storefront."
    },
    {
      q: "Will renaming my files break existing links?",
      a: "1-OPTIMISER updates image information through Shopify's APIs. Merchants should review changes before saving them, particularly when filenames or image references are important to an existing workflow."
    },
    {
      q: "How does AI generation handle complex products?",
      a: "AI-assisted image and metadata workflows use the available product and image context to help generate relevant content. Merchants should review AI-generated results before applying changes to their store."
    },
    {
      q: "Do I have to optimize images one by one?",
      a: "Merchants can work with images individually, by product or collection, or across broader catalog scopes depending on the workflow. Bulk optimization uses the app's processing workflow, while interactive editing tools can be used on selected images."
    }
  ]

  return (
    <Section id="faq" className="section-spacing bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          headline="FAQ"
          align="left"
        />

        <Accordion.Root type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="border-b border-border last:border-0"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 text-left font-heading font-bold text-lg sm:text-xl text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                  {faq.q}
                  <ChevronDown
                    className="w-5 h-5 text-muted-foreground transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm sm:text-base text-muted-foreground leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-6 pr-8 font-medium">
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
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
                "text": faq.a
              }
            }))
          })
        }}
      />
    </Section>
  )
}

