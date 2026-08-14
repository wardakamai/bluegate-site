import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Narrative() {
  return (
    <section className="bg-page py-20 md:py-28" aria-label="Company narrative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* Pull-quote — sticky on large screens */}
          <ScrollReveal>
            <blockquote className="lg:sticky lg:top-32">
              <p
                className="text-brand font-serif leading-snug font-normal italic"
                style={{ fontSize: 'clamp(22px, 2.8vw, 38px)' }}
              >
                &ldquo;Petroleum logistics is a discipline of precision — in documentation, in
                timing, in communication.&rdquo;
              </p>
              <footer className="text-muted-foreground mt-6 font-sans text-[11px] font-medium tracking-[0.1em] uppercase">
                Blue Gate Tank Farm Operating Philosophy
              </footer>
            </blockquote>
          </ScrollReveal>

          {/* Body copy */}
          <ScrollReveal delay={0.15}>
            <div className="text-muted-foreground space-y-6 font-sans text-base leading-relaxed">
              <p>
                Blue Gate Tank Farm is the petroleum logistics and commercial support business
                operated by Blue Gate Shipping and Trade B.V., established in Rotterdam in 2025. We
                work with energy-sector clients handling Jet A1, EN590 Diesel, Virgin Fuel Oil D6
                and Crude Oil, coordinating the documentation, inspection and logistics requirements
                that surround each transaction.
              </p>
              <p>
                Our operating discipline is straightforward: every requirement documented to
                specification, every communication traceable, every step accountable to the
                applicable executed agreement. Service scope and contractual responsibilities are
                defined case by case, in line with the specific arrangement in place.
              </p>
              <p>
                As a newly established business, we are direct about what we are: a focused
                petroleum logistics and commercial support operation building its track record one
                engagement at a time, rather than an operation claiming a history it does not have.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
