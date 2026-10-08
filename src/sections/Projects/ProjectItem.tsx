import { ArrowUpRight } from 'lucide-react'

import { FadeUp } from '@/components/motion/FadeUp'
import { LinkButton } from '@/components/ui/LinkButton'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/cn'
import type { Project } from '@/types/portfolio'

type ProjectItemProps = {
  project: Project
  index: number
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  const number = String(index + 1).padStart(2, '0')
  const reversed = index % 2 === 1

  return (
    <FadeUp className="border-t border-line-subtle py-10 lg:py-14">
      <article className="group grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className={cn('lg:col-span-7', reversed ? 'lg:order-2' : 'lg:order-1')}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line-subtle bg-surface transition-colors duration-500 ease-cinematic group-hover:border-line">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} — ${project.subtitle}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.02]"
              />
            ) : (
              <span
                aria-hidden="true"
                className="absolute bottom-6 left-8 font-display text-[clamp(4rem,9vw,7.5rem)] leading-none text-fg-subtle transition-colors duration-500 ease-cinematic group-hover:text-fg-muted lg:bottom-8 lg:left-10"
              >
                {number}
              </span>
            )}
          </div>
        </div>

        <div className={cn('flex flex-col gap-6 lg:col-span-5', reversed ? 'lg:order-1' : 'lg:order-2')}>
          <div>
            <p className="text-caption uppercase text-fg-subtle">{number}</p>
            <h3 className="mt-3 font-display text-project text-fg">{project.title}</h3>
            <p className="mt-2 text-small text-fg-subtle">{project.subtitle}</p>
          </div>

          <p className="text-body text-fg-muted">{project.description}</p>

          <ul className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item}>
                <Tag>{item}</Tag>
              </li>
            ))}
          </ul>

          <dl className="flex flex-wrap gap-x-12 gap-y-4 text-small">
            <div>
              <dt className="text-caption uppercase text-fg-subtle">Role</dt>
              <dd className="mt-1 text-fg">{project.role}</dd>
            </div>
            <div>
              <dt className="text-caption uppercase text-fg-subtle">Period</dt>
              <dd className="mt-1 text-fg">{project.period}</dd>
            </div>
          </dl>

          {project.href ? (
            <div>
              <LinkButton href={project.href} trailing={<ArrowUpRight size={16} strokeWidth={1.5} />}>
                View project
              </LinkButton>
            </div>
          ) : null}
        </div>
      </article>
    </FadeUp>
  )
}
