import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in the viewport's focus band, for
 * highlighting the active nav link.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')
  const key = ids.join(',')

  useEffect(() => {
    const sectionIds = key ? key.split(',') : []
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
