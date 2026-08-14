import { ScrollReveal } from '@/components/ui/ScrollReveal';

const PRINCIPLES = [
  'Preference for partners and facilities with sound safety and environmental practices',
  'Efficient coordination that minimises unnecessary movements and delays',
  'Paperless documentation wherever the counterparty and process allow it',
  'Support for regional contractors and SME service providers where practical',
];

export function Community() {
  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label="Our principles">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Our Principles
          </p>
          <h2
            className="text-ink mb-12 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Rooted in <em className="text-brand">Rotterdam.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — narrative */}
          <ScrollReveal>
            <div className="text-muted-foreground space-y-5 font-sans text-base leading-relaxed">
              <p>
                Blue Gate Tank Farm is based in Rotterdam, a working port with a long history in
                energy logistics. As a newly established business, we are building our practices
                around a straightforward principle: work responsibly, and work with partners who do
                the same.
              </p>
              <p>
                We prioritise coordinating with terminals, service providers and counterparties that
                maintain sound safety and environmental standards, and we aim to keep our own
                documentation and communication practices efficient and paperless wherever possible.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — principles */}
          <ScrollReveal delay={0.1}>
            <div className="border-brand/[0.14] bg-bg rounded-xl border p-7">
              <p className="text-brand/70 mb-5 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                What We Prioritise
              </p>
              <ul className="space-y-4">
                {PRINCIPLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="bg-brand mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                    <span className="text-muted-foreground font-sans text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
