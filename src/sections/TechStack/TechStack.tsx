import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { skillGroups } from '@/data/skills'
import { cn } from '@/lib/cn'

export function TechStack() {
  return (
    <Section id="stack" labelledBy="stack-title">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Tech Stack"
          title="Tools I reach for"
          titleId="stack-title"
        />

        <Stagger
          stagger={0.06}
          className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line-subtle bg-line-subtle lg:mt-16 lg:grid-cols-6"
        >
          {skillGroups.map((group, index) => (
            <StaggerItem
              key={group.category}
              className={cn('bg-bg p-8', index < 3 ? 'lg:col-span-2' : 'lg:col-span-3')}
            >
              <h3 className="text-caption uppercase text-fg-subtle">{group.category}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
