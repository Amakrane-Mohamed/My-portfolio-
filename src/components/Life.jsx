import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const SHOTS = [
  { src: '/life/water.jpg', alt: 'Waterfront architecture', pos: 'center 38%', className: 'life-hero' },
  { src: '/life/studio.jpg', alt: 'Night desk, Xcode open', pos: 'center 32%' },
  { src: '/life/friends.jpg', alt: 'Out with friends', pos: 'center center' },
]

export default function Life({ ready = true }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      if (!ready) {
        gsap.set('.life-copy, .life-shot', { opacity: 0 })
        return
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set('.life-copy, .life-shot', { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(
        '.life-copy',
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' },
      )
      gsap.fromTo(
        '.life-shot',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.75, delay: 0.06, ease: 'expo.out' },
      )
    },
    { scope: ref, dependencies: [ready] },
  )

  return (
    <section className="card life" id="life" ref={ref} aria-label="Life">
      <p className="life-copy">Friends. Life. Coding. Building, and enjoying the spots.</p>
      <div className="life-grid">
        {SHOTS.map((shot) => (
          <div key={shot.src} className={`life-shot${shot.className ? ` ${shot.className}` : ''}`}>
            <img src={shot.src} alt={shot.alt} style={{ objectPosition: shot.pos }} />
          </div>
        ))}
      </div>
    </section>
  )
}
