import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ServiceHeroProps {
  label: string;
  headlinePlain: string;
  headlineItalic: string;
  subdeck: string;
  imageUrl: string;
  imageAlt: string;
}

export function ServiceHero({
  label,
  headlinePlain,
  headlineItalic,
  subdeck,
  imageUrl,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28" aria-label={label}>
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
          priority
          fetchPriority="high"
        />
        <div className="bg-page/88 absolute inset-0" aria-hidden="true" />
        <div
          className="from-brand/[0.10] absolute inset-0 bg-gradient-to-tr via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            {label}
          </p>
          <h1
            className="text-ink mb-6 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
          >
            {headlinePlain} <em className="text-brand">{headlineItalic}</em>
          </h1>
          <p className="text-muted-foreground max-w-2xl font-sans text-base leading-relaxed md:text-lg">
            {subdeck}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
