'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, FileText } from 'lucide-react'
import Link from 'next/link'

export function TopBarPopup() {
  const [open, setOpen] = useState(true)
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Panel — slides down from topbar */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Important Notice"
            initial={{ y: shouldReduceMotion ? 0 : '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: shouldReduceMotion ? 0 : '-100%' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-ink border-b border-white/[0.08] shadow-2xl"
          >
            <div className="mx-auto max-w-7xl px-6 py-10 md:py-12 relative">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close notice"
                className="absolute top-4 right-6 p-2 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 outline-none"
              >
                <X size={17} aria-hidden="true" />
              </button>

              {/* Content */}
              <div className="max-w-xl">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-brand-gold mb-3">
                  Important Notice
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-white mb-4">
                  Blue Gate – <em>Refund Policy</em>
                </h2>
                <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
                  Our Refund Policy document is now available for download.
                  Please review it before submitting a storage allocation or shipping request.
                </p>
                <Link
                  href="/docs/refund-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white border border-white/20 px-4 py-2.5 rounded-md hover:bg-white/10 hover:border-white/40 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 outline-none"
                >
                  <FileText size={14} aria-hidden="true" />
                  Download Refund Policy →
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
