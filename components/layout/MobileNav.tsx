'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { primaryNav, ctaPrimary, site } from '@/config/site';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          className="text-ink lg:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-bg border-border-soft flex w-80 flex-col p-0">
        <SheetHeader className="border-border-soft border-b px-6 py-4">
          <SheetTitle asChild>
            <Logo variant="white" />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
          <Accordion type="single" collapsible>
            {primaryNav.map((item) =>
              item.children ? (
                <AccordionItem key={item.href} value={item.href} className="border-0">
                  <AccordionTrigger className="text-ink hover:text-brand hover:bg-muted rounded-md px-3 py-2.5 text-sm font-medium hover:no-underline">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-0">
                    <ul className="space-y-0.5 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose asChild>
                            <Link
                              href={child.href}
                              className="text-muted-foreground hover:text-brand hover:bg-muted block rounded-md px-3 py-2 text-sm transition-colors"
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
                      className="text-ink hover:text-brand hover:bg-muted block rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
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

        <div className="border-border-soft space-y-5 border-t px-6 pt-5 pb-8">
          <SheetClose asChild>
            <Button
              asChild
              className="bg-brand text-primary-foreground hover:bg-brand-steel h-10 w-full"
            >
              <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
            </Button>
          </SheetClose>
          <address className="text-muted-foreground space-y-1.5 text-xs not-italic">
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
  );
}
