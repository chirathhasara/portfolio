import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category zoom-in" style={{animationDelay: '0.1s'}}>
            <h3 className="category-title">Programming</h3>
            <div className="skills-list">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C</span>
            </div>
          </div>
          <div className="skill-category zoom-in" style={{animationDelay: '0.2s'}}>
            <h3 className="category-title">Web Development</h3>
            <div className="skills-list">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Laravel</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML & CSS</span>
            </div>
          </div>
          <div className="skill-category zoom-in" style={{animationDelay: '0.3s'}}>
            <h3 className="category-title">Mobile Development</h3>
            <div className="skills-list">
              <span className="skill-tag">Kotlin</span>
              <span className="skill-tag">Android Studio</span>
            </div>
          </div>
          <div className="skill-category zoom-in" style={{animationDelay: '0.4s'}}>
            <h3 className="category-title">Databases</h3>
            <div className="skills-list">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">H2</span>
            </div>
          </div>
          <div className="skill-category zoom-in" style={{animationDelay: '0.5s'}}>
            <h3 className="category-title">Tools & DevOps</h3>
            <div className="skills-list">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">IntelliJ IDEA</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
