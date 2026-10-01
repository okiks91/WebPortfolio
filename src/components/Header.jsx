import { profile } from '../data/projects.js'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div>
          <div className="brand">{profile.name}</div>
          <div className="brand-sub">{profile.title} · Portfolio</div>
        </div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
