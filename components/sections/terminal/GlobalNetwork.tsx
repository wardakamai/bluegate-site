import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { secondaryTerminals } from '@/config/terminals'
import { Button } from '@/components/ui/button'

const HIGHLIGHTS: Record<string, string[]> = {
  fujairah: [
    'Outside the Strait of Hormuz — geopolitically resilient bunkering position',
    'World-class crude-blending hub serving Middle East and Indian Ocean flows',
    'Multi-product handling: crude, residuals, distillates, aviation fuel',
    'Direct access to key VLCC anchorage and lightering zones',
  ],
  houston: [
    'Direct pipeline connectivity to US Gulf Coast refinery complex',
    'Extensive marine export infrastructure on the Ship Channel',
    'Serves Americas crude and distillate demand centres',
    'ADR/DOT-compliant road and rail dispatch options',
  ],
  jurong: [
    'Strait of Malacca access — the world\'s busiest petroleum trade route',
    'Asia-Pacific bunkering and bulk re-supply specialist',
    'Multi-modal connectivity into ASEAN inland markets',
    'Aviation fuel capability serving regional aviation growth',
  ],
}

export function GlobalNetwork() {
  return (
    <section
      id="network"
      className="bg-grad-1 py-20 md:py-28"
      aria-label="Global terminal network"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-brand/70 mb-4">
            Global Network
          </p>
          <h2
            className="font-serif font-normal text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Three Strategic <em className="text-brand">Extensions.</em>
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Beyond Rotterdam, our network reaches three of the world&apos;s most consequential
            energy crossroads — Fujairah, Houston, and Jurong.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {secondaryTerminals.map((terminal, i) => {
            const highlights = HIGHLIGHTS[terminal.id] ?? []
            const isEven = i % 2 === 0

            return (
              <ScrollReveal key={terminal.id} delay={0.05}>
                <div
                  id={terminal.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start`}
                >
                  {/* Text block — alternates sides on desktop */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-start gap-4 mb-5">
                      <span className="text-5xl leading-none" aria-hidden="true">
                        {terminal.flag}
                      </span>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-serif text-3xl font-normal text-ink">
                            {terminal.city}
                          </h3>
                          {terminal.status === 'tbc' && (
                            <span className="inline-flex items-center text-[10px] uppercase tracking-[0.08em] font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded px-2 py-0.5">
                              Status to be confirmed
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-sm text-muted-foreground">{terminal.country}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-5">
                      <MapPin size={12} className="text-muted-foreground" aria-hidden="true" />
                      <span className="font-sans text-xs text-muted-foreground uppercase tracking-[0.06em]">
                        {terminal.region}
                      </span>
                    </div>

                    <p className="font-sans text-sm text-ink/65 leading-relaxed mb-5">
                      {terminal.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-sans text-sm text-ink/65">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="outline"
                      className="border-brand/40 text-brand hover:bg-brand/[0.08] hover:border-brand/60 h-10 px-5 text-sm font-medium bg-transparent"
                    >
                      <Link href={`/contact?intent=quote&terminal=${terminal.id}`}>
                        Enquire about {terminal.city} →
                      </Link>
                    </Button>
                  </div>

                  {/* Terminal image + data card */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="rounded-xl border border-border-soft bg-bg overflow-hidden">
                      <div className="relative h-52">
                        <Image
                          src={terminal.image}
                          alt={terminal.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-page/40" aria-hidden="true" />
                      </div>
                      <div className="p-8">
                        <p className="font-sans text-[11px] uppercase tracking-[0.08em] font-medium text-muted-foreground mb-6">
                          Terminal Profile
                        </p>

                        <div className="space-y-4 mb-8">
                          <div className="flex justify-between items-center border-b border-border-soft pb-3">
                            <span className="font-sans text-sm text-muted-foreground">
                              Nominal capacity
                            </span>
                            <span className="font-mono text-sm font-medium text-ink">
                              {new Intl.NumberFormat('en-GB').format(terminal.capacityM3)} m³
                              <span className="text-amber-400 text-[10px] ml-1">*</span>
                            </span>
                          </div>
                          <div className="flex justify-between items-center border-b border-border-soft pb-3">
                            <span className="font-sans text-sm text-muted-foreground">
                              Incoterm basis
                            </span>
                            <span className="font-mono text-sm font-medium text-ink">
                              {terminal.incoterm}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="font-sans text-sm text-muted-foreground">
                              Products handled
                            </span>
                            <div className="flex flex-wrap gap-1.5 justify-end max-w-[55%]">
                              {terminal.productTags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] uppercase tracking-[0.06em] font-medium bg-brand/[0.12] text-brand border border-brand/20 rounded px-2 py-0.5"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="font-sans text-[10px] text-muted-foreground/60">
                          * Capacity figures are provisional pending client confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Keyword-rich editorial paragraph for SEO */}
        <ScrollReveal delay={0.1}>
          <p className="mt-16 font-sans text-base text-muted-foreground leading-relaxed max-w-3xl border-t border-border-soft pt-10">
            Blue Gate operates one of Europe&apos;s most strategically positioned oil storage terminal
            networks. Our Rotterdam tank farm sits at the heart of the ARA corridor. Our Fujairah
            petroleum storage terminal provides crude oil storage capacity outside the Strait of
            Hormuz. Houston petroleum storage serves the US Gulf Coast. Jurong provides
            Asia-Pacific oil terminal access.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
