import { Metadata } from 'next'
import { Boxes, Heading, PenLine, Layers, Fingerprint, Database, Gauge, Award } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'
import { ENTITY_PRODUCTS } from '@/lib/entities'
import { CtaBand } from '@/components/shared/CtaBand'
import { AppSubNav } from '@/components/feature-page/AppSubNav'
import { AppHero } from '@/components/feature-page/AppHero'
import { AppSteps, AppFeatureCards } from '@/components/feature-page/AppSections'
import { AppFaqSection } from '@/components/feature-page/AppFaqSection'
import { BlogHeroCard } from '@/components/feature-page/BlogHeroCard'
import { AppBreadcrumbSchema } from '@/components/shared/AppSchemaOrg'
import { AppName } from '@/components/shared/BrandLogo'

const product = ENTITY_PRODUCTS['1-blog']

export const metadata: Metadata = buildMetadata({
  title: '1-BLOG | Blog Content From Your Product Catalog',
  description: '1-BLOG is designed to generate structured blog posts from your own products, so your content stays accurate to what you sell. Launching soon from 1-GLOBE.',
  path: '/apps/1-blog',
})

const faqs = [
  {
    q: 'What is 1-BLOG?',
    a: '1-BLOG is a content tool from 1-GLOBE. It is designed to generate structured blog posts from your product catalog, using the product names, details and images you already have.',
  },
  {
    q: 'How is 1-BLOG different from a generic AI writer?',
    a: 'A generic writer starts from a blank page. 1-BLOG starts from your products, so every draft is built around real items in your catalog rather than treating blogging as a separate activity.',
  },
  {
    q: 'Is this just AI-generated content?',
    a: 'AI does the writing, but the substance comes from you: your products, your data and your story. Each section shows a confidence level for how well it is backed by your own data, so the result is authentic content rather than generic text.',
  },
  {
    q: 'Do I stay in control of what is written?',
    a: 'Yes. Every post 1-BLOG generates is a draft for you to review and edit.',
  },
  {
    q: 'When does 1-BLOG launch?',
    a: '1-BLOG is launching soon. It follows 1-OPTIMIZER, which is live on Shopify, and 1-LISTING, which launches next.',
  },
]

export default function BlogAppPage() {
  return (
    <main className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <AppBreadcrumbSchema appName="1-BLOG" appSlug="1-blog" />

      <AppSubNav
        appName={
          <div className="flex items-baseline gap-2">
            <AppName name="1-BLOG" />
            <span className="hidden sm:inline-block text-xs font-medium text-muted-foreground uppercase tracking-wide">Content performance</span>
          </div>
        }
        ctaText={product.badge}
      />

      <AppHero
        eyebrow="1-BLOG · Content performance"
        headline={<>Content that starts{' '}<br />from your <span className="text-primary">catalog</span></>}
        subhead={
          <p>
            1-BLOG is designed to generate structured blog posts from your own products: their names, details and images. Once your products are readable, 1-BLOG helps create content around them.
          </p>
        }
        primaryCtaText={product.badge}
        secondaryCtaText="See how it works"
        secondaryCtaUrl="#how"
        heroMoment={<BlogHeroCard />}
      />

      <AppFeatureCards
        id="authentic"
        eyebrow="Authentic content"
        background="bg-secondary/20"
        headline={<>Your data{' '}<br />Your story{' '}<br />Your <span className="text-primary">authority</span></>}
        subhead="1-BLOG uses AI to write, but it is not generic AI content. It comes from your own products, your own data and your own story: the original, first-hand material that search engines and AI assistants look for."
        features={[
          { icon: Fingerprint, title: 'Authentic by design', body: 'Every draft is built from your catalog and your brand story, not from what the rest of the internet already says.' },
          { icon: Database, title: 'Clean, consistent facts', body: 'Product names, materials, sizes and details come straight from your catalog, so your content matches your listings.' },
          { icon: Gauge, title: 'A confidence level for every section', body: 'Each part of a draft shows how well it is backed by your own data, so you know exactly what to check before you use it.' },
          { icon: Award, title: 'Content that carries authority', body: 'Original, first-hand content is hard to copy. Your products and your story give your blog something no one else has.' },
        ]}
      />

      <AppSteps
        background="bg-background"
        headline={<>How it <span className="text-primary">works</span></>}
        lead="Three steps from a product in your catalog to a structured draft."
        steps={[
          { title: 'Choose your products', body: 'Pick the products or collection you want to write about.' },
          { title: 'Generate a draft', body: '1-BLOG writes a structured post around them, with a clear title, headings and sections.' },
          { title: 'Review and edit', body: 'Read the draft, change what you like, and decide what to use.' },
        ]}
      />

      <AppFeatureCards
        headline={<>Built on your <span className="text-primary">products</span></>}
        subhead="What 1-BLOG is designed to do."
        background="bg-secondary/20"
        features={[
          { icon: Boxes, title: 'Starts from your catalog', body: 'Posts are built from the product names, details and images you already have, so they stay accurate to what you sell.' },
          { icon: Heading, title: 'Structured drafts', body: 'Clear titles, headings and sections that readers and search engines can follow.' },
          { icon: PenLine, title: 'You stay in control', body: 'Every post is a draft for you to review and edit.' },
          { icon: Layers, title: 'Part of the 1-GLOBE system', body: 'Works from the same product foundation as 1-OPTIMIZER and 1-LISTING, so images, listings and content support each other.' },
        ]}
      />

      <AppFaqSection faqs={faqs} />

      <CtaBand
        subhead="1-BLOG is launching soon. Start with 1-OPTIMIZER, live on Shopify."
        primaryCtaText={product.badge}
        primaryCtaUrl="#"
        primaryIsLink={false}
        secondaryCtaText="Explore 1-OPTIMIZER"
        secondaryCtaUrl="/apps/1-optimizer"
        secondaryIsLink={true}
      />
    </main>
  )
}
