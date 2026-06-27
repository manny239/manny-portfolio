import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: MouseEventHandler<HTMLElement>
  type?: 'button' | 'submit'
  download?: boolean | string
  target?: string
  rel?: string
  disabled?: boolean
  className?: string
  icon?: ReactNode
  iconRight?: ReactNode
  'aria-label'?: string
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-[0.95rem]',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-contrast shadow-[0_12px_36px_-14px_var(--glow)] hover:brightness-110 hover:shadow-[0_18px_46px_-12px_var(--glow)]',
  secondary:
    'border border-line bg-surface text-ink hover:border-accent/60 hover:text-accent',
  ghost: 'text-muted hover:text-ink',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  download,
  target,
  rel,
  disabled,
  className,
  icon,
  iconRight,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className)
  const inner = (
    <>
      {icon}
      {children}
      {iconRight && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {iconRight}
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        aria-label={ariaLabel}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  )
}
