import { ArrowUpRight } from 'lucide-react'

import { FadeUp } from '@/components/motion/FadeUp'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { socials } from '@/data/socials'

export function Contact() {
  const email = socials.find((social) => social.icon === 'mail')
  const profiles = socials.filter((social) => social.icon !== 'mail')

  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something meaningful."
          titleId="contact-title"
          description="Available for freelance projects, collaborations, and full-time software development opportunities."
        />

        {email ? (
          <FadeUp delay={0.2} className="mt-10">
            <a
              href={email.href}
              className="group inline-flex flex-wrap items-baseline gap-x-5 gap-y-3 font-display text-project tracking-tight text-fg"
            >
              <span className="break-all border-b border-line-strong pb-1 transition-colors duration-300 ease-cinematic group-hover:border-fg">
                {email.value}
              </span>
              <ArrowUpRight
                size={28}
                strokeWidth={1.25}
                aria-hidden="true"
                className="text-fg-subtle transition-all duration-300 ease-cinematic group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fg"
              />
            </a>
          </FadeUp>
        ) : null}

        <Stagger
          stagger={0.06}
          className="mt-12 flex flex-wrap gap-x-14 gap-y-6 border-t border-line-subtle pt-8"
        >
          {profiles.map((social) => (
            <StaggerItem key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-small text-fg-muted transition-colors duration-200 ease-cinematic hover:text-fg"
              >
                <SocialIcon icon={social.icon} className="size-4" />
                <span className="text-fg">{social.label}</span>
                <span className="text-fg-subtle">{social.value}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
