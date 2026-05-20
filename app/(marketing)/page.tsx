export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen gap-6 px-6">
      <p className="text-sm uppercase tracking-widest text-brand-steel font-sans font-medium">
        Blue Gate Shipping and Trade B.V.
      </p>
      <h1 className="font-serif text-center leading-tight text-ink"
          style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.02em', fontWeight: 400 }}>
        Petroleum Storage.{' '}
        <em>Engineered for Reliability.</em>
      </h1>
      <p className="max-w-xl text-center font-sans text-muted-foreground text-lg">
        Rotterdam — the primary terminal for Jet A1, Diesel EN590, Fuel Oil D6, and Crude Oil.
        Founded 1964. Built for scale.
      </p>
      <a
        href="/contact?intent=quote"
        className="mt-4 inline-flex items-center gap-2 bg-brand text-primary-foreground px-6 py-3 font-sans font-medium text-sm hover:bg-brand-steel transition-colors focus-visible:outline-offset-2"
      >
        Request a Quote →
      </a>
    </main>
  );
}
