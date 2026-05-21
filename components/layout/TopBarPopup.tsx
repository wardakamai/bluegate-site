'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'

export function TopBarPopup() {
  const [open, setOpen] = useState(true)
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="region"
          aria-label="Refund Policy Notice"
          initial={{ y: shouldReduceMotion ? 0 : '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: shouldReduceMotion ? 0 : '-100%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ backgroundColor: '#0E3A5F' }}
          className="fixed top-0 left-0 right-0 z-50 shadow-sm"
        >
          <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/80 leading-none">
              <span className="font-medium text-white">Blue Gate Refund Policy</span>
              {' '}is now available.{' '}
              <Link
                href="/docs/refund-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-amber-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
              >
                View &amp; Download →
              </Link>
            </p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Dismiss notice"
              className="shrink-0 p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <X size={13} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
