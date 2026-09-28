import type { Achievement, Certification } from '@/types/portfolio'

export const achievements: Achievement[] = [
  {
    category: 'competition',
    year: '2024',
    title: 'Finalist — 37th PIMNAS',
    issuer: 'Puspresnas, Ministry of Education, Culture, Research & Technology',
    description:
      'Selected as one of 84 finalist teams in the Community Service category, competing at the national level from more than 5,000 funded projects.',
  },
  {
    category: 'funding',
    year: '2024',
    title: 'PKM National Grant — Funded',
    issuer: 'Belmawa, Ministry of Education, Culture, Research & Technology',
    description:
      'One of 51 proposals in the Community Service category to receive national funding, selected from submissions across 401 vocational institutions.',
  },
]

export const certifications: Certification[] = [
  { name: 'Junior Software Tester', issuer: 'ArutalaLab', year: '2025' },
  { name: 'TOEIC — Score 745', year: '2025' },
  { name: 'Employability Skills', issuer: 'Wadhwani Foundation', year: '2024' },
  { name: 'Intro to Programming with C', issuer: 'Dicoding', year: '2023' },
]
