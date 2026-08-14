import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const DEFAULT_IMAGE = '/images/cta-home.jpg';

interface FinalCtaProps {
  heading: React.ReactNode;
  subline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageUrl?: string;
}

export function FinalCta({
  heading,
  subline,
  primaryCta,
  secondaryCta,
  imageUrl = DEFAULT_IMAGE,
}: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" aria-label="Call to action">
      <div className="absolute inset-0 -z-10" data-animate="image-reveal">
        <Image
          src={imageUrl}
          alt="Blue Gate Rotterdam oil tank farm at night"
          fill
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="bg-page/86 absolute inset-0" aria-hidden="true" />
        <div
          className="from-brand/[0.18] absolute inset-0 bg-gradient-to-tr via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        <ScrollReveal>
          <h2
            className="text-ink mb-6 font-serif leading-tight font-normal"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            {heading}
          </h2>
          <p className="text-ink/65 mx-auto mb-10 max-w-xl font-sans text-lg leading-relaxed">
            {subline}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-brand text-primary-foreground hover:bg-brand-steel h-11 px-7 text-sm font-medium"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-ink/25 text-ink hover:bg-ink/[0.08] hover:border-ink/40 h-11 bg-transparent px-7 text-sm font-medium"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
