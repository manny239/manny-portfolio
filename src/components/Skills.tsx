import { skillCategories } from '../data/resume'
import { cn } from '../lib/cn'
import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Tag } from './ui/Tag'

export function Skills() {
  return (
    <section id="skills" className="section-py relative bg-canvas-soft">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="skills"
          title={
            <>
              The stack I <span className="text-accent">build with</span>
            </>
          }
          description="From front-end frameworks to cloud infrastructure, data, and the security and testing practices that keep it all production-ready."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.key} delay={i * 0.06}>
              <div
                className={cn(
                  'card h-full p-6',
                  category.key === 'cloud' && 'sm:col-span-2',
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <Icon name={category.icon} size={20} />
                  </span>
                  <h3 className="font-heading text-lg text-ink">{category.label}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
