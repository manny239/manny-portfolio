import { MapPin } from 'lucide-react'
import { experience } from '../data/resume'
import { cn } from '../lib/cn'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Tag } from './ui/Tag'

export function Experience() {
  return (
    <section id="experience" className="section-py relative">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="experience"
          title={
            <>
              Where I&rsquo;ve <span className="text-accent">made an impact</span>
            </>
          }
        />

        <div className="relative mt-12 pl-8">
          {/* Timeline rail */}
          <span className="absolute bottom-2 left-[6px] top-2 w-0.5 bg-line" aria-hidden="true" />

          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.start}`} delay={i * 0.05}>
              <div className="relative pb-12 last:pb-0">
                {/* Dot */}
                <span className="absolute -left-8 top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-accent bg-canvas">
                  {job.current && (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  )}
                </span>

                <div className="card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="font-heading text-xl text-ink">{job.role}</h3>
                      <p className="font-medium text-accent">{job.company}</p>
                      {job.team && <p className="mt-0.5 text-sm text-faint">{job.team}</p>}
                    </div>
                    <div className="text-left sm:text-right">
                      <span
                        className={cn(
                          'chip',
                          job.current && 'border-accent/50 text-accent',
                        )}
                      >
                        {job.start} to {job.end}
                      </span>
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-faint sm:justify-end">
                        <MapPin size={12} />
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-muted">{job.summary}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.highlights.map((highlight, hi) => (
                      <li key={hi} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
