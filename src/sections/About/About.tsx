import barry from '@/assets/barry.jpeg'
import { FadeUp } from '@/components/motion/FadeUp'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <SectionHeading index="01" eyebrow="About" title={profile.statement} titleId="about-title" />

        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeUp className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line-subtle bg-surface">
              <img
                src={barry}
                alt={`Portrait of ${profile.name}`}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </FadeUp>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {profile.bio.map((paragraph, index) => (
                <FadeUp key={paragraph.slice(0, 24)} delay={0.05 * index}>
                  <p className="max-w-[46rem] text-body text-fg-muted">{paragraph}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        <Stagger
          stagger={0.05}
          className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line-subtle bg-line-subtle sm:grid-cols-3 lg:mt-16"
        >
          {profile.metadata.map((item) => (
            <StaggerItem key={item.label} className="bg-bg p-6 lg:p-8">
              <dl>
                <dt className="text-caption uppercase text-fg-subtle">{item.label}</dt>
                <dd className="mt-3 text-small text-fg">{item.value}</dd>
              </dl>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
