import { MotionConfig } from 'framer-motion'

import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/sections/About/About'
import { Achievements } from '@/sections/Achievements/Achievements'
import { Contact } from '@/sections/Contact/Contact'
import { Experience } from '@/sections/Experience/Experience'
import { Hero } from '@/sections/Hero/Hero'
import { Projects } from '@/sections/Projects/Projects'
import { TechStack } from '@/sections/TechStack/TechStack'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-small focus:text-bg"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  )
}
