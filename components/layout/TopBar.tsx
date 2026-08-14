import { MapPin, Mail, Phone } from 'lucide-react';
import { site } from '@/config/site';

export function TopBar() {
  const { address, contact } = site;
  const addressLine = `${address.street}, ${address.postcode} ${address.city}, ${address.country}`;

  return (
    <div className="bg-page hidden md:block print:hidden" role="banner">
      <div className="mx-auto my-1 flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Left — address */}
        <address className="text-muted-foreground flex items-center gap-1.5 text-xs not-italic">
          <MapPin size={11} className="shrink-0 opacity-70" aria-hidden="true" />
          {addressLine}
        </address>

        {/* Right — email + phone */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href={`mailto:${contact.email}`}
            className="text-muted-foreground hover:text-ink focus-visible:text-ink flex items-center gap-1.5 transition-colors"
          >
            <Mail size={11} aria-hidden="true" />
            {contact.email}
          </a>
          <a
            href={contact.phoneLink}
            className="text-muted-foreground hover:text-ink focus-visible:text-ink flex items-center gap-1.5 transition-colors"
          >
            <Phone size={11} aria-hidden="true" />
            {contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
