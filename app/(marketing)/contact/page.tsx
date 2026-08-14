import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';
import { Mail, Phone, MessageCircle, Clock, AlertTriangle, MapPin } from 'lucide-react';
import { pageMeta } from '@/lib/meta';
import { contactPageSchema } from '@/lib/schema';
import { site } from '@/config/site';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapEmbed } from '@/components/sections/MapEmbed';

export const metadata: Metadata = pageMeta({
  title: 'Contact Blue Gate Tank Farm | Rotterdam',
  description:
    'Contact Blue Gate Tank Farm for petroleum logistics, storage access and commercial support enquiries. Based in Rotterdam, responding within 24 hours.',
  path: 'contact',
});

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
              <p className="text-brand mb-4 font-mono text-[11px] tracking-[0.08em] uppercase">
                CONTACT
              </p>
              <h1
                id="contact-heading"
                className="text-ink font-serif text-4xl leading-tight font-normal tracking-tight sm:text-5xl lg:text-6xl"
              >
                Speak to the <em className="text-brand">Operations Desk.</em>
              </h1>
              <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed">
                Our operations team responds within 24 hours. For storage allocation, tariff
                enquiries, site visits, and product availability — fill in the form and we&apos;ll
                route your message to the right desk.
              </p>

              <div className="mt-10">
                <Suspense
                  fallback={
                    <div className="space-y-4">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-bg h-10 animate-pulse rounded-lg" />
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
              <p className="text-brand mb-7 font-mono text-[11px] tracking-[0.08em] uppercase">
                DETAILS
              </p>

              <div className="space-y-7">
                {/* Operations */}
                <ContactBlock label="Operations">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-ink hover:text-brand flex items-center gap-2.5 text-sm transition-colors"
                  >
                    <Mail className="text-brand size-4 shrink-0" aria-hidden />
                    {site.contact.email}
                  </a>
                  <a
                    href={site.contact.phoneLink}
                    className="text-ink hover:text-brand flex items-center gap-2.5 text-sm transition-colors"
                  >
                    <Phone className="text-brand size-4 shrink-0" aria-hidden />
                    {site.contact.phone}
                  </a>
                </ContactBlock>

                {/* Shipping */}
                <ContactBlock label="Shipping">
                  <a
                    href={`mailto:${site.contact.emailShipping}`}
                    className="text-ink hover:text-brand flex items-center gap-2.5 text-sm transition-colors"
                  >
                    <Mail className="text-brand size-4 shrink-0" aria-hidden />
                    {site.contact.emailShipping}
                  </a>
                </ContactBlock>

                {/* TODO: confirm with client — HSE dedicated email address */}
                {/* TODO: confirm with client — Inspection / Laboratory dedicated email */}

                <ContactBlock label="Office Hours">
                  <p className="text-muted-foreground flex items-center gap-2.5 text-sm">
                    <Clock className="text-brand size-4 shrink-0" aria-hidden />
                    Monday – Friday, 08:00 – 18:00 CET
                  </p>
                </ContactBlock>

                <ContactBlock label="Emergency 24/7">
                  <a
                    href={site.contact.phoneLink}
                    className="text-ink hover:text-brand flex items-center gap-2.5 text-sm transition-colors"
                  >
                    <AlertTriangle className="text-alert size-4 shrink-0" aria-hidden />
                    {site.contact.phone}
                  </a>
                </ContactBlock>

                <ContactBlock label="WhatsApp">
                  <a
                    href={site.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-brand flex items-center gap-2.5 text-sm transition-colors"
                  >
                    <MessageCircle className="text-ok size-4 shrink-0" aria-hidden />
                    Message us on WhatsApp →
                  </a>
                </ContactBlock>

                <ContactBlock label="Address">
                  <address className="text-muted-foreground flex items-start gap-2.5 text-sm leading-relaxed not-italic">
                    <MapPin className="text-brand mt-0.5 size-4 shrink-0" aria-hidden />
                    <span>
                      {site.address.street}
                      <br />
                      {site.address.postcode} {site.address.city}
                      <br />
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
  );
}

function ContactBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-brand/30 space-y-2 border-l-2 pl-4">
      <p className="text-muted-foreground font-mono text-[10px] tracking-[0.08em] uppercase">
        {label}
      </p>
      {children}
    </div>
  );
}
