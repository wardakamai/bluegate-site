'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const ITEMS = [
  {
    value: 'short-term',
    trigger: 'Short-term Leasing',
    body: 'Month-to-month tank capacity for seasonal product positioning, arbitrage windows, and trial flows. Minimum commitment of one calendar month. Tariffs are quoted on a per-m³/month basis with agreed throughput volume included.',
  },
  {
    value: 'long-term',
    trigger: 'Long-term Leasing',
    body: 'Dedicated tank capacity under annual or multi-year agreements. Fixed tariff structure with volume-tier throughput rebates. Site access, third-party inspection rights, and daily inventory reports are included as standard across all long-term agreements.',
  },
  {
    value: 'throughput',
    trigger: 'Throughput Agreements',
    body: 'Volume-based terminal access without fixed tank dedication. Suited to regular pipeline injections or marine discharge where product does not require extended storage. Tariffs are indexed to Platts Rotterdam Barges or agreed differentials per barrel or per metric tonne.',
  },
  {
    value: 'blending',
    trigger: 'Storage + Blending Packages',
    body: 'Combined storage and in-line blending service for grade production, specification adjustment, or density correction. Blending tolerance of ±0.5%. Product can be stored, blended, and shipped under a single custody chain with full documentation from receipt to bill of lading.',
  },
] as const

export function OilStorageAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {ITEMS.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="rounded-xl border border-brand/[0.14] bg-bg px-5 data-[state=open]:border-brand/30"
        >
          <AccordionTrigger className="font-serif text-lg font-normal text-ink py-4 hover:no-underline hover:text-brand transition-colors">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-4">
            {item.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
