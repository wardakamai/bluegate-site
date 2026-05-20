import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2400&q=80'

interface FinalCtaProps {
  heading: React.ReactNode
  subline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  imageUrl?: string
}

export function FinalCta({
  heading,
  subline,
  primaryCta,
  secondaryCta,
  imageUrl = DEFAULT_IMAGE,
}: FinalCtaProps) {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" aria-label="Call to action">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl}
          alt="Petroleum storage tank farm at night — illuminated tanks and pipeline infrastructure"
          fill
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-page/86" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-brand/[0.18] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        <ScrollReveal>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            {heading}
          </h2>
          <p className="font-sans text-lg text-ink/65 max-w-xl mx-auto leading-relaxed mb-10">
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
              className="border-ink/25 text-ink hover:bg-ink/[0.08] hover:border-ink/40 h-11 px-7 text-sm font-medium bg-transparent"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
