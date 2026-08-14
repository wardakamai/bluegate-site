import type { Metadata } from 'next';
import Script from 'next/script';
import { pageMeta } from '@/lib/meta';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';
import { Activity, Zap, Thermometer, Wind } from 'lucide-react';
import { ServiceHero } from '@/components/sections/services/ServiceHero';
import { ServiceFeatureGrid } from '@/components/sections/services/ServiceFeatureGrid';
import { SpecTable } from '@/components/sections/services/SpecTable';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = pageMeta({
  title: 'Fuel Testing Laboratory Rotterdam | Blue Gate',
  description:
    'On-site ASTM petroleum testing laboratory at our Rotterdam oil tank farm. Flash point, distillation, sulphur, density and more. Fast turnaround, chain of custody.',
  path: 'services/laboratory',
});

const TEST_CAPABILITIES = [
  { property: 'Distillation profile', value: 'IBP, 10%, 50%, 90%, FBP', method: 'ASTM D86' },
  { property: 'Flash point', value: 'Pensky-Martens closed cup', method: 'ASTM D93' },
  { property: 'Sulphur content', value: 'UV fluorescence', method: 'ASTM D5453' },
  { property: 'Density at 15°C', value: 'Digital oscillating U-tube', method: 'ASTM D4052' },
  { property: 'Kinematic viscosity', value: 'Glass capillary viscometer', method: 'ASTM D445' },
  { property: 'Water content', value: 'Karl Fischer titration', method: 'ASTM D6304' },
  { property: 'Sediment by extraction', value: 'Gravimetric', method: 'ASTM D473' },
  { property: 'Cetane index (calculated)', value: 'Four-variable equation', method: 'ASTM D976' },
  { property: 'Freeze point (Jet A1)', value: 'Automatic cold-stage', method: 'ASTM D2386' },
  { property: 'Copper strip corrosion', value: '3 hr at 50°C', method: 'ASTM D130' },
  { property: 'Water & sediment (centrifuge)', value: 'Volume percent', method: 'ASTM D2709' },
  { property: 'CFPP', value: 'Cold filter plugging point', method: 'EN 116' },
];

const EQUIPMENT = [
  {
    icon: Activity,
    title: 'Gas Chromatograph',
    body: 'Flame ionisation detector GC for hydrocarbon-type analysis, BTEX quantification, and detailed distillation fingerprinting of Jet A1 and diesel grades.',
  },
  {
    icon: Zap,
    title: 'ICP-OES Spectrometer',
    body: 'Inductively coupled plasma optical emission spectrometer for trace metal analysis — vanadium, nickel, sodium, and silicon in fuel oil and crude grades.',
  },
  {
    icon: Thermometer,
    title: 'Automatic Distillation Unit',
    body: 'Automated ASTM D86 distillation apparatus with precision temperature control. Three-unit redundancy ensures uninterrupted throughput during high-volume sampling periods.',
  },
  {
    icon: Wind,
    title: 'CFPP Analyser',
    body: 'Automated cold filter plugging point analyser for EN590 diesel grade verification. Critical for seasonal CFPP class confirmation before product release.',
  },
];

const CHAIN_OF_CUSTODY = [
  'Samples registered on receipt with unique batch code and custody seal',
  'Sample integrity photograph taken at time of acceptance',
  'Sub-samples split and archived for 90 days post-analysis',
  'Analysis conducted by named analyst; results counter-signed by laboratory supervisor',
  'Certificates of Analysis issued with analyst name, date, instrument ID, and method reference',
  'Electronic copies transmitted within agreed turnaround window; originals retained on file',
];

const SERVICE_JSONLD = serviceSchema({
  name: 'Fuel Testing Laboratory Rotterdam',
  description:
    'On-site ASTM petroleum testing laboratory at our Rotterdam oil tank farm. Flash point, distillation, sulphur, density and more. Same-day certificates.',
  serviceType: 'Petroleum Laboratory Testing',
  path: '/services/laboratory',
});
const BREADCRUMB_JSONLD = breadcrumbSchema([
  { name: 'Home', url: 'https://bluegou.com' },
  { name: 'Services', url: 'https://bluegou.com/services' },
  { name: 'Laboratory', url: 'https://bluegou.com/services/laboratory' },
]);

export default function LaboratoryPage() {
  return (
    <>
      <Script
        id="lab-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <Script
        id="lab-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
      <main>
        <ServiceHero
          label="Laboratory"
          headlinePlain="On-Site Testing."
          headlineItalic="ASTM-Grade Results."
          subdeck="Twelve standard test methods conducted in the on-site Rotterdam laboratory. Certificates of Analysis issued the same day for time-critical loading and release decisions."
          imageUrl="/images/service-laboratory.jpg"
          imageAlt="Blue Gate petroleum testing laboratory Rotterdam"
        />

        {/* Test capabilities */}
        <section className="bg-page py-20 md:py-28" aria-label="Test capabilities">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                Test Methods
              </p>
              <h2
                className="text-ink mb-12 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                Twelve Tests. <em className="text-brand">All Standard Methods.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <SpecTable rows={TEST_CAPABILITIES} />
            </ScrollReveal>
          </div>
        </section>

        {/* Equipment */}
        <section className="bg-grad-1 py-20 md:py-28" aria-label="Laboratory equipment">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                Instrumentation
              </p>
              <h2
                className="text-ink mb-12 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                Purpose-Built <em className="text-brand">Equipment.</em>
              </h2>
            </ScrollReveal>
            <ServiceFeatureGrid items={EQUIPMENT} />
          </div>
        </section>

        {/* Turnaround times */}
        <section className="bg-page py-20 md:py-28" aria-label="Turnaround times">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
              <ScrollReveal>
                <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  Turnaround Times
                </p>
                <h2
                  className="text-ink mb-6 font-serif leading-tight font-normal"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                >
                  Results When <em className="text-brand">You Need Them.</em>
                </h2>
                {/* TODO: confirm with client — exact turnaround windows */}
                <div className="text-muted-foreground space-y-4 font-sans text-base leading-relaxed">
                  <p>
                    Standard analysis — including flash point, density, distillation, and sulphur —
                    is completed within 4 – 6 hours of sample acceptance during normal laboratory
                    hours.
                  </p>
                  <p>
                    Priority turnaround for time-critical loading decisions is available with
                    results within 2 hours of receipt, subject to current laboratory workload.
                    Out-of-hours analysis can be arranged by prior arrangement.
                  </p>
                  <p className="text-xs italic">
                    {/* TODO: confirm with client — exact turnaround windows */}
                    Indicative only. Exact turnaround windows subject to confirmation with
                    operations team.
                  </p>
                </div>
              </ScrollReveal>

              {/* Chain of custody */}
              <ScrollReveal delay={0.1}>
                <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  Chain of Custody
                </p>
                <h3
                  className="text-ink mb-5 font-serif leading-snug font-normal"
                  style={{ fontSize: 'clamp(22px, 2.8vw, 36px)' }}
                >
                  Sample Integrity. <em className="text-brand">Preserved.</em>
                </h3>
                <ul className="space-y-3" aria-label="Chain of custody procedures">
                  {CHAIN_OF_CUSTODY.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="bg-brand mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground font-sans text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="bg-grad-2 border-brand/[0.10] border-t py-16 md:py-20"
          aria-label="Submit sample"
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollReveal>
              <h2
                className="text-ink mb-4 font-serif leading-tight font-normal"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              >
                Ready to Submit <em className="text-brand">a Sample?</em>
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl font-sans text-base leading-relaxed">
                Contact the laboratory team with your product grade, required tests, and sample
                dispatch method. We will confirm receipt protocols and expected turnaround on the
                same day.
              </p>
              <Button
                asChild
                className="bg-brand hover:bg-brand-steel h-11 px-8 text-sm font-medium text-white"
              >
                <Link href="/contact?intent=quote">Submit Sample →</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
