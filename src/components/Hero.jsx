import './Hero.css'
import profileImage from '../assets/chirath.jpg'

function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <div className="hero-image">
            <img src={profileImage} alt="Chirath Hasara" className="image-placeholder" />
          </div>
        </div>
        <h1 className="hero-title animate-slide-up">
          Hi, I'm <span className="gradient-text">Chirath Hasara</span>
        </h1>
        <p className="hero-subtitle animate-slide-up" style={{animationDelay: '0.2s'}}>Computer Science Undergraduate</p>
        <p className="hero-description animate-slide-up" style={{animationDelay: '0.4s'}}>
          Final-year Computer Science undergraduate with hands-on experience in full-stack web development using Spring Boot, Laravel, and React
        </p>
        <div className="hero-buttons animate-slide-up" style={{animationDelay: '0.6s'}}>
          <button onClick={() => scrollToSection('projects')} className="btn btn-primary">View Projects</button>
          <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">Get In Touch</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
