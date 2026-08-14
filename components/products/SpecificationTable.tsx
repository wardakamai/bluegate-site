import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { SpecRow, GradeRow } from '@/config/products';

interface SpecificationTableProps {
  rows: SpecRow[];
}

export function SpecificationTable({ rows }: SpecificationTableProps) {
  const hasMethod = rows.some((r) => r.method);

  return (
    <section className="bg-grad-1 py-20 md:py-24" aria-label="Full specification">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Full Specification
          </p>
          <h2
            className="text-ink mb-10 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Technical <em className="text-brand">Parameters.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="border-brand/[0.12] bg-bg overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[480px] border-collapse text-sm" role="table">
              <thead>
                <tr className="border-brand/[0.14] border-b">
                  <th
                    scope="col"
                    className="text-muted-foreground w-[40%] px-5 py-3 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
                  >
                    Property
                  </th>
                  <th
                    scope="col"
                    className="text-muted-foreground w-[35%] px-5 py-3 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
                  >
                    Value
                  </th>
                  {hasMethod && (
                    <th
                      scope="col"
                      className="text-muted-foreground px-5 py-3 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
                    >
                      Method / Standard
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.property}
                    className={`border-brand/[0.07] border-b last:border-0 ${i % 2 !== 0 ? 'bg-bg-raised/25' : ''}`}
                  >
                    <td className="text-muted-foreground px-5 py-3.5 font-sans text-sm">
                      {row.property}
                    </td>
                    <td className="text-ink px-5 py-3.5 font-mono text-sm font-medium">
                      {row.value}
                    </td>
                    {hasMethod && (
                      <td className="text-muted-foreground px-5 py-3.5 font-mono text-xs">
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
  );
}

interface GradeComparisonTableProps {
  rows: GradeRow[];
}

export function GradeComparisonTable({ rows }: GradeComparisonTableProps) {
  return (
    <section className="bg-grad-1 py-20 md:py-24" aria-label="Grade comparison table">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Grade Comparison
          </p>
          <h2
            className="text-ink mb-10 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Seven Benchmark <em className="text-brand">Grades.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="border-brand/[0.12] bg-bg overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[420px] border-collapse text-sm" role="table">
              <thead>
                <tr className="border-brand/[0.14] border-b">
                  <th
                    scope="col"
                    className="text-muted-foreground px-5 py-3 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
                  >
                    Grade
                  </th>
                  <th
                    scope="col"
                    className="text-muted-foreground px-5 py-3 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
                  >
                    API°
                  </th>
                  <th
                    scope="col"
                    className="text-muted-foreground px-5 py-3 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
                  >
                    Sulphur %
                  </th>
                  <th
                    scope="col"
                    className="text-muted-foreground px-5 py-3 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
                  >
                    Origin
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.grade}
                    className={`border-brand/[0.07] border-b last:border-0 ${i % 2 !== 0 ? 'bg-bg-raised/25' : ''}`}
                  >
                    <td className="text-ink px-5 py-3.5 font-mono text-sm font-medium">
                      {row.grade}
                    </td>
                    <td className="text-ink px-5 py-3.5 font-mono text-sm">{row.api}</td>
                    <td className="text-ink px-5 py-3.5 font-mono text-sm">
                      {row.sulphurPct.toFixed(2)}
                    </td>
                    <td className="text-muted-foreground px-5 py-3.5 font-sans text-sm">
                      {row.origin}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
