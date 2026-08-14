import Image from 'next/image';
import { site } from '@/config/site';

const ABOUT_IMAGE = '/images/hero-about.jpg';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-40 md:py-56"
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
        <div className="bg-page/84 absolute inset-0" aria-hidden="true" />
        <div
          className="from-brand/[0.18] absolute inset-0 bg-gradient-to-tr via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <p className="text-brand/70 mb-6 font-sans text-[11px] font-medium tracking-[0.14em] uppercase">
          Our Story
        </p>
        <h1
          className="text-ink mb-8 font-serif leading-none font-normal tracking-tight"
          style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
        >
          A New Petroleum Logistics <em className="text-brand">Business.</em>
        </h1>
        <p className="text-ink/65 max-w-2xl font-sans text-lg leading-relaxed md:text-xl">
          Blue Gate Tank Farm is the petroleum logistics and commercial support business operated by
          Blue Gate Shipping and Trade B.V., established in {site.founded} and based in Rotterdam.
        </p>
      </div>
    </section>
  );
}
