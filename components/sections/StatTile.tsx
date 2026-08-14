'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface StatTileProps {
  value: number;
  suffix: string;
  label: string;
  /** Kept for backward compat — ignored in dark theme (always renders on dark bg) */
  light?: boolean;
}

export function StatTile({ value, suffix, label }: StatTileProps) {
  // Initial render shows the real value (not 0) so it's correct in server-rendered
  // HTML and for crawlers/no-JS clients; the count-up is a client-only enhancement.
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      gsap.to(counter, {
        val: value,
        duration: 2,
        ease: 'power2.out',
        onStart: () => setDisplay(0),
        onUpdate: () => setDisplay(Math.round(counter.val)),
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <p className="text-ink font-mono text-4xl leading-none font-medium tabular-nums md:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="text-muted-foreground font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
        {label}
      </p>
    </div>
  );
}
