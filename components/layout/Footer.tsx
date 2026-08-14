import Link from 'next/link';
import { Linkedin, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { site, primaryNav, ctaPrimary } from '@/config/site';
import { services } from '@/config/services';
import { products } from '@/config/products';

const productLinks = products.map((p) => ({ label: p.name, href: `/products/${p.slug}` }));

export function Footer() {
  const { address, contact, legal, socials, founded, brandName } = site;

  return (
    <footer className="bg-page text-ink print:hidden" aria-label="Site footer">
      {/* 4-column grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-16 pb-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-5">
          <Logo variant="white" className="mb-4 h-10" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Blue Gate Tank Farm, established in {founded}, provides specialist petroleum logistics
            and commercial support services for energy-sector clients from our base in Rotterdam.
          </p>
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              aria-label="Blue Gate on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-ink inline-flex w-fit items-center gap-2 text-sm transition-colors"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
          )}
        </div>

        {/* Col 2 — Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-brand/70 text-[11px] font-medium tracking-[0.08em] uppercase">
            Navigation
          </h3>
          <ul className="space-y-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-ink text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services & Products */}
        <div className="flex flex-col gap-4">
          <h3 className="text-brand/70 text-[11px] font-medium tracking-[0.08em] uppercase">
            Services
          </h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-muted-foreground hover:text-ink text-sm transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-brand/70 mt-4 text-[11px] font-medium tracking-[0.08em] uppercase">
            Products
          </h3>
          <ul className="space-y-2">
            {productLinks.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-muted-foreground hover:text-ink text-sm transition-colors"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-brand/70 mt-4 text-[11px] font-medium tracking-[0.08em] uppercase">
            Guides
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/guides/what-is-an-oil-tank-farm"
                className="text-muted-foreground hover:text-ink text-sm transition-colors"
              >
                What Is an Oil Tank Farm?
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-brand/70 text-[11px] font-medium tracking-[0.08em] uppercase">
            Contact
          </h3>
          <address className="text-muted-foreground space-y-2 text-sm leading-relaxed not-italic">
            <p>
              {address.street}
              <br />
              {address.postcode} {address.city}
              <br />
              {address.country}
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-ink transition-colors">
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
            className="text-ok hover:text-ink inline-flex w-fit items-center gap-2 text-sm transition-colors"
          >
            <MessageCircle size={15} aria-hidden="true" />
            WhatsApp Enquiry
          </a>
          <Link
            href={ctaPrimary.href}
            className="text-ink hover:text-brand inline-flex w-fit items-center text-sm font-medium transition-colors"
          >
            {ctaPrimary.label}
          </Link>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-border-soft mx-auto max-w-7xl border-t px-6 py-5">
        <p className="text-muted-foreground flex flex-wrap gap-x-3 gap-y-1 text-xs">
          <span>
            © {new Date().getFullYear()} {brandName}
          </span>
          <span aria-hidden="true">·</span>
          <span>KVK {legal.kvk}</span>
          <span aria-hidden="true">·</span>
          <span>Vestigingsnummer {legal.vestigingsnummer}</span>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="hover:text-ink transition-colors">
            Privacy Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="hover:text-ink transition-colors">
            Terms
          </Link>
        </p>
      </div>
    </footer>
  );
}
