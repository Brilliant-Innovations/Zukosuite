'use client'

import { useEffect } from 'react'

// Names of animations owned by the scroll-reveal system
const SCROLL_ANIM_NAMES = new Set([
  'fade-in',
  'fade-up',
  'fade-left',
  'fade-right',
  'fade-in-scale',
])

export default function AnimationObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          observer.unobserve(el)
          el.classList.add('is-visible')

          // After the animation ends, swap to the static .animated class so that
          // CSS animation fill-mode no longer blocks hover/transform interactions.
          const onAnimEnd = (e: Event) => {
            const ae = e as AnimationEvent
            // Ignore events bubbling up from child elements
            if (ae.target !== el) return
            // Ignore unrelated animations (e.g. blob-pulse on a child)
            if (!SCROLL_ANIM_NAMES.has(ae.animationName)) return
            el.removeEventListener('animationend', onAnimEnd)
            el.classList.remove('is-visible', 'from-up', 'from-left', 'from-right', 'from-scale')
            el.classList.add('animated')
          }

          el.addEventListener('animationend', onAnimEnd)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
