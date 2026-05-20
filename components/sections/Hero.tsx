'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { StatTile } from './StatTile'
import { site, ctaPrimary } from '@/config/site'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=2400&q=80'

const STATS = [
  { value: 60, suffix: '+', label: 'Years Experience' },
  { value: 4, suffix: '', label: 'Terminal Hubs' },
  { value: 4, suffix: '', label: 'Core Products' },
  { value: 24, suffix: '/7', label: 'Operations' },
] as const

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-label', { y: -20, opacity: 0, duration: 0.55 })
        .from('.hero-h1', { y: 52, opacity: 0, duration: 0.9 }, '-=0.35')
        .from('.hero-sub', { y: 36, opacity: 0, duration: 0.75 }, '-=0.55')
        .from('.hero-ctas', { y: 24, opacity: 0, duration: 0.65 }, '-=0.45')
        .from('.hero-stat', { y: 24, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.35')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col min-h-[100svh]"
      aria-label="Blue Gate — Petroleum Storage Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Rotterdam petroleum terminal at dusk — tank farms and vessel berths"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-page/84" aria-hidden="true" />
        {/* Crimson gradient accent — top-right corner */}
        <div
          className="absolute inset-0 bg-gradient-to-bl from-brand/[0.22] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl w-full px-6 flex flex-col justify-center flex-1 py-28 md:py-36">
        <p className="hero-label font-sans text-[11px] uppercase tracking-[0.14em] font-medium text-ink/50 mb-6">
          Bulk Liquid Storage&nbsp;·&nbsp;Est.&nbsp;{site.founded}&nbsp;·&nbsp;Rotterdam, NL
        </p>

        <h1
          className="hero-h1 font-serif font-normal text-ink leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
        >
          Petroleum Storage.
          <br />
          Engineered for{' '}
          <em className="text-brand">Reliability.</em>
        </h1>

        <p className="hero-sub font-sans text-lg md:text-xl text-ink/65 max-w-2xl leading-relaxed mb-10">
          {site.shortName} delivers secure, ISO-certified storage and integrated terminal services
          for Jet A1, EN590 Diesel, Virgin Fuel Oil D6, and Crude Oil from our Rotterdam hub.
        </p>

        <div className="hero-ctas flex flex-wrap gap-4 mb-20 md:mb-28">
          <Button
            asChild
            className="bg-brand text-primary-foreground hover:bg-brand-steel h-11 px-6 text-sm font-medium"
          >
            <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-ink/25 text-ink hover:bg-ink/[0.08] hover:border-ink/40 h-11 px-6 text-sm font-medium bg-transparent"
          >
            <Link href="/terminal">Explore Terminal</Link>
          </Button>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-ink/10"
          aria-label="Key statistics"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <StatTile value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
