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
  tags: string[]
  highlights: string[]
  caseStudy: ProjectCaseStudy
  links?: { label: string; href: string }[]
}

export interface NavLink {
  label: string
  href: string
}
