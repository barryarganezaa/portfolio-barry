import { Mail } from 'lucide-react'

import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'
import type { SocialIcon as SocialIconName } from '@/types/portfolio'

type SocialIconProps = {
  icon: SocialIconName
  className?: string
}

export function SocialIcon({ icon, className }: SocialIconProps) {
  if (icon === 'github') {
    return <GitHubIcon className={className} />
  }

  if (icon === 'linkedin') {
    return <LinkedInIcon className={className} />
  }

  return <Mail size={16} strokeWidth={1.5} aria-hidden="true" className={className} />
}
