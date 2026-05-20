import { BadgeCheck } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

// TODO: confirm with client — actual certifications and memberships held
const CERTS = [
  'ISO 9001',
  'ISO 14001',
  'ISO 45001',
  'OCIMF / SIRE',
  'ISGOTT',
  'FETSA',
] as const

export function Certifications() {
  return (
    <section className="bg-brand/[0.06] py-14" aria-label="Certifications and memberships">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-8 text-center">
            Certifications &amp; Memberships
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {CERTS.map((cert) => (
              <div key={cert} className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-brand/55 shrink-0" aria-hidden="true" />
                <span className="font-mono text-sm font-medium text-ink/80">{cert}</span>
              </div>
            ))}
          </div>

          {/* TODO: confirm with client — certifications listed are indicative only */}
          <p className="font-sans text-[10px] text-muted-foreground text-center mt-8 max-w-lg mx-auto">
            Certifications listed are indicative and subject to confirmation with client before
            publication. Contact{' '}
            <span className="font-mono">storage@bluegou.com</span> to verify current accreditations.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
