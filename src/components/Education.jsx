import './Education.css'

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card flip-in" style={{animationDelay: '0.1s'}}>
            <div className="education-icon">🎓</div>
            <h3>BSc (Hons) in Computer Science and Technology</h3>
            <p className="institution">Sabaragamuwa University of Sri Lanka</p>
            <p className="duration">2022 - 2026 (Expected)</p>
            <p className="location">Belihuloya, Sri Lanka</p>
            <p className="cgpa">CGPA: 3.71</p>
            <p className="description">
              Specializing in software engineering, RESTful APIs, and database-driven systems with a focus on 
              modern development practices and emerging technologies.
            </p>
          </div>
          <div className="education-card flip-in" style={{animationDelay: '0.2s'}}>
            <div className="education-icon">📚</div>
            <h3>G.C.E Advanced Level</h3>
            <p className="institution">Physical Science Stream</p>
            <p className="duration">2020</p>
            <p className="description">
              Strong foundation in Mathematics, Physics, and Chemistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
