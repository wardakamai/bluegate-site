interface AtAGlanceStripProps {
  items: { label: string; value: string }[]
}

export function AtAGlanceStrip({ items }: AtAGlanceStripProps) {
  return (
    <section className="bg-ink py-12 md:py-16" aria-label="At-a-glance specifications">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-8 text-center">
          At a Glance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="font-mono font-medium text-bg leading-tight mb-2"
                style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
              >
                {item.value}
              </p>
              <p className="font-sans text-xs text-bg/50 uppercase tracking-[0.07em]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
