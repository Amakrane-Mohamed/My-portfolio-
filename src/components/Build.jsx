const STACK = [
  { id: 'flutter', name: 'Flutter', src: '/logos/flutter.svg' },
  { id: 'dart', name: 'Dart', src: '/logos/dart.svg' },
  { id: 'getx', name: 'GetX', src: '/logos/getx.svg' },
  { id: 'bloc', name: 'BLoC', src: '/logos/bloc.svg' },
  { id: 'swift', name: 'Swift', src: '/logos/swift.svg' },
  { id: 'nodejs', name: 'Node.js', src: '/logos/nodejs.svg' },
  { id: 'googlecloud', name: 'Google Cloud', src: '/logos/googlecloud.svg' },
  { id: 'firebase', name: 'Firebase', src: '/logos/firebase.svg' },
  { id: 'figma', name: 'Figma', src: '/logos/figma.svg' },
  { id: 'cursor', name: 'Cursor', src: '/logos/cursor.svg', invert: true },
  { id: 'git', name: 'Git', src: '/logos/git.svg' },
  { id: 'github', name: 'GitHub', src: '/logos/github.svg', invert: true },
]

export default function Build() {
  return (
    <section className="card build" aria-label="How I build">
      <p className="build-copy">How I build ✨ Slow. Calm. Premium in the hand. 🖤</p>
      <p className="build-process">
        Figma, then Cursor, then a real device. Flutter with GetX or BLoC. Native Swift
        when it has to be iOS. Node.js on Google Cloud. Git and GitHub to ship.
      </p>
      <div className="build-techs">
        {STACK.map((item) => (
          <span className={`build-tech${item.invert ? ' logo-invert' : ''}`} key={item.id}>
            <span className="build-tech-mark" aria-hidden>
              <img src={item.src} alt="" />
            </span>
            {item.name}
          </span>
        ))}
      </div>
    </section>
  )
}
