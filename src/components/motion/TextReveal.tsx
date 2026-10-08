import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'
import { DURATION, EASE_CINEMATIC, VIEWPORT } from '@/lib/motion'

type TextRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, VIEWPORT)

  return (
    <span ref={ref} className={cn('block overflow-hidden pb-[0.09em]', className)}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: inView ? '0%' : '110%' }}
        transition={{ duration: DURATION.slow, ease: EASE_CINEMATIC, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}
