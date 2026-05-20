'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Logo } from './Logo'
import { primaryNav, ctaPrimary, site } from '@/config/site'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          className="lg:hidden text-ink"
        >
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-bg border-border-soft w-80 flex flex-col p-0">
        <SheetHeader className="border-b border-border-soft px-6 py-4">
          <SheetTitle asChild>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto py-4 px-3" aria-label="Mobile navigation">
          <Accordion type="single" collapsible>
            {primaryNav.map((item) =>
              item.children ? (
                <AccordionItem key={item.href} value={item.href} className="border-0">
                  <AccordionTrigger className="px-3 py-2.5 text-sm font-medium text-ink hover:text-brand hover:no-underline rounded-md hover:bg-muted">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-0 pt-0">
                    <ul className="space-y-0.5 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose asChild>
                            <Link
                              href={child.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-brand hover:bg-muted rounded-md transition-colors"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={item.href} className="border-0">
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-sm font-medium text-ink hover:text-brand hover:bg-muted rounded-md transition-colors"
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </div>
              ),
            )}
          </Accordion>
        </nav>

        <div className="border-t border-border-soft px-6 pt-5 pb-8 space-y-5">
          <SheetClose asChild>
            <Button
              asChild
              className="w-full bg-brand text-primary-foreground hover:bg-brand-steel h-10"
            >
              <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
            </Button>
          </SheetClose>
          <address className="not-italic text-xs text-muted-foreground space-y-1.5">
            <p>
              {site.address.street}, {site.address.postcode} {site.address.city}
            </p>
            <p>
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-brand transition-colors"
              >
                {site.contact.email}
              </a>
            </p>
            <p>
              <a href={site.contact.phoneLink} className="hover:text-brand transition-colors">
                {site.contact.phone}
              </a>
            </p>
          </address>
        </div>
      </SheetContent>
    </Sheet>
  )
}
