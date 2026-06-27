import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Animation delay in seconds. */
  delay?: number
  /** Vertical travel distance in px. */
  y?: number
}

/**
 * Scroll-into-view fade + slide. Honors prefers-reduced-motion via the global
 * <MotionConfig reducedMotion="user"> wrapper, which neutralizes the transforms.
 */
export function Reveal({ children, className, delay = 0, y = 26 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
