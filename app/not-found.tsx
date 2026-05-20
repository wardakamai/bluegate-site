import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { site } from '@/config/site'

export default function NotFound() {
  return (
    <div className="bg-page flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brand">404</p>

        <h1 className="font-serif text-5xl font-normal leading-tight text-ink md:text-6xl">
          Page not <em className="text-brand">found.</em>
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          That page doesn&apos;t exist or has moved. Use the links below to reach the right desk.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-steel transition-colors focus-visible:outline-2 focus-visible:outline-brand"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Return home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-brand/30 px-6 py-3 text-sm font-medium text-ink hover:border-brand/60 transition-colors focus-visible:outline-2 focus-visible:outline-brand"
          >
            Contact operations →
          </Link>
        </div>

        <nav aria-label="Quick links" className="space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
            Quick links
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-brand">
            {[
              ['Services', '/services'],
              ['Terminal', '/terminal'],
              ['Products', '/products'],
              ['Storage Facility', '/storage-facility'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-brand-steel transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <p className="font-mono text-xs text-muted-foreground">
          Urgent?{' '}
          <a href={`mailto:${site.contact.email}`} className="text-brand hover:underline">
            {site.contact.email}
          </a>
          {' · '}
          <a href={site.contact.phoneLink} className="text-brand hover:underline">
            {site.contact.phone}
          </a>
        </p>
      </div>
    </div>
  )
}
