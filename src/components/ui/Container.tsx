import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[1400px] px-[clamp(20px,4vw,72px)]', className)}>
      {children}
    </div>
  )
}
