import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/shared/Section'

export const metadata: Metadata = {
  title: 'Contact | 1-GLOBE',
  description: 'Reach out to the 1-GLOBE team for support or inquiries regarding our ecommerce performance tools.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-24">
      <main className="flex-1">
        <Section className="section-spacing bg-background border-b border-border">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Copy */}
            <div>
              <span className="text-eyebrow block mb-6">Contact</span>
              <h1 className="text-hero mb-6">
                Talk to <span className="text-primary italic">us</span>.
              </h1>
              <p className="text-lead max-w-md mb-10">
                Questions, feedback, or need a hand? We usually reply within one business day.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">Support & Inquiries</h3>
                  <a href="mailto:support@1-globe.com" className="text-primary hover:underline text-lg font-medium">
                    support@1-globe.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form 
                className="bg-card border border-border p-8 flex flex-col gap-6 rounded-[var(--radius)]" 
                action="mailto:support@1-globe.com"
                method="POST"
                encType="text/plain"
              >
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="h-12 px-4 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary text-foreground rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="h-12 px-4 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary text-foreground rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-foreground">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    className="p-4 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary text-foreground resize-none rounded-md"
                  />
                </div>

                <button 
                  type="submit"
                  className="interactive-btn h-14 font-bold text-sm uppercase tracking-[0.14em] bg-foreground text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </Section>
      </main>
    </div>
  )
}
