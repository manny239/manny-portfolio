import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TagProps {
  children: ReactNode
  className?: string
}

/** Monospace tech/skill chip (styled by the global `.chip` class). */
export function Tag({ children, className }: TagProps) {
  return <span className={cn('chip', className)}>{children}</span>
}
