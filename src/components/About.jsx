import './About.css'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="fade-in">
              Final-year Computer Science undergraduate with hands-on experience in full-stack web development 
              using Spring Boot, Laravel, and React. Strong foundation in software engineering, RESTful APIs, 
              and database-driven systems.
            </p>
            <p className="fade-in" style={{animationDelay: '0.2s'}}>
              Currently seeking a Software Engineer internship to apply skills in real-world projects. 
              Passionate about creating innovative solutions and continuously learning new technologies.
            </p>
            <div className="about-stats">
              <div className="stat scale-in" style={{animationDelay: '0.1s'}}>
                <span className="stat-number">3.71</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat scale-in" style={{animationDelay: '0.2s'}}>
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat scale-in" style={{animationDelay: '0.3s'}}>
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
