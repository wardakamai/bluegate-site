'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface StatTileProps {
  value: number
  suffix: string
  label: string
  /** Kept for backward compat — ignored in dark theme (always renders on dark bg) */
  light?: boolean
}

export function StatTile({ value, suffix, label }: StatTileProps) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.registerPlugin(ScrollTrigger)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setDisplay(value)
      return
    }

    const ctx = gsap.context(() => {
      const counter = { val: 0 }
      gsap.to(counter, {
        val: value,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => setDisplay(Math.round(counter.val)),
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [value])

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <p className="font-mono text-4xl md:text-5xl font-medium tabular-nums leading-none text-ink">
        {display}
        {suffix}
      </p>
      <p className="text-[11px] uppercase tracking-[0.08em] font-sans font-medium text-muted-foreground">
        {label}
      </p>
    </div>
  )
}
