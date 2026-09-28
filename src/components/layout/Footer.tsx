import { Container } from '@/components/ui/Container'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line-subtle">
      <Container className="flex flex-col gap-4 py-10 text-small text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#hero" className="transition-colors duration-200 ease-cinematic hover:text-fg">
          Back to top
        </a>
      </Container>
    </footer>
  )
}
