import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education, experience } from '@/data/experience'

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've worked"
          titleId="experience-title"
        />

        <div className="mt-12 lg:mt-16">
          {experience.map((entry) => (
            <Stagger key={`${entry.role}-${entry.period}`} className="border-t border-line-subtle">
              <div className="grid gap-6 py-8 lg:grid-cols-12 lg:gap-8 lg:py-10">
                <StaggerItem className="lg:col-span-3">
                  <p className="text-small text-fg">{entry.period}</p>
                  {entry.location ? (
                    <p className="mt-2 text-caption uppercase text-fg-subtle">{entry.location}</p>
                  ) : null}
                </StaggerItem>

                <StaggerItem className="lg:col-span-4">
                  <h3 className="font-display text-2xl text-fg">{entry.role}</h3>
                  {entry.company ? (
                    <p className="mt-2 text-small text-fg-muted">{entry.company}</p>
                  ) : null}
                </StaggerItem>

                <StaggerItem className="lg:col-span-5">
                  <ul className="space-y-4">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-4 text-small text-fg-muted">
                        <span
                          aria-hidden="true"
                          className="mt-[0.7em] size-1 shrink-0 rounded-full bg-fg-subtle"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              </div>
            </Stagger>
          ))}
        </div>

        <div className="mt-12 lg:mt-16">
          <h3 className="text-caption uppercase text-fg-subtle">Education</h3>

          {education.map((entry) => (
            <div
              key={entry.institution}
              className="mt-8 grid gap-4 border-t border-line-subtle pt-8 lg:grid-cols-12 lg:gap-8"
            >
              <p className="text-small text-fg lg:col-span-3">{entry.period}</p>

              <div className="lg:col-span-4">
                <p className="font-display text-xl text-fg">{entry.degree}</p>
                <p className="mt-2 text-small text-fg-muted">{entry.institution}</p>
              </div>

              {entry.detail ? (
                <p className="text-small text-fg-subtle lg:col-span-5">{entry.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
