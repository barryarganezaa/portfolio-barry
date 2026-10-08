import type { Variants } from 'framer-motion'

/** Motion durations in seconds (DESIGN_SYSTEM §21). */
export const DURATION = {
  fast: 0.18,
  medium: 0.4,
  slow: 0.8,
} as const

/** Default cinematic easing (DESIGN_SYSTEM §22). */
export const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Shared viewport config so every in-view reveal fires consistently. */
export const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' } as const

export const fadeUp = (delay = 0, distance = 24): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE_CINEMATIC, delay },
  },
})

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})
