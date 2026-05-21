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

  useEffect(() => {
    if (pathname === '/') setOpen(true)
  }, [pathname])

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
          className="overflow-hidden bg-page"
        >
          <div className="relative flex items-center justify-center px-20 py-3">
            {/* Centred PDF link */}
            <Link
              href="/docs/refund-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 rounded"
            >
              Blue Gate – Refund Policy
            </Link>

            {/* Dismiss controls — pinned to the right */}
            <div className="absolute right-6 flex items-center gap-3">
              <button
                onClick={() => setOpen(false)}
                className="font-sans text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 rounded"
              >
                Got it!
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close notice"
                className="text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 rounded"
              >
                <X size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
