import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Droplets, ClipboardList, FlaskConical, Truck } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FinalCta } from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  title: 'Services — Blue Gate Shipping & Trade',
  description:
    'Four specialist disciplines — bulk liquid storage, product inspection, on-site laboratory testing, and multi-modal shipping — delivered as one integrated chain.',
}

const SERVICES = [
  {
    label: 'Storage',
    icon: Droplets,
    title: 'Oil Storage Services',
    body: 'Dedicated tank capacity for Jet A1, Diesel EN590, D6, and Crude Oil. Fixed-roof, floating-roof, and heated configurations from 1,000 to 80,000 m³. Throughput, in-line blending, and custody transfer included.',
    href: '/services/oil-storage',
    imageUrl:
      'https://images.unsplash.com/photo-1581093803537-1e54f5a78ad4?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Bulk liquid storage tanks at a petroleum terminal',
  },
  {
    label: 'Inspection',
    icon: ClipboardList,
    title: 'Product Inspection',
    body: 'Independent pre-loading, loading, and discharge inspections to ASTM D4057 and ISO 3170 protocols. Quantity surveys, sampling reports, Certificates of Quality and Quantity issued on every parcel.',
    href: '/services/product-inspection',
    imageUrl:
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Inspector conducting petroleum product sampling at a terminal',
  },
  {
    label: 'Laboratory',
    icon: FlaskConical,
    title: 'Laboratory',
    body: 'On-site ASTM-grade testing facility covering distillation, flash point, sulphur content, density, viscosity, water & sediment, and nine further standard methods. Results issued same-day.',
    href: '/services/laboratory',
    imageUrl:
      'https://images.unsplash.com/photo-1581093803537-1e54f5a78ad4?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Petroleum laboratory testing equipment',
  },
  {
    label: 'Logistics',
    icon: Truck,
    title: 'Shipping Services',
    body: 'Multi-modal product movement from Rotterdam: ADR road tankers across Benelux and DACH, ISO tank rail across the European network, containerised cargo deep-sea and feeder, and full marine tanker logistics from VLCC to coastal.',
    href: '/services/shipping',
    imageUrl:
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=70',
    imageAlt: 'Shipping operations at Rotterdam port',
  },
] as const

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
        aria-label="Services overview"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1581093803537-1e54f5a78ad4?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            quality={80}
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-page/88" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-brand/[0.10] via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              What We Do
            </p>
            <h1
              className="font-serif font-normal text-ink leading-tight mb-6"
              style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
            >
              Four Disciplines.{' '}
              <em className="text-brand">One Operating Standard.</em>
            </h1>
            <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Storage, inspection, testing, and logistics — each discipline is independently
              rigorous and collectively connected, so product moves from receipt to delivery
              under a single chain of custody.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service cards — 2×2 editorial grid */}
      <section className="bg-page py-20 md:py-28" aria-label="Our services">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon
              return (
                <ScrollReveal key={svc.href} delay={i * 0.08}>
                  <GlowCard className="rounded-xl bg-bg overflow-hidden h-full">
                    <div className="flex flex-col sm:flex-row h-full">
                      {/* Visual column */}
                      <div className="relative sm:w-44 h-40 sm:h-auto shrink-0 overflow-hidden">
                        <Image
                          src={svc.imageUrl}
                          alt={svc.imageAlt}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, 176px"
                        />
                        <div className="absolute inset-0 bg-page/60" aria-hidden="true" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon size={40} className="text-brand/70" aria-hidden="true" />
                        </div>
                      </div>

                      {/* Content column */}
                      <div className="p-6 flex flex-col">
                        <span className="font-sans text-[10px] uppercase tracking-[0.12em] font-medium text-brand/60 mb-2">
                          {svc.label}
                        </span>
                        <h2 className="font-serif text-xl font-normal text-ink mb-3 leading-snug">
                          {svc.title}
                        </h2>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                          {svc.body}
                        </p>
                        <Link
                          href={svc.href}
                          className="font-sans text-sm font-medium text-brand hover:text-ink transition-colors self-start"
                          aria-label={`Explore ${svc.title}`}
                        >
                          Explore →
                        </Link>
                      </div>
                    </div>
                  </GlowCard>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Integrated chain narrative */}
          <ScrollReveal delay={0.15}>
            <div className="mt-16 pt-16 border-t border-brand/[0.12] max-w-3xl">
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
                One Integrated Chain
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Each of the four service lines is designed to hand off cleanly to the next.
                Product arrives at the terminal and enters storage under an independent
                inspection certificate. The laboratory confirms it meets grade before release.
                Shipping moves it to destination under the same custody chain. There are no
                gaps between disciplines, no handovers between companies, and no documentation
                that does not trace back to a single accountable operator.
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
  )
}
