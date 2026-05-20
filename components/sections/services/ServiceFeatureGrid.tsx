import type { LucideIcon } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export interface FeatureItem {
  icon: LucideIcon
  title: string
  body: string
}

interface ServiceFeatureGridProps {
  items: FeatureItem[]
}

export function ServiceFeatureGrid({ items }: ServiceFeatureGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <ScrollReveal key={item.title} delay={i * 0.07}>
            <GlowCard className="rounded-xl bg-bg p-6 h-full flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-brand/[0.10] border border-brand/20 flex items-center justify-center mb-4 shrink-0">
                <Icon size={20} className="text-brand" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-normal text-ink mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </GlowCard>
          </ScrollReveal>
        )
      })}
    </div>
  )
}
