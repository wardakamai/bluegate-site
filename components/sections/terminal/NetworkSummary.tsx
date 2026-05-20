import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { terminals } from '@/config/terminals'

// TODO: confirm with client — all capacity figures are placeholder
const totalCapacityM3 = terminals.reduce((sum, t) => sum + t.capacityM3, 0)

const STATS = [
  {
    value: terminals.length.toString(),
    label: 'Terminals',
  },
  {
    value: new Intl.NumberFormat('en-GB', { notation: 'compact', maximumFractionDigits: 1 }).format(
      totalCapacityM3,
    ) + ' m³',
    label: 'Total nominal capacity',
  },
  {
    value: '4',
    label: 'Trade regions covered',
  },
  {
    value: '24/7',
    label: 'Operations at Rotterdam',
  },
]

export function NetworkSummary() {
  return (
    <section className="bg-ink py-14 md:py-20" aria-label="Network at a glance">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-10 text-center">
            Network at a Glance
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-mono font-medium text-bg leading-none mb-2"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
                >
                  {stat.value}
                </p>
                <p className="font-sans text-sm text-bg/55 uppercase tracking-[0.06em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
