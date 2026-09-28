export type ProfileMetadata = {
  label: string
  value: string
}

export type Profile = {
  name: string
  role: string
  location: string
  positioning: string
  statement: string
  bio: string[]
  metadata: ProfileMetadata[]
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  role: string
  period: string
  stack: string[]
  href?: string
  image?: string
}

export type ExperienceEntry = {
  role: string
  company?: string
  period: string
  location?: string
  highlights: string[]
}

export type EducationEntry = {
  institution: string
  degree: string
  period: string
  detail?: string
}

export type AchievementCategory = 'competition' | 'funding'

export type Achievement = {
  category: AchievementCategory
  year: string
  title: string
  issuer: string
  description: string
}

export type Certification = {
  name: string
  issuer?: string
  year: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type SocialIcon = 'mail' | 'github' | 'linkedin'

export type SocialLink = {
  label: string
  value: string
  href: string
  icon: SocialIcon
}

export type NavItem = {
  label: string
  href: string
}
