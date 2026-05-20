import { Flame, Droplets, Handshake, Radio } from 'lucide-react'
import { ServiceFeatureGrid, type FeatureItem } from '@/components/sections/services/ServiceFeatureGrid'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const RESPONSE_FEATURES: FeatureItem[] = [
  {
    icon: Flame,
    title: 'On-Site Fire Team',
    body: 'Trained fire response team on standby during all operational hours, equipped for petroleum vapour and liquid fire scenarios in accordance with NFPA and EN 13565 standards.',
  },
  {
    icon: Droplets,
    title: 'Foam Stocks',
    body: 'Fixed and mobile foam application systems with minimum 30-minute foam reserve per the largest tank diameter. AFFF and protein foam stocks maintained and tested quarterly.',
  },
  {
    icon: Handshake,
    title: 'Mutual Aid — Port of Rotterdam',
    body: 'Formal mutual aid agreement with the Port of Rotterdam Authority fire brigade and the Rijnmond Safety Region, ensuring rapid escalation and additional resources within minutes.',
  },
  {
    icon: Radio,
    title: '24/7 Control Room',
    body: 'Continuously staffed control room with direct comms to the Rotterdam harbour master, DCMR environmental authority, and on-site emergency coordinator. All alarms are hardwired, not networked.',
  },
]

export function EmergencyResponse() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Emergency response">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Emergency Response
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-12"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Prepared for <em className="text-brand">Every Scenario.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">
          {/* Left — narrative */}
          <ScrollReveal>
            <div className="space-y-5 font-sans text-base text-muted-foreground leading-relaxed">
              <p>
                Emergency preparedness is built into Blue Gate's operating licence. The Rotterdam
                terminal maintains an on-site fire response capability at all times — not as a
                regulatory checkbox, but as a genuine operational commitment.
              </p>
              <p>
                Our response framework integrates directly with the Port of Rotterdam Authority's
                emergency coordination structure through a formal mutual aid agreement. When an
                incident escalates beyond on-site capability, the handoff to port fire brigade and
                Rijnmond Safety Region is pre-planned, pre-rehearsed, and executed without
                improvisation.
              </p>
              <p>
                The 24/7 control room maintains hardwired communication links to the harbour master,
                DCMR environmental authority, and the on-site emergency coordinator. All safety-
                critical alarms activate physical systems — foam deluge, berm drain valves, vapour
                suppression — rather than relying solely on networked software.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — feature grid (2×2) */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {RESPONSE_FEATURES.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-brand/[0.14] bg-bg p-6 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand/[0.10] border border-brand/20 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-brand" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-base font-normal text-ink leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
