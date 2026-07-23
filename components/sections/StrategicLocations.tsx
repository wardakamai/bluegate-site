import { ScrollReveal } from '@/components/ui/ScrollReveal'

const TERMINALS = [
  { name: 'Rotterdam', lon: 4.5, lat: 51.9, primary: true },
  { name: 'Fujairah', lon: 56.3, lat: 25.1, primary: false },
  { name: 'Houston', lon: -95.4, lat: 29.7, primary: false },
  { name: 'Jurong', lon: 103.7, lat: 1.32, primary: false },
  { name: 'Zhoushan', lon: 122.1, lat: 30.0, primary: false },
]

function toSvg(lon: number, lat: number) {
  return {
    cx: ((lon + 180) * 1000) / 360,
    cy: ((90 - lat) * 500) / 180,
  }
}

export function StrategicLocations() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Global presence">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — narrative */}
          <ScrollReveal>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
              Global Presence
            </p>
            <h2
              className="font-serif font-normal text-ink leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Positioned at the Heart{' '}
              <em className="text-brand">of Energy Trade.</em>
            </h2>
            <div className="space-y-4 font-sans text-base text-muted-foreground leading-relaxed">
              <p>
                Rotterdam sits at the crossroads of European energy logistics. As the
                continent&apos;s largest cargo port, it gives Blue Gate direct access to ARA
                pipeline grids, Rhine-corridor inland waterways, and deep-water berths for
                VLCC-class vessels.
              </p>
              <p>
                Our strategic outposts in Fujairah, Houston, Jurong, and Zhoushan — capacities
                positioned pending final client confirmation — extend the same storage and
                throughput capabilities to the Middle East, the Gulf Coast refining complex, and
                two of Asia&apos;s busiest bunkering hubs.
              </p>
              <p>
                Five time zones, one operations standard. Every terminal runs the same HSE
                protocols, the same documentation chain, and the same 24-hour response commitment.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-brand/[0.12]">
              {TERMINALS.map((t) => (
                <div key={t.name}>
                  <p className="font-mono text-sm font-medium text-ink">{t.name}</p>
                  <p className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.06em]">
                    {t.primary ? 'Primary hub' : 'TBC'}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — SVG world map */}
          <ScrollReveal delay={0.15}>
            <div
              className="rounded-xl overflow-hidden p-2"
              style={{ boxShadow: '0 0 0 1px rgba(208,0,24,0.22), 0 8px 40px rgba(208,0,24,0.1)' }}
            >
              <svg
                viewBox="0 0 1000 500"
                aria-label="World map highlighting Blue Gate terminal locations"
                role="img"
                className="w-full h-auto"
                style={{ background: '#0C0C0F' }}
              >
                {/* Continent fills — dark neutral elevated on canvas */}
                <path d="M100 75 L290 68 L310 130 L295 200 L240 260 L180 280 L120 250 L85 175 Z" fill="#1C1C20" />
                <path d="M175 285 L295 275 L310 345 L290 435 L210 455 L160 390 Z" fill="#1C1C20" />
                <path d="M430 70 L530 68 L545 130 L510 160 L460 170 L435 140 Z" fill="#1C1C20" />
                <path d="M435 175 L580 172 L575 395 L490 415 L440 360 L430 270 Z" fill="#1C1C20" />
                <path d="M535 60 L880 55 L885 175 L830 280 L720 305 L620 290 L555 220 L535 140 Z" fill="#1C1C20" />
                <path d="M760 315 L920 308 L935 415 L800 430 L760 390 Z" fill="#1C1C20" />
                <path d="M250 30 L360 28 L355 75 L265 80 Z" fill="#161618" />

                {/* Terminal markers */}
                {TERMINALS.map((t) => {
                  const { cx, cy } = toSvg(t.lon, t.lat)
                  const colour = t.primary ? '#D00018' : '#6B1A1A'
                  const glowColour = t.primary ? 'rgba(208,0,24,0.28)' : 'rgba(107,26,26,0.2)'
                  return (
                    <g key={t.name}>
                      <circle cx={cx} cy={cy} r={t.primary ? 20 : 14} fill={glowColour} />
                      <circle cx={cx} cy={cy} r={t.primary ? 12 : 8} fill={glowColour} />
                      <circle cx={cx} cy={cy} r={t.primary ? 5 : 4} fill={colour} />
                      <text
                        x={cx}
                        y={cy - 22}
                        textAnchor="middle"
                        fontSize="14"
                        fontFamily="var(--font-jetbrains-mono, monospace)"
                        fill={colour}
                        fontWeight="500"
                      >
                        {t.name}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
