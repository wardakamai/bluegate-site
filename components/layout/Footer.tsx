import Link from 'next/link'
import { Linkedin, MessageCircle } from 'lucide-react'
import { Logo } from './Logo'
import { site, primaryNav, ctaPrimary } from '@/config/site'
import { services } from '@/config/services'
import { products } from '@/config/products'

const productLinks = products.map((p) => ({ label: p.name, href: `/products/${p.slug}` }))

export function Footer() {
  const { address, contact, legal, socials, founded, name } = site

  return (
    <footer className="bg-page text-ink print:hidden" aria-label="Site footer">
      {/* 4-column grid */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-5">
          <Logo variant="white" className="h-9 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Blue Gate has operated oil storage terminals and tank farms since {founded}, connecting
            European and global commodity markets from our primary base in Rotterdam.
          </p>
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              aria-label="Blue Gate on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-ink text-sm transition-colors w-fit"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
          )}
        </div>

        {/* Col 2 — Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70">
            Navigation
          </h3>
          <ul className="space-y-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services & Products */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70">
            Services
          </h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-sm text-muted-foreground hover:text-ink transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70">
            Products
          </h3>
          <ul className="space-y-2">
            {productLinks.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-sm text-muted-foreground hover:text-ink transition-colors"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70">
            Contact
          </h3>
          <address className="not-italic text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>
              {address.street}
              <br />
              {address.postcode} {address.city}
              <br />
              {address.country}
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-ink transition-colors"
              >
                {contact.email}
              </a>
            </p>
            <p>
              <a href={contact.phoneLink} className="hover:text-ink transition-colors">
                {contact.phone}
              </a>
            </p>
          </address>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ok hover:text-ink transition-colors w-fit"
          >
            <MessageCircle size={15} aria-hidden="true" />
            WhatsApp Enquiry
          </a>
          <Link href={ctaPrimary.href} className="inline-flex items-center text-sm font-medium text-ink hover:text-brand transition-colors w-fit">
            {ctaPrimary.label}
          </Link>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-border-soft mx-auto max-w-7xl px-6 py-5">
        <p className="text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
          <span>© {new Date().getFullYear()} {name}</span>
          <span aria-hidden="true">·</span>
          <span>KVK {legal.kvk}</span>
          <span aria-hidden="true">·</span>
          <span>SAFE {legal.safe}</span>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="hover:text-ink transition-colors">Terms</Link>
          <span aria-hidden="true">·</span>
          <a href="/specs/refund-guarantee-policy.pdf" className="hover:text-ink transition-colors">
            Refund Guarantee Policy (PDF)
          </a>
        </p>
      </div>
    </footer>
  )
}
