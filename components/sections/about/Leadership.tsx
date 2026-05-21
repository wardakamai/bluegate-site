import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlowCard } from '@/components/ui/GlowCard'

// TODO: confirm with client — confirm remaining team names, titles, and biographies
const team = [
  {
    name: 'Hendrik Gerrit',
    title: 'Chief Operating Officer',
    bio: 'Leads terminal operations across the Blue Gate network, overseeing storage, logistics, and regulatory compliance.',
  },
  {
    name: 'Johann Müller',
    title: 'Maintenance Supervisor',
    bio: 'Responsible for the integrity and upkeep of tank infrastructure, pipelines, and mechanical systems across the Rotterdam facility.',
  },
  {
    name: 'Wagner Alfons',
    title: 'HSE Manager / Coordinator',
    bio: 'Manages health, safety, and environmental programmes, ensuring full regulatory compliance and continuous improvement across all terminals.',
  },
  {
    name: 'John West',
    title: 'Tank Farm / Terminal Manager',
    bio: 'Oversees day-to-day terminal operations, product receipts, transfers, and customer coordination at the Rotterdam tank farm.',
  },
]

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
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <GlowCard className="rounded-xl bg-bg p-6 flex flex-col text-center items-center">
                {member.name ? (
                  <>
                    {/* Initials block */}
                    <div className="w-14 h-14 rounded-full bg-brand/[0.12] border border-brand/25 flex items-center justify-center mb-5 shrink-0">
                      <span className="font-serif italic text-brand text-lg leading-none select-none">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                    <p className="font-sans font-semibold text-ink text-base mb-1">{member.name}</p>
                    <p className="font-sans text-sm text-brand mb-4">{member.title}</p>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </>
                ) : (
                  /* Pending placeholder — no avatar, minimal treatment */
                  <div className="flex flex-col items-center gap-3 py-4 opacity-30">
                    <div className="w-14 h-14 rounded-full border border-dashed border-ink/20" />
                    <p className="font-sans text-xs text-muted-foreground">
                      {/* TODO: confirm with client */}
                      To be confirmed
                    </p>
                  </div>
                )}
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
