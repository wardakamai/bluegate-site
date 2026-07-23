import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { secondaryTerminals } from '@/config/terminals'

export function NetworkContext() {
  return (
    <section className="bg-grad-2 py-20 md:py-24" aria-label="Network terminal context">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Beyond Rotterdam
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            The Wider <em className="text-brand">Network.</em>
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Facility specification sheets for Fujairah, Houston, Jurong, and Zhoushan are available
            on request. The table below summarises headline capacities.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {secondaryTerminals.map((terminal, i) => (
            <ScrollReveal key={terminal.id} delay={i * 0.08}>
              <div className="rounded-xl border border-border-soft bg-bg p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="text-3xl" aria-hidden="true">{terminal.flag}</span>
                  {terminal.status === 'tbc' && (
                    <span className="text-[10px] uppercase tracking-[0.07em] font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded px-2 py-0.5">
                      TBC
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-ink">{terminal.city}</h3>
                  <p className="font-sans text-xs text-muted-foreground">{terminal.region}</p>
                </div>
                <p className="font-mono text-sm text-ink">
                  <span className="text-lg font-medium">
                    {new Intl.NumberFormat('en-GB').format(terminal.capacityM3)}
                  </span>{' '}
                  m³
                  <span className="text-amber-400 text-[10px] ml-1">*</span>
                </p>
                <Link
                  href={`/terminal#${terminal.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:text-brand-steel transition-colors mt-auto group"
                >
                  View terminal <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="font-sans text-[10px] text-muted-foreground mt-4">
          * Capacity figures are provisional pending client confirmation.
        </p>
      </div>
    </section>
  )
}
