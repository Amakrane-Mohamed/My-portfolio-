import { APPS } from '../data'

export default function WorkList({ onOpen }) {
  return (
    <section className="card work" id="work">
      <h2 className="work-title">Projects I built</h2>
      <div className="work-grid">
        {APPS.map((app) => (
          <button key={app.id} type="button" className="project" onClick={() => onOpen(app)}>
            <img className="thumb thumb-icon" src={app.icon} alt="" />
            <div className="project-copy">
              <h3>{app.name}</h3>
              <p>{app.summary}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
