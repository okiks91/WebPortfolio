import ImageCarousel from './ImageCarousel.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="card" id={project.id}>
      <div className="card-top">
        <h2>{project.title}</h2>
        <p className="summary">{project.summary}</p>
        <div className="tech-row">
          {project.tech.map((t) => (
            <span className="tech" key={t}>{t}</span>
          ))}
        </div>
      </div>

      <ImageCarousel images={project.screenshots} projectTitle={project.title} />

      <div className="card-bottom">
        <div className="account-note">🔒 {project.accountNote}</div>
        <h3>About this project</h3>
        <p>{project.description}</p>
        <h3>My role</h3>
        <ul className="role-list">
          {project.role.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
