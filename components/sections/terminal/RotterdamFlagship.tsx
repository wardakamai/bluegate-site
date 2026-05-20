import Link from 'next/link'
import { Anchor, GitBranch, Train, Truck } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SpecTable, type SpecRow } from '@/components/sections/services/SpecTable'
import { ServiceFeatureGrid, type FeatureItem } from '@/components/sections/services/ServiceFeatureGrid'
import { MapEmbed } from '@/components/sections/MapEmbed'
import { Button } from '@/components/ui/button'

// TODO: confirm with client — all operational specs are placeholder
const ROTTERDAM_SPECS: SpecRow[] = [
  { property: 'Berths',                  value: '— TBC —' },
  { property: 'Max LOA',                 value: '— TBC —' },
  { property: 'Max draft',               value: '— TBC —' },
  { property: 'Loading rate',            value: '— TBC — m³/hr' },
  { property: 'Discharge rate',          value: '— TBC — m³/hr' },
  { property: 'Pipeline interconnects',  value: '— TBC —' },
  { property: 'Manifold connections',    value: '— TBC —' },
  { property: 'Vapour recovery',         value: 'Installed (floating-roof tanks)' },
]

const OPERATING_MODES: FeatureItem[] = [
  {
    icon: Anchor,
    title: 'Marine',
    body: 'Dedicated jetties for vessel berthing, hose connection, and ullage measurement. Multi-product manifold allows concurrent loading and discharge operations.',
  },
  {
    icon: GitBranch,
    title: 'Pipeline',
    body: 'Direct pipeline interconnection to Rotterdam refineries and adjacent terminals across the ARA blending corridor.',
  },
  {
    icon: Train,
    title: 'Rail',
    body: 'Dedicated rail siding for tank-wagon reception and dispatch. ADR-compliant loading and customs documentation.',
  },
  {
    icon: Truck,
    title: 'Road',
    body: 'ADR-compliant truck loading bays for road-tanker despatch. Bottom-loading arms with vapour recovery and metered custody transfer.',
  },
]

export function RotterdamFlagship() {
  return (
    <section
      id="rotterdam"
      className="bg-grad-2 py-20 md:py-28 border-l-4 border-l-brand"
      aria-label="Rotterdam flagship terminal"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Sub-block A — Flagship header */}
        <ScrollReveal>
          <span className="inline-flex items-center text-[10px] uppercase tracking-[0.08em] font-medium text-accent bg-accent/10 border border-accent/25 rounded px-2.5 py-1 mb-6">
            Flagship Terminal
          </span>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            Rotterdam. <em className="text-brand">Our Operating Heart.</em>
          </h2>
          <div className="max-w-3xl space-y-4 mb-16">
            <p className="font-sans text-base text-ink/70 leading-relaxed">
              Prinsenlaan 450, Rotterdam — the geographic and commercial centre of our global
              network. The Port of Rotterdam handles over 400 million tonnes of cargo annually,
              making it Europe&apos;s largest and most liquid energy hub. Our terminal occupies a
              strategic berth within the ARA (Antwerp–Rotterdam–Amsterdam) blending corridor,
              the defining price-discovery region for European petroleum.
            </p>
            <p className="font-sans text-base text-ink/70 leading-relaxed">
              Deep-water marine access accommodates very large crude carriers (VLCCs) and product
              tankers. Six dedicated jetties handle simultaneous multi-product operations.
              Pipeline interconnects to the Rotterdam refinery complex and the TAL (Trans Alpine
              Pipeline) give our clients unmatched redistribution optionality. Road, rail, and
              barge modes complete a full multi-modal logistics offer.
            </p>
          </div>
        </ScrollReveal>

        {/* Sub-block B — Operations overview */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-serif text-2xl font-normal text-ink mb-4">
                24/7 Multi-Product Operations
              </h3>
              <p className="font-sans text-sm text-ink/65 leading-relaxed mb-4">
                Rotterdam operates continuously. Our manifold flexibility permits concurrent
                loading and discharge across Jet A1, EN590, Virgin Fuel Oil D6, and multiple
                crude grades — with full product segregation guaranteed by dedicated tankage and
                hard-piped manifold circuits.
              </p>
              <p className="font-sans text-sm text-ink/65 leading-relaxed mb-4">
                Pipeline interconnects reach major Rotterdam-area refineries directly, reducing
                truck movements for large-volume redistribution. The ARA pipeline network extends
                connectivity to Antwerp and Amsterdam storage clusters.
              </p>
              <p className="font-sans text-sm text-ink/65 leading-relaxed">
                Vapour recovery systems are installed on all floating-roof tanks, meeting the
                Port of Rotterdam Authority emissions limits and contributing to our verified
                carbon-reduction programme.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-normal text-ink mb-4">
                Terminal Specifications
              </h3>
              {/* TODO: confirm with client — all values are placeholders */}
              <SpecTable rows={ROTTERDAM_SPECS} showMethod={false} />
            </div>
          </div>
        </ScrollReveal>

        {/* Sub-block C — Operating modes */}
        <ScrollReveal>
          <h3 className="font-serif text-2xl font-normal text-ink mb-6">Operating Modes</h3>
          <div className="mb-16">
            <ServiceFeatureGrid items={OPERATING_MODES} />
          </div>
        </ScrollReveal>

        {/* Sub-block D — Map */}
        <ScrollReveal>
          <div className="mb-16">
            <MapEmbed />
          </div>
        </ScrollReveal>

        {/* Sub-block E — Rotterdam CTAs */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-brand text-primary-foreground hover:bg-brand-steel h-11 px-6 text-sm font-medium"
            >
              <Link href="/storage-facility">View Storage Facility Detail →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-ink/25 text-ink hover:bg-ink/[0.08] hover:border-ink/40 h-11 px-6 text-sm font-medium bg-transparent"
            >
              <Link href="/contact?intent=visit&terminal=rotterdam">
                Schedule a Vessel at Rotterdam →
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
