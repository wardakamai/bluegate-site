import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Image from 'next/image';
import Link from 'next/link';
import { Droplets, ClipboardList, FlaskConical, Truck } from 'lucide-react';
import { GlowCard } from '@/components/ui/GlowCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FinalCta } from '@/components/sections/FinalCta';

export const metadata: Metadata = pageMeta({
  title: 'Oil Storage Services | Blue Gate Rotterdam Terminal',
  description:
    'Four specialist services: oil tank farm storage, petroleum product inspection, on-site laboratory testing, and multi-modal shipping from Rotterdam and Houston.',
  path: 'services',
});

const SERVICES = [
  {
    label: 'Storage',
    icon: Droplets,
    title: 'Oil Storage Services',
    body: 'Dedicated tank capacity for Jet A1, Diesel EN590, D6, and Crude Oil. Fixed-roof, floating-roof, and heated configurations from 1,000 to 80,000 m³. Throughput, in-line blending, and custody transfer included.',
    href: '/services/oil-storage',
    imageUrl: '/images/service-oil-storage.jpg',
    imageAlt: 'Blue Gate oil tank farm floating roof storage tank',
  },
  {
    label: 'Inspection',
    icon: ClipboardList,
    title: 'Product Inspection',
    body: 'Independent pre-loading, loading, and discharge inspections to ASTM D4057 and ISO 3170 protocols. Quantity surveys, sampling reports, Certificates of Quality and Quantity issued on every parcel.',
    href: '/services/product-inspection',
    imageUrl: '/images/service-inspection.jpg',
    imageAlt: 'Blue Gate petroleum product inspection at Rotterdam tank farm',
  },
  {
    label: 'Laboratory',
    icon: FlaskConical,
    title: 'Laboratory',
    body: 'On-site ASTM-grade testing facility covering distillation, flash point, sulphur content, density, viscosity, water & sediment, and nine further standard methods. Results issued same-day.',
    href: '/services/laboratory',
    imageUrl: '/images/service-laboratory.jpg',
    imageAlt: 'Blue Gate petroleum testing laboratory Rotterdam',
  },
  {
    label: 'Logistics',
    icon: Truck,
    title: 'Shipping Services',
    body: 'Multi-modal product movement from Rotterdam: ADR road tankers across Benelux and DACH, ISO tank rail across the European network, containerised cargo deep-sea and feeder, and full marine tanker logistics from VLCC to coastal.',
    href: '/services/shipping',
    imageUrl: '/images/service-shipping.jpg',
    imageAlt: 'Product tanker at Blue Gate Rotterdam marine terminal',
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
        aria-label="Services overview"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/service-oil-storage.jpg"
            alt="Blue Gate oil tank farm floating roof storage tank"
            fill
            quality={80}
            className="object-cover object-center"
            sizes="100vw"
            priority
            fetchPriority="high"
          />
          <div className="bg-page/88 absolute inset-0" aria-hidden="true" />
          <div
            className="from-brand/[0.10] absolute inset-0 bg-gradient-to-tr via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
              What We Do
            </p>
            <h1
              className="text-ink mb-6 font-serif leading-tight font-normal"
              style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
            >
              Four Disciplines. <em className="text-brand">One Operating Standard.</em>
            </h1>
            <p className="text-muted-foreground max-w-2xl font-sans text-base leading-relaxed md:text-lg">
              Storage, inspection, testing, and logistics — each discipline is independently
              rigorous and collectively connected, so product moves from receipt to delivery under a
              single chain of custody.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service cards — 2×2 editorial grid */}
      <section className="bg-page py-20 md:py-28" aria-label="Our services">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal key={svc.href} delay={i * 0.08}>
                  <GlowCard className="bg-bg h-full overflow-hidden rounded-xl">
                    <div className="flex h-full flex-col sm:flex-row">
                      {/* Visual column */}
                      <div className="relative h-40 shrink-0 overflow-hidden sm:h-auto sm:w-44">
                        <Image
                          src={svc.imageUrl}
                          alt={svc.imageAlt}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, 176px"
                        />
                        <div className="bg-page/60 absolute inset-0" aria-hidden="true" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon size={40} className="text-brand/70" aria-hidden="true" />
                        </div>
                      </div>

                      {/* Content column */}
                      <div className="flex flex-col p-6">
                        <span className="text-brand/60 mb-2 font-sans text-[10px] font-medium tracking-[0.12em] uppercase">
                          {svc.label}
                        </span>
                        <h2 className="text-ink mb-3 font-serif text-xl leading-snug font-normal">
                          {svc.title}
                        </h2>
                        <p className="text-muted-foreground mb-5 flex-1 font-sans text-sm leading-relaxed">
                          {svc.body}
                        </p>
                        <Link
                          href={svc.href}
                          className="text-brand hover:text-ink self-start font-sans text-sm font-medium transition-colors"
                          aria-label={`Explore ${svc.title}`}
                        >
                          Explore →
                        </Link>
                      </div>
                    </div>
                  </GlowCard>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Integrated chain narrative */}
          <ScrollReveal delay={0.15}>
            <div className="border-brand/[0.12] mt-16 max-w-3xl border-t pt-16">
              <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                One Integrated Chain
              </p>
              <p className="text-muted-foreground font-sans text-base leading-relaxed">
                Each of the four service lines is designed to hand off cleanly to the next. Product
                arrives at the terminal and enters storage under an independent inspection
                certificate. The laboratory confirms it meets grade before release. Shipping moves
                it to destination under the same custody chain. There are no gaps between
                disciplines, no handovers between companies, and no documentation that does not
                trace back to a single accountable operator.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FinalCta
        heading={
          <>
            Ready to Move <em className="text-brand">Product?</em>
          </>
        }
        subline="Tell us your grade, your volume, and your timeline. Our operations team will respond within one business day with a structured proposal."
        primaryCta={{ label: 'Request a Quote →', href: '/contact?intent=quote' }}
        secondaryCta={{ label: 'Explore Terminal', href: '/terminal' }}
      />
    </main>
  );
}
