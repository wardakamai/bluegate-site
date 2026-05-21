'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'

export function TopBarPopup() {
  const [open, setOpen] = useState(true)
  const shouldReduceMotion = useReducedMotion() ?? false
  const pathname = usePathname()

  // Re-show whenever the user arrives at the home page
  useEffect(() => {
    if (pathname === '/') setOpen(true)
  }, [pathname])

  // Collapse on scroll
  useEffect(() => {
    if (pathname !== '/') return
    const onScroll = () => {
      if (window.scrollY > 10) setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  if (pathname !== '/') return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="region"
          aria-label="Refund Policy Notice"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden bg-bg border-b border-border-soft"
        >
          <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-4">
            <p className="font-sans text-xs text-muted-foreground leading-none">
              <span className="font-medium text-foreground">Blue Gate Refund Policy</span>
              {' · '}
              <Link
                href="/docs/refund-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline underline-offset-2 hover:text-brand-steel transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand rounded"
              >
                View &amp; Download →
              </Link>
            </p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Dismiss notice"
              className="shrink-0 p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <X size={13} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
