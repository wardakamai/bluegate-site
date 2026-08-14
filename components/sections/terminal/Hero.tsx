import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HERO_IMAGE = '/images/hero-terminal.jpg';

export function TerminalHero() {
  return (
    <section className="relative flex min-h-[80svh] flex-col" aria-label="Energy markets hero">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Petroleum terminal infrastructure at a marine port"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="bg-page/82 absolute inset-0" aria-hidden="true" />
        <div
          className="from-brand/[0.18] absolute inset-0 bg-gradient-to-br via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-28 md:py-36">
        <p className="text-ink/50 mb-6 font-sans text-[11px] font-medium tracking-[0.14em] uppercase">
          Energy Markets
        </p>

        <h1
          className="text-ink mb-8 font-serif leading-none font-normal tracking-tight"
          style={{ fontSize: 'clamp(44px, 6.5vw, 88px)' }}
        >
          Oil Tank Farm Locations:
          <br />
          <em className="text-brand">Rotterdam, Houston &amp; Jurong.</em>
        </h1>

        <p className="text-ink/65 mb-10 max-w-2xl font-sans text-lg leading-relaxed md:text-xl">
          Blue Gate Tank Farm is based in Rotterdam and supports petroleum tank storage capacity
          enquiries for clients working across Rotterdam, Houston and Jurong, Singapore.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-brand text-primary-foreground hover:bg-brand-steel h-11 px-6 text-sm font-medium"
          >
            <Link href="/contact?intent=quote">Submit Storage Requirement →</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-ink/25 text-ink hover:bg-ink/[0.08] hover:border-ink/40 h-11 bg-transparent px-6 text-sm font-medium"
          >
            <a href="#markets">Explore Markets</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
