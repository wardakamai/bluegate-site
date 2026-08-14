import Link from 'next/link';
import { FlaskConical } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function InspectionNote() {
  return (
    <section className="bg-brand/[0.05] py-12 md:py-16" aria-label="Inspection and laboratory note">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex max-w-3xl items-start gap-5">
            <div className="bg-brand/[0.10] border-brand/20 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
              <FlaskConical size={20} className="text-brand" aria-hidden="true" />
            </div>
            <div>
              <p className="text-brand/70 mb-2 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                Quality Assurance
              </p>
              <p className="text-ink/75 font-sans text-base leading-relaxed">
                Every parcel of this product is independently inspected at the point of receipt and
                prior to discharge, conforming to our standard{' '}
                <Link
                  href="/services/product-inspection"
                  className="text-brand hover:text-brand-steel underline-offset-3 transition-colors hover:underline"
                >
                  Product Inspection
                </Link>{' '}
                protocol. Representative samples are retained and tested by our on-site{' '}
                <Link
                  href="/services/laboratory"
                  className="text-brand hover:text-brand-steel underline-offset-3 transition-colors hover:underline"
                >
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
  );
}
