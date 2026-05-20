import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function Narrative() {
  return (
    <section className="bg-page py-20 md:py-28" aria-label="Company narrative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 lg:gap-20">
          {/* Pull-quote — sticky on large screens */}
          <ScrollReveal>
            <blockquote className="lg:sticky lg:top-32">
              <p
                className="font-serif italic font-normal text-brand leading-snug"
                style={{ fontSize: 'clamp(22px, 2.8vw, 38px)' }}
              >
                &ldquo;Storage is the discipline of doing one thing — keeping product in spec —
                for decades on end.&rdquo;
              </p>
              <footer className="mt-6 font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground font-medium">
                Blue Gate Operating Philosophy
              </footer>
            </blockquote>
          </ScrollReveal>

          {/* Body copy */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed">
              <p>
                Founded in Rotterdam in 1964, Blue Gate has grown from a single-terminal operation
                to a multi-hub storage and throughput business spanning three continents. Our
                foundations were laid in an era when petroleum logistics demanded absolute
                precision: contamination meant product loss, and product loss meant client trust —
                once lost, rarely recovered.
              </p>
              <p>
                The tanks have changed. Floating roofs replaced fixed covers where vapour control
                demanded it. Heated coils were installed for high-viscosity grades. Nitrogen
                blanketing became standard on the most sensitive aviation-grade storage. Through
                each technical evolution, the constant has been our operating discipline: every
                tank prepared to specification, every batch documented to international standard.
              </p>
              <p>
                Today, Blue Gate operates at the intersection of bulk liquid storage and global
                commodity trade. We handle four major petroleum grades — Jet A1, EN590 Diesel,
                Virgin Fuel Oil D6, and Crude Oil — in dedicated tank configurations sized from
                5,000 to 80,000 m³. Our Rotterdam primary terminal connects directly to the ARA
                pipeline grid, Rhine inland waterways, and deep-water berths capable of receiving
                VLCC-class tankers.
              </p>
              <p>
                In commodity markets where execution risk determines profitability, storage is
                rarely the headline. But storage done wrong is where margins disappear — in
                off-spec product, failed custody transfers, and regulatory non-compliance. Storage
                done well is invisible: the product arrives on schedule, in spec, with full
                documentation. That invisibility is what Blue Gate has delivered for six decades.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
