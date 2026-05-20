import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { SpecRow, GradeRow } from '@/config/products'

interface SpecificationTableProps {
  rows: SpecRow[]
}

export function SpecificationTable({ rows }: SpecificationTableProps) {
  const hasMethod = rows.some((r) => r.method)

  return (
    <section className="bg-grad-1 py-20 md:py-24" aria-label="Full specification">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Full Specification
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Technical <em className="text-brand">Parameters.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="overflow-x-auto rounded-xl border border-brand/[0.12] bg-bg">
            <table className="w-full text-sm border-collapse min-w-[480px]" role="table">
              <thead>
                <tr className="border-b border-brand/[0.14]">
                  <th scope="col" className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3 w-[40%]">
                    Property
                  </th>
                  <th scope="col" className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3 w-[35%]">
                    Value
                  </th>
                  {hasMethod && (
                    <th scope="col" className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3">
                      Method / Standard
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.property}
                    className={`border-b border-brand/[0.07] last:border-0 ${i % 2 !== 0 ? 'bg-bg-raised/25' : ''}`}
                  >
                    <td className="px-5 py-3.5 font-sans text-sm text-muted-foreground">
                      {row.property}
                    </td>
                    <td className="px-5 py-3.5 font-mono text-sm text-ink font-medium">
                      {row.value}
                    </td>
                    {hasMethod && (
                      <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">
                        {row.method ?? '—'}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

interface GradeComparisonTableProps {
  rows: GradeRow[]
}

export function GradeComparisonTable({ rows }: GradeComparisonTableProps) {
  return (
    <section className="bg-grad-1 py-20 md:py-24" aria-label="Grade comparison table">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Grade Comparison
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Seven Benchmark <em className="text-brand">Grades.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="overflow-x-auto rounded-xl border border-brand/[0.12] bg-bg">
            <table className="w-full text-sm border-collapse min-w-[420px]" role="table">
              <thead>
                <tr className="border-b border-brand/[0.14]">
                  <th scope="col" className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3">Grade</th>
                  <th scope="col" className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3">API°</th>
                  <th scope="col" className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3">Sulphur %</th>
                  <th scope="col" className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3">Origin</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.grade}
                    className={`border-b border-brand/[0.07] last:border-0 ${i % 2 !== 0 ? 'bg-bg-raised/25' : ''}`}
                  >
                    <td className="px-5 py-3.5 font-mono text-sm text-ink font-medium">{row.grade}</td>
                    <td className="px-5 py-3.5 font-mono text-sm text-ink">{row.api}</td>
                    <td className="px-5 py-3.5 font-mono text-sm text-ink">{row.sulphurPct.toFixed(2)}</td>
                    <td className="px-5 py-3.5 font-sans text-sm text-muted-foreground">{row.origin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
