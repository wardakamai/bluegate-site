import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

gsap.defaults({
  ease: 'power3.out',
  duration: 0.9,
});

ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
});

export { gsap, ScrollTrigger };

export const EASE = {
  smooth: 'power2.out',
  snap: 'power4.inOut',
  elastic: 'elastic.out(1, 0.5)',
  slow: 'power1.inOut',
} as const;

export const DUR = {
  fast: 0.4,
  base: 0.8,
  slow: 1.2,
  xslow: 1.8,
} as const;
