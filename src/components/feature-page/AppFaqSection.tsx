import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

export const AppFaqSection: React.FC = () => {
  const faqs = [
    {
      q: "Does compression affect image quality?",
      a: "Our compression algorithms reduce file size by up to 90% while maintaining perceptual quality. We strip unnecessary metadata and optimize pixel data without introducing visible artifacts to your product photography."
    },
    {
      q: "Will renaming my files break existing links?",
      a: "No. 1-Optimiser utilizes the Shopify Admin API to safely update file paths and redirect references internally. Your storefront will not suffer 404 errors or broken image links."
    },
    {
      q: "How does AI generation handle complex products?",
      a: "Our vision models analyze the visual composition of your image in the context of your product's title and description. It generates descriptive, objective alt text optimized for screen readers and semantic search engines."
    },
    {
      q: "Do I have to optimize images one by one?",
      a: "You can process images individually, by collection, or across your entire store in a single bulk operation. The process runs asynchronously in the background."
    }
  ]

  return (
    <Section id="faq" className="py-24 md:py-32 bg-background border-b border-border">
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
    </Section>
  )
}
