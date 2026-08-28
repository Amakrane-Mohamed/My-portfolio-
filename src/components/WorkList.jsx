import { APPS } from '../data'

export default function WorkList({ onOpen }) {
  return (
    <section className="card work" id="work">
      <h2 className="work-title">Work</h2>
      <p className="work-lead">Four apps live on the App Store.</p>
      <div className="work-grid">
        {APPS.map((app) => {
          const meta = [app.platform, app.year, app.client].filter(Boolean).join(' · ')
          return (
            <button key={app.id} type="button" className="project" onClick={() => onOpen(app)}>
              <img className="thumb thumb-icon" src={app.icon} alt="" />
              <div className="project-copy">
                <h3>{app.name}</h3>
                {meta ? <p className="project-meta">{meta}</p> : null}
                <p>{app.summary}</p>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
