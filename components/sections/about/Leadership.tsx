import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Leadership() {
  return (
    <section className="bg-page py-20 md:py-28" aria-label="Our team">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Our Team
          </p>
          <h2
            className="text-ink mb-4 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            The People Behind <em className="text-brand">Blue Gate Tank Farm.</em>
          </h2>
          <p className="text-muted-foreground max-w-2xl font-sans text-base leading-relaxed">
            Blue Gate Tank Farm is run by a small, focused commercial and operations team based in
            Rotterdam. Team profiles will be published here as they are confirmed. In the meantime,
            you can reach our team directly through the contact page for any enquiry.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
