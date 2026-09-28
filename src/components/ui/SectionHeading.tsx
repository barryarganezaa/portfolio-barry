import type { ReactNode } from 'react'

import { FadeUp } from '@/components/motion/FadeUp'
import { TextReveal } from '@/components/motion/TextReveal'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: ReactNode
  titleId?: string
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  titleId,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-[52rem]', className)}>
      <FadeUp>
        <p className="flex items-center gap-4 text-caption uppercase text-fg-subtle">
          <span aria-hidden="true">{index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          <span>{eyebrow}</span>
        </p>
      </FadeUp>

      <h2 id={titleId} className="mt-6 font-display text-section text-balance text-fg">
        <TextReveal>{title}</TextReveal>
      </h2>

      {description ? (
        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-[45rem] text-body text-fg-muted">{description}</p>
        </FadeUp>
      ) : null}
    </div>
  )
}
