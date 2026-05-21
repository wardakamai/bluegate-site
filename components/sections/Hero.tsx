'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const DURATION = 6000

const slides = [
  {
    id: 1,
    image: '/images/hero-home.jpg',
    fallbackGradient: 'linear-gradient(135deg, #0B1220 0%, #0E3A5F 50%, #1a0a0a 100%)',
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
    fallbackGradient: 'linear-gradient(135deg, #0E3A5F 0%, #0B1220 60%, #0E3A5F 100%)',
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
    fallbackGradient: 'linear-gradient(135deg, #1a0a0a 0%, #0B1220 50%, #0E3A5F 100%)',
    label: 'JET A1 · EN590 DIESEL · VIRGIN FUEL OIL D6 · CRUDE OIL',
    headlinePlain: 'Four Core Products.',
    headlineItalic: 'Tank Farm-Grade Storage.',
    subdeck:
      'Dedicated storage infrastructure for every product — specification-matched tanks, independent inspection, and on-site laboratory testing at every parcel intake and outturn.',
    primaryCta:   { label: 'View Products →',     href: '/products' },
    secondaryCta: { label: 'Download Spec Sheet', href: '/storage-facility' },
  },
]

export function Hero() {
  const [current, setCurrent]     = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(1)
  const [reducedMotion, setReducedMotion] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    if (mq.matches) setIsPlaying(false)
    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
      if (e.matches) setIsPlaying(false)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const goTo = useCallback((index: number, dir?: number) => {
    setDirection(dir ?? (index > current ? 1 : -1))
    setCurrent(index)
  }, [current])

  const next = useCallback(() => goTo((current + 1) % slides.length, 1), [current, goTo])
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
      scale:   reducedMotion ? 1 : 1.08,
      x:       reducedMotion ? 0 : (d > 0 ? 40 : -40),
    }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit:   (d: number) => ({
      opacity: 0,
      scale:   reducedMotion ? 1 : 0.96,
      x:       reducedMotion ? 0 : (d > 0 ? -40 : 40),
    }),
  }

  const contentVariants = {
    initial: { opacity: 0, y: reducedMotion ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: reducedMotion ? 0 : -16 },
  }

  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[1000px] w-full overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => !reducedMotion && setIsPlaying(true)}
      aria-label="Hero slideshow"
      aria-roledescription="carousel"
    >
      {/* ── Background layer ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`bg-${slide.id}`}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {/* Fallback gradient (shows while image loads) */}
          <div
            className="absolute inset-0"
            style={{ background: slide.fallbackGradient }}
          />

          <Image
            src={slide.image}
            alt=""
            fill
            priority={slide.id === 1}
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(11,18,32,0.50) 0%, rgba(11,18,32,0.25) 35%, rgba(11,18,32,0.80) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Slide content ── */}
      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-3xl"
            >
              {/* Label */}
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                {slide.label}
              </p>

              {/* H1 */}
              <h1
                className="mb-6 font-serif leading-[1.04]"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 5.2rem)' }}
              >
                <motion.span
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="block text-white"
                >
                  {slide.headlinePlain}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.35 }}
                  className="block italic"
                  style={{ color: 'var(--brand-gold)' }}
                >
                  {slide.headlineItalic}
                </motion.span>
              </h1>

              {/* Sub-deck */}
              <motion.p
                initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="mb-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
              >
                {slide.subdeck}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55 }}
                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              >
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 border px-7 py-3.5 text-sm font-medium transition-all duration-300"
                  style={{
                    borderColor: 'var(--brand-gold)',
                    backgroundColor: 'var(--brand-gold)',
                    color: 'var(--ink)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--brand-gold)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-gold)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--ink)'
                  }}
                >
                  {slide.primaryCta.label}
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 border border-white/35 bg-transparent px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/70 hover:bg-white/10"
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
            <span className="font-mono text-2xl font-light tabular-nums text-white">
              {String(current + 1).padStart(2, '0')}
            </span>
            <div className="h-px w-8 bg-white/25" />
            <span className="font-mono text-sm tabular-nums text-white/35">
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
                  className="group relative flex h-6 w-6 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span
                    className={cn(
                      'block rounded-full transition-all duration-300',
                      i === current ? 'h-2.5 w-2.5' : 'h-1.5 w-1.5 bg-white/30 group-hover:bg-white/55',
                    )}
                    style={i === current ? { backgroundColor: 'var(--brand-gold)' } : {}}
                  />
                  {i === current && isPlaying && !reducedMotion && (
                    <svg
                      className="absolute inset-0 -rotate-90"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12" cy="12" r="10"
                        fill="none"
                        stroke="rgba(184,137,59,0.25)"
                        strokeWidth="1.5"
                      />
                      <motion.circle
                        cx="12" cy="12" r="10"
                        fill="none"
                        stroke="var(--brand-gold)"
                        strokeWidth="1.5"
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

            {/* Prev / Next */}
            <div className="flex gap-1">
              {([
                {
                  label: 'Previous slide',
                  action: prev,
                  icon: <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />,
                },
                {
                  label: 'Next slide',
                  action: next,
                  icon: <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />,
                },
              ] as const).map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  aria-label={btn.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/50 transition-all duration-200 hover:border-white/55 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <svg
                    width="15" height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {btn.icon}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-px w-full bg-white/10">
          <motion.div
            className="h-full"
            style={{ backgroundColor: 'var(--brand-gold)' }}
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
          className="text-[10px] uppercase tracking-[0.22em] text-white/35"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-7 w-px bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
