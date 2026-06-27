import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { contact, navLinks } from '../data/resume'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn } from '../lib/cn'
import { Button } from './ui/Button'
import { ThemeToggle } from './ui/ThemeToggle'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export function Navbar() {
  const scrolled = useScrolled(32)
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-[var(--surface-glass)] backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-[var(--spacing-gutter)]">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-heading text-sm font-bold text-accent transition-transform duration-300 group-hover:scale-105">
            {contact.initials}
          </span>
          <span className="hidden font-heading text-[0.95rem] font-semibold text-ink sm:block">
            {contact.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-accent' : 'text-muted hover:text-ink',
                  )}
                >
                  <span className="font-mono text-accent/70">/</span> {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <span className="hidden lg:inline-flex">
            <Button
              href={contact.resumeUrl}
              download
              variant="secondary"
              size="sm"
              icon={<Download size={16} />}
            >
              Resume
            </Button>
          </span>
          <span className="hidden md:inline-flex">
            <Button href="#contact" size="sm">
              Let&rsquo;s talk
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-ink transition-colors hover:text-accent md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--surface-glass)] backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-16 items-center justify-between px-[var(--spacing-gutter)]">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-heading text-sm font-bold text-accent">
                {contact.initials}
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-ink transition-colors hover:text-accent"
              >
                <X size={20} />
              </button>
            </div>

            <motion.ul
              className="flex flex-1 flex-col justify-center gap-2 px-[var(--spacing-gutter)]"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 py-3 font-heading text-3xl font-semibold text-ink transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-base text-accent/60">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-col gap-3 border-t border-line px-[var(--spacing-gutter)] py-6">
              <Button
                href={contact.resumeUrl}
                download
                variant="secondary"
                icon={<Download size={16} />}
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </Button>
              <Button href="#contact" onClick={() => setMenuOpen(false)}>
                Let&rsquo;s talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
