import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

const STEPS = [
  'Select the petroleum product.',
  'Provide the required quantity.',
  'Select the preferred port or market.',
  'Provide the requested start date.',
  'Provide the storage duration.',
  'Include vessel or delivery information where applicable.',
  'Submit the requirement for commercial and operational review.',
];

export function SubmissionSteps() {
  return (
    <section
      className="bg-page py-20 md:py-28"
      aria-label="How to submit a tank farm storage requirement"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Storage Requirement Process
          </p>
          <h2
            className="text-ink mb-6 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            How to Submit a <em className="text-brand">Tank Farm Storage Requirement.</em>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl font-sans text-base leading-relaxed">
            Submitting a requirement does not guarantee acceptance, capacity, documentation or
            availability — it starts a commercial and operational review by our team.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <ol className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li
                key={step}
                className="border-brand/[0.14] bg-bg flex flex-col gap-3 rounded-xl border p-6"
              >
                <span className="text-brand font-mono text-2xl font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-ink/70 font-sans text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Button
            asChild
            className="bg-brand text-primary-foreground hover:bg-brand-steel h-11 px-7 text-sm font-medium"
          >
            <Link href="/contact?intent=quote">Submit Storage Requirement →</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
