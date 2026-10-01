import { Metadata } from 'next'
import { buildMetadata, company } from '@/lib/seo'
import { Section } from '@/components/shared/Section'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Reach out to the 1-GLOBE team for support or inquiries regarding our ecommerce performance tools.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <main className="flex-1">
        <Section className="section-spacing bg-background border-b border-border">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Copy */}
            <div>
              <span className="text-eyebrow block mb-6">Contact</span>
              <h1 className="text-page-title mb-6">
                Talk to <span className="text-primary">us</span>
              </h1>
              <p className="text-lead max-w-md mb-10">
                Questions, feedback, or need a hand? We usually reply within one business day.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">Support & Inquiries</p>
                  <a href={`mailto:${company.email.support}`} className="text-primary hover:underline text-lg font-medium">
                    {company.email.support}
                  </a>
                </div>
                
                <div className="pt-6 border-t border-border mt-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Looking for product details?{' '}
                    <Link href="/apps/1-optimizer" className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30">
                      Explore 1-OPTIMIZER
                    </Link>{' '}
                    or{' '}
                    <Link href="/pricing" className="text-primary hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/30">
                      view 1-OPTIMIZER pricing
                    </Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Direct Email CTA */}
            <div className="flex flex-col justify-center">
              <div className="bg-card border border-border p-8 md:p-12 flex flex-col gap-8 rounded-[var(--radius)] h-full justify-center">
                <div>
                  <h2 className="text-card-title mb-4">Send us an email</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    We don't use complicated contact forms. For all inquiries, product questions, or support requests, please email our team directly. We strive to reply within one business day.
                  </p>
                </div>
                
                <a 
                  href={`mailto:${company.email.support}`}
                  className="interactive-btn h-14 font-semibold text-sm bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center justify-center w-full"
                >
                  Email Support
                </a>
              </div>
            </div>

          </div>
        </Section>
      </main>
    </div>
  )
}
