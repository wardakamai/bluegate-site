'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Package, Anchor, Shield, Navigation, Activity, Globe, Waves, FileCheck } from 'lucide-react'
import { ServiceFeatureGrid, type FeatureItem } from './ServiceFeatureGrid'
import { SpecTable, type SpecRow } from './SpecTable'

interface TabData {
  value: string
  label: string
  headlinePlain: string
  headlineItalic: string
  positioning: string
  features: FeatureItem[]
  specs: SpecRow[]
  compliance: string[]
}

const TABS: TabData[] = [
  {
    value: 'trucking',
    label: 'Trucking',
    headlinePlain: 'Road Tanker Distribution.',
    headlineItalic: 'ADR-Ready from Day One.',
    positioning:
      'Direct road delivery across Benelux, Germany, Austria, and Switzerland in ADR-compliant tankers dispatched from Rotterdam within 24 hours of product release.',
    features: [
      {
        icon: Shield,
        title: 'ADR Compliance',
        body: 'Full ADR Class 3 and Class 8 certification across the fleet. Drivers hold current ADR certificates; vehicles are inspected and placarded to regulation.',
      },
      {
        icon: Navigation,
        title: 'Benelux / DACH Reach',
        body: 'Regular scheduled routes to the Netherlands, Belgium, Germany, Austria, and Switzerland. Spot capacity available for France and Denmark.',
      },
      {
        icon: Activity,
        title: 'Real-time Tracking',
        body: 'Live GPS tracking and electronic delivery documentation. Clients receive ETA alerts and proof-of-delivery confirmation on every movement.',
      },
    ],
    specs: [
      { property: 'Tanker capacity', value: '20,000 – 28,000 L' },
      { property: 'Product compatibility', value: 'Jet A1, EN590, D6, Crude' },
      { property: 'Certification', value: 'ADR Class 3 / Class 8' },
      { property: 'Primary coverage', value: 'Benelux, DACH, France' },
      { property: 'Dispatch lead time', value: '24 hr ex-Rotterdam' },
    ],
    compliance: ['ADR', 'REACH', 'COSHH'],
  },
  {
    value: 'rail',
    label: 'Rail',
    headlinePlain: 'ISO Tank by Rail.',
    headlineItalic: 'Across the European Network.',
    positioning:
      'Bulk liquid movement by rail in ISO tank containers across the pan-European freight network, with full RID hazmat co-ordination and customs handling.',
    features: [
      {
        icon: Package,
        title: 'ISO Tank Containers',
        body: '20 ft ISO tanks, 24,000 L capacity, suitable for Jet A1, diesel, fuel oils, and crude. Owned and operated tanks available for long-term product programmes.',
      },
      {
        icon: Globe,
        title: 'European Rail Network',
        body: 'Cross-border movements via DB Cargo, SNCF Fret, and PKP Cargo corridors. Rotterdam to Warsaw, Vienna, or Lyon as standard point-to-point lanes.',
      },
      {
        icon: FileCheck,
        title: 'Hazmat Co-ordination',
        body: 'Full RID compliance documentation, dangerous goods declarations, and customs clearance managed in-house. No third-party freight forwarder required.',
      },
    ],
    specs: [
      { property: 'Tank capacity', value: '24,000 L (20 ft ISO)' },
      { property: 'Max train consist', value: 'Up to 30 wagons' },
      { property: 'Regulation', value: 'RID (OTIF)' },
      { property: 'Primary lanes', value: 'NL / DE / FR / PL / AT' },
      { property: 'Transit time NL–PL', value: '3 – 4 days' },
    ],
    compliance: ['RID', 'OTIF', 'ADR (terminal transfer)'],
  },
  {
    value: 'cargo',
    label: 'Cargo',
    headlinePlain: 'Containerised Liquid Cargo.',
    headlineItalic: 'Port to Port, In-Spec.',
    positioning:
      'Deep-sea and short-sea cargo movements in ISO tank containers and IBC units, with full IMDG documentation and port-to-port custody transfer.',
    features: [
      {
        icon: Package,
        title: 'ISO Tank & IBC Handling',
        body: '20 ft and 40 ft ISO tank containers, plus IBC units for smaller volumes. Rotterdam container terminal access with direct deep-water berth connection.',
      },
      {
        icon: Globe,
        title: 'Deep-Sea & Feeder',
        body: 'Main-line services to USGC, West Africa, Singapore, and Arabian Gulf. European feeder connections to UK, Scandinavia, and the Baltic.',
      },
      {
        icon: Shield,
        title: 'IMDG Documentation',
        body: 'Full IMDG Class 3 shipper declarations, multi-modal transport documents, and MSDS packs prepared and verified before vessel load.',
      },
    ],
    specs: [
      { property: 'Container sizes', value: '20 ft, 40 ft ISO; IBC' },
      { property: 'IMDG class', value: 'Class 3 (flammable liquids)' },
      { property: 'Primary routes', value: 'USGC, WAF, SGP, AG' },
      { property: 'Short-sea coverage', value: 'UK, Scandinavia, Baltic' },
      { property: 'Documentation', value: 'B/L, MSDS, DGD' },
    ],
    compliance: ['IMDG', 'SOLAS', 'ISPS', 'CTU Code'],
  },
  {
    value: 'tanker',
    label: 'Tanker (Marine)',
    headlinePlain: 'Marine Tanker Logistics.',
    headlineItalic: 'VLCC to Coastal.',
    positioning:
      "Full marine logistics co-ordination from VLCC discharge at Rotterdam's deep-water berths through to coastal tanker distribution across North Sea and Baltic ports.",
    features: [
      {
        icon: Anchor,
        title: 'Berth & Port Agency',
        body: 'Nominated port agent at Rotterdam, full pre-arrival notification, berth booking, and mooring co-ordination. VLCC draft to 22.5 m accommodated at the primary terminal.',
      },
      {
        icon: Waves,
        title: 'Ship-to-Ship Transfer',
        body: 'Lightering and STS operations facilitated for VLCC discharge into Aframax/Suezmax parcels. Full OCIMF STS planning and mooring master supervision.',
      },
      {
        icon: FileCheck,
        title: 'Charter & Fixture Support',
        body: 'Voyage and time-charter fixture support, Laytime calculation, NOR tendering, and demurrage negotiation. Operators work directly with our trading desk.',
      },
    ],
    specs: [
      { property: 'Max vessel size', value: 'VLCC (300,000+ DWT)' },
      { property: 'Coastal tanker range', value: '5,000 – 50,000 DWT' },
      { property: 'Primary berth draft', value: '22.5 m (VLCC-capable)' },
      { property: 'STS capability', value: 'Aframax / Suezmax lightering' },
      { property: 'Port of call', value: 'Rotterdam (Europoort)' },
    ],
    compliance: ['MARPOL', 'SOLAS', 'ISM Code', 'OCIMF SIRE'],
  },
]

export function ShippingTabs() {
  return (
    <Tabs defaultValue="trucking" className="w-full">
      <TabsList className="h-auto flex flex-wrap gap-1 bg-bg border border-brand/[0.14] rounded-xl p-1 mb-10 w-full sm:w-auto">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="font-sans text-sm px-5 py-2 rounded-lg data-[state=active]:bg-brand data-[state=active]:text-white"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="space-y-10 mt-0">
          <div>
            <h3
              className="font-serif font-normal text-ink leading-tight mb-3"
              style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
            >
              {tab.headlinePlain}{' '}
              <em className="text-brand">{tab.headlineItalic}</em>
            </h3>
            <p className="font-sans text-base text-muted-foreground max-w-2xl leading-relaxed">
              {tab.positioning}
            </p>
          </div>

          <ServiceFeatureGrid items={tab.features} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <SpecTable rows={tab.specs} showMethod={false} />

            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-3">
                Regulatory Framework
              </p>
              <div className="flex flex-wrap gap-2">
                {tab.compliance.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-xs font-medium text-ink px-3 py-1.5 rounded-md border border-brand/20 bg-brand/[0.06]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
