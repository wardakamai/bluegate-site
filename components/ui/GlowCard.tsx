'use client'

import { useRef, useCallback } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

const SHADOW_DEFAULT =
  '0 0 0 1px rgba(197,3,55,0.22), 0 4px 24px rgba(197,3,55,0.08), 0 8px 32px rgba(0,0,0,0.6)'
const SHADOW_HOVER =
  '0 0 0 1px rgba(197,3,55,0.55), 0 8px 40px rgba(197,3,55,0.3), 0 20px 60px rgba(0,0,0,0.7)'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  /** 1–10, controls tilt intensity */
  tilt?: number
}

export function GlowCard({ children, className, tilt = 6 }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current
      const glow = glowRef.current
      if (!card || !glow) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2

      gsap.to(card, {
        rotationX: ((y - cy) / cy) * -tilt,
        rotationY: ((x - cx) / cx) * tilt,
        transformPerspective: 900,
        boxShadow: SHADOW_HOVER,
        ease: 'power2.out',
        duration: 0.25,
        overwrite: 'auto',
      })

      gsap.to(glow, {
        x: x - 120,
        y: y - 120,
        opacity: 1,
        ease: 'power2.out',
        duration: 0.25,
        overwrite: 'auto',
      })
    },
    [tilt],
  )

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      boxShadow: SHADOW_DEFAULT,
      ease: 'elastic.out(1, 0.5)',
      duration: 0.8,
      overwrite: 'auto',
    })
    gsap.to(glow, { opacity: 0, duration: 0.4, overwrite: 'auto' })
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn('relative overflow-hidden preserve-3d will-change-transform', className)}
      style={{ boxShadow: SHADOW_DEFAULT }}
    >
      {/* Cursor-following radial glow spotlight */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute top-0 left-0 w-60 h-60 rounded-full pointer-events-none opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(197,3,55,0.22) 0%, transparent 70%)',
        }}
      />
      {children}
    </div>
  )
}
