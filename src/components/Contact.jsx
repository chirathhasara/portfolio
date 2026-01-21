import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Replace this with your Google Apps Script URL after setup
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxH8hnugzNxbliPwi33sAGeTZQ21HUy5XBAPilFOO9v4FPpEh3a6tffzscFi7L1eRrf/exec'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      })

      // With no-cors mode, we can't read the response, so assume success
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {status === 'success' && (
                <div className="alert alert-success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="alert alert-error">
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
