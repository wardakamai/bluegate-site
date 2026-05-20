import Link from 'next/link'
import { FlaskConical } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function InspectionNote() {
  return (
    <section className="bg-brand/[0.05] py-12 md:py-16" aria-label="Inspection and laboratory note">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-start gap-5 max-w-3xl">
            <div className="w-10 h-10 rounded-lg bg-brand/[0.10] border border-brand/20 flex items-center justify-center shrink-0 mt-1">
              <FlaskConical size={20} className="text-brand" aria-hidden="true" />
            </div>
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-2">
                Quality Assurance
              </p>
              <p className="font-sans text-base text-ink/75 leading-relaxed">
                Every parcel of this product is independently inspected at the point of receipt and
                prior to discharge, conforming to our standard{' '}
                <Link href="/services/product-inspection" className="text-brand hover:text-brand-steel underline-offset-3 hover:underline transition-colors">
                  Product Inspection
                </Link>{' '}
                protocol. Representative samples are retained and tested by our on-site{' '}
                <Link href="/services/laboratory" className="text-brand hover:text-brand-steel underline-offset-3 hover:underline transition-colors">
                  Laboratory
                </Link>{' '}
                against the applicable specification. Third-party surveyor access is available on
                request for custody-transfer parcels.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
