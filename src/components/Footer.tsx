import { ArrowUp } from 'lucide-react'
import { contact, navLinks } from '../data/resume'
import { Container } from './ui/Container'
import { SocialLinks } from './ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-canvas-soft">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-heading text-sm font-bold text-accent">
                {contact.initials}
              </span>
              <span className="font-heading text-[0.95rem] font-semibold text-ink">
                {contact.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {contact.title} building across fullstack, cloud, and applied AI.
              Always open to interesting problems.
            </p>
            <SocialLinks className="mt-5" />
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="mono-label">Navigate</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline w-fit text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-sm text-faint sm:flex-row sm:items-center">
          <p>
            © {year} {contact.name}. Designed &amp; built with React, Three.js &amp;
            Tailwind.
          </p>
          <a
            href="#home"
            className="group flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-md border border-line transition-transform duration-300 group-hover:-translate-y-0.5">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  )
}
