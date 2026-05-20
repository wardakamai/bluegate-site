'use client'

import { useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'

export function WhatsAppFab() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Blue Gate on WhatsApp"
      className={cn(
        'fixed bottom-6 right-6 z-50 print:hidden',
        'size-14 rounded-full bg-ok text-white',
        'flex items-center justify-center',
        'shadow-lg hover:shadow-xl hover:scale-105',
        'transition-all duration-200',
        'focus-visible:ring-4 focus-visible:ring-ok/50 focus-visible:outline-none',
      )}
    >
      <MessageCircle size={26} strokeWidth={1.8} aria-hidden="true" />
      {/* Pulse ring — hidden when motion reduced via CSS media query */}
      <span
        className="absolute inset-0 rounded-full bg-ok motion-safe:animate-ping opacity-30"
        aria-hidden="true"
      />
    </a>
  )
}
