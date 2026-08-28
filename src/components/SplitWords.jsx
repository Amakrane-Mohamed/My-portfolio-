import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

export default function SplitWords({ text, className, delay = 0.15, armed = true }) {
  const ref = useRef(null)
  const words = text.split(' ')

  useGSAP(
    () => {
      const nodes = ref.current?.querySelectorAll('.w')
      if (!nodes?.length) return
      if (!armed) {
        gsap.set(nodes, { opacity: 0, y: 8 })
        return
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(nodes, { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(
        nodes,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.028, duration: 0.55, delay, ease: 'expo.out' },
      )
    },
    { scope: ref, dependencies: [armed] },
  )

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="w">{word}</span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}
