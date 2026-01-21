import './Navigation.css'

function Navigation({ activeSection, scrollToSection }) {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">Chirath Hasara</div>
        <div className="nav-links">
          <a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
