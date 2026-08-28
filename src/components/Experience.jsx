import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section className="card experience" id="experience" aria-label="Experience">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-lead">ABDC now. Med You in before that.</p>
      <div className="experience-grid">
        {EXPERIENCE.map((job) => (
          <article className="experience-item" key={job.id}>
            <img
              className="experience-logo"
              src={job.logo}
              alt=""
              style={{ background: job.logoBg }}
            />
            <div className="experience-copy">
              <h3>{job.role}</h3>
              <p className="experience-company">
                {job.company}
                <span> · {job.type}</span>
              </p>
              <p className="experience-meta">
                {job.dates}
                <span> · {job.place}</span>
              </p>
              <p className="experience-text">{job.text}</p>
              {job.stack?.length ? (
                <div className="experience-stack">
                  {job.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
