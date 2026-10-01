import { profile } from '../data/projects.js'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {' · '}{profile.phone}
          {profile.github && (
            <> · <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></>
          )}
          {profile.linkedin && (
            <> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></>
          )}
        </p>
        <p className="muted small">
          © {new Date().getFullYear()} {profile.name} · Built with React + Vite · Hosted on Cloudflare Pages
        </p>
      </div>
    </footer>
  )
}
