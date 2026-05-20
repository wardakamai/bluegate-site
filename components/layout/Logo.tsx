import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** Render in light (cream) colours for dark backgrounds */
  light?: boolean
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Blue Gate Shipping and Trade B.V. — Home"
      className={cn('group inline-flex flex-col leading-none gap-0.5', className)}
    >
      <span
        className={cn(
          'font-serif italic text-xl tracking-tight transition-colors',
          light
            ? 'text-ink group-hover:text-accent'
            : 'text-brand group-hover:text-brand-steel',
        )}
      >
        Blue Gate
      </span>
      <span
        className={cn(
          'font-sans text-[9px] uppercase tracking-[0.15em] font-medium transition-colors',
          light ? 'text-muted-foreground' : 'text-muted-foreground',
        )}
      >
        Shipping &amp; Trade B.V.
      </span>
    </Link>
  )
}
