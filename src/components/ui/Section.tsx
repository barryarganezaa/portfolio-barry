import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export function Section({ id, children, className, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('py-[clamp(48px,5vw,88px)]', className)}>
      {children}
    </section>
  )
}
