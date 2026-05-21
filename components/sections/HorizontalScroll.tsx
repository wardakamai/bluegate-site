'use client'

import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger, EASE, DUR } from '@/lib/gsap'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/config/products'

export function HorizontalScroll() {
  const sectionRef  = useRef<HTMLElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    const section = sectionRef.current
    const track   = trackRef.current
    const cards   = gsap.utils.toArray<HTMLElement>('.h-card')

    const totalWidth = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth + window.innerHeight * 0.5}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`
            }
          },
        },
      })

      tl.to(track, { x: () => -totalWidth, ease: 'none' })

      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: DUR.slow,
          ease: EASE.smooth,
          delay: i * 0.08,
          scrollTrigger: {
            trigger: card,
            containerAnimation: tl,
            start: 'left 85%',
            toggleActions: 'play none none reverse',
          },
        })

        const img = card.querySelector('.h-card-img')
        if (img) {
          gsap.to(img, {
            x: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          })
        }
      })
    }, section)

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      ctx.revert()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-page will-change-transform"
      aria-label="Products horizontal scroll"
    >
      {/* Fixed header */}
      <div className="absolute left-0 top-0 z-10 px-6 pt-16 md:px-12 lg:px-20">
        <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.14em] font-medium text-brand/70">
          Our Products
        </p>
        <h2
          className="font-serif font-normal text-ink leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Four Core Products.{' '}
          <em className="italic text-brand">Tank Farm-Grade Storage.</em>
        </h2>
      </div>

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex h-screen items-center gap-6 pt-28"
        style={{
          width: 'max-content',
          paddingLeft: 'max(5rem, 10vw)',
          paddingRight: '20vw',
        }}
      >
        {products.map((product, i) => (
          <div
            key={product.slug}
            className="h-card group relative flex h-[65vh] w-[min(420px,85vw)] flex-shrink-0 flex-col justify-end overflow-hidden border border-border-soft"
          >
            {/* Background image with parallax target */}
            <div className="h-card-img absolute inset-0">
              <Image
                src={`/images/product-${product.slug}.jpg`}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="420px"
              />
            </div>

            {/* Dark overlay — matches site dark-to-transparent gradient style */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, #0C0C0F 0%, rgba(12,12,15,0.75) 45%, rgba(12,12,15,0.20) 100%)',
              }}
            />
            {/* Crimson glow bottom-left */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 60% 40% at 0% 100%, rgba(208,0,24,0.14) 0%, transparent 70%)',
              }}
            />

            {/* Card content */}
            <div className="relative z-10 p-8">
              <span className="mb-3 inline-block border border-brand/30 bg-brand/[0.12] px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-brand">
                {product.category}
              </span>

              <h3
                className="mb-2 font-serif font-normal text-ink"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)' }}
              >
                {product.name}
              </h3>

              <p className="mb-6 font-sans text-sm leading-relaxed text-ink/55">
                {product.shortPositioning}
              </p>

              <div className="mb-6 grid grid-cols-2 gap-3 border-t border-ink/10 pt-5">
                {product.atAGlance.slice(0, 2).map((spec) => (
                  <div key={spec.label}>
                    <p className="font-sans text-[10px] uppercase tracking-wider text-ink/35">
                      {spec.label}
                    </p>
                    <p className="font-mono text-sm text-ink/75">{spec.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink transition-colors duration-200 hover:text-brand"
              >
                View Spec Sheet
                <svg width="14" height="14" fill="none" stroke="currentColor"
                  strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="absolute right-6 top-6 font-mono text-[11px] text-ink/20">
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}

        {/* Final CTA card */}
        <div className="h-card flex h-[65vh] w-[min(320px,75vw)] flex-shrink-0 flex-col items-center justify-center gap-6 border border-border-soft bg-bg p-8 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-ink/35">
            Full Product Range
          </p>
          <h3 className="font-serif text-2xl font-normal text-ink">
            Request Storage Allocation
          </h3>
          <Link
            href="/contact?intent=quote"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-brand px-6 py-3 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-steel"
          >
            Request a Quote →
          </Link>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-ink/10">
        <div
          ref={progressRef}
          className="h-full bg-brand transition-none"
          style={{ width: '0%' }}
        />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 flex items-center gap-3 font-sans text-ink/30">
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none"
          stroke="currentColor" strokeWidth="1" aria-hidden="true">
          <path d="M0 6h22M16 1l6 5-6 5" />
        </svg>
      </div>
    </section>
  )
}
