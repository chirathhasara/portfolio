import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item slide-in-left">
            <div className="timeline-dot"></div>
            <div className="timeline-image">
              <div className="company-logo">💼</div>
            </div>
            <div className="timeline-content">
              <h3>Software Developer (Part Time)</h3>
              <p className="company">Enspirer</p>
              <p className="duration">Jan 2025 – Present (1 year)</p>
              <ul className="responsibilities">
                <li>Contributed to full-stack web projects using Laravel and React while studying</li>
                <li>Developed features, maintained applications, and collaborated on team-based project development</li>
                <li>Technologies: Laravel, React, MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
