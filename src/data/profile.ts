import type { Profile } from '@/types/portfolio'

export const profile: Profile = {
  name: 'Barry Arganeza',
  role: 'Software Developer',
  location: 'Bandung, Indonesia',
  positioning:
    'I build practical, maintainable web and mobile products — with attention to the details that make software feel considered.',
  statement: 'I care about software that stays simple as it grows.',
  bio: [
    "I'm a software developer based in Bandung, Indonesia, focused on frontend and mobile development. I've built role-based web systems, a cross-platform point-of-sale app, and a nationally funded mobile product — working across React, Vue, Flutter, and the APIs behind them.",
    'I like to understand the real workflow before touching code: keep the architecture modular, keep the interfaces honest, and refactor as the product learns. That approach has taken projects from proposal to national finals.',
  ],
  metadata: [
    { label: 'Based in', value: 'Bandung, Indonesia' },
    { label: 'Focus', value: 'Web & Mobile Development' },
    { label: 'Availability', value: 'Freelance & full-time' },
  ],
}
