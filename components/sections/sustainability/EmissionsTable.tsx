// TODO: confirm with client — real baselines and targets

import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface Commitment {
  metric: string
  baseline: string
  target: string
  status: 'In progress' | 'Upgrade underway' | 'Phase 1 complete' | 'Maintained'
}

const COMMITMENTS: Commitment[] = [
  {
    metric: 'Scope 1 (tCO₂e)',
    baseline: '— (TODO)',
    target: '−30% vs baseline',
    status: 'In progress',
  },
  {
    metric: 'Scope 2 (tCO₂e)',
    baseline: '— (TODO)',
    target: '100% renewable electricity',
    status: 'In progress',
  },
  {
    metric: 'Vapour recovery efficiency',
    baseline: '92%',
    target: '≥98%',
    status: 'Upgrade underway',
  },
  {
    metric: 'Water recycled (%)',
    baseline: '40%',
    target: '75%',
    status: 'Phase 1 complete',
  },
  {
    metric: 'Spills (per million m³ throughput)',
    baseline: '0',
    target: '0',
    status: 'Maintained',
  },
]

const STATUS_STYLES: Record<Commitment['status'], string> = {
  'In progress': 'bg-brand/10 text-brand border-brand/20',
  'Upgrade underway': 'bg-accent/10 text-accent border-accent/20',
  'Phase 1 complete': 'bg-ok/10 text-ok border-ok/20',
  Maintained: 'bg-ok/10 text-ok border-ok/20',
}

export function EmissionsTable() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Emissions and sustainability commitments">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Commitments
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Targets We <em className="text-brand">Report Against.</em>
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl mb-12">
            Baseline year 2026. Progress reviewed quarterly and published in the annual ESG report.
            Scope 1 and Scope 2 baselines subject to client confirmation before publication.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto rounded-xl border border-brand/[0.14]">
            <table className="w-full text-sm font-sans" aria-label="Sustainability commitments table">
              <thead>
                <tr className="border-b border-brand/[0.14] bg-bg">
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-medium text-[11px] uppercase tracking-[0.07em] text-muted-foreground"
                  >
                    Metric
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-medium text-[11px] uppercase tracking-[0.07em] text-muted-foreground"
                  >
                    2026 Baseline
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-medium text-[11px] uppercase tracking-[0.07em] text-muted-foreground"
                  >
                    2030 Target
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-medium text-[11px] uppercase tracking-[0.07em] text-muted-foreground"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMMITMENTS.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={`border-b border-brand/[0.08] ${i % 2 === 0 ? 'bg-page' : 'bg-bg'} last:border-0`}
                  >
                    <td className="px-6 py-4 font-sans text-sm text-ink font-medium">
                      {row.metric}
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-muted-foreground tabular-nums">
                      {row.baseline}
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-ink tabular-nums">
                      {row.target}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block font-sans text-[10px] uppercase tracking-[0.07em] font-medium border rounded px-2 py-1 ${STATUS_STYLES[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-muted-foreground italic mt-4">
            Scope 1 and Scope 2 baselines marked TODO pending client confirmation. All other
            figures are operational actuals.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
