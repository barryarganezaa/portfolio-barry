import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { achievements, certifications } from '@/data/achievements'
import type { AchievementCategory } from '@/types/portfolio'

const categoryLabels: Record<AchievementCategory, string> = {
  competition: 'Competition',
  funding: 'National Funding',
}

export function Achievements() {
  return (
    <Section id="achievements" labelledBy="achievements-title">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Achievements"
          title="Recognition & milestones"
          titleId="achievements-title"
        />

        <Stagger className="mt-12 lg:mt-16">
          {achievements.map((achievement) => (
            <StaggerItem key={achievement.title} className="border-t border-line-subtle">
              <div className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-8">
                <p className="font-display text-2xl text-fg-subtle lg:col-span-2">
                  {achievement.year}
                </p>

                <div className="lg:col-span-6">
                  <h3 className="font-display text-xl text-fg lg:text-2xl">{achievement.title}</h3>
                  <p className="mt-3 text-caption uppercase text-fg-subtle">
                    {categoryLabels[achievement.category]}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-small text-fg-muted">{achievement.description}</p>
                  <p className="mt-4 text-caption text-fg-subtle">{achievement.issuer}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 lg:mt-16">
          <h3 className="text-caption uppercase text-fg-subtle">Certifications</h3>

          <ul className="mt-8 grid gap-x-16 gap-y-5 sm:grid-cols-2">
            {certifications.map((certification) => (
              <li
                key={certification.name}
                className="flex items-baseline justify-between gap-6 border-b border-line-subtle pb-4 text-small"
              >
                <span className="text-fg">
                  {certification.name}
                  {certification.issuer ? (
                    <span className="text-fg-subtle"> — {certification.issuer}</span>
                  ) : null}
                </span>
                <span className="shrink-0 text-fg-subtle">{certification.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
