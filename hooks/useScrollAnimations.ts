'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger, EASE, DUR } from '@/lib/gsap'

export function useScrollAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {

      // fade-up — elements with data-animate="fade-up"
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: DUR.base,
          ease: EASE.smooth,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })

      // fade-in — elements with data-animate="fade-in"
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: DUR.slow,
          ease: EASE.slow,
          scrollTrigger: { trigger: el, start: 'top 90%' },
        })
      })

      // stagger — parent with data-animate="stagger"
      gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((parent) => {
        gsap.from(Array.from(parent.children), {
          opacity: 0,
          y: 40,
          duration: DUR.base,
          ease: EASE.smooth,
          stagger: 0.12,
          scrollTrigger: { trigger: parent, start: 'top 85%' },
        })
      })

      // headline — word-by-word reveal for elements with data-animate="headline"
      gsap.utils.toArray<HTMLElement>('[data-animate="headline"]').forEach((el) => {
        const original = el.innerHTML
        const text = el.textContent || ''
        const words = text.split(' ')
        el.innerHTML = words
          .map(
            (w) =>
              `<span class="gsap-word" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span class="gsap-word-inner" style="display:inline-block">${w}</span></span>`,
          )
          .join(' ')

        gsap.from(el.querySelectorAll('.gsap-word-inner'), {
          y: '105%',
          opacity: 0,
          duration: DUR.slow,
          ease: EASE.smooth,
          stagger: 0.06,
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onComplete: () => {
            // Restore original HTML after animation to avoid React reconciliation issues
            el.innerHTML = original
          },
        })
      })

      // line — scaleX wipe for rules/dividers with data-animate="line"
      gsap.utils.toArray<HTMLElement>('[data-animate="line"]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: DUR.slow,
          ease: EASE.smooth,
          scrollTrigger: { trigger: el, start: 'top 90%' },
        })
      })

      // counter — elements with data-animate="counter" data-target="60" data-suffix="+"
      gsap.utils.toArray<HTMLElement>('[data-animate="counter"]').forEach((el) => {
        const target = parseFloat(el.dataset.target || '0')
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: DUR.xslow,
          ease: EASE.slow,
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => { el.textContent = Math.round(obj.val) + suffix },
        })
      })

      // image-reveal — clip-path wipe upward for data-animate="image-reveal"
      gsap.utils.toArray<HTMLElement>('[data-animate="image-reveal"]').forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(100% 0% 0% 0%)',
          duration: DUR.slow,
          ease: EASE.snap,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      // parallax — elements with data-parallax="0.2" (speed factor)
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.15')
        gsap.to(el, {
          y: () => -(window.innerHeight * speed),
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      // label — slide-in-left for section labels with data-animate="label"
      gsap.utils.toArray<HTMLElement>('[data-animate="label"]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -20,
          duration: DUR.base,
          ease: EASE.smooth,
          scrollTrigger: { trigger: el, start: 'top 90%' },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}
