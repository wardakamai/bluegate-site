export interface SpecRow {
  property: string;
  value: string;
  method?: string;
}

interface SpecTableProps {
  rows: SpecRow[];
  /** Hide the Method column when none of the rows use it */
  showMethod?: boolean;
}

export function SpecTable({ rows, showMethod = true }: SpecTableProps) {
  return (
    <div className="border-brand/[0.12] bg-bg overflow-x-auto rounded-xl border">
      <table className="w-full border-collapse text-sm" role="table">
        <thead>
          <tr className="border-brand/[0.14] border-b">
            <th
              scope="col"
              className="text-muted-foreground px-5 py-3 pr-6 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
            >
              Property
            </th>
            <th
              scope="col"
              className="text-muted-foreground px-5 py-3 pr-6 text-left font-sans text-[11px] font-medium tracking-[0.08em] uppercase"
            >
              Value
            </th>
            {showMethod && (
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
              className={`border-brand/[0.07] border-b last:border-0 ${
                i % 2 !== 0 ? 'bg-bg-raised/30' : ''
              }`}
            >
              <td className="text-muted-foreground px-5 py-3 pr-6 align-top font-sans text-sm">
                {row.property}
              </td>
              <td className="text-ink px-5 py-3 pr-6 align-top font-mono text-sm font-medium">
                {row.value}
              </td>
              {showMethod && (
                <td className="text-muted-foreground px-5 py-3 align-top font-mono text-xs">
                  {row.method ?? '—'}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
