import Image from 'next/image';
import type { Product } from '@/config/products';

const CATEGORY_COLOURS: Record<string, string> = {
  AVIATION: 'text-sky-400 bg-sky-400/10 border-sky-400/25',
  DIESEL: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  'FUEL OIL': 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  CRUDE: 'text-brand bg-brand/10 border-brand/25',
};

interface ProductHeroProps {
  product: Product;
  heading?: string;
}

export function ProductHero({ product, heading }: ProductHeroProps) {
  const pillClass = CATEGORY_COLOURS[product.category] ?? 'text-brand bg-brand/10 border-brand/25';

  return (
    <section className="bg-grad-2 py-20 md:py-28" aria-label={`${product.name} product hero`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr]">
          {/* Text — 60% */}
          <div>
            <span
              className={`mb-6 inline-flex items-center rounded border px-2.5 py-1 text-[10px] font-medium tracking-[0.10em] uppercase ${pillClass}`}
            >
              {product.category}
            </span>

            <h1
              className="text-ink mb-6 font-serif leading-none font-normal tracking-tight"
              style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
            >
              {heading ?? product.name}
            </h1>

            <p className="text-ink/65 max-w-xl font-sans text-base leading-relaxed md:text-lg">
              {product.shortPositioning}
            </p>
          </div>

          {/* Image — 40% */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={product.heroImage}
              alt={product.heroImageAlt}
              fill
              priority
              fetchPriority="high"
              quality={80}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="bg-page/30 absolute inset-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
