export function MapEmbed() {
  return (
    <div className="rounded-xl overflow-hidden border border-border-soft">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.003!2d4.546!3d51.906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a65e3a6f7d%3A0x0!2sPrinsenlaan+450%2C+3066+KD+Rotterdam!5e0!3m2!1sen!2snl!4v1"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map of Blue Gate Rotterdam terminal"
        aria-label="Map of Blue Gate Rotterdam terminal at Prinsenlaan 450, 3066 KD Rotterdam"
      />
      <div className="bg-bg px-5 py-3 flex items-center justify-between border-t border-border-soft">
        <p className="font-mono text-xs text-muted-foreground">
          Prinsenlaan 450, 3066 KD Rotterdam, Netherlands
        </p>
        <a
          href="https://maps.google.com/?q=Prinsenlaan+450,+3066+KD+Rotterdam,+Netherlands"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-brand hover:text-brand-steel transition-colors"
        >
          Open in Google Maps →
        </a>
      </div>
    </div>
  )
}
