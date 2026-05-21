import Link from 'next/link'
import {
  Database,
  Anchor,
  ClipboardCheck,
  FlaskConical,
  Truck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

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
] as const

export function Services() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            What We Do
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            End-to-End Oil Storage <em className="text-brand">&amp; Trade Solutions.</em>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-14 text-base leading-relaxed">
            Six integrated capabilities, one operations team. Blue Gate manages your product
            from first inspection through to final delivery.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICE_CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.title} delay={i * 0.07}>
                <GlowCard className="group rounded-xl bg-bg p-6 h-full flex flex-col">
                  <Link href={card.href} className="flex flex-col h-full outline-none">
                    <Icon
                      size={22}
                      className="text-brand mb-4 group-hover:text-brand-steel transition-colors"
                      aria-hidden="true"
                    />
                    <h3 className="font-sans font-medium text-ink text-base mb-2 group-hover:text-brand transition-colors">
                      {card.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                      {card.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={11} aria-hidden="true" />
                    </span>
                  </Link>
                </GlowCard>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-steel transition-colors"
          >
            View All Services →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
