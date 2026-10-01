import Header from './components/Header.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Footer from './components/Footer.jsx'
import { profile, projects } from './data/projects.js'

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero" id="about">
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title} · {profile.location}</p>
          <p className="hero-tag">{profile.tagline}</p>
          <div className="hero-notice">
            <strong>For recruiters:</strong> my live projects require a login, so this
            portfolio shows annotated screenshots instead — swipe through each
            project below. Happy to do a live walkthrough on request.
          </div>
          <p className="muted small">{profile.education}</p>
          <div className="tech-row">
            {profile.skills.map((s) => (
              <span className="tech" key={s}>{s}</span>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="section-title">Projects ({projects.length})</h2>
          <div className="cards">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
