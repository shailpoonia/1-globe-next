import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 1-globe.com',
  description: 'Privacy Policy for 1-globe.com and our Shopify applications. Fully compliant with Shopify App Store standards, GDPR, and CCPA.'
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <main className="flex-1 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Document Header */}
          <div className="mb-12 pb-8 border-b border-border">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground mb-3 border-b border-foreground pb-1">
              Legal &amp; Privacy Compliance
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: <span className="text-foreground font-medium">September 21, 2026</span>
            </p>
          </div>

          {/* Policy Content */}
          <div className="prose prose-invert max-w-none space-y-10 text-sm leading-relaxed text-muted-foreground">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                1. Overview &amp; Scope
              </h2>
              <p>
                This Privacy Policy describes how <strong className="text-foreground">ONE GLOBE (F.Z.E)</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and safeguards information when you visit our website at <strong className="text-foreground">1-globe.com</strong> or install and use any of our applications from the Shopify App Store, including 1-Optimiser.
              </p>
              <p>
                By installing our applications or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please uninstall the application and discontinue use of our services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                2. Information We Collect
              </h2>
              <p>
                When you install a 1-globe.com application on your Shopify store, we access certain store metadata authorized by you during the standard Shopify OAuth installation process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Shopify Store Details:</strong> Store name, primary email, myshopify.com domain, shop currency, and timezone to establish your account and communicate service updates.
                </li>
                <li>
                  <strong className="text-foreground">Catalog &amp; Image Assets:</strong> Product image URLs, filenames, dimensions, current file weights, alt text strings, and collection IDs needed solely to perform compression, WebP conversion, and AI metadata generation.
                </li>
                <li>
                  <strong className="text-foreground">Technical Log Data:</strong> API request timestamps, IP addresses, error traces, and processing statuses necessary for application reliability, rate limit compliance, and security monitoring.
                </li>
              </ul>
              <div className="p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl text-xs">
                <strong className="text-foreground font-bold block mb-1">What We Never Collect:</strong>
                <p className="text-slate-600 leading-relaxed">
                  We do not collect, process, or store your customers&rsquo; credit card numbers, payment credentials, or personal banking data. All billing transactions are managed directly and securely through Shopify&rsquo;s official Billing API.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                3. How We Use Your Information
              </h2>
              <p>
                We use the data collected strictly for the following operational purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To compress, convert, and crop product images as instructed by your admin preferences.</li>
                <li>To write optimized image assets and generated AI alt text back to your live Shopify store in-place.</li>
                <li>To provide customer support, diagnose technical issues, and respond to merchant inquiries.</li>
                <li>To comply with Shopify App Store development terms and international privacy regulations.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                4. AI Vision Processing &amp; Subprocessors
              </h2>
              <p>
                For automated alt text and filename generation, 1-Optimiser utilizes computer vision machine learning APIs to inspect visual features within product photography.
              </p>
              <p>
                Image pixels are processed ephemerally solely to produce descriptive text tags. We do not use your private product catalog or photography to train publicly available AI foundation models.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                5. Shopify Mandatory Webhooks &amp; Data Deletion
              </h2>
              <p>
                In strict adherence to Shopify App Store requirements, 1-globe.com implements all mandatory GDPR webhooks:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">customers/data_request</code> &mdash; If a customer requests their data from your store, Shopify forwards the request to us. Because our apps process catalog image metadata rather than customer PII, we confirm whether any relevant records exist.
                </li>
                <li>
                  <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">customers/redact</code> &mdash; If a customer requests erasure of their personal information, we remove any corresponding data if present.
                </li>
                <li>
                  <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">shop/redact</code> &mdash; Within 48 hours of receiving notification that you have uninstalled our app or closed your Shopify store, we purge all store tokens, API credentials, and cached asset records from our database.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                6. Data Retention &amp; Security
              </h2>
              <p>
                We implement industry-standard administrative, technical, and physical security measures, including TLS 1.3 encryption in transit and AES-256 encryption at rest.
              </p>
              <p>
                We retain original image backup copies only for as long as needed to provide you with a 1-click restore capability inside your Shopify admin, or until you request their deletion.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                7. Merchant Rights (GDPR &amp; CCPA)
              </h2>
              <p>
                Depending on your location, you may have the right to access, correct, port, or request deletion of personal information we hold about you. Because we process store data on your behalf, you may exercise these rights at any time by contacting us directly at our privacy email address below.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-6 border-t border-border">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                8. Contact &amp; Legal Entity Information
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy, please contact our designated privacy team:
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
                  <strong className="text-foreground block">Privacy &amp; Data Protection Officer Email:</strong>
                  <a href="mailto:privacy@1-globe.com" className="text-primary hover:underline">
                    privacy@1-globe.com
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
