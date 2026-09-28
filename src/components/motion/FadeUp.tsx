import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { fadeUp, VIEWPORT } from '@/lib/motion'

type FadeUpProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}
