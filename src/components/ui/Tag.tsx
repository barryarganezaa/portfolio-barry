import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type TagProps = {
  children: ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-line-subtle px-2.5 py-1 text-caption text-fg-muted transition-colors duration-200 ease-cinematic hover:border-line-strong hover:text-fg',
        className,
      )}
    >
      {children}
    </span>
  )
}
