/** Shared content types for the portfolio. All site copy is data-driven. */

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'phone'
  | 'mapPin'
  | 'fileText'
  | 'code'
  | 'cloud'
  | 'brain'
  | 'shield'
  | 'database'
  | 'layers'

export interface SocialLink {
  label: string
  href: string
  handle: string
  icon: IconName
}

export interface ContactInfo {
  name: string
  firstName: string
  lastName: string
  initials: string
  title: string
  /** Short rotating phrases for the hero subtitle. */
  roles: string[]
  tagline: string
  about: string[]
  location: string
  email: string
  phone: string
  resumeUrl: string
  socials: SocialLink[]
}

export interface EducationInfo {
  school: string
  degree: string
  minors: string
  location: string
  graduation: string
  gpa: string
  honors: string[]
}

export interface Certification {
  name: string
  issuer: string
  abbr: string
}

export interface SkillCategory {
  key: string
  label: string
  icon: IconName
  skills: string[]
}

export interface QuickStat {
  value: string
  label: string
}

export interface Publication {
  title: string
  /** Full venue line, e.g. proceedings + conference. */
  venue: string
  /** Compact venue label for pills, e.g. "SPIE 2025". */
  venueShort: string
  year: string
  /** Author list, this person's name first. */
  authors: string
  /** This person's contribution, e.g. "First author". */
  role: string
  href: string
  doi: string
  /** Optional id of the related project. */
  projectId?: string
}

export interface ExperienceItem {
  company: string
  role: string
  team?: string
  location: string
  start: string
  end: string
  current?: boolean
  summary: string
  highlights: string[]
  stack: string[]
}

export interface ProjectCaseStudy {
  problem: string
  approach: string[]
  impact: string[]
}

export interface Project {
  id: string
  title: string
  blurb: string
  category: string
  year: string
  org?: string
  featured?: boolean
  /** Optional accolade badge, e.g. "Published · SPIE 2025". */
  award?: string
  tags: string[]
  highlights: string[]
  caseStudy: ProjectCaseStudy
  links?: { label: string; href: string }[]
}

export interface NavLink {
  label: string
  href: string
}
