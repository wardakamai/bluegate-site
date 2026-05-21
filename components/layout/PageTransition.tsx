'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap, EASE, DUR } from '@/lib/gsap'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref      = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!ref.current) return
    gsap.from(ref.current, {
      opacity: 0,
      y: 18,
      duration: DUR.base,
      ease: EASE.smooth,
      clearProps: 'all',
    })
  }, [pathname])

  return <div ref={ref}>{children}</div>
}
