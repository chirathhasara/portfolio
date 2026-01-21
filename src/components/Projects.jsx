import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card hover-lift">
            <div className="project-image">
              <div className="image-placeholder">🚚</div>
            </div>
            <div className="project-header">
              <h3>SupplyNet X</h3>
              <span className="project-type">AI Platform</span>
            </div>
            <p className="project-description">
              An AI-driven supply chain intelligence platform that manages the complete workflow from supplier 
              raw material delivery to warehouse production, distribution, and sales forecasting. Features 
              management-level anomaly detection for data-driven decision-making.
            </p>
            <div className="project-tags">
              <span>Laravel</span>
              <span>React</span>
              <span>Flask</span>
              <span>MySQL</span>
            </div>
          </div>
          <div className="project-card hover-lift">
            <div className="project-image">
              <div className="image-placeholder">🛒</div>
            </div>
            <div className="project-header">
              <h3>E-Commerce Platform</h3>
              <span className="project-type">Full Stack</span>
            </div>
            <p className="project-description">
              A full-stack web application enabling product management, user authentication, order processing, 
              and checkout workflows. Designed with a RESTful backend and responsive frontend to support 
              scalable and maintainable commerce operations.
            </p>
            <div className="project-tags">
              <span>Spring Boot</span>
              <span>React</span>
              <span>H2 Database</span>
            </div>
          </div>
          <div className="project-card hover-lift">
            <div className="project-image">
              <div className="image-placeholder">⚖️</div>
            </div>
            <div className="project-header">
              <h3>Find a Lawyer</h3>
              <span className="project-type">Group Project</span>
            </div>
            <p className="project-description">
              A full-stack web platform to help citizens find and book consultations with lawyers, including 
              online appointments via Zoom. Features role-based dashboards for lawyers to manage availability, 
              calendars, and payments, with seamless search and booking for clients.
            </p>
            <div className="project-tags">
              <span>Laravel</span>
              <span>React</span>
              <span>MySQL</span>
            </div>
            <p className="contribution">My Contribution: Frontend and backend development, database design and integration.</p>
          </div>
          <div className="project-card hover-lift">
            <div className="project-image">
              <div className="image-placeholder">🔬</div>
            </div>
            <div className="project-header">
              <h3>Adaptive Dynamic Array Research</h3>
              <span className="project-type">Research</span>
            </div>
            <p className="project-description">
              Final year ongoing research focused on designing and evaluating a dynamic array data structure 
              that adapts resizing behavior using predictive techniques to improve performance and memory efficiency.
            </p>
            <div className="project-tags">
              <span>Java</span>
              <span>Data Structures</span>
              <span>Algorithms</span>
              <span>Performance Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
