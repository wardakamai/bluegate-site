import Image from 'next/image'
import { site } from '@/config/site'

const ABOUT_IMAGE = '/images/hero-about.jpg'

export function Hero() {
  return (
    <section
      className="relative py-40 md:py-56 overflow-hidden"
      aria-label="About Blue Gate — our story"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={ABOUT_IMAGE}
          alt="Blue Gate oil storage tank exterior detail"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-page/84" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-brand/[0.18] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <p className="font-sans text-[11px] uppercase tracking-[0.14em] font-medium text-brand/70 mb-6">
          Our Story
        </p>
        <h1
          className="font-serif font-normal text-ink leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
        >
          Over a Decade of{' '}
          <em className="text-brand">Trusted Storage.</em>
        </h1>
        <p className="font-sans text-lg md:text-xl text-ink/65 max-w-2xl leading-relaxed">
          Blue Gate Shipping and Trade B.V. has operated oil storage terminals since{' '}
          {site.founded}. Over a decade of handling Jet A1, diesel, fuel oil, and crude oil across
          Rotterdam&apos;s ARA network has produced something no start-up can replicate:
          accumulated technical knowledge, built one meticulous storage cycle at a time.
        </p>
      </div>
    </section>
  )
}
