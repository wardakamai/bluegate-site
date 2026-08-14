'use client';

import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useScrollAnimations();
  useSmoothScroll();
  return <>{children}</>;
}
