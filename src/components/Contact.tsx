import { useState } from 'react'
import type { FormEvent } from 'react'
import { CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { contact } from '../data/resume'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { SocialLinks } from './ui/SocialLinks'

/**
 * Contact form delivery via Web3Forms (https://web3forms.com).
 * Create a free access key (no account needed) targeting emkurinaah@gmail.com,
 * then paste it below. Web3Forms emails each submission to that address and sets
 * the Reply-To header to the visitor's email, so hitting Reply in Gmail goes
 * straight back to them. Until a key is set, the form falls back to the visitor's
 * mail client.
 *
 * The access key is public by design (it ships in client-side code); it only
 * permits sending mail to the address configured on the Web3Forms account.
 */
const WEB3FORMS_ACCESS_KEY = '1243ace3-bda5-4137-aae9-e1abaac7e172'
const ENDPOINT = 'https://api.web3forms.com/submit'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const detailItems = [
  { icon: 'mail' as const, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'phone' as const, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, '')}` },
  {
    icon: 'mapPin' as const,
    label: 'Location',
    value: contact.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(contact.location)}`,
  },
]

const inputClasses =
  'mt-1.5 w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') ?? '')

    // No delivery key configured yet → fall back to the visitor's mail client.
    if (!WEB3FORMS_ACCESS_KEY) {
      const email = String(formData.get('email') ?? '')
      const message = String(formData.get('message') ?? '')
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
      return
    }

    // Web3Forms delivers to the account address; Reply-To is auto-set to the
    // visitor's "email" field, so a Gmail reply goes straight back to them.
    // Sent as JSON (not multipart) so the API answers with CORS headers + JSON
    // instead of redirecting to a success page.
    const payload = {
      ...Object.fromEntries(formData.entries()),
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Portfolio message from ${name}`,
      from_name: 'mannykurinaah.com',
    }

    setStatus('submitting')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = (await res.json()) as { success?: boolean }
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-py relative">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="contact"
          title={
            <>
              Let&rsquo;s build <span className="text-accent">something</span>
            </>
          }
          description="Open to software engineering roles and interesting collaborations. Drop a message or reach me directly, and I'll get back to you."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.25fr]">
          {/* Contact details */}
          <Reveal>
            <div>
              <div className="space-y-3">
                {detailItems.map((item) => {
                  const external = item.icon === 'mapPin'
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      className="card group flex items-center gap-4 p-4"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                        <Icon name={item.icon} size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wide text-faint">
                          {item.label}
                        </span>
                        <span className="block truncate text-ink transition-colors group-hover:text-accent">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  )
                })}
              </div>

              <div className="mt-6">
                <span className="mono-label">Find me online</span>
                <SocialLinks className="mt-3" />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            {status === 'success' ? (
              <div className="card flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  <CircleCheck size={28} />
                </span>
                <h3 className="font-heading text-xl text-ink">Message sent</h3>
                <p className="max-w-sm text-muted">
                  Thanks for reaching out, and I&rsquo;ll get back to you soon.
                </p>
                <Button variant="secondary" onClick={() => setStatus('idle')}>
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
                {/* Honeypot spam trap — Web3Forms rejects the submission if checked */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-ink">Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-ink">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={200}
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="text-sm font-medium text-ink">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    placeholder="Tell me about the role or project…"
                    className={`${inputClasses} resize-y`}
                  />
                </label>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    icon={
                      status === 'submitting' ? (
                        <LoaderCircle size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )
                    }
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                  </Button>
                  <p aria-live="polite" className="text-sm">
                    {status === 'error' && (
                      <span className="text-red-400">
                        Something went wrong, please email me directly.
                      </span>
                    )}
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
