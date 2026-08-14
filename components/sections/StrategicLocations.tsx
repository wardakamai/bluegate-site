import { ScrollReveal } from '@/components/ui/ScrollReveal';

const TERMINALS = [
  { name: 'Rotterdam', lon: 4.5, lat: 51.9, primary: true },
  { name: 'Houston', lon: -95.4, lat: 29.7, primary: false },
  { name: 'Singapore', lon: 103.8, lat: 1.35, primary: false },
];

function toSvg(lon: number, lat: number) {
  return {
    cx: ((lon + 180) * 1000) / 360,
    cy: ((90 - lat) * 500) / 180,
  };
}

export function StrategicLocations() {
  return (
    <section className="bg-grad-1 py-20 md:py-28" aria-label="Global presence">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — narrative */}
          <ScrollReveal>
            <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
              Global Presence
            </p>
            <h2
              className="text-ink mb-6 font-serif leading-tight font-normal"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Positioned at the Heart <em className="text-brand">of Energy Trade.</em>
            </h2>
            <div className="text-muted-foreground space-y-4 font-sans text-base leading-relaxed">
              <p>
                Blue Gate Tank Farm is based in Rotterdam, which sits at the crossroads of European
                energy logistics — the continent&apos;s largest cargo port and a leading
                refined-products and crude-oil trading hub.
              </p>
              <p>
                From there, we provide petroleum logistics and commercial support services for
                clients working across major energy markets, including the Gulf Coast refining
                complex around Houston and the Asia-Pacific trading hub of Singapore.
              </p>
              <p>One point of contact, wherever your counterparties and cargo are moving.</p>
            </div>

            <div className="border-brand/[0.12] mt-8 grid grid-cols-3 gap-4 border-t pt-8">
              {TERMINALS.map((t) => (
                <div key={t.name}>
                  <p className="text-ink font-mono text-sm font-medium">{t.name}</p>
                  <p className="text-muted-foreground font-sans text-[11px] tracking-[0.06em] uppercase">
                    {t.primary ? 'Rotterdam HQ' : 'Market Coverage'}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — SVG world map */}
          <ScrollReveal delay={0.15}>
            <div
              className="overflow-hidden rounded-xl p-2"
              style={{ boxShadow: '0 0 0 1px rgba(208,0,24,0.22), 0 8px 40px rgba(208,0,24,0.1)' }}
            >
              <svg
                viewBox="0 0 1000 500"
                aria-label="World map highlighting energy markets Blue Gate Tank Farm works across"
                role="img"
                className="h-auto w-full"
                style={{ background: '#0C0C0F' }}
              >
                {/* Continent fills — dark neutral elevated on canvas */}
                <path
                  d="M100 75 L290 68 L310 130 L295 200 L240 260 L180 280 L120 250 L85 175 Z"
                  fill="#1C1C20"
                />
                <path d="M175 285 L295 275 L310 345 L290 435 L210 455 L160 390 Z" fill="#1C1C20" />
                <path d="M430 70 L530 68 L545 130 L510 160 L460 170 L435 140 Z" fill="#1C1C20" />
                <path d="M435 175 L580 172 L575 395 L490 415 L440 360 L430 270 Z" fill="#1C1C20" />
                <path
                  d="M535 60 L880 55 L885 175 L830 280 L720 305 L620 290 L555 220 L535 140 Z"
                  fill="#1C1C20"
                />
                <path d="M760 315 L920 308 L935 415 L800 430 L760 390 Z" fill="#1C1C20" />
                <path d="M250 30 L360 28 L355 75 L265 80 Z" fill="#161618" />

                {/* Terminal markers */}
                {TERMINALS.map((t) => {
                  const { cx, cy } = toSvg(t.lon, t.lat);
                  const colour = t.primary ? '#D00018' : '#6B1A1A';
                  const glowColour = t.primary ? 'rgba(208,0,24,0.28)' : 'rgba(107,26,26,0.2)';
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
                  );
                })}
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
