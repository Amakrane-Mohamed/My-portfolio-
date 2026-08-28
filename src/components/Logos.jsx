import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const ITEMS = [
  { id: 'flutter', name: 'Flutter', src: '/logos/flutter.svg', color: '#02569B' },
  { id: 'dart', name: 'Dart', src: '/logos/dart.svg', color: '#0175C2' },
  { id: 'xcode', name: 'Xcode', src: '/logos/xcode.svg', color: '#147EFB' },
  { id: 'apple', name: 'Apple', src: '/logos/apple.svg', color: '#111111', invert: true },
  { id: 'firebase', name: 'Firebase', src: '/logos/firebase.svg', color: '#FFA000' },
  { id: 'supabase', name: 'Supabase', src: '/logos/supabase.svg', color: '#3ECF8E' },
  { id: 'cursor', name: 'Cursor', src: '/logos/cursor.svg', color: '#111111', invert: true },
  { id: 'swift', name: 'Swift', src: '/logos/swift.svg', color: '#F05138' },
]

function Set({ hidden }) {
  const row = ITEMS
  return (
    <div className="logos-set" aria-hidden={hidden || undefined}>
      {row.map((item, i) => (
        <div className={`logo-item${item.invert ? ' logo-invert' : ''}`} key={`${item.id}-${i}`} style={{ '--brand': item.color }}>
          <span className="logo-mark" aria-hidden>
            <img src={item.src} alt="" />
          </span>
          <span className="logo-name">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function Logos() {
  const wrap = useRef(null)
  const track = useRef(null)

  useGSAP(
    () => {
      const el = track.current
      const node = wrap.current
      if (!el || !node) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const tween = gsap.to(el, {
        xPercent: -50,
        duration: 28,
        ease: 'none',
        repeat: -1,
      })

      const pause = () => tween.pause()
      const play = () => tween.play()
      node.addEventListener('pointerenter', pause)
      node.addEventListener('pointerleave', play)
      return () => {
        node.removeEventListener('pointerenter', pause)
        node.removeEventListener('pointerleave', play)
      }
    },
    { scope: wrap },
  )

  return (
    <div className="card logos" aria-label="Tools">
      <div className="logos-marquee" ref={wrap}>
        <div className="logos-track" ref={track}>
          <Set />
          <Set hidden />
        </div>
      </div>
    </div>
  )
}
