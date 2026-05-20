'use client'

// TODO: confirm with client — LTIF, spill count, audit frequency, toolbox talk cadence

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface MetricTile {
  value: string
  label: string
  sublabel: string
  animateFrom?: number
}

const METRICS: MetricTile[] = [
  {
    value: '0.00',
    label: 'LTIF',
    sublabel: 'Lost Time Injury Frequency per million hours worked',
    animateFrom: 0,
  },
  {
    value: '0',
    label: 'Spills',
    sublabel: 'Uncontrolled releases to environment in last 12 months',
    animateFrom: 0,
  },
  {
    value: '12',
    label: 'HSE Audits / Year',
    sublabel: 'Internal and third-party audits across all operational areas',
    animateFrom: 12,
  },
  {
    value: 'Weekly',
    label: 'Toolbox Talks',
    sublabel: 'Mandatory pre-shift safety briefings, all operational staff',
  },
]

function AnimatedNumber({
  from,
  to,
  display,
}: {
  from: number
  to: string
  display: string
}) {
  const [shown, setShown] = useState(display === '0.00' || display === '0' ? display : display)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (isNaN(Number(display))) return // non-numeric like 'Weekly'

    gsap.registerPlugin(ScrollTrigger)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const counter = { val: from }
    const isDecimal = display.includes('.')
    gsap.to(counter, {
      val: Number(display),
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => {
        setShown(isDecimal ? counter.val.toFixed(2) : String(Math.round(counter.val)))
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
    })
  }, [display, from])

  return <span ref={ref}>{shown}</span>
}

export function Metrics() {
  return (
    <section className="bg-ink py-16 md:py-24" aria-label="HSE performance metrics">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-10">
            Performance Metrics
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {METRICS.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2">
                <p
                  className="font-mono font-medium text-page tabular-nums leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                  aria-label={`${metric.value} ${metric.label}`}
                >
                  {metric.animateFrom !== undefined ? (
                    <AnimatedNumber
                      from={metric.animateFrom}
                      to={metric.value}
                      display={metric.value}
                    />
                  ) : (
                    metric.value
                  )}
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-page/50">
                  {metric.label}
                </p>
                <p className="font-sans text-xs text-page/40 leading-relaxed mt-1">
                  {metric.sublabel}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
