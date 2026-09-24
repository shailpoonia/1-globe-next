import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | 1-globe.com',
  description: 'Terms of Service governing the use of 1-globe.com website and our Shopify applications.'
}

export default function TermsPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <main className="flex-1 section-spacing">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          {/* Document Header */}
          <div className="mb-12 pb-8 border-b border-border">
            <span className="text-eyebrow block mb-6">
              Terms of Agreement
            </span>
            <h1 className="text-hero mb-6">
              Terms of Service
            </h1>
            <p className="text-lead">
              Last Updated: <span className="text-foreground font-medium">September 21, 2026</span>
            </p>
          </div>

          {/* Terms Content */}
          <div className="prose prose-invert max-w-none space-y-10 text-sm leading-relaxed text-muted-foreground">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                1. Agreement to Terms
              </h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Merchant,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and <strong className="text-foreground">ONE GLOBE (F.Z.E)</strong> (&ldquo;1-globe.com,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to and use of our website at 1-globe.com and any applications published by us on the Shopify App Store.
              </p>
              <p>
                By installing our applications on your Shopify store, you agree to be bound by these Terms. If you do not agree to these Terms, you may not install or use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                2. Shopify License &amp; Account Responsibility
              </h2>
              <p>
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our applications solely within your authorized Shopify store admin.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your Shopify store credentials and for all activities that occur under your store account.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                3. Ownership of Merchant Content &amp; Intellectual Property
              </h2>
              <p>
                <strong className="text-foreground">Your Content:</strong> You retain 100% ownership and all intellectual property rights in and to your product images, photography, catalog data, and store branding. By using our services, you grant us only the limited license necessary to process, compress, convert, and sync your images back to your store as requested.
              </p>
              <p>
                <strong className="text-foreground">Our Intellectual Property:</strong> 1-globe.com and its licensors retain all ownership, copyright, trademarks, and intellectual property rights in and to our applications, software, algorithms, and website design.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                4. Billing, Free Tiers &amp; Cancellation
              </h2>
              <p>
                <strong className="text-foreground">Shopify Billing:</strong> All fees for our applications are billed directly through Shopify&rsquo;s official Billing API and will appear on your regular Shopify merchant subscription invoice. We do not process or store credit card details directly.
              </p>
              <p>
                <strong className="text-foreground">Free Tiers &amp; Trials:</strong> Certain applications offer a free tier or free trial period. Upon reaching tier limits, you may choose to upgrade or remain on your current plan.
              </p>
              <p>
                <strong className="text-foreground">Cancellation &amp; Uninstallation:</strong> You may cancel your subscription or uninstall our applications at any time directly through your Shopify store admin. Cancellation takes effect immediately, and no future billing cycles will be incurred.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                5. Performance Claims &amp; Disclaimers
              </h2>
              <p>
                Our software is designed to compress catalog images, convert assets to WebP, and assist search engines with structured metadata. However, search engine algorithms (including Google Search, Google Images, and third-party AI models) depend on many factors beyond our control.
              </p>
              <p>
                All speed, Core Web Vitals, and search visibility claims are capability-based and represent technical benchmarks. We do not guarantee specific ranking positions, traffic volumes, or sales increases.
              </p>
              <p>
                THE APPLICATIONS AND SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                6. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL 1-globe.com, ITS DIRECTORS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR SERVICES.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                7. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of <strong className="text-foreground">Delaware, USA</strong>, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-6 border-t border-border">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                8. Contact Information
              </h2>
              <p>
                For any questions regarding these Terms of Service, please reach out to:
              </p>
              <div className="rounded-xl border border-border bg-card p-6 space-y-2 text-xs">
                <div>
                  <strong className="text-foreground block">Legal Entity:</strong>
                  <span>ONE GLOBE (F.Z.E)</span>
                </div>
                <div>
                  <strong className="text-foreground block">Registered Address:</strong>
                  <span>Ajman Free Zone C1 Building, Office C1 - 1F - SF3669, Ajman, UAE</span></div><div><strong className="text-foreground block mt-2">Commercial Registration No.:</strong><span>37795</span></div><div><strong className="text-foreground block mt-2">VAT TRN:</strong><span>104933863300003</span>
                </div>
                <div>
                  <strong className="text-foreground block">Legal Contact Email:</strong>
                  <a href="mailto:legal@1-globe.com" className="text-primary hover:underline">
                    legal@1-globe.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
