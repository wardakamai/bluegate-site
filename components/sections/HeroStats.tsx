import { StatTile } from './StatTile'

const STATS = [
  { value: 16, suffix: '',  label: 'Years Experience' },
  { value: 5,  suffix: '',  label: 'Terminal Hubs' },
  { value: 4,  suffix: '',  label: 'Core Products' },
  { value: 24, suffix: '/7', label: 'Operations' },
] as const

export function HeroStats() {
  return (
    <div
      className="bg-bg border-b border-border-soft"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <StatTile key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </div>
  )
}
