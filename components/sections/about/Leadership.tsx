import { User } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

// TODO: confirm with client — leadership team details and headshots
const PLACEHOLDERS = [0, 1, 2, 3] as const

export function Leadership() {
  return (
    <section className="bg-page py-20 md:py-28" aria-label="Leadership team">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Our Team
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            The People Behind <em className="text-brand">Blue Gate.</em>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-14 text-base leading-relaxed">
            Decades of specialist experience in bulk liquid logistics, terminal operations, and
            petroleum commodity trade — all applied through one operations team.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLACEHOLDERS.map((i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <GlowCard className="rounded-xl bg-bg p-6 flex flex-col items-center text-center">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-brand/[0.1] border border-brand/20 flex items-center justify-center mb-5">
                  <User size={32} className="text-brand/40" aria-hidden="true" />
                </div>

                {/* TODO: confirm with client — name */}
                <p className="font-sans font-medium text-ink mb-1">Name TBC</p>

                {/* TODO: confirm with client — title */}
                <p className="font-sans text-sm text-brand/60 mb-4">Title TBC</p>

                {/* TODO: confirm with client — biography */}
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  Professional background and biography to be confirmed with client before
                  publication.
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
