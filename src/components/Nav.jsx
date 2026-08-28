import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const TABS = [
  { id: 'info', label: 'Info' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'life', label: 'Life' },
  { id: 'contact', label: 'Contact' },
]

const spring = { type: 'spring', bounce: 0, duration: 0.4 }

export default function Nav({ tab, onTab, theme, onTheme }) {
  const pillsRef = useRef(null)
  const glowRef = useRef(null)
  const first = useRef(true)
  const dark = theme === 'dark'

  useGSAP(
    () => {
      const glow = glowRef.current
      const row = pillsRef.current
      const active = row?.querySelector('.nav-pill.active')
      if (!glow || !row || !active) return

      const place = (animate) => {
        const parent = row.getBoundingClientRect()
        const box = active.getBoundingClientRect()
        const vars = {
          x: box.left - parent.left,
          y: box.top - parent.top,
          width: box.width,
          height: box.height,
          opacity: 1,
        }
        if (!animate) gsap.set(glow, vars)
        else gsap.to(glow, { ...vars, duration: 0.42, ease: 'expo.out', overwrite: 'auto' })
      }

      place(!first.current)
      first.current = false

      const onResize = () => place(false)
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    },
    { dependencies: [tab], scope: pillsRef },
  )

  return (
    <header className="card nav">
      <nav className="nav-pills" ref={pillsRef} aria-label="Sections">
        <span className="nav-glow" ref={glowRef} aria-hidden />
        {TABS.map((item) => {
          const active = tab === item.id
          return (
            <button
              key={item.id}
              type="button"
              className={`nav-pill${active ? ' active' : ''}`}
              aria-current={active ? 'page' : undefined}
              onClick={() => onTab(item.id)}
            >
              {item.label}
            </button>
          )
        })}
      </nav>
      <button
        type="button"
        className="theme-toggle"
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={onTheme}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={dark ? 'sun' : 'moon'}
            className="theme-toggle-icon"
            initial={{ rotate: dark ? -80 : 80, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: dark ? 80 : -80, opacity: 0, scale: 0.7 }}
            transition={spring}
          >
            {dark ? <Sun size={16} strokeWidth={2.2} /> : <Moon size={16} strokeWidth={2.2} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </header>
  )
}
