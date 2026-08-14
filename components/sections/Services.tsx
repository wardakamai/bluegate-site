import Link from 'next/link';
import {
  Database,
  Anchor,
  ClipboardCheck,
  FlaskConical,
  Truck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlowCard } from '@/components/ui/GlowCard';

const SERVICE_CARDS = [
  {
    icon: Database,
    title: 'Oil Storage Services',
    description:
      'Fixed-roof, floating-roof, and heated tank storage for the full petroleum spectrum. Capacity from 5,000 to 80,000 m³.',
    href: '/services/oil-storage',
  },
  {
    icon: Anchor,
    title: 'Terminal Operations',
    description:
      'Full-service berth scheduling, pipeline throughput, metering, and loading arm management at Rotterdam.',
    href: '/services/oil-storage',
  },
  {
    icon: ClipboardCheck,
    title: 'Product Inspection',
    description:
      'Independent quantity and quality inspection at ship, shore, and tank. Custody transfer traceable to international standards.',
    href: '/services/product-inspection',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Testing',
    description:
      'On-site analytical laboratory testing against ASTM, EN, and ISO methods for every petroleum grade we handle.',
    href: '/services/laboratory',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description:
      'Road tanker, rail, coastal cargo, and ocean tanker coordination — from Rotterdam terminal gate to final destination.',
    href: '/services/shipping',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance & HSE',
    description:
      'Rigorous health, safety, and environmental controls applied across every link of the storage and throughput chain.',
    href: '/hse',
  },
] as const;

export function Services() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            What We Do
          </p>
          <h2
            className="text-ink mb-4 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            End-to-End Oil Storage <em className="text-brand">&amp; Trade Solutions.</em>
          </h2>
          <p className="text-muted-foreground mb-14 max-w-2xl font-sans text-base leading-relaxed">
            Six integrated capabilities, one operations team. Blue Gate manages your product from
            first inspection through to final delivery.
          </p>
        </ScrollReveal>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={i * 0.07}>
                <GlowCard className="group bg-bg flex h-full flex-col rounded-xl p-6">
                  <Link href={card.href} className="flex h-full flex-col outline-none">
                    <Icon
                      size={22}
                      className="text-brand group-hover:text-brand-steel mb-4 transition-colors"
                      aria-hidden="true"
                    />
                    <h3 className="text-ink group-hover:text-brand mb-2 font-sans text-base font-medium transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground flex-1 font-sans text-sm leading-relaxed">
                      {card.description}
                    </p>
                    <span className="text-brand mt-4 inline-flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight size={11} aria-hidden="true" />
                    </span>
                  </Link>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <Link
            href="/services"
            className="text-brand hover:text-brand-steel inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            View All Services →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
