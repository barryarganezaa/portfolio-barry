import type { EducationEntry, ExperienceEntry } from '@/types/portfolio'

export const experience: ExperienceEntry[] = [
  {
    role: 'Freelance Software Developer',
    period: 'Dec 2025 — Present',
    location: 'Bandung, Indonesia',
    highlights: [
      'Built a web-based point-of-sale system for a mobile and accessories store in BEC Bandung — fullstack, owning requirement analysis, system design, backend and frontend development, and deployment.',
      'Delivered smaller client projects: fixed the product return workflow in a motorcycle workshop POS application, and analysed, designed, and built a web prototype of a book management system for a mobile library service.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'PT Kerjaku Inti Sejahtera',
    period: 'Jun 2024 — Oct 2024',
    location: 'Bandung, Indonesia',
    highlights: [
      'Built a cross-platform POS system (web and mobile) with Flutter and GetX, using a modular architecture for consistent UI and high code reuse.',
      'Integrated 90 RESTful API endpoints covering real-time inventory, multi-role access, cashier transactions, and sales reporting.',
      'Worked in an Agile team alongside backend developers, UI/UX designers, and a project manager to resolve integration bugs and optimize responsiveness across devices.',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    institution: 'Politeknik Negeri Bandung',
    degree: 'Associate Degree in Informatics Engineering',
    period: '2022 — 2025',
    detail:
      'GPA 3.21 · Coursework in Data Structures & Algorithms, Software Design, Mobile App Development, Object-Oriented Programming, and Project Management',
  },
]
