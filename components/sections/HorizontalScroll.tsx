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

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const section = sectionRef.current
      const track   = trackRef.current
      if (!section || !track) return

      const cards      = gsap.utils.toArray<HTMLElement>('.h-card')
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
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-page md:overflow-hidden"
      aria-label="Products horizontal scroll"
    >
      {/* Header — static on mobile, absolute on desktop */}
      <div className="px-6 pt-14 pb-6 md:absolute md:left-0 md:top-0 md:z-10 md:pt-16 md:pb-0 md:px-12 lg:px-20">
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

      {/* Card track
          Mobile  → CSS horizontal scroll-snap, natural document flow
          Desktop → flex row, translated by GSAP */}
      <div
        ref={trackRef}
        data-hscroll-track
        className={[
          'flex items-stretch gap-4 md:gap-6',
          'overflow-x-auto md:overflow-visible',
          'pb-8 md:pb-0',
          'px-6 md:px-0',
          'md:h-screen md:items-center md:pt-28',
          'md:will-change-transform',
        ].join(' ')}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <style>{`
          [data-hscroll-track] {
            scrollbar-width: none;
          }
          [data-hscroll-track]::-webkit-scrollbar {
            display: none;
          }
          @media (min-width: 768px) {
            [data-hscroll-track] {
              width: max-content;
              padding-left: max(5rem, 10vw) !important;
              padding-right: 20vw !important;
            }
          }
        `}</style>

        {products.map((product, i) => (
          <div
            key={product.slug}
            className="h-card group relative flex flex-col justify-end overflow-hidden border border-border-soft flex-shrink-0"
            style={{
              width: 'min(340px, 80vw)',
              height: 'clamp(340px, 65vh, 600px)',
              scrollSnapAlign: 'start',
            }}
          >
            {/* Background image */}
            <div className="h-card-img absolute inset-0">
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 767px) 80vw, 420px"
              />
            </div>

            {/* Overlays */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, #0C0C0F 0%, rgba(12,12,15,0.75) 45%, rgba(12,12,15,0.20) 100%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 60% 40% at 0% 100%, rgba(208,0,24,0.14) 0%, transparent 70%)',
              }}
            />

            {/* Card content */}
            <div className="relative z-10 p-6 md:p-8">
              <span className="mb-3 inline-block border border-brand/30 bg-brand/[0.12] px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-brand">
                {product.category}
              </span>

              <h3
                className="mb-2 font-serif font-normal text-ink"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
              >
                {product.name}
              </h3>

              <p className="mb-4 font-sans text-sm leading-relaxed text-ink/55">
                {product.shortPositioning}
              </p>

              <div className="mb-5 grid grid-cols-2 gap-3 border-t border-ink/10 pt-4">
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

            <div className="absolute right-4 top-4 font-mono text-[11px] text-ink/20 md:right-6 md:top-6">
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}

        {/* Final CTA card */}
        <div className="h-card flex flex-col items-center justify-center gap-5 border border-border-soft bg-bg p-6 text-center flex-shrink-0"
          style={{ width: 'min(280px, 75vw)', height: 'clamp(340px, 65vh, 600px)', scrollSnapAlign: 'start' }}
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-ink/35">
            Full Product Range
          </p>
          <h3 className="font-serif text-xl md:text-2xl font-normal text-ink">
            Request Storage Allocation
          </h3>
          <Link
            href="/contact?intent=quote"
            className="mt-1 inline-flex items-center justify-center gap-2 bg-brand px-5 py-3 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-steel"
          >
            Request a Quote →
          </Link>
        </div>
      </div>

      {/* Swipe hint — mobile only */}
      <div className="flex items-center justify-end gap-2 px-6 pb-4 font-sans text-ink/30 md:hidden">
        <span className="text-[10px] uppercase tracking-widest">Swipe</span>
        <svg width="20" height="10" viewBox="0 0 24 12" fill="none"
          stroke="currentColor" strokeWidth="1" aria-hidden="true">
          <path d="M0 6h22M16 1l6 5-6 5" />
        </svg>
      </div>

      {/* Progress bar — desktop only */}
      <div className="absolute bottom-0 left-0 right-0 hidden h-px bg-ink/10 md:block">
        <div
          ref={progressRef}
          className="h-full bg-brand transition-none"
          style={{ width: '0%' }}
        />
      </div>

      {/* Scroll hint — desktop only */}
      <div className="absolute bottom-8 right-8 hidden items-center gap-3 font-sans text-ink/30 md:flex">
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none"
          stroke="currentColor" strokeWidth="1" aria-hidden="true">
          <path d="M0 6h22M16 1l6 5-6 5" />
        </svg>
      </div>
    </section>
  )
}
