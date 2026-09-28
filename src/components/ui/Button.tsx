import type { ButtonHTMLAttributes } from 'react'

import type { ButtonVariant } from '@/components/ui/buttonStyles'
import { buttonClasses } from '@/components/ui/buttonStyles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={buttonClasses(variant, className)} {...rest}>
      {children}
    </button>
  )
}
