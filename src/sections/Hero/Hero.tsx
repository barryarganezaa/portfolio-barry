import { useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Suspense, lazy } from 'react'

import { FadeUp } from '@/components/motion/FadeUp'
import { TextReveal } from '@/components/motion/TextReveal'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/LinkButton'
import { profile } from '@/data/profile'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const HeroObject = lazy(() => import('@/components/three/HeroObject'))

export function Hero() {
  const reducedMotion = useReducedMotion()
  const supportsScene = useMediaQuery('(min-width: 1024px) and (pointer: fine)')
  const showScene = supportsScene && !reducedMotion
  const nameLines = profile.name.split(' ')

  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20">
      <Container className="grid w-full items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <FadeUp delay={0.05}>
            <p className="flex flex-wrap items-center gap-4 text-caption uppercase text-fg-subtle">
              <span>{profile.role}</span>
              <span aria-hidden="true" className="h-px w-8 bg-line" />
              <span>{profile.location}</span>
            </p>
          </FadeUp>

          <h1 className="mt-8 font-display text-hero text-fg">
            {nameLines.map((line, index) => (
              <TextReveal key={line} delay={0.08 * index}>
                {line}
              </TextReveal>
            ))}
          </h1>

          <FadeUp delay={0.4}>
            <p className="mt-10 max-w-[34rem] text-body text-fg-muted">{profile.positioning}</p>
          </FadeUp>

          <FadeUp delay={0.55} className="mt-10 flex flex-wrap items-center gap-4">
            <LinkButton
              href="#work"
              variant="primary"
              trailing={<ArrowUpRight size={16} strokeWidth={1.5} />}
            >
              View Work
            </LinkButton>
            <LinkButton href="#contact">Contact</LinkButton>
          </FadeUp>
        </div>

        {showScene ? (
          <div className="lg:col-span-5" aria-hidden="true">
            <Suspense fallback={null}>
              <HeroObject />
            </Suspense>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
