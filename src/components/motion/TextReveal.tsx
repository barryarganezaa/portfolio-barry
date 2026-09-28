import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'
import { textReveal, VIEWPORT } from '@/lib/motion'

type TextRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  return (
    <span className={cn('block overflow-hidden pb-[0.09em]', className)}>
      <motion.span
        className="block"
        variants={textReveal(delay)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {children}
      </motion.span>
    </span>
  )
}
