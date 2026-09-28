import type { AnchorHTMLAttributes, ReactNode } from 'react'

import type { ButtonVariant } from '@/components/ui/buttonStyles'
import { buttonClasses } from '@/components/ui/buttonStyles'

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
  trailing?: ReactNode
}

export function LinkButton({ variant = 'secondary', className, children, trailing, ...rest }: LinkButtonProps) {
  return (
    <a className={buttonClasses(variant, className)} {...rest}>
      <span>{children}</span>
      {trailing ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          {trailing}
        </span>
      ) : null}
    </a>
  )
}
