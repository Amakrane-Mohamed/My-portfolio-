import { useCallback, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Tweet from './components/Tweet'
import Life from './components/Life'
import Logos from './components/Logos'
import Build from './components/Build'
import Experience from './components/Experience'
import WorkList from './components/WorkList'
import FooterCard from './components/FooterCard'
import ProjectDetail from './components/ProjectDetail'
import Loader from './components/Loader'
import { gsap } from './lib/gsap'
import { applyTheme, readTheme } from './lib/theme'

const SECTIONS = ['info', 'work', 'life', 'experience', 'contact']

export default function App() {
  const [tab, setTab] = useState('info')
  const [app, setApp] = useState(null)
  const [theme, setTheme] = useState(() => readTheme())
  const [boot, setBoot] = useState(true)
  const [cover, setCover] = useState(true)
  const root = useRef(null)
  const lock = useRef(false)
  const endBoot = useCallback(() => setBoot(false), [])
  const endCover = useCallback(() => setCover(false), [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const nodes = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (lock.current) return
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setTab(visible.target.id)
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0.12, 0.35, 0.6] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useGSAP(
    () => {
      const bits = '.nav, .intro, .tweet, .logos, .work, .experience, .build, .life, .foot'
      if (boot) {
        gsap.set(bits, { opacity: 0, y: 18 })
        return
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(bits, { opacity: 1, y: 0 })
        return
      }
      gsap.to('.nav', { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' })
      gsap.to('.intro', { y: 0, opacity: 1, duration: 0.8, delay: 0.06, ease: 'expo.out' })
      gsap.to('.logos', { y: 0, opacity: 1, duration: 0.7, delay: 0.12, ease: 'expo.out' })
      gsap.to('.work', { y: 0, opacity: 1, duration: 0.75, delay: 0.16, ease: 'expo.out' })
      gsap.to('.life', { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: 'expo.out' })
      gsap.to('.experience', { y: 0, opacity: 1, duration: 0.75, delay: 0.24, ease: 'expo.out' })
      gsap.to('.tweet', { y: 0, opacity: 1, duration: 0.7, delay: 0.27, ease: 'expo.out' })
      gsap.to('.build', { y: 0, opacity: 1, duration: 0.7, delay: 0.3, ease: 'expo.out' })
      gsap.to('.foot', { y: 0, opacity: 1, duration: 0.65, delay: 0.33, ease: 'expo.out' })
    },
    { scope: root, dependencies: [boot] },
  )

  function onTab(id) {
    setTab(id)
    const node = document.getElementById(id)
    if (!node) return
    lock.current = true
    window.setTimeout(() => {
      lock.current = false
    }, 900)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      node.scrollIntoView({ behavior: 'auto', block: 'start' })
      return
    }
    gsap.to(window, {
      duration: 0.7,
      scrollTo: { y: node, offsetY: 78 },
      ease: 'expo.inOut',
      overwrite: 'auto',
    })
  }

  return (
    <div className="shell" ref={root}>
      {cover ? <Loader key="loader" onReveal={endBoot} onDone={endCover} /> : null}
      <div className="frame">
        <Nav
          tab={tab}
          onTab={onTab}
          theme={theme}
          onTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        />
        <Intro ready={!boot} />
        <Logos />
        <WorkList onOpen={setApp} />
        <Life ready={!boot} />
        <Experience />
        <Tweet />
        <Build />
        <FooterCard />
      </div>
      <ProjectDetail app={app} onClose={() => setApp(null)} />
    </div>
  )
}
