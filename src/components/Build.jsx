const STACK = [
  { id: 'ios', name: 'iOS', src: '/logos/apple.svg', invert: true },
  { id: 'flutter', name: 'Flutter', src: '/logos/flutter.svg' },
  { id: 'dart', name: 'Dart', src: '/logos/dart.svg' },
  { id: 'swift', name: 'Swift', src: '/logos/swift.svg' },
  { id: 'getx', name: 'GetX', src: '/logos/getx.svg' },
  { id: 'bloc', name: 'BLoC', src: '/logos/bloc.svg' },
  { id: 'nodejs', name: 'Node.js', src: '/logos/nodejs.svg' },
  { id: 'firebase', name: 'Firebase', src: '/logos/firebase.svg' },
  { id: 'googlecloud', name: 'Google Cloud', src: '/logos/googlecloud.svg' },
  { id: 'git', name: 'Git', src: '/logos/git.svg' },
  { id: 'github', name: 'GitHub', src: '/logos/github.svg', invert: true },
  { id: 'figma', name: 'Figma', src: '/logos/figma.svg' },
  { id: 'cursor', name: 'Cursor', src: '/logos/cursor.svg', invert: true },
]

export default function Build() {
  return (
    <section className="card build" aria-label="Stack">
      <h2 className="build-title">Stack</h2>
      <p className="build-lead">Flutter, Dart, Swift, Node.js. Apps on the App Store.</p>
      <p className="build-process">
        I ship iOS apps in Flutter. GetX or BLoC for state. Swift and SwiftUI when the
        product is iOS-first. Node.js on Google Cloud. Firebase. Figma, then a real
        iPhone. Git and GitHub to the App Store.
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
