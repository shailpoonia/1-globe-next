import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: "What does 1-globe.com actually do?",
      a: "We build Shopify-native performance technology. Our applications solve specific structural bottlenecks—like oversized image payloads, missing metadata, and content workflows—that prevent standard ecommerce stores from loading quickly and indexing efficiently."
    },
    {
      q: "Why use focused apps instead of an all-in-one suite?",
      a: "General-purpose tools often introduce code bloat because they attempt to handle dozens of edge cases. We build specific tools for specific problems. This modular architecture allows you to optimize a specific layer without adding unnecessary scripts or overhead to your storefront."
    },
    {
      q: "Do you guarantee higher search rankings?",
      a: "No. Rankings are determined by external algorithms. What we guarantee is that we resolve the technical barriers—slow pages, unreadable assets, unstructured data—that prevent search engines from effectively crawling and interpreting your store. We provide the technical foundation; you provide the product and brand."
    },
    {
      q: "How do your apps interact with my Shopify theme?",
      a: "Where possible, we interact directly with the Shopify Admin API to modify underlying data rather than injecting client-side scripts. This ensures your theme remains lightweight, and if you ever uninstall an application, it leaves zero residual code behind."
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
