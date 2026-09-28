import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-sans text-small font-medium transition-[background-color,border-color,color] duration-200 ease-cinematic'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-fg text-bg hover:bg-fg-soft',
  secondary: 'border border-line text-fg hover:border-line-strong hover:bg-surface',
}

export function buttonClasses(variant: ButtonVariant = 'primary', className?: string): string {
  return cn(base, variants[variant], className)
}
