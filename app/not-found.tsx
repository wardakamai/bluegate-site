import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { site } from '@/config/site';

export default function NotFound() {
  return (
    <div className="bg-page flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-xl space-y-8 text-center">
        <p className="text-brand font-mono text-[11px] tracking-[0.08em] uppercase">404</p>

        <h1 className="text-ink font-serif text-5xl leading-tight font-normal md:text-6xl">
          Page not <em className="text-brand">found.</em>
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          That page doesn&apos;t exist or has moved. Use the links below to reach the right desk.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-brand hover:bg-brand-steel focus-visible:outline-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors focus-visible:outline-2"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Return home
          </Link>
          <Link
            href="/contact"
            className="border-brand/30 text-ink hover:border-brand/60 focus-visible:outline-brand inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2"
          >
            Contact operations →
          </Link>
        </div>

        <nav aria-label="Quick links" className="space-y-2">
          <p className="text-muted-foreground font-mono text-[10px] tracking-[0.08em] uppercase">
            Quick links
          </p>
          <div className="text-brand flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {[
              ['Services', '/services'],
              ['Terminal', '/terminal'],
              ['Products', '/products'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-brand-steel transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <p className="text-muted-foreground font-mono text-xs">
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
  );
}
