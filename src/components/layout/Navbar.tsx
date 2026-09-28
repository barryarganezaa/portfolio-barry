import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Container } from '@/components/ui/Container'
import { navItems } from '@/data/navigation'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'
import { DURATION, EASE_CINEMATIC } from '@/lib/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-cinematic',
        open
          ? 'border-b border-line-subtle bg-bg'
          : scrolled
            ? 'border-b border-line-subtle bg-bg/85 backdrop-blur-md'
            : 'border-b border-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <a
          href="#hero"
          className="font-display text-small tracking-tight text-fg transition-colors duration-200 ease-cinematic hover:text-fg-soft"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-small text-fg-muted transition-colors duration-200 ease-cinematic hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-fg transition-colors duration-200 ease-cinematic hover:text-fg-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-20 bottom-0 bg-bg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.medium, ease: EASE_CINEMATIC }}
          >
            <Container className="flex h-full flex-col justify-center gap-2 pb-24">
              <nav aria-label="Mobile">
                <ul>
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: DURATION.medium,
                        ease: EASE_CINEMATIC,
                        delay: 0.04 * index,
                      }}
                    >
                      <a
                        href={item.href}
                        className="block border-b border-line-subtle py-5 font-display text-3xl text-fg"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
