import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities.</p>
            <div className="contact-items">
              <div className="contact-item bounce-in" style={{animationDelay: '0.1s'}}>
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:chirathhasara2001@gmail.com" className="contact-link">chirathhasara2001@gmail.com</a>
                </div>
              </div>
              <div className="contact-item bounce-in" style={{animationDelay: '0.2s'}}>
                <span className="contact-icon">📱</span>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+94768612325" className="contact-link">+94 76 861 2325</a>
                </div>
              </div>
              <div className="contact-item bounce-in" style={{animationDelay: '0.3s'}}>
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-text">Kiribathgoda, Sri Lanka</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/chirathhasara" target="_blank" rel="noopener noreferrer" className="social-link pulse">
                GitHub
              </a>
              <a href="https://linkedin.com/in/chirath-hasara" target="_blank" rel="noopener noreferrer" className="social-link pulse">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
