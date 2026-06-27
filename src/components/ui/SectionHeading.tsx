import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  /** Two-digit index, e.g. "01". */
  index?: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={cn(centered && 'text-center', className)}>
      <Reveal>
        <div className={cn('flex items-center gap-3', centered && 'justify-center')}>
          <span className="mono-label">
            {index ? `${index} / ` : ''}
            {eyebrow}
          </span>
          <span className="h-px w-12 bg-line-strong" />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'mt-4 text-fluid-h2 font-semibold text-ink',
            centered ? 'mx-auto max-w-2xl' : 'max-w-3xl',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'mt-4 text-fluid-lead text-muted',
              centered ? 'mx-auto max-w-2xl' : 'max-w-2xl',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
