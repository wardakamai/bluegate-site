import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import { Mail, Phone, MessageCircle, Clock, AlertTriangle, MapPin } from 'lucide-react'
import { pageMeta } from '@/lib/meta'
import { contactPageSchema } from '@/lib/schema'
import { site } from '@/config/site'
import { ContactForm } from '@/components/forms/ContactForm'
import { MapEmbed } from '@/components/sections/MapEmbed'

export const metadata: Metadata = pageMeta({
  title: 'Contact | Crude Oil Tank Farm Houston & Rotterdam',
  description:
    'Contact Blue Gate for crude oil tank farm Houston and Rotterdam enquiries. Storage allocation, tank leasing rates, petroleum inspection and vessel scheduling.',
  path: 'contact',
})

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema()) }}
      />
    <div className="bg-page min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr]">

          {/* ── Left column: heading + form ───────────────────────── */}
          <section>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-brand">
              CONTACT
            </p>
            <h1
              id="contact-heading"
              className="font-serif text-4xl font-normal leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Speak to the{' '}
              <em className="text-brand">Operations Desk.</em>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground leading-relaxed">
              Our operations team responds within 24 hours. For storage allocation, tariff
              enquiries, site visits, and product availability — fill in the form and we&apos;ll route
              your message to the right desk.
            </p>

            <div className="mt-10">
              <Suspense
                fallback={
                  <div className="space-y-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-10 animate-pulse rounded-lg bg-bg" />
                    ))}
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </section>

          {/* ── Right column: contact details + map ───────────────── */}
          <aside>
            <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.08em] text-brand">
              DETAILS
            </p>

            <div className="space-y-7">
              {/* Operations */}
              <ContactBlock label="Operations">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-ink hover:text-brand transition-colors"
                >
                  <Mail className="size-4 shrink-0 text-brand" aria-hidden />
                  {site.contact.email}
                </a>
                <a
                  href={site.contact.phoneLink}
                  className="flex items-center gap-2.5 text-sm text-ink hover:text-brand transition-colors"
                >
                  <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                  {site.contact.phone}
                </a>
              </ContactBlock>

              {/* Shipping */}
              <ContactBlock label="Shipping">
                <a
                  href={`mailto:${site.contact.emailShipping}`}
                  className="flex items-center gap-2.5 text-sm text-ink hover:text-brand transition-colors"
                >
                  <Mail className="size-4 shrink-0 text-brand" aria-hidden />
                  {site.contact.emailShipping}
                </a>
              </ContactBlock>

              {/* TODO: confirm with client — HSE dedicated email address */}
              {/* TODO: confirm with client — Inspection / Laboratory dedicated email */}

              <ContactBlock label="Office Hours">
                <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Clock className="size-4 shrink-0 text-brand" aria-hidden />
                  Monday – Friday, 08:00 – 18:00 CET
                </p>
              </ContactBlock>

              <ContactBlock label="Emergency 24/7">
                <a
                  href={site.contact.phoneLink}
                  className="flex items-center gap-2.5 text-sm text-ink hover:text-brand transition-colors"
                >
                  <AlertTriangle className="size-4 shrink-0 text-alert" aria-hidden />
                  {site.contact.phone}
                </a>
              </ContactBlock>

              <ContactBlock label="WhatsApp">
                <a
                  href={site.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-ink hover:text-brand transition-colors"
                >
                  <MessageCircle className="size-4 shrink-0 text-ok" aria-hidden />
                  Message us on WhatsApp →
                </a>
              </ContactBlock>

              <ContactBlock label="Address">
                <address className="not-italic flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  <span>
                    {site.address.street}<br />
                    {site.address.postcode} {site.address.city}<br />
                    {site.address.country}
                  </span>
                </address>
              </ContactBlock>
            </div>

            <div className="mt-8">
              <MapEmbed />
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  )
}

function ContactBlock({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2 border-l-2 border-brand/30 pl-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
        {label}
      </p>
      {children}
    </div>
  )
}
