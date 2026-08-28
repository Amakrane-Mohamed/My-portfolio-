import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]
const DURATION = 3000

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

function themeColor(value) {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', value)
}

function pageThemeColor() {
  return document.documentElement.dataset.theme === 'dark' ? '#1c1c1e' : '#E8E8E8'
}

function unlock() {
  document.documentElement.classList.remove('is-booting')
  document.body.classList.remove('is-booting')
  themeColor(pageThemeColor())
}

export default function Loader({ onReveal, onDone }) {
  const [pct, setPct] = useState(1)
  const [fill, setFill] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const reveal = onReveal || onDone

  useEffect(() => {
    document.documentElement.classList.add('is-booting')
    document.body.classList.add('is-booting')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setPct(100)
      setFill(1)
      const id = window.setTimeout(() => {
        unlock()
        reveal()
        onDone()
      }, 280)
      return () => {
        window.clearTimeout(id)
        unlock()
      }
    }

    const start = performance.now()
    let raf = 0
    let leaveId = 0

    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION)
      const eased = easeOutCubic(t)
      setFill(eased)
      setPct(Math.max(1, Math.min(100, Math.round(eased * 100))))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
        return
      }
      setPct(100)
      setFill(1)
      leaveId = window.setTimeout(() => {
        themeColor('#ffffff')
        reveal()
        setLeaving(true)
      }, 180)
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(leaveId)
      unlock()
    }
  }, [onDone, reveal])

  return createPortal(
    <motion.div
      className={`loader${leaving ? ' is-leaving' : ''}`}
      initial={false}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: leaving ? 0.9 : 0, ease }}
      style={{ pointerEvents: leaving ? 'none' : 'auto' }}
      onAnimationComplete={() => {
        if (!leaving) return
        unlock()
        onDone()
      }}
    >
      <div className="loader-fill" style={{ transform: `scaleY(${fill})` }} />
      <div className="loader-center">
        <p className="loader-count">{pct}%</p>
        <p className="loader-role">apps developer</p>
      </div>
    </motion.div>,
    document.body,
  )
}
