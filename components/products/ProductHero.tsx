import Image from 'next/image'
import type { Product } from '@/config/products'

const CATEGORY_COLOURS: Record<string, string> = {
  AVIATION: 'text-sky-400 bg-sky-400/10 border-sky-400/25',
  DIESEL:   'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  'FUEL OIL': 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  CRUDE:    'text-brand bg-brand/10 border-brand/25',
}

interface ProductHeroProps {
  product: Product
}

export function ProductHero({ product }: ProductHeroProps) {
  const pillClass = CATEGORY_COLOURS[product.category] ?? 'text-brand bg-brand/10 border-brand/25'

  return (
    <section
      className="bg-grad-2 py-20 md:py-28"
      aria-label={`${product.name} product hero`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Text — 60% */}
          <div>
            <span
              className={`inline-flex items-center text-[10px] uppercase tracking-[0.10em] font-medium border rounded px-2.5 py-1 mb-6 ${pillClass}`}
            >
              {product.category}
            </span>

            <h1
              className="font-serif font-normal text-ink leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
            >
              {product.name}
            </h1>

            <p className="font-sans text-base md:text-lg text-ink/65 max-w-xl leading-relaxed">
              {product.shortPositioning}
            </p>
          </div>

          {/* Image — 40% */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src={product.heroImage}
              alt={`${product.name} — petroleum storage and handling`}
              fill
              priority
              quality={80}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-page/30" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
