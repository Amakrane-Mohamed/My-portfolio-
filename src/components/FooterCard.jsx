import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Phone } from 'lucide-react'
import { PROFILE } from '../data'

const spring = { type: 'spring', bounce: 0, duration: 0.35 }

export default function FooterCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef(0)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
    } catch {
      return
    }
    setCopied(true)
    window.clearTimeout(copyTimer.current)
    copyTimer.current = window.setTimeout(() => setCopied(false), 1600)
  }

  function onSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Hello from ${name.trim()}`)
    const body = encodeURIComponent(`${message.trim()}\n\n${name.trim()}\n${email.trim()}`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <footer className="card foot" id="contact">
      <p className="foot-title">Let's talk</p>
      <p className="foot-lead">A role, a product, or a hello. I read every message.</p>
      <div className="contact-actions">
        <a className="contact-call" href={`tel:${PROFILE.phone}`}>
          <span className="contact-action-icon" aria-hidden>
            <Phone size={18} strokeWidth={2.2} />
          </span>
          <span className="contact-action-copy">
            <small>Call</small>
            {PROFILE.phoneLabel}
          </span>
        </a>
        <div className="contact-mail">
          <span className="contact-action-copy">
            <small>Email</small>
            {PROFILE.email}
          </span>
          <button
            type="button"
            className="contact-copy"
            onClick={copyEmail}
            aria-label={copied ? 'Email copied' : 'Copy email'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'check' : 'copy'}
                className="contact-copy-icon"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={spring}
              >
                {copied ? <Check size={16} strokeWidth={2.4} /> : <Copy size={16} strokeWidth={2.2} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="contact-group">
          <label className="contact-line">
            <span>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="contact-line">
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@email.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="contact-note">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="A role, a product, or a hello"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
        </div>
        <button className="contact-send" type="submit">
          {sent ? 'Opening mail' : 'Send message'}
        </button>
      </form>
    </footer>
  )
}
