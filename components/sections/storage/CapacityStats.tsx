import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { tanks } from '@/config/tanks'

const rotterdamTanks = tanks.filter((t) => t.terminalId === 'rotterdam')

// All values computed from config/tanks.ts — no hardcoded numbers
const totalCapacity = rotterdamTanks.reduce((sum, t) => sum + t.capacityM3, 0)
const availableCount = rotterdamTanks.filter((t) => t.status === 'Available').length
const largestTank = Math.max(...rotterdamTanks.map((t) => t.capacityM3))
const leasedCount = rotterdamTanks.filter((t) => t.status === 'Leased').length

const STATS = [
  {
    value: new Intl.NumberFormat('en-GB').format(totalCapacity),
    label: 'Total Capacity (m³)',
  },
  {
    value: availableCount.toString(),
    label: 'Tanks Available',
  },
  {
    value: new Intl.NumberFormat('en-GB').format(largestTank),
    label: 'Largest Tank (m³)',
  },
  {
    value: leasedCount.toString(),
    label: 'Tanks under Lease',
  },
]

export function CapacityStats() {
  return (
    <section className="bg-ink py-14 md:py-20" aria-label="Rotterdam capacity statistics">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-10 text-center">
            Rotterdam Capacity at a Glance
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-mono font-medium text-bg leading-none mb-2"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
                >
                  {stat.value}
                </p>
                <p className="font-sans text-xs text-bg/55 uppercase tracking-[0.06em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-[10px] text-bg/30 text-center mt-8">
            {/* TODO: confirm with client */}
            All figures computed from indicative tank inventory pending client confirmation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
