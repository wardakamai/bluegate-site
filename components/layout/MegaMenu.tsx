'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Cylinder,
  ClipboardCheck,
  FlaskConical,
  Ship,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/config/services'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, LucideIcon> = {
  Cylinder,
  ClipboardCheck,
  FlaskConical,
  Ship,
}

interface MegaMenuProps {
  onMouseEnter: () => void
  onMouseLeave: () => void
  onLinkClick: () => void
  reducedMotion: boolean
}

export function MegaMenu({
  onMouseEnter,
  onMouseLeave,
  onLinkClick,
  reducedMotion,
}: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reducedMotion ? 0 : -4 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 right-0 top-full z-40 bg-bg border-b border-border-soft shadow-lg"
      role="region"
      aria-label="Services menu"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = ICON_MAP[service.iconName] ?? Ship
          return (
            <div key={service.slug} className="flex flex-col gap-3">
              <Link
                href={service.href}
                onClick={onLinkClick}
                className={cn(
                  'group flex flex-col gap-2 p-4 rounded-lg border border-transparent',
                  'hover:border-border-soft hover:bg-muted transition-all',
                  'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none',
                )}
              >
                <Icon
                  size={20}
                  className="text-brand group-hover:text-brand-steel transition-colors"
                  aria-hidden="true"
                />
                <span className="font-sans font-medium text-sm text-ink group-hover:text-brand transition-colors">
                  {service.title}
                </span>
                <span className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {service.shortDescription}
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={11} />
                </span>
              </Link>

              {service.subSections && service.subSections.length > 0 && (
                <ul className="space-y-1 px-1">
                  {service.subSections.map((sub) => (
                    <li key={sub.anchor}>
                      <Link
                        href={`${service.href}#${sub.anchor}`}
                        onClick={onLinkClick}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-brand transition-colors py-1 px-3 rounded focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
                      >
                        <ArrowRight size={10} className="shrink-0" aria-hidden="true" />
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
