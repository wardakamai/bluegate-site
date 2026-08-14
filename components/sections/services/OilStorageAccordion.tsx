'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ITEMS = [
  {
    value: 'short-term',
    trigger: 'Short-Term Access',
    body: 'For seasonal product positioning, arbitrage windows, and trial flows, Blue Gate Tank Farm can discuss short-term storage access arrangements. Commercial terms are agreed case by case based on product, volume and duration.',
  },
  {
    value: 'long-term',
    trigger: 'Long-Term Access',
    body: 'For clients with recurring or sustained volume, Blue Gate Tank Farm can discuss longer-term storage access arrangements. Specific terms — including reporting cadence and inspection access — are set out in the applicable executed agreement.',
  },
  {
    value: 'throughput',
    trigger: 'Throughput Arrangements',
    body: 'For regular pipeline injections or marine discharge where product does not require extended storage, Blue Gate Tank Farm can discuss throughput-based arrangements suited to volume that moves through rather than sits in storage.',
  },
  {
    value: 'blending',
    trigger: 'Storage + Blending Enquiries',
    body: 'For clients requiring grade production or specification adjustment alongside storage, Blue Gate Tank Farm can discuss combined storage and blending requirements with qualified partners as part of the applicable agreement.',
  },
] as const;

export function OilStorageAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {ITEMS.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-brand/[0.14] bg-bg data-[state=open]:border-brand/30 rounded-xl border px-5"
        >
          <AccordionTrigger className="text-ink hover:text-brand py-4 font-serif text-lg font-normal transition-colors hover:no-underline">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-4 font-sans text-sm leading-relaxed">
            {item.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
