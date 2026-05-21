import { MapPin, Mail, Phone } from 'lucide-react'
import { site } from '@/config/site'

export function TopBar() {
  const { address, contact } = site
  const addressLine = `${address.street}, ${address.postcode} ${address.city}, ${address.country}`

  return (
    <div className="hidden md:block bg-page print:hidden" role="banner">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between py-3 my-1">
        {/* Left — address */}
        <address className="not-italic flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin size={11} className="shrink-0 opacity-70" aria-hidden="true" />
          {addressLine}
        </address>

        {/* Right — email + phone */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-ink transition-colors focus-visible:text-ink"
          >
            <Mail size={11} aria-hidden="true" />
            {contact.email}
          </a>
          <a
            href={contact.phoneLink}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-ink transition-colors focus-visible:text-ink"
          >
            <Phone size={11} aria-hidden="true" />
            {contact.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
