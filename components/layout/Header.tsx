'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { MegaMenu } from './MegaMenu'
import { primaryNav, ctaPrimary } from '@/config/site'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion() ?? false
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const servicesBtnRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape, close on outside click
  useEffect(() => {
    if (!servicesOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        servicesBtnRef.current?.focus()
      }
    }
    const onOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [servicesOpen])

  const openServices = useCallback(() => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current)
    setServicesOpen(true)
  }, [])

  const scheduleClose = useCallback(() => {
    servicesTimerRef.current = setTimeout(() => setServicesOpen(false), 160)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-30 bg-bg border-b border-border-soft transition-shadow duration-200',
        scrolled && 'shadow-sm backdrop-blur-sm',
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-0.5">
          {primaryNav.map((item) => {
            const active = isActive(item.href)
            if (item.children) {
              return (
                <div
                  key={item.href}
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    ref={servicesBtnRef}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((o) => !o)}
                    onFocus={openServices}
                    onBlur={scheduleClose}
                    className={cn(
                      'flex items-center gap-0.5 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      'hover:text-brand hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 outline-none',
                      active || servicesOpen ? 'text-brand' : 'text-ink',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        'transition-transform duration-200',
                        servicesOpen && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  'hover:text-brand hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 outline-none',
                  active
                    ? 'text-brand underline underline-offset-4 decoration-accent'
                    : 'text-ink',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden lg:inline-flex bg-brand text-primary-foreground hover:bg-brand-steel h-9 px-4 text-sm"
          >
            <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
          </Button>
          <MobileNav />
        </div>
      </div>

      {/* Services mega-menu */}
      <AnimatePresence>
        {servicesOpen && (
          <MegaMenu
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
            onLinkClick={() => setServicesOpen(false)}
            reducedMotion={shouldReduceMotion}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
