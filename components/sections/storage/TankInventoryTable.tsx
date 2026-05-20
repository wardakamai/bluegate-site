'use client'

import { useState, useMemo } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { tanks, type TankStatus } from '@/config/tanks'
import { cn } from '@/lib/utils'

type SortDir = 'asc' | 'desc' | null
type ProductFilter = 'All' | 'Jet A1' | 'EN590' | 'D6' | 'Crude'

const PRODUCT_FILTERS: ProductFilter[] = ['All', 'Jet A1', 'EN590', 'D6', 'Crude']

const STATUS_STYLES: Record<TankStatus, string> = {
  Available: 'text-ok bg-ok/10 border-ok/25',
  Leased: 'text-accent bg-accent/10 border-accent/25',
  Maintenance: 'text-brand-steel bg-brand-steel/10 border-brand-steel/25',
}

function SortIcon({ dir }: { dir: SortDir }) {
  if (dir === 'asc') return <ArrowUp size={13} aria-hidden="true" />
  if (dir === 'desc') return <ArrowDown size={13} aria-hidden="true" />
  return <ArrowUpDown size={13} className="opacity-40" aria-hidden="true" />
}

export function TankInventoryTable() {
  const [productFilter, setProductFilter] = useState<ProductFilter>('All')
  const [sortDir, setSortDir] = useState<SortDir>(null)

  const rotterdamTanks = tanks.filter((t) => t.terminalId === 'rotterdam')

  const filtered = useMemo(() => {
    const base =
      productFilter === 'All'
        ? rotterdamTanks
        : rotterdamTanks.filter((t) =>
            t.compatible.includes(productFilter as 'Jet A1' | 'EN590' | 'D6' | 'Crude'),
          )

    if (!sortDir) return base
    return [...base].sort((a, b) =>
      sortDir === 'asc' ? a.capacityM3 - b.capacityM3 : b.capacityM3 - a.capacityM3,
    )
  }, [productFilter, sortDir, rotterdamTanks])

  function toggleSort() {
    setSortDir((prev) => (prev === null ? 'asc' : prev === 'asc' ? 'desc' : null))
  }

  return (
    <div>
      {/* Product chip filter */}
      <div
        className="flex flex-wrap gap-2 mb-5"
        role="group"
        aria-label="Filter by product compatibility"
      >
        {PRODUCT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setProductFilter(f)}
            className={cn(
              'font-sans text-[11px] uppercase tracking-[0.07em] font-medium rounded-full px-3.5 py-1.5 border transition-colors',
              productFilter === f
                ? 'bg-brand text-primary-foreground border-brand'
                : 'bg-transparent text-muted-foreground border-border-soft hover:border-brand/40 hover:text-ink',
            )}
            aria-pressed={productFilter === f}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Scrollable table */}
      <div className="overflow-x-auto rounded-xl border border-brand/[0.12] bg-bg">
        <table className="w-full text-sm border-collapse min-w-[640px]" role="table">
          <thead>
            <tr className="border-b border-brand/[0.14]">
              {/* Sticky first column */}
              <th
                scope="col"
                className="sticky left-0 z-10 bg-bg text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3 min-w-[90px]"
              >
                Tank ID
              </th>
              <th
                scope="col"
                className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3"
              >
                <button
                  onClick={toggleSort}
                  className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
                  aria-label={`Sort by capacity — currently ${sortDir ?? 'unsorted'}`}
                >
                  Capacity (m³) <SortIcon dir={sortDir} />
                </button>
              </th>
              <th
                scope="col"
                className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3 min-w-[200px]"
              >
                Tank Type
              </th>
              <th
                scope="col"
                className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3 min-w-[180px]"
              >
                Product Compatibility
              </th>
              <th
                scope="col"
                className="text-left font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-5 py-3"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center font-sans text-sm text-muted-foreground">
                  No tanks match the selected filter.
                </td>
              </tr>
            ) : (
              filtered.map((tank, i) => (
                <tr
                  key={tank.id}
                  className={cn(
                    'border-b border-brand/[0.07] last:border-0',
                    i % 2 !== 0 ? 'bg-bg-raised/20' : '',
                  )}
                >
                  {/* Sticky Tank ID */}
                  <td
                    className={cn(
                      'sticky left-0 z-10 px-5 py-3.5 font-mono text-sm font-medium text-ink',
                      i % 2 !== 0 ? 'bg-[#161618]' : 'bg-bg',
                    )}
                  >
                    {tank.id}
                  </td>
                  <td className="px-5 py-3.5 font-mono text-sm text-ink">
                    {new Intl.NumberFormat('en-GB').format(tank.capacityM3)}
                  </td>
                  <td className="px-5 py-3.5 font-sans text-sm text-muted-foreground">
                    {tank.type}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {tank.compatible.map((prod) => (
                        <span
                          key={prod}
                          className="text-[10px] uppercase tracking-[0.06em] font-medium bg-brand/[0.10] text-brand border border-brand/20 rounded px-2 py-0.5"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={cn(
                        'inline-flex text-[10px] uppercase tracking-[0.07em] font-medium border rounded px-2 py-0.5',
                        STATUS_STYLES[tank.status],
                      )}
                    >
                      {tank.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="font-sans text-[10px] text-muted-foreground mt-3">
        {/* TODO: confirm with client — tank inventory is indicative */}
        Tank inventory is indicative and subject to confirmation before publication.
        Showing {filtered.length} of {rotterdamTanks.length} Rotterdam tanks.
      </p>
    </div>
  )
}
