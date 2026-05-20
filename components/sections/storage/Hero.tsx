import Image from 'next/image'
import Link from 'next/link'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=2400&q=80'

export function StorageHero() {
  return (
    <section
      className="relative flex flex-col min-h-[65svh]"
      aria-label="Rotterdam storage facility hero"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Aerial view of Rotterdam petroleum tank farm — rows of fixed and floating roof tanks"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-page/83" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-brand/[0.14] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 flex flex-col justify-center flex-1 py-24 md:py-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.14em] font-medium text-ink/50 mb-6">
          Storage Facility · Rotterdam
        </p>

        <h1
          className="font-serif font-normal text-ink leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
        >
          Rotterdam Tank Farm.
          <br />
          <em className="text-brand">Spec-Built Capacity.</em>
        </h1>

        <p className="font-sans text-lg md:text-xl text-ink/65 max-w-2xl leading-relaxed mb-6">
          Our flagship Rotterdam facility — fully bunded, multi-product, with dedicated tanks for
          Jet A1, EN590, Virgin Fuel Oil D6, and crude oil of various origins.
        </p>

        {/* Network note */}
        <p className="font-sans text-sm text-ink/50 border-l-2 border-brand/40 pl-4">
          Facility sheets for Fujairah, Houston, and Jurong available on request —{' '}
          <Link
            href="/contact?intent=quote&topic=facility-sheets"
            className="text-brand hover:text-brand-steel transition-colors"
          >
            Contact Operations →
          </Link>
        </p>
      </div>
    </section>
  )
}
