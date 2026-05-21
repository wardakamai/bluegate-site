'use client'

import { useEffect } from 'react'
import { gsap, EASE } from '@/lib/gsap'

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchor = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href?.startsWith('#')) return
      const el = document.querySelector(href)
      if (!el) return
      e.preventDefault()
      gsap.to(window, {
        scrollTo: { y: el, offsetY: 80 },
        duration: 1.2,
        ease: EASE.snap,
      })
    }
    document.addEventListener('click', handleAnchor)
    return () => document.removeEventListener('click', handleAnchor)
  }, [])
}
