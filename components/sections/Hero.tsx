'use client'

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const DURATION = 6000

// Stable helpers for useSyncExternalStore — defined outside component to avoid re-creation
function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
const getReducedMotionSnapshot = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const getReducedMotionServer   = () => false

const slides = [
  {
    id: 1,
    image: '/images/hero-home.jpg',
    fallbackGradient: 'linear-gradient(135deg, #0C0C0F 0%, #1a0608 60%, #0C0C0F 100%)',
    label: 'OIL TANK FARM · EST. 1964 · ROTTERDAM, NL',
    headlinePlain: 'Oil Tank Farm.',
    headlineItalic: 'Engineered for Reliability.',
    subdeck:
      'Blue Gate Shipping and Trade B.V. operates a Rotterdam oil tank farm with ISO-certified storage for Jet A1, EN590 Diesel, Virgin Fuel Oil D6, and Crude Oil from multiple origins.',
    primaryCta:   { label: 'Request a Quote →', href: '/contact?intent=quote' },
    secondaryCta: { label: 'Explore Terminal',  href: '/terminal' },
  },
  {
    id: 2,
    image: '/images/hero-terminal.jpg',
    fallbackGradient: 'linear-gradient(135deg, #0C0C0F 0%, #1a0608 60%, #0C0C0F 100%)',
    label: 'FOUR TERMINALS · ROTTERDAM · FUJAIRAH · HOUSTON · JURONG',
    headlinePlain: 'Four Global Terminals.',
    headlineItalic: 'One Operating Standard.',
    subdeck:
      "From our Rotterdam flagship to Fujairah, Houston, and Jurong — Blue Gate delivers 24/7 marine terminal access across the world's most critical energy corridors.",
    primaryCta:   { label: 'View Terminal Network →', href: '/terminal' },
    secondaryCta: { label: 'View Storage Facility',   href: '/storage-facility' },
  },
  {
    id: 3,
    image: '/images/hero-storage-facility.jpg',
    fallbackGradient: 'linear-gradient(135deg, #0C0C0F 0%, #1a0608 60%, #0C0C0F 100%)',
    label: 'JET A1 · EN590 DIESEL · VIRGIN FUEL OIL D6 · CRUDE OIL',
    headlinePlain: 'Four Core Products.',
    headlineItalic: 'Tank Farm-Grade Storage.',
    subdeck:
      'Dedicated storage infrastructure for every product — specification-matched tanks, independent inspection, and on-site laboratory testing at every parcel intake and outturn.',
    primaryCta:   { label: 'View Products →',      href: '/products' },
    secondaryCta: { label: 'View Storage Facility', href: '/storage-facility' },
  },
]

export function Hero() {
  const [current, setCurrent]       = useState(0)
  const [isPlayingUser, setIsPlaying] = useState(true)
  const [direction, setDirection]   = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServer,
  )
  const isPlaying = isPlayingUser && !reducedMotion

  const goTo = useCallback((index: number, dir?: number) => {
    setDirection(dir ?? (index > current ? 1 : -1))
    setCurrent(index)
  }, [current])

  const next = useCallback(() => goTo((current + 1) % slides.length, 1),  [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, -1), [current, goTo])

  useEffect(() => {
    if (!isPlaying) return
    intervalRef.current = setInterval(next, DURATION)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPlaying, next])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const slide = slides[current]

  const bgVariants = {
    enter:  (d: number) => ({
      opacity: 0,
      scale:   reducedMotion ? 1 : 1.06,
      x:       reducedMotion ? 0 : (d > 0 ? 30 : -30),
    }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit:   (d: number) => ({
      opacity: 0,
      scale:   reducedMotion ? 1 : 0.97,
      x:       reducedMotion ? 0 : (d > 0 ? -30 : 30),
    }),
  }

  const contentVariants = {
    initial: { opacity: 0, y: reducedMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: reducedMotion ? 0 : -12 },
  }

  return (
    <section
      className="relative h-screen min-h-[620px] max-h-[1000px] w-full overflow-hidden bg-page"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Hero slideshow"
      aria-roledescription="carousel"
    >
      {/* ── Background ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`bg-${slide.id}`}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {/* Fallback colour while image loads */}
          <div className="absolute inset-0" style={{ background: slide.fallbackGradient }} />

          <Image
            src={slide.image}
            alt=""
            fill
            priority={slide.id === 1}
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Layer 1 — uniform dark coat to desaturate/darken the photo */}
          <div className="absolute inset-0 bg-page/60" />

          {/* Layer 2 — left-side gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(12,12,15,0.85) 0%, rgba(12,12,15,0.55) 45%, rgba(12,12,15,0.10) 100%)',
            }}
          />

          {/* Layer 3 — bottom fade to exact page bg so hero bleeds seamlessly into site */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(12,12,15,0.70) 75%, #0C0C0F 100%)',
            }}
          />

          {/* Layer 4 — crimson radial glow bottom-left (matches site bg-grad pattern) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 50% 55% at 0% 100%, rgba(208,0,24,0.18) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Content ── */}
      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-4xl"
            >
              {/* Section label — matches rest of site */}
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-brand/70"
              >
                {slide.label}
              </motion.p>

              {/* H1 — bold serif, matches CLAUDE.md §4.2 scale */}
              <h1
                className="mb-7 font-serif font-normal leading-[0.98] tracking-tight"
                style={{ fontSize: 'clamp(3rem, 7.5vw, 6rem)' }}
              >
                <motion.span
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18 }}
                  className="block text-ink"
                >
                  {slide.headlinePlain}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.30 }}
                  className="block italic text-brand"
                >
                  {slide.headlineItalic}
                </motion.span>
              </h1>

              {/* Sub-deck */}
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.42 }}
                className="mb-10 max-w-xl font-sans text-base leading-relaxed text-ink/65 md:text-lg"
              >
                {slide.subdeck}
              </motion.p>

              {/* CTAs — matches Button usage throughout the site */}
              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.52 }}
                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              >
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page"
                  style={{ backgroundColor: 'var(--brand-red)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-steel)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-red)' }}
                >
                  {slide.primaryCta.label}
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center border border-ink/25 bg-transparent px-8 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:border-ink/50 hover:bg-ink/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/50"
                >
                  {slide.secondaryCta.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom controls ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-7 md:px-12 lg:px-20">

          {/* Slide counter */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl font-light tabular-nums text-ink/80">
              {String(current + 1).padStart(2, '0')}
            </span>
            <div className="h-px w-8 bg-ink/20" />
            <span className="font-mono text-sm tabular-nums text-ink/35">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="group relative flex h-6 w-6 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <span
                    className={cn(
                      'block rounded-full transition-all duration-300',
                      i === current
                        ? 'h-2.5 w-2.5 bg-brand'
                        : 'h-1.5 w-1.5 bg-ink/25 group-hover:bg-ink/50',
                    )}
                  />
                  {/* Progress ring on active dot */}
                  {i === current && isPlaying && !reducedMotion && (
                    <svg
                      className="absolute inset-0 -rotate-90"
                      width="24" height="24" viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" fill="none"
                        stroke="rgba(208,0,24,0.20)" strokeWidth="1.5" />
                      <motion.circle
                        cx="12" cy="12" r="10" fill="none"
                        stroke="var(--brand-red)" strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray={62.83}
                        strokeDashoffset={62.83}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: DURATION / 1000, ease: 'linear' }}
                        key={`ring-${current}-${isPlaying}`}
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Prev / Next arrows */}
            <div className="flex gap-1">
              {([
                { label: 'Previous slide', action: prev, d: 'M15 18l-6-6 6-6' },
                { label: 'Next slide',     action: next, d: 'M9 18l6-6-6-6' },
              ] as const).map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  aria-label={btn.label}
                  className="flex h-10 w-10 items-center justify-center border border-ink/20 text-ink/45 transition-all duration-200 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor"
                    strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={btn.d} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Crimson progress bar */}
        <div className="h-px w-full bg-ink/10">
          <motion.div
            className="h-full bg-brand"
            animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* ── Scroll cue (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-14 right-8 z-20 hidden flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <span
          className="font-sans text-[10px] uppercase tracking-[0.22em] text-ink/30"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-7 w-px bg-gradient-to-b from-ink/35 to-transparent"
        />
      </motion.div>
    </section>
  )
}
