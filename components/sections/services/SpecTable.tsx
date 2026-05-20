export interface SpecRow {
  property: string
  value: string
  method?: string
}

interface SpecTableProps {
  rows: SpecRow[]
  /** Hide the Method column when none of the rows use it */
  showMethod?: boolean
}

export function SpecTable({ rows, showMethod = true }: SpecTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-brand/[0.12] bg-bg">
      <table className="w-full text-sm border-collapse" role="table">
        <thead>
          <tr className="border-b border-brand/[0.14]">
            <th
              scope="col"
              className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3 pr-6"
            >
              Property
            </th>
            <th
              scope="col"
              className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3 pr-6"
            >
              Value
            </th>
            {showMethod && (
              <th
                scope="col"
                className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3"
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
              className={`border-b border-brand/[0.07] last:border-0 ${
                i % 2 !== 0 ? 'bg-bg-raised/30' : ''
              }`}
            >
              <td className="px-5 py-3 pr-6 font-sans text-sm text-muted-foreground align-top">
                {row.property}
              </td>
              <td className="px-5 py-3 pr-6 font-mono text-sm text-ink font-medium align-top">
                {row.value}
              </td>
              {showMethod && (
                <td className="px-5 py-3 font-mono text-xs text-muted-foreground align-top">
                  {row.method ?? '—'}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
