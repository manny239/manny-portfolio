import type {
  Certification,
  ContactInfo,
  EducationInfo,
  ExperienceItem,
  NavLink,
  Project,
  Publication,
  QuickStat,
  SkillCategory,
} from '../types'

export const contact: ContactInfo = {
  name: 'Emmanuel Kurinaah',
  firstName: 'Emmanuel',
  lastName: 'Kurinaah',
  initials: 'EK',
  title: 'Software Engineer',
  roles: [
    'Fullstack Development',
    'Cloud & DevOps',
    'Applied AI & RAG',
    'Secure API Design',
  ],
  tagline:
    'I build intelligent, well-engineered systems, from AWS platforms serving tens of thousands of users to agentic-AI and retrieval-augmented prototypes.',
  about: [
    "I'm a Software Engineer at Travelers, where I build fullstack platforms on AWS for a global workforce of 34,000+ employees. I work across the whole stack, from React front ends to Express/Node APIs and PostgreSQL, and I own the cloud infrastructure and pipelines that ship them.",
    "My focus sits where solid engineering meets applied AI. I design REST APIs to the OpenAPI spec, provision infrastructure as code with Terraform, and bake security and testing into every stage of the SDLC. Lately I've been building agentic-AI and retrieval-augmented (RAG) prototypes that put institutional knowledge to work.",
    'I hold a B.S. in Computer Engineering from the University of Hartford, with minors in Computer Science, Data Science, and Mathematics, and I hold AWS certifications in both Cloud and AI.',
  ],
  location: 'Avon, CT',
  email: 'emkurinaah@gmail.com',
  phone: '(860) 790-3377',
  resumeUrl: '/Emmanuel_Kurinaah_Resume.pdf',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/manny239',
      handle: 'manny239',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/emmakurinaah',
      handle: 'emmakurinaah',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:emkurinaah@gmail.com',
      handle: 'emkurinaah@gmail.com',
      icon: 'mail',
    },
  ],
}

export const education: EducationInfo = {
  school: 'University of Hartford',
  degree: 'B.S. Computer Engineering',
  minors: 'Minors in Computer Science, Data Science & Mathematics',
  location: 'West Hartford, CT',
  graduation: 'May 2025',
  gpa: '3.77',
  honors: [
    'Tau Beta Pi Engineering Honor Society',
    "President's List, six semesters",
  ],
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    abbr: 'CCP',
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    abbr: 'AIP',
  },
  {
    name: 'Lean Six Sigma Yellow Belt',
    issuer: 'Lean Six Sigma',
    abbr: 'LSS',
  },
]

export const publication: Publication = {
  title:
    'Real-time parking lot monitoring for smart cities: a CNN-based approach using YOLO and RTSP-compatible cameras',
  venue:
    'SPIE Defense + Commercial Sensing 2025 · Three-Dimensional Imaging, Visualization, and Display (Proc. SPIE Vol. 13465)',
  venueShort: 'SPIE 2025',
  year: '2025',
  authors: 'E. Kurinaah, M. Hall, N. Viera, K. Smith, Y. Yu, X. Shen',
  role: 'First author',
  href: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13465/134651I/Real-time-parking-lot-monitoring-for-smart-cities--a/10.1117/12.3058674.short',
  doi: '10.1117/12.3058674',
  projectId: 'parking-monitor',
}

export const quickStats: QuickStat[] = [
  { value: '34K+', label: 'Employees served by platforms I build' },
  { value: '92%+', label: 'Test coverage sustained in production' },
  { value: '3.77', label: 'GPA, B.S. Computer Engineering' },
  { value: '3', label: 'AWS & process certifications' },
]

export const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    label: 'Languages',
    icon: 'code',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS'],
  },
  {
    key: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: 'layers',
    skills: ['React', 'Node.js', 'Express', 'Zod', 'Vitest', 'Liquibase'],
  },
  {
    key: 'cloud',
    label: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      'AWS',
      'Lambda',
      'S3',
      'API Gateway',
      'CloudFormation',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'Jenkins',
      'UrbanCode Deploy',
      'CI/CD',
    ],
  },
  {
    key: 'data-ai',
    label: 'Data & AI',
    icon: 'brain',
    skills: [
      'PostgreSQL',
      'Vector Databases',
      'RAG',
      'LLM Integration',
      'Agent-to-Agent (A2A)',
      'Prompt Engineering',
    ],
  },
  {
    key: 'security',
    label: 'Security, Testing & Observability',
    icon: 'shield',
    skills: [
      'Threat Modeling',
      '42Crunch',
      'OpenAPI',
      'REST API Design',
      'ELK Stack',
      'Agile / Scrum',
      'Jira',
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'Travelers Insurance',
    role: 'Associate Software Engineer',
    team: 'Engineering Enablement · Corporate Technology',
    location: 'Hartford, CT',
    start: 'Jun 2025',
    end: 'Present',
    current: true,
    summary:
      "Building and operating a fullstack platform that migrates Travelers' on-premises facility & parking system to AWS for a global workforce of 34,000+.",
    highlights: [
      'Engineered a fullstack app to migrate the on-prem facility & parking platform to AWS for 34,000+ employees, with a React front end on an internal design system, an Express (Node.js) API layer, and a PostgreSQL database.',
      'Provisioned and managed AWS infrastructure as code with Terraform, and configured self-hosted GitHub Actions runners to automate build and deployment pipelines.',
      'Designed and documented REST APIs to the OpenAPI spec with Zod validation, and authored a Python service that ingests the corporate HR feed daily to keep employee records synchronized.',
      'Instrumented observability with the ELK stack and safeguarded data integrity via Liquibase migrations and Vitest unit testing, sustaining 92%+ code coverage.',
      'Conducted threat modeling and embedded security best practices across the SDLC, remediating vulnerabilities before production release.',
      'Built agentic-AI proofs of concept, including a learning game using the Agent-to-Agent (A2A) protocol to drive AI NPCs that quiz employees on internal documentation, all prototyped in Claude.',
      'Architected a retrieval-augmented generation (RAG) system that tokenizes internal domain knowledge into a vector database for agent inference, retaining institutional expertise.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS',
      'Terraform',
      'GitHub Actions',
      'Python',
      'Zod',
      'Vitest',
      'ELK',
      'RAG',
    ],
  },
  {
    company: 'Webster Bank',
    role: 'Software Engineer Intern',
    location: 'Southington, CT',
    start: 'May 2024',
    end: 'Aug 2024',
    summary:
      'Automated manual steps in the syndicated-loan process with AI-driven document extraction on AWS.',
    highlights: [
      'Built AI-driven document-extraction flows on AWS using Microsoft Power Automate and AI Builder, automating manual data entry in the syndicated-loan process.',
      'Delivered Agile stories across the full SDLC for a syndicated-loan processing release, tracked and prioritized in Jira.',
    ],
    stack: ['AWS', 'Power Automate', 'AI Builder', 'Agile', 'Jira'],
  },
]

export const projects: Project[] = [
  {
    id: 'facility-platform',
    title: 'Facility & Parking Platform Migration',
    blurb:
      'Fullstack AWS migration of an on-prem facility & parking system serving 34,000+ employees worldwide.',
    category: 'Fullstack · Cloud',
    year: '2025',
    org: 'Travelers',
    featured: true,
    tags: ['React', 'Express', 'PostgreSQL', 'AWS', 'Terraform', 'GitHub Actions'],
    highlights: [
      'React front end on an internal design system, Express/Node API, PostgreSQL data layer',
      'Infrastructure as code with Terraform + self-hosted GitHub Actions CI/CD',
      'Daily Python HR-feed sync keeps 34K+ employee records current',
    ],
    caseStudy: {
      problem:
        "Travelers' facility & parking platform ran on aging on-premises infrastructure, limiting scale, resilience, and global access for a 34,000+ employee workforce.",
      approach: [
        "Designed a fullstack architecture: a React front end built on the company's internal design system, an Express (Node.js) API layer, and a PostgreSQL database.",
        'Provisioned and managed all AWS infrastructure as code with Terraform, and configured self-hosted GitHub Actions runners to automate build and deployment pipelines.',
        'Designed and documented REST APIs to the OpenAPI specification with Zod schema validation, and wrote a Python service that ingests the corporate HR feed daily to keep employee records synchronized.',
        'Instrumented observability with the ELK stack and protected data integrity with Liquibase migrations and Vitest tests at 92%+ coverage.',
      ],
      impact: [
        'Migrated a business-critical platform to AWS, making it resilient and globally available to 34,000+ employees.',
        'Automated deployments and HR data sync, cutting manual operations and keeping records current.',
        'Sustained 92%+ test coverage with security reviewed across the SDLC.',
      ],
    },
  },
  {
    id: 'a2a-learning-game',
    title: 'Agentic-AI Learning Game',
    blurb:
      'A learning game where AI-powered NPCs quiz employees on internal documentation, driven by the Agent-to-Agent (A2A) protocol.',
    category: 'Applied AI',
    year: '2025',
    org: 'Travelers',
    featured: true,
    tags: ['A2A Protocol', 'LLM', 'Agents', 'Claude', 'Prompt Engineering'],
    highlights: [
      'AI NPCs that quiz employees on internal documentation',
      'Multi-agent orchestration via the Agent-to-Agent (A2A) protocol',
      'Prototyped in Claude before the production build',
    ],
    caseStudy: {
      problem:
        'Internal documentation is dense and easy to skip. The team wanted an engaging way to help employees actually learn it.',
      approach: [
        'Designed a learning game in which AI-powered NPCs quiz employees on internal documentation.',
        'Used the Agent-to-Agent (A2A) protocol to coordinate multiple agents that generate questions, evaluate answers, and adapt difficulty.',
        'Prototyped the experience and prompts in Claude to validate behavior before committing to a production build.',
      ],
      impact: [
        'Delivered a department-wide proof of concept that turns documentation review into an interactive game.',
        'Demonstrated practical multi-agent (A2A) patterns the wider organization could reuse.',
      ],
    },
  },
  {
    id: 'rag-knowledge',
    title: 'RAG Knowledge-Retention System',
    blurb:
      'A retrieval-augmented generation system that captures institutional expertise in a vector database for agent inference.',
    category: 'Applied AI',
    year: '2025',
    org: 'Travelers',
    featured: true,
    tags: ['RAG', 'Vector DB', 'LLM', 'Embeddings', 'Python'],
    highlights: [
      'Tokenizes internal domain knowledge into a vector database',
      'Feeds retrieved, grounded context into agent inference',
      'Built to retain expertise ahead of senior-staff departures',
    ],
    caseStudy: {
      problem:
        'Critical institutional knowledge risked walking out the door as senior staff prepared to depart.',
      approach: [
        'Architected a retrieval-augmented generation (RAG) pipeline that tokenizes internal domain knowledge and stores embeddings in a vector database.',
        'Wired retrieval into agent inference so AI assistants respond with grounded, organization-specific context.',
      ],
      impact: [
        'Preserves hard-won institutional expertise in a queryable, durable form.',
        'Gives agents grounded context, improving answer relevance for internal users.',
      ],
    },
  },
  {
    id: 'parking-monitor',
    title: 'Automated Parking Monitoring System',
    blurb:
      'A computer-vision parking monitor that fuses live RTSP camera feeds with YOLO detection and a real-time React occupancy dashboard. Published and presented at SPIE 2025.',
    category: 'Computer Vision · IoT',
    year: '2024',
    featured: true,
    award: 'Published · SPIE 2025',
    tags: ['Computer Vision', 'YOLO', 'React', 'Image Annotation', 'IoT'],
    highlights: [
      'Live RTSP camera feeds + YOLO CNN detection on a Raspberry Pi 5',
      '1,000+ annotated images across conditions for model tuning',
      'First-author paper published at SPIE Defense + Commercial Sensing 2025',
    ],
    links: [
      {
        label: 'Read the paper · SPIE',
        href: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13465/134651I/Real-time-parking-lot-monitoring-for-smart-cities--a/10.1117/12.3058674.short',
      },
    ],
    caseStudy: {
      problem:
        'Finding open parking is slow and frustrating, and most lots offer no real-time occupancy data.',
      approach: [
        'Integrated RTSP-compatible cameras with a Raspberry Pi 5 to stream and sense parking-space occupancy in real time.',
        'Captured and annotated 1,000+ images of the lot under varied lighting and weather to train and tune a YOLO CNN detector.',
        'Built a React application that displays real-time parking-lot occupancy.',
      ],
      impact: [
        'Delivered an end-to-end system spanning hardware sensing, a tuned vision model, and a live web dashboard.',
        'First-authored the research paper, presenting and publishing it at SPIE Defense + Commercial Sensing 2025 (Proc. SPIE Vol. 13465).',
        'Turned a noisy, real-world environment into actionable, real-time occupancy data.',
      ],
    },
  },
  {
    id: 'doc-extraction',
    title: 'AI Document-Extraction Flows',
    blurb:
      'AWS document-extraction automation that removed manual data entry from the syndicated-loan process.',
    category: 'Applied AI · Automation',
    year: '2024',
    org: 'Webster Bank',
    tags: ['AWS', 'Power Automate', 'AI Builder', 'OCR', 'Automation'],
    highlights: [
      'AI-driven document extraction running on AWS',
      'Removed manual data entry from syndicated-loan processing',
      'Delivered Agile across the full SDLC',
    ],
    caseStudy: {
      problem:
        'The syndicated-loan process relied on slow, error-prone manual data entry from documents.',
      approach: [
        'Built AI-driven document-extraction flows on AWS using Microsoft Power Automate and AI Builder.',
        'Delivered Agile stories across the full SDLC for a syndicated-loan processing release, tracked in Jira.',
      ],
      impact: [
        'Automated manual data entry, reducing effort and errors in loan processing.',
        'Shipped within an Agile release cadence as an intern contributor.',
      ],
    },
  },
  {
    id: 'portfolio-builder',
    title: 'Portfolio Site Builder',
    blurb:
      'A reusable React SPA portfolio skeleton with a GitHub Actions to AWS pipeline for spinning up and updating sites. This very page descends from it.',
    category: 'Fullstack · DevOps',
    year: '2025',
    org: 'Personal',
    tags: ['React', 'Vite', 'GitHub Actions', 'AWS', 'S3', 'CloudFront'],
    highlights: [
      'Reusable seed React SPA skeleton, customized per request',
      'GitHub Actions pipeline provisions AWS resources and ships updates',
      'The framework this very portfolio descends from',
    ],
    caseStudy: {
      problem:
        'Standing up a polished, hostable portfolio for each new person meant repeating the same setup every time.',
      approach: [
        'Developed a local seed React SPA portfolio skeleton designed for fast customization per request.',
        'Integrated a GitHub Actions pipeline with AWS-hosted resources to provision new infrastructure and push updates automatically.',
      ],
      impact: [
        'Turned bespoke portfolio builds into a repeatable, automation-driven workflow.',
        'This site is the latest build to descend from that skeleton.',
      ],
    },
  },
]

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
