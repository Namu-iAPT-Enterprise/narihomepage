'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GSAPAnimations() {
  useEffect(() => {
    // Defer past React hydration so GSAP's initial `from` states
    // don't cause a server/client HTML mismatch
    let ctx: ReturnType<typeof gsap.context> | undefined
    const raf = requestAnimationFrame(() => {
    ctx = gsap.context(() => {

      // ── HERO BAND ─────────────────────────────────────────────
      // The purple band scales up slightly on load (after CSS riseUp finishes)
      gsap.from('.hero-band', {
        scale: 0.94,
        opacity: 0,
        duration: 1.1,
        delay: 0.6,
        ease: 'expo.out',
      })

      // ── GENERIC FADE-UP BATCH ─────────────────────────────────
      // Anything with class "gsap-fade-up" fades up when scrolled into view
      ScrollTrigger.batch('.gsap-fade-up', {
        onEnter: (els) =>
          gsap.from(els, {
            y: 50,
            opacity: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
          }),
        once: true,
        start: 'top 88%',
      })

      // ── SLIDE FROM LEFT ───────────────────────────────────────
      ScrollTrigger.batch('.gsap-slide-left', {
        onEnter: (els) =>
          gsap.from(els, {
            x: -70,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power3.out',
          }),
        once: true,
        start: 'top 85%',
      })

      // ── SLIDE FROM RIGHT ──────────────────────────────────────
      ScrollTrigger.batch('.gsap-slide-right', {
        onEnter: (els) =>
          gsap.from(els, {
            x: 70,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power3.out',
          }),
        once: true,
        start: 'top 85%',
      })

      // ── SCALE IN ──────────────────────────────────────────────
      ScrollTrigger.batch('.gsap-scale-in', {
        onEnter: (els) =>
          gsap.from(els, {
            scale: 0.88,
            opacity: 0,
            duration: 0.75,
            stagger: 0.09,
            ease: 'back.out(1.4)',
          }),
        once: true,
        start: 'top 88%',
      })

      // ── STATEMENT HEADING: clip-path wipe ─────────────────────
      gsap.from('.gsap-statement-heading', {
        scrollTrigger: {
          trigger: '.gsap-statement-heading',
          start: 'top 82%',
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'expo.out',
      })

      // Scribble SVG stroke draw
      const scribble = document.querySelector<SVGPathElement>('.gsap-scribble')
      if (scribble) {
        const len = scribble.getTotalLength()
        gsap.set(scribble, { strokeDasharray: len, strokeDashoffset: len })
        gsap.to(scribble, {
          scrollTrigger: { trigger: scribble, start: 'top 84%', once: true },
          strokeDashoffset: 0,
          duration: 1.4,
          ease: 'power2.inOut',
        })
      }

      // ── FEATURE ROWS: alternating slide ───────────────────────
      document.querySelectorAll('.gsap-feature-row').forEach((row, i) => {
        const isReversed = row.classList.contains('gsap-feature-row--reversed')
        const panel = row.querySelector('.gsap-feature-panel')
        const text  = row.querySelector('.gsap-feature-text')

        if (panel) {
          gsap.from(panel, {
            scrollTrigger: { trigger: row, start: 'top 82%', once: true },
            x: isReversed ? 80 : -80,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          })
        }
        if (text) {
          gsap.from(text, {
            scrollTrigger: { trigger: row, start: 'top 82%', once: true },
            x: isReversed ? -60 : 60,
            opacity: 0,
            duration: 0.95,
            delay: 0.15,
            ease: 'power3.out',
          })
        }
      })

      // ── USE-CASE CARDS: stagger grid ──────────────────────────
      gsap.from('.gsap-uc-card', {
        scrollTrigger: {
          trigger: '.gsap-uc-grid',
          start: 'top 85%',
          once: true,
        },
        y: 60,
        opacity: 0,
        scale: 0.92,
        duration: 0.7,
        stagger: { amount: 0.55, from: 'start' },
        ease: 'power3.out',
      })

      // ── PROMISE PILLARS: stagger ──────────────────────────────
      gsap.from('.gsap-pillar', {
        scrollTrigger: {
          trigger: '.gsap-pillars',
          start: 'top 85%',
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: 'power3.out',
      })

      // ── VIDEO SECTION ─────────────────────────────────────────
      gsap.from('.gsap-video-wrap', {
        scrollTrigger: {
          trigger: '.gsap-video-wrap',
          start: 'top 85%',
          once: true,
        },
        scale: 0.92,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      })

      // ── CONTACT: confetti shapes scatter in ───────────────────
      gsap.from('.gsap-confetti', {
        scrollTrigger: {
          trigger: '.gsap-contact-heading',
          start: 'top 82%',
          once: true,
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: { amount: 0.4, from: 'random' },
        ease: 'back.out(2)',
      })

      gsap.from('.gsap-contact-heading', {
        scrollTrigger: {
          trigger: '.gsap-contact-heading',
          start: 'top 85%',
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      })

      // ── FOOTER: big 몰랑 parallax ─────────────────────────────
      gsap.from('.gsap-big-word', {
        scrollTrigger: {
          trigger: '.gsap-big-word',
          start: 'top 95%',
          once: true,
        },
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
      })

      // Subtle parallax on the big word while scrolling
      gsap.to('.gsap-big-word', {
        scrollTrigger: {
          trigger: '.gsap-big-word',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
        y: -60,
        ease: 'none',
      })

    })
    }) // end requestAnimationFrame

    return () => {
      cancelAnimationFrame(raf)
      ctx?.revert()
    }
  }, [])

  return null
}
