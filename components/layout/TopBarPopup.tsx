'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import Link from 'next/link'

export function TopBarPopup() {
  // Start closed so SSR and client initial render agree (no hydration mismatch)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Open after mount on home page, and re-open on every navigation to '/'
  useEffect(() => {
    if (pathname === '/') setOpen(true)
  }, [pathname])

  // Close on scroll past 10 px
  useEffect(() => {
    if (pathname !== '/') return
    const onScroll = () => { if (window.scrollY > 10) setOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  if (pathname !== '/') return null

  return (
    // CSS max-height transition — works reliably after SSR hydration unlike
    // Framer Motion height:'auto' which requires DOM measurement on mount
    <div
      aria-hidden={!open}
      style={{
        maxHeight: open ? '60px' : '0',
        opacity: open ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease',
      }}
    >
      <div
        role="region"
        aria-label="Refund Policy Notice"
        className="relative flex items-center justify-center px-20 py-3 bg-page border-b border-white/[0.08]"
      >
        <Link
          href="/docs/refund-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 rounded"
        >
          Blue Gate – Refund Policy
        </Link>

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
    </div>
  )
}
