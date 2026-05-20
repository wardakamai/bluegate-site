import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'
import { terminals } from '@/config/terminals'
import { cn } from '@/lib/utils'

export function TerminalNetwork() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Terminal network">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Strategic Terminals
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Three Hubs. <em className="text-brand">One Trusted Partner.</em>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-14 text-base leading-relaxed">
            From Europe&apos;s premier cargo port to strategic outposts in North America and
            Asia-Pacific, Blue Gate positions product at the heart of global energy flows.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {terminals.map((terminal, i) => (
            <ScrollReveal key={terminal.id} delay={i * 0.1}>
              <GlowCard className="group flex flex-col h-full rounded-xl bg-bg p-7">
                {/* Status badge */}
                {terminal.status === 'tbc' && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.08em] font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded px-2 py-0.5">
                    Status: TBC
                  </span>
                )}

                <div className="mb-5">
                  <span className="text-5xl leading-none" aria-hidden="true">
                    {terminal.flag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-ink mb-1">{terminal.city}</h3>
                <p className="font-sans text-sm text-muted-foreground mb-4">{terminal.country}</p>

                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.08em] font-medium text-muted-foreground bg-muted rounded px-2 py-1 w-fit mb-4">
                  <MapPin size={9} aria-hidden="true" />
                  {terminal.region}
                </span>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {terminal.productTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.06em] font-medium bg-brand/[0.12] text-brand border border-brand/20 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {terminal.capacityM3 > 0 ? (
                  <p className="font-mono text-sm text-ink mb-2">
                    <span className="text-lg font-medium">
                      {terminal.capacityM3.toLocaleString()}
                    </span>{' '}
                    m³ total capacity
                  </p>
                ) : (
                  <p className="font-mono text-sm text-muted-foreground mb-2">Capacity TBC</p>
                )}

                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-6 flex-1">
                  {terminal.description}
                </p>

                <Link
                  href="/terminal"
                  className={cn(
                    'inline-flex items-center gap-1.5 text-sm font-medium text-brand',
                    'hover:text-brand-steel transition-colors group-hover:gap-2.5',
                  )}
                >
                  Details <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
