import { ScrollReveal } from '@/components/ui/ScrollReveal'

function SiteMapSvg() {
  return (
    <svg
      viewBox="0 0 480 360"
      className="w-full h-auto"
      aria-label="Schematic top-down layout of Rotterdam tank farm showing tank clusters, jetty, manifold area, control room, truck loading bays, and rail siding"
      role="img"
    >
      {/* Background */}
      <rect width="480" height="360" fill="var(--bg-cream)" rx="12" />

      {/* Perimeter bund */}
      <rect x="16" y="16" width="448" height="328" rx="8" fill="none" stroke="rgba(208,0,24,0.18)" strokeWidth="1.5" strokeDasharray="6 3" />

      {/* --- Tank cluster A: Crude / Floating Roof --- */}
      <rect x="28" y="28" width="130" height="100" rx="6" fill="rgba(208,0,24,0.06)" stroke="rgba(208,0,24,0.22)" strokeWidth="1" />
      {[0,1,2].map((i) => (
        <circle key={i} cx={56 + i * 38} cy={78} r={16} fill="rgba(208,0,24,0.10)" stroke="rgba(208,0,24,0.35)" strokeWidth="1" />
      ))}
      <text x="93" y="118" textAnchor="middle" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" fill="rgba(240,234,224,0.55)">CRUDE / EFR</text>

      {/* --- Tank cluster B: Distillates / IFR --- */}
      <rect x="172" y="28" width="130" height="100" rx="6" fill="rgba(208,0,24,0.06)" stroke="rgba(208,0,24,0.22)" strokeWidth="1" />
      {[0,1].map((i) => (
        <circle key={i} cx={200 + i * 46} cy={78} r={18} fill="rgba(208,0,24,0.10)" stroke="rgba(208,0,24,0.35)" strokeWidth="1" />
      ))}
      <text x="237" y="118" textAnchor="middle" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" fill="rgba(240,234,224,0.55)">EN590 / JET A1</text>

      {/* --- Tank cluster C: Heated (D6) --- */}
      <rect x="316" y="28" width="148" height="100" rx="6" fill="rgba(208,0,24,0.06)" stroke="rgba(208,0,24,0.22)" strokeWidth="1" />
      {[0,1].map((i) => (
        <rect key={i} x={330 + i * 52} y={50} width={36} height={36} rx="4" fill="rgba(208,0,24,0.10)" stroke="rgba(208,0,24,0.35)" strokeWidth="1" />
      ))}
      <text x="390" y="118" textAnchor="middle" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" fill="rgba(240,234,224,0.55)">D6 / HEATED</text>

      {/* --- Manifold area --- */}
      <rect x="28" y="152" width="120" height="44" rx="4" fill="rgba(208,0,24,0.08)" stroke="rgba(208,0,24,0.28)" strokeWidth="1" />
      <text x="88" y="178" textAnchor="middle" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" fill="rgba(240,234,224,0.55)">MANIFOLD</text>

      {/* --- Pipeline spine --- */}
      <line x1="148" y1="174" x2="340" y2="174" stroke="rgba(208,0,24,0.30)" strokeWidth="2" strokeDasharray="4 2" />
      <polygon points="340,170 350,174 340,178" fill="rgba(208,0,24,0.40)" />

      {/* --- Control room --- */}
      <rect x="172" y="148" width="136" height="52" rx="4" fill="rgba(208,0,24,0.08)" stroke="rgba(208,0,24,0.28)" strokeWidth="1" />
      <text x="240" y="178" textAnchor="middle" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" fill="rgba(240,234,224,0.55)">CONTROL ROOM</text>

      {/* --- Truck loading bays --- */}
      <rect x="28" y="224" width="180" height="52" rx="4" fill="rgba(208,0,24,0.06)" stroke="rgba(208,0,24,0.22)" strokeWidth="1" />
      {[0,1,2,3].map((i) => (
        <rect key={i} x={38 + i * 42} y={234} width={28} height={30} rx="2" fill="rgba(208,0,24,0.12)" stroke="rgba(208,0,24,0.30)" strokeWidth="1" />
      ))}
      <text x="118" y="291" textAnchor="middle" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" fill="rgba(240,234,224,0.55)">TRUCK BAYS</text>

      {/* --- Rail siding --- */}
      <rect x="230" y="224" width="234" height="36" rx="4" fill="rgba(208,0,24,0.06)" stroke="rgba(208,0,24,0.22)" strokeWidth="1" />
      <line x1="240" y1="242" x2="454" y2="242" stroke="rgba(208,0,24,0.35)" strokeWidth="1.5" />
      <line x1="240" y1="248" x2="454" y2="248" stroke="rgba(208,0,24,0.35)" strokeWidth="1.5" />
      {[0,1,2,3,4,5,6,7,8].map((i) => (
        <line key={i} x1={245 + i * 24} y1={238} x2={245 + i * 24} y2={252} stroke="rgba(208,0,24,0.25)" strokeWidth="1" />
      ))}
      <text x="347" y="273" textAnchor="middle" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" fill="rgba(240,234,224,0.55)">RAIL SIDING</text>

      {/* --- Jetty / marine --- */}
      <rect x="28" y="300" width="430" height="40" rx="4" fill="rgba(208,0,24,0.08)" stroke="rgba(208,0,24,0.28)" strokeWidth="1" />
      <text x="243" y="325" textAnchor="middle" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" fill="rgba(240,234,224,0.55)">MARINE JETTY — BERTHS 1–6</text>

      {/* Pipe connections tank-to-manifold */}
      <line x1="93" y1="128" x2="93" y2="152" stroke="rgba(208,0,24,0.22)" strokeWidth="1.5" />
      <line x1="237" y1="128" x2="237" y2="148" stroke="rgba(208,0,24,0.22)" strokeWidth="1.5" />
      <line x1="390" y1="128" x2="390" y2="174" stroke="rgba(208,0,24,0.22)" strokeWidth="1.5" />

      {/* Manifold-to-jetty */}
      <line x1="88" y1="196" x2="88" y2="300" stroke="rgba(208,0,24,0.18)" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  )
}

export function SiteOverview() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Rotterdam site overview">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Facility Overview
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-14"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Full-Site <em className="text-brand">Infrastructure.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="font-sans text-base text-ink/70 leading-relaxed">
                The Rotterdam facility occupies a dedicated site within the port complex, fully
                enclosed by secondary bunding to 110% of the largest tank. Three product clusters
                separate crude, distillates, and residuals into physically distinct areas,
                preventing cross-contamination and simplifying regulatory compliance.
              </p>
              <p className="font-sans text-base text-ink/70 leading-relaxed">
                A central manifold building interconnects all tank clusters, the marine jetty, the
                rail siding, and the truck loading hall. All process flows are metered and logged
                continuously in our terminal management system, generating automated
                custody-transfer documentation.
              </p>
              <p className="font-sans text-base text-ink/70 leading-relaxed">
                The control room operates 24/7, monitoring tank levels, temperatures, pressures,
                and leak-detection sensors across the full site. An independent fire-water network
                with foam-injection capability covers every tank bund.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border-soft p-4 bg-bg">
              <SiteMapSvg />
              <p className="font-mono text-[10px] text-muted-foreground mt-3 text-center">
                Schematic layout — not to scale · all tank IDs subject to client confirmation
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
