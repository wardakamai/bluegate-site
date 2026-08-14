interface AtAGlanceStripProps {
  items: { label: string; value: string }[];
}

export function AtAGlanceStrip({ items }: AtAGlanceStripProps) {
  return (
    <section className="bg-ink py-12 md:py-16" aria-label="At-a-glance specifications">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-brand/70 mb-8 text-center font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
          At a Glance
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="text-bg mb-2 font-mono leading-tight font-medium"
                style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
              >
                {item.value}
              </p>
              <p className="text-bg/50 font-sans text-xs tracking-[0.07em] uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
