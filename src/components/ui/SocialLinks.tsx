import { contact } from '../../data/resume'
import { cn } from '../../lib/cn'
import { Icon } from './Icon'

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

export function SocialLinks({ className, iconSize = 18 }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {contact.socials.map((social) => {
        const external = social.icon !== 'mail'
        return (
          <a
            key={social.label}
            href={social.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            aria-label={social.label}
            title={social.label}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
          >
            <Icon name={social.icon} size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
