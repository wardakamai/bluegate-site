import { StatTile } from './StatTile';

const STATS = [
  { value: 2025, suffix: '', label: 'Established' },
  { value: 4, suffix: '', label: 'Core Products' },
  { value: 24, suffix: 'h', label: 'Enquiry Response' },
] as const;

export function HeroStats() {
  return (
    <div className="bg-bg border-border-soft border-b" aria-label="Key facts">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3">
        {STATS.map((stat) => (
          <StatTile key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </div>
  );
}
