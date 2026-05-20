import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { tanks } from '@/config/tanks'
import type { Product } from '@/config/products'

const STATUS_STYLES = {
  Available:   'text-ok bg-ok/10 border-ok/25',
  Leased:      'text-accent bg-accent/10 border-accent/25',
  Maintenance: 'text-brand-steel bg-brand-steel/10 border-brand-steel/25',
} as const

interface MatchingStorageCardProps {
  product: Product
}

export function MatchingStorageCard({ product }: MatchingStorageCardProps) {
  const compatTag = product.tankCompatTag
  const matchingTanks = tanks.filter(
    (t) => t.terminalId === 'rotterdam' && t.compatible.includes(compatTag),
  )

  return (
    <section className="bg-grad-2 py-20 md:py-24" aria-label="Matching storage facility">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Matching Storage Facility
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Storage Specification for{' '}
            <em className="text-brand">{product.name}.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="rounded-xl border border-brand/[0.16] bg-bg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — tank type & features */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-brand/[0.12]">
                <h3 className="font-serif text-xl font-normal text-ink mb-1">
                  {product.matchingStorage.tankType}
                </h3>
                <p className="font-mono text-sm text-brand mb-6">
                  {product.matchingStorage.capacityRange} per tank
                </p>

                <ul className="space-y-3">
                  {product.matchingStorage.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle2
                        size={15}
                        className="text-ok mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-sans text-sm text-ink/70">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — filtered tank mini-table */}
              <div className="p-8">
                <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground mb-4">
                  Rotterdam tanks compatible with {compatTag}
                </p>

                <div className="overflow-x-auto rounded-lg border border-brand/[0.10]">
                  <table className="w-full text-sm border-collapse min-w-[320px]" role="table">
                    <thead>
                      <tr className="border-b border-brand/[0.12]">
                        <th scope="col" className="text-left font-sans text-[10px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-4 py-2.5">Tank</th>
                        <th scope="col" className="text-left font-sans text-[10px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-4 py-2.5">Capacity</th>
                        <th scope="col" className="text-left font-sans text-[10px] uppercase tracking-[0.08em] font-medium text-muted-foreground px-4 py-2.5">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {matchingTanks.map((tank, i) => (
                        <tr
                          key={tank.id}
                          className={`border-b border-brand/[0.07] last:border-0 ${i % 2 !== 0 ? 'bg-bg-raised/20' : ''}`}
                        >
                          <td className="px-4 py-2.5 font-mono text-sm font-medium text-ink">
                            {tank.id}
                          </td>
                          <td className="px-4 py-2.5 font-mono text-sm text-ink">
                            {new Intl.NumberFormat('en-GB').format(tank.capacityM3)} m³
                          </td>
                          <td className="px-4 py-2.5">
                            <span
                              className={`inline-flex text-[10px] uppercase tracking-[0.07em] font-medium border rounded px-2 py-0.5 ${STATUS_STYLES[tank.status]}`}
                            >
                              {tank.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {matchingTanks.length === 0 && (
                        <tr>
                          <td colSpan={3} className="px-4 py-4 text-center font-sans text-sm text-muted-foreground">
                            No Rotterdam tanks found for this product.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <p className="font-sans text-[10px] text-muted-foreground mt-3">
                  {/* TODO: confirm with client — tank inventory is indicative */}
                  Showing {matchingTanks.length} Rotterdam tanks compatible with {compatTag}.
                  Inventory subject to confirmation.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-brand/[0.12] px-8 py-5 flex items-center justify-between gap-4 flex-wrap">
              <p className="font-sans text-sm text-muted-foreground">
                View the complete Rotterdam tank register with filtering and sorting.
              </p>
              <Link
                href="/storage-facility"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-steel transition-colors group"
              >
                View Full Tank Inventory{' '}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
