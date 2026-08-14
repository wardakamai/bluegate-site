import type { LucideIcon } from 'lucide-react';
import { GlowCard } from '@/components/ui/GlowCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface ServiceFeatureGridProps {
  items: FeatureItem[];
}

export function ServiceFeatureGrid({ items }: ServiceFeatureGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <ScrollReveal key={item.title} delay={i * 0.07}>
            <GlowCard className="bg-bg flex h-full flex-col rounded-xl p-6">
              <div className="bg-brand/[0.10] border-brand/20 mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                <Icon size={20} className="text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-ink mb-2 font-serif text-lg font-normal">{item.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.body}</p>
            </GlowCard>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
