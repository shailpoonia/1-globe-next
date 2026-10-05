import { Metadata } from 'next'
import { LayoutDashboard, Sparkles, CalendarDays, Send, Fingerprint, Database, Gauge, Megaphone } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'
import { ENTITY_PRODUCTS } from '@/lib/entities'
import { CtaBand } from '@/components/shared/CtaBand'
import { AppSubNav } from '@/components/feature-page/AppSubNav'
import { AppHero } from '@/components/feature-page/AppHero'
import { AppSteps, AppFeatureCards } from '@/components/feature-page/AppSections'
import { AppFaqSection } from '@/components/feature-page/AppFaqSection'
import { SocialHeroCard } from '@/components/feature-page/SocialHeroCard'
import { AppBreadcrumbSchema } from '@/components/shared/AppSchemaOrg'
import { AppName } from '@/components/shared/BrandLogo'

const product = ENTITY_PRODUCTS['1-social']

export const metadata: Metadata = buildMetadata({
  title: '1-SOCIAL | Generate, Schedule and Publish Social Posts',
  description: '1-SOCIAL is designed to generate on-brand social posts from your product catalog, then schedule and auto-publish them across platforms from one dashboard. Launching soon from 1-GLOBE.',
  path: '/apps/1-social',
})

const faqs = [
  {
    q: 'What is 1-SOCIAL?',
    a: '1-SOCIAL is a social media tool from 1-GLOBE. It is designed to generate posts from your product catalog, then schedule and automatically publish them across your social platforms, all from one dashboard.',
  },
  {
    q: 'Do I have to write the posts myself?',
    a: 'No. 1-SOCIAL generates posts and captions from your products. You can review and edit them before they are scheduled.',
  },
  {
    q: 'Is this just AI-generated content?',
    a: 'AI does the writing, but the substance comes from you: your products, your data and your story. Each post shows a confidence level for how well it is backed by your own data, so what you publish is authentic rather than generic.',
  },
  {
    q: 'Which platforms will 1-SOCIAL support?',
    a: 'The supported platforms will be confirmed at launch.',
  },
  {
    q: 'When does 1-SOCIAL launch?',
    a: '1-SOCIAL is launching soon. It follows 1-OPTIMIZER, which is live on Shopify, then 1-LISTING and 1-BLOG.',
  },
]

export default function SocialAppPage() {
  return (
    <main className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <AppBreadcrumbSchema appName="1-SOCIAL" appSlug="1-social" />

      <AppSubNav
        appName={
          <div className="flex items-baseline gap-2">
            <AppName name="1-SOCIAL" />
            <span className="hidden sm:inline-block text-xs font-medium text-muted-foreground uppercase tracking-wide">Social media</span>
          </div>
        }
        ctaText={product.badge}
      />

      <AppHero
        eyebrow="1-SOCIAL · Social media"
        headline={<>One dashboard{' '}<br />for every <span className="text-primary">channel</span></>}
        subhead={
          <p>
            1-SOCIAL is designed to generate on-brand posts from your product catalog, then schedule and publish them automatically across your social platforms, all from one dashboard.
          </p>
        }
        primaryCtaText={product.badge}
        secondaryCtaText="See how it works"
        secondaryCtaUrl="#how"
        heroMoment={<SocialHeroCard />}
      />

      <AppFeatureCards
        id="authentic"
        eyebrow="Authentic content"
        background="reading-light"
        headline={<>Your data{' '}<br />Your story{' '}<br />Your <span className="text-brand">voice</span></>}
        subhead="1-SOCIAL uses AI to create posts, but they are not generic AI posts. They come from your own products, your own data and your own story, so what you share sounds like you and stays true to what you sell."
        features={[
          { icon: Fingerprint, title: 'Authentic by design', body: 'Every post is built from your catalog and your brand story, not from recycled templates or whatever is trending.' },
          { icon: Database, title: 'Clean, consistent facts', body: 'Product names and details come straight from your catalog, so every post matches your listings on every platform.' },
          { icon: Gauge, title: 'A confidence level for every post', body: 'Each post shows how well it is backed by your own data, so you know what to check before it is scheduled.' },
          { icon: Megaphone, title: 'One voice everywhere', body: 'The same story on every platform, so your followers recognise your brand and trust what they see.' },
        ]}
      />

      <AppSteps
        background="bg-background"
        headline={<>How it <span className="text-primary">works</span></>}
        lead="From a product in your catalog to a published post, in one place."
        steps={[
          { title: 'Generate', body: '1-SOCIAL creates posts and captions from your products, ready for you to review.' },
          { title: 'Schedule', body: 'Plan your posts on one calendar and choose when and where each one goes out.' },
          { title: 'Auto-publish', body: 'Scheduled posts are published automatically across your connected platforms.' },
        ]}
      />

      <AppFeatureCards
        headline={<>Consistent on <span className="text-primary">every platform</span></>}
        subhead="What 1-SOCIAL is designed to do."
        background="bg-secondary/20"
        features={[
          { icon: Sparkles, title: 'Content from your catalog', body: 'Posts and captions are generated from your own products and brand story, not generic templates, so what you share is authentic and matches what you sell.' },
          { icon: CalendarDays, title: 'Scheduling calendar', body: 'See your week at a glance and plan posts ahead instead of posting day by day.' },
          { icon: Send, title: 'Automatic publishing', body: 'Posts go out at the time you set, across your connected platforms, without logging in to each one.' },
          { icon: LayoutDashboard, title: 'One dashboard', body: 'Create, schedule and track your social posts in one place.' },
        ]}
      />

      <AppFaqSection faqs={faqs} />

      <CtaBand
        subhead="1-SOCIAL is launching soon. Start with 1-OPTIMIZER, live on Shopify."
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
