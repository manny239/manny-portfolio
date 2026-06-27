import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { contact } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SocialLinks } from './ui/SocialLinks'
import { HeroBackdrop } from './HeroBackdrop'

const HeroScene = lazy(() => import('../three/HeroScene'))

function RotatingRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      2600,
    )
    return () => window.clearInterval(id)
  }, [roles.length, reduced])

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-block text-ink"
          initial={{ y: '0.55em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-0.55em', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="caret" aria-hidden="true" />
    </span>
  )
}

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(true)
  const [mounted3d, setMounted3d] = useState(false)

  // Defer mounting the heavy 3D scene until just after first paint.
  useEffect(() => {
    if (reduced) return
    const id = window.setTimeout(() => setMounted3d(true), 150)
    return () => window.clearTimeout(id)
  }, [reduced])

  // Pause the render loop when the hero scrolls out of view.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24"
    >
      <HeroBackdrop />

      {mounted3d && !reduced && (
        <div className="absolute inset-0 z-[1]">
          <Suspense fallback={null}>
            <HeroScene active={active} />
          </Suspense>
        </div>
      )}

      {/* Legibility wash: opaque on the left where the text sits, clear on the right. */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-canvas via-canvas/75 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-canvas to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {contact.title} @ Travelers
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-fluid-hero font-bold leading-[0.95]">
              <span className="text-gradient">{contact.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4 flex items-center gap-3 font-heading text-2xl font-medium text-muted sm:text-3xl">
              <span className="font-mono text-accent">&gt;</span>
              <RotatingRoles roles={contact.roles} />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-fluid-lead text-muted">{contact.tagline}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#projects" iconRight={<ArrowUpRight size={18} />}>
                View my work
              </Button>
              <Button href="#contact" variant="secondary">
                Get in touch
              </Button>
              <Button
                href={contact.resumeUrl}
                download
                variant="ghost"
                icon={<Download size={16} />}
              >
                Resume
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex items-center gap-4">
              <SocialLinks />
              <span className="hidden h-px w-10 bg-line-strong sm:block" />
              <span className="hidden items-center gap-1.5 text-sm text-faint sm:flex">
                <MapPin size={14} />
                {contact.location}
              </span>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-accent md:flex"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-widest">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line-strong p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </a>
    </section>
  )
}
