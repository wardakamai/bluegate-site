import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface ServiceHeroProps {
  label: string
  headlinePlain: string
  headlineItalic: string
  subdeck: string
  imageUrl: string
}

export function ServiceHero({
  label,
  headlinePlain,
  headlineItalic,
  subdeck,
  imageUrl,
}: ServiceHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
      aria-label={label}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl}
          alt=""
          fill
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-page/88" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-brand/[0.10] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            {label}
          </p>
          <h1
            className="font-serif font-normal text-ink leading-tight mb-6"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
          >
            {headlinePlain}{' '}
            <em className="text-brand">{headlineItalic}</em>
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {subdeck}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
