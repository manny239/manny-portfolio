import { Award, Check, Download, GraduationCap, MapPin } from 'lucide-react'
import { certifications, contact, education, quickStats } from '../data/resume'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-py relative">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="about"
          title={
            <>
              Engineer working across{' '}
              <span className="text-accent">fullstack, cloud &amp; applied AI</span>
            </>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.55fr_1fr]">
          {/* Left: narrative + education + certs */}
          <div>
            <Reveal>
              <div className="space-y-5 text-fluid-lead leading-relaxed text-muted">
                {contact.about.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Education */}
            <Reveal delay={0.1}>
              <div className="card mt-8 p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <GraduationCap size={22} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg text-ink">{education.degree}</h3>
                    <p className="text-sm text-accent">
                      {education.school} · {education.location}
                    </p>
                    <p className="mt-1 text-sm text-muted">{education.minors}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="chip">GPA {education.gpa}</span>
                      <span className="chip">{education.graduation}</span>
                    </div>
                    <ul className="mt-4 space-y-1.5">
                      {education.honors.map((honor) => (
                        <li key={honor} className="flex items-center gap-2 text-sm text-muted">
                          <Check size={15} className="shrink-0 text-accent" />
                          {honor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Certifications */}
            <Reveal delay={0.15}>
              <div className="mt-8">
                <span className="mono-label">Certifications</span>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="card flex items-center gap-3 p-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                        <Award size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-tight text-ink">{cert.name}</p>
                        <p className="mt-0.5 text-xs text-faint">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: profile card */}
          <Reveal delay={0.1}>
            <div className="card glow-ring p-6 lg:sticky lg:top-24">
              <div className="relative mx-auto grid h-32 w-32 place-items-center rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 to-transparent">
                <span className="font-heading text-5xl font-bold text-gradient">
                  {contact.initials}
                </span>
                <span className="absolute -left-px -top-px h-4 w-4 rounded-tl-2xl border-l-2 border-t-2 border-accent" />
                <span className="absolute -bottom-px -right-px h-4 w-4 rounded-br-2xl border-b-2 border-r-2 border-accent" />
              </div>

              <h3 className="mt-5 text-center font-heading text-xl text-ink">{contact.name}</h3>
              <p className="text-center text-sm text-muted">{contact.title}</p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-faint">
                <MapPin size={13} />
                {contact.location}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-line bg-surface-2 p-3 text-center"
                  >
                    <p className="font-heading text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="mt-1 text-[0.7rem] leading-tight text-faint">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button
                href={contact.resumeUrl}
                download
                variant="secondary"
                className="mt-6 w-full"
                icon={<Download size={16} />}
              >
                Download Resume
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
