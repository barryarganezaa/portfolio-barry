import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    slug: 'retail-management-system',
    title: 'Retail Management System',
    subtitle: 'Point-of-sale & bookkeeping for a mobile accessories store',
    description:
      'Turned a 14-sheet Excel bookkeeping workflow into a full-stack retail point-of-sale system for a mobile store in BEC Bandung.',
    role: 'Full-Stack Developer',
    period: 'Aug 2026 — Present',
    stack: ['React', 'Express'],
  },
  {
    slug: 'samina',
    title: 'SAMINA',
    subtitle: 'Internal Quality Audit Information System',
    description:
      'Built role-based modules for auditors, auditees, and departments across the full audit lifecycle — desk evaluation, document uploads, PTK monitoring, and automated reporting — with SMTP notifications that kept every stakeholder on schedule.',
    role: 'Frontend Developer',
    period: 'Dec 2024 — Jul 2025',
    stack: ['Vue 3', 'Vuetify', 'Pinia', 'Laravel'],
  },
  {
    slug: 'simpemas',
    title: 'SIMPEMAS',
    subtitle: 'Nationally funded community service mobile app',
    description:
      'Developed student-facing Flutter flows for proposal submission and progress tracking, helping cut proposal processing from two weeks to 3–5 days. The project received national PKM funding and reached the PIMNAS 2024 finals.',
    role: 'Mobile Developer',
    period: 'Jan 2024 — Sep 2024',
    stack: ['Flutter', 'Firebase'],
  },
]
