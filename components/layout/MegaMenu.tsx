'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cylinder,
  ClipboardCheck,
  FlaskConical,
  Ship,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/config/services';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, LucideIcon> = {
  Cylinder,
  ClipboardCheck,
  FlaskConical,
  Ship,
};

interface MegaMenuProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
  reducedMotion: boolean;
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
      className="bg-bg border-border-soft absolute top-full right-0 left-0 z-40 border-b shadow-lg"
      role="region"
      aria-label="Services menu"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-6 px-6 py-8">
        {services.map((service) => {
          const Icon = ICON_MAP[service.iconName] ?? Ship;
          return (
            <div key={service.slug} className="flex flex-col gap-3">
              <Link
                href={service.href}
                onClick={onLinkClick}
                className={cn(
                  'group flex flex-col gap-2 rounded-lg border border-transparent p-4',
                  'hover:border-border-soft hover:bg-muted transition-all',
                  'focus-visible:border-ring focus-visible:ring-ring/50 outline-none focus-visible:ring-2',
                )}
              >
                <Icon
                  size={20}
                  className="text-brand group-hover:text-brand-steel transition-colors"
                  aria-hidden="true"
                />
                <span className="text-ink group-hover:text-brand font-sans text-sm font-medium transition-colors">
                  {service.title}
                </span>
                <span className="text-muted-foreground line-clamp-2 font-sans text-xs leading-relaxed">
                  {service.shortDescription}
                </span>
                <span className="text-brand flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
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
                        className="text-muted-foreground hover:text-brand focus-visible:ring-ring/50 flex items-center gap-1.5 rounded px-3 py-1 text-xs transition-colors outline-none focus-visible:ring-2"
                      >
                        <ArrowRight size={10} className="shrink-0" aria-hidden="true" />
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
