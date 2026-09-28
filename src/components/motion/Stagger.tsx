import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'

type StaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function Stagger({ children, className, stagger = 0.08, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={fadeUp()}>
      {children}
    </motion.div>
  )
}
