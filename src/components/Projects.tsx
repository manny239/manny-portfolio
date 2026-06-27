import { useEffect, useState } from 'react'
import { ArrowUpRight, CircleCheck, Sparkles } from 'lucide-react'
import { projects } from '../data/resume'
import type { Project } from '../types'
import { Container } from './ui/Container'
import { Modal } from './ui/Modal'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Tag } from './ui/Tag'

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View case study: ${project.title}`}
      className="card group relative flex h-full w-full flex-col overflow-hidden p-6 text-left"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex items-center justify-between gap-3">
        <span className="mono-label">{project.category}</span>
        <span className="text-xs text-faint">{project.year}</span>
      </div>

      <div className="mt-3 flex items-start gap-2">
        <h3 className="font-heading text-xl text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h3>
      </div>

      <div className="mt-1 flex items-center gap-2">
        {project.org && <span className="text-sm text-faint">{project.org}</span>}
        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[0.68rem] font-medium text-accent">
            <Sparkles size={11} />
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        {project.tags.length > 4 && (
          <span className="chip">+{project.tags.length - 4}</span>
        )}
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        View case study
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </button>
  )
}

function CaseStudy({ project }: { project: Project }) {
  const { caseStudy } = project
  return (
    <div className="p-6 sm:p-8">
      <span className="mono-label">
        {project.category} · {project.year}
        {project.org ? ` · ${project.org}` : ''}
      </span>
      <h3 id="project-modal-title" className="mt-2 font-heading text-2xl text-ink">
        {project.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{project.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-7">
        <span className="mono-label">The problem</span>
        <p className="mt-2 leading-relaxed text-muted">{caseStudy.problem}</p>
      </div>

      <div className="mt-6">
        <span className="mono-label">Approach</span>
        <ol className="mt-3 space-y-3">
          {caseStudy.approach.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/10 font-mono text-xs text-accent">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6">
        <span className="mono-label">Impact</span>
        <ul className="mt-3 space-y-2.5">
          {caseStudy.impact.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
              <CircleCheck size={18} className="mt-0.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  // Keep last project visible during the modal's exit animation.
  const [shown, setShown] = useState<Project | null>(project)
  useEffect(() => {
    if (project) setShown(project)
  }, [project])

  return (
    <Modal open={!!project} onClose={onClose} labelledBy="project-modal-title">
      {shown && <CaseStudy project={shown} />}
    </Modal>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-py relative bg-canvas-soft">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="projects"
          title={
            <>
              Selected <span className="text-accent">work</span>
            </>
          }
          description="A mix of production platforms, applied-AI prototypes, and things I've built for the fun of solving the problem. Tap any card for the full case study."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
