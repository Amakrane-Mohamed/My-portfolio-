import { AnimatePresence, motion } from 'framer-motion'
import { PROFILE } from '../data'

const spring = { type: 'spring', bounce: 0, duration: 0.4 }

export default function Cta({ open, onContact }) {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="cta-dock"
          initial={reduced ? { opacity: 0 } : { y: 24, opacity: 0 }}
          animate={reduced ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { y: 24, opacity: 0 }}
          transition={spring}
        >
          <div className="cta-bar" role="region" aria-label="Hello">
            <p className="cta-copy">Hello</p>
            <div className="cta-actions">
              <a
                className="cta-secondary"
                href={PROFILE.resume}
                download="Mohamed_Amakrane_Resume.pdf"
              >
                Résumé
              </a>
              <button type="button" className="cta-primary" onClick={onContact}>
                Email
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
