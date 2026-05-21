import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const HERO_IMAGE = '/images/hero-terminal.jpg'

export function TerminalHero() {
  return (
    <section
      className="relative flex flex-col min-h-[80svh]"
      aria-label="Terminal operations hero"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Blue Gate Rotterdam marine terminal with product tanker at berth"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-page/82" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand/[0.18] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 flex flex-col justify-center flex-1 py-28 md:py-36">
        <p className="font-sans text-[11px] uppercase tracking-[0.14em] font-medium text-ink/50 mb-6">
          Terminal Operations
        </p>

        <h1
          className="font-serif font-normal text-ink leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(44px, 6.5vw, 88px)' }}
        >
          Rotterdam Flagship.
          <br />
          <em className="text-brand">Three Global Extensions.</em>
        </h1>

        <p className="font-sans text-lg md:text-xl text-ink/65 max-w-2xl leading-relaxed mb-10">
          Blue Gate operates from a Rotterdam flagship terminal in the heart of the ARA corridor,
          with extensions in Fujairah, Houston, and Jurong. Together the network spans Europe, the
          Middle East, the US Gulf, and Asia-Pacific.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-brand text-primary-foreground hover:bg-brand-steel h-11 px-6 text-sm font-medium"
          >
            <Link href="/contact?intent=quote&terminal=rotterdam">Book Rotterdam Capacity →</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-ink/25 text-ink hover:bg-ink/[0.08] hover:border-ink/40 h-11 px-6 text-sm font-medium bg-transparent"
          >
            <a href="#network">Explore the Network</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
