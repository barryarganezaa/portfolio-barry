import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import { ProjectItem } from '@/sections/Projects/ProjectItem'

export function Projects() {
  return (
    <Section id="work" labelledBy="work-title">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Selected Work"
          title="Projects that shipped"
          titleId="work-title"
          description="From internal systems to a nationally funded mobile app — built end to end, measured by outcomes."
        />

        <div className="mt-16 lg:mt-24">
          {projects.map((project, index) => (
            <ProjectItem key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
