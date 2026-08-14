import { fetchQuotes, brentWtiSpread } from '@/lib/prices';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const revalidate = 900;

function fmtPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

interface SpreadItemProps {
  label: string;
  value: number;
  unit: string;
  indicative?: boolean;
  note?: string;
}

function SpreadItem({ label, value, unit, indicative = false, note }: SpreadItemProps) {
  return (
    <div className="flex min-w-[180px] flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground font-sans text-xs font-medium tracking-[0.07em] uppercase">
          {label}
        </span>
        {indicative && (
          <span className="bg-brand/10 text-brand rounded px-1.5 py-0.5 font-sans text-[10px] font-medium">
            Indicative
          </span>
        )}
      </div>
      <span className="text-ink font-mono text-2xl leading-none font-medium tabular-nums">
        {value >= 0 ? '+' : ''}
        {fmtPrice(value)}
      </span>
      <span className="text-muted-foreground font-sans text-xs">{unit}</span>
      {note && (
        <span className="text-muted-foreground/70 mt-0.5 font-sans text-[11px] italic">{note}</span>
      )}
    </div>
  );
}

export async function SpreadsAndCrack() {
  const quotes = await fetchQuotes();
  const spread = brentWtiSpread(quotes);

  const brentPrice = quotes.find((q) => q.symbol === 'BZ=F')?.price ?? null;
  const gasoilGallon = quotes.find((q) => q.symbol === 'HO=F')?.price ?? null;

  // Gasoil crack: (HO price in USD/gal × 42 gal/bbl) − Brent price in USD/bbl
  const gasoilCrack =
    brentPrice !== null && gasoilGallon !== null
      ? +(gasoilGallon * 42 - brentPrice).toFixed(2)
      : null;

  if (spread === null && gasoilCrack === null) return null;

  return (
    <section
      className="bg-page border-brand/[0.10] border-t py-12 md:py-16"
      aria-label="Spreads and crack spreads"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-8 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Spreads &amp; Crack
          </p>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {spread !== null && (
              <SpreadItem
                label="Brent–WTI Spread"
                value={spread}
                unit={`Brent ${spread >= 0 ? 'premium' : 'discount'} over WTI per barrel`}
              />
            )}

            {gasoilCrack !== null && (
              <SpreadItem
                label="Gasoil Crack Spread"
                value={gasoilCrack}
                unit="Gasoil (HO × 42) minus Brent, per barrel"
                indicative
                note="NYMEX HO × 42 gal/bbl minus ICE Brent. Not a firm offer."
              />
            )}
          </div>

          {/* TODO: expand with Platts/Argus reference rows when commercial subscription confirmed */}
        </ScrollReveal>
      </div>
    </section>
  );
}
