import { useState, useEffect } from 'react';
import './App.css';

// Import images (You'll need to add these to your public folder)
// import heroImage from './assets/hero-image.jpg';
// import projectImage1 from './assets/project1.jpg';
// import projectImage2 from './assets/project2.jpg';
// import projectImage3 from './assets/project3.jpg';

function App() {
  const currentUser = "Dhie-boopI";
  const formattedDate = "2025-05-30 15:53:34";
  
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">DhieB</div>
        <div className="meta-info">
          {formattedDate} | {currentUser}
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Dhie-boopI</span></h1>
          <h2>Full Stack Developer</h2>
          <p>I create elegant solutions to complex problems with Python and React</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for profile image */}
          <div className="image-placeholder">
            <span>Your Profile Image</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a passionate Full Stack Developer with expertise in Python (Django, Flask, FastAPI) and JavaScript/React. I love building user-friendly web applications that solve real-world problems.</p>
            <p>With a background in Python web frameworks and a growing expertise in React, I'm always eager to learn new technologies and push my boundaries.</p>
          </div>
          <div className="stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>Services I Offer</h2>
          <div className="section-line"></div>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Full-stack web applications using Python (Django, Flask, FastAPI) and modern frontend frameworks.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Mobile-friendly interfaces that work beautifully on all devices and screen sizes.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>API Development</h3>
            <p>Robust and well-documented APIs that allow your applications to communicate efficiently.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🛠️</div>
            <h3>Technical Consultation</h3>
            <p>Expert advice on architecture, technology stack, and implementation strategies.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>My Recent Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              {/* Placeholder for project image */}
              <div className="image-placeholder">
                <span>Todo App</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Advanced Todo Application</h3>
              <p>A React-based todo app with categories, priorities, and filtering options.</p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>LocalStorage</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn">Live Demo</a>
                <a href="#" className="btn small-btn secondary-btn">Source Code</a>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              {/* Placeholder for project image */}
              <div className="image-placeholder">
                <span>Blog API</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Blog API Platform</h3>
              <p>RESTful API for a blogging platform built with FastAPI and PostgreSQL.</p>
              <div className="project-tags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn">Documentation</a>
                <a href="#" className="btn small-btn secondary-btn">Source Code</a>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              {/* Placeholder for project image */}
              <div className="image-placeholder">
                <span>E-Commerce</span>
              </div>
            </div>
            <div className="project-info">
              <h3>E-Commerce Platform</h3>
              <p>Full-stack e-commerce solution with Django, React, and payment integration.</p>
              <div className="project-tags">
                <span>Django</span>
                <span>React</span>
                <span>Stripe</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn">Live Demo</a>
                <a href="#" className="btn small-btn secondary-btn">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's talk about your project</h3>
            <p>I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <p>dhie.boopi@example.com</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <p>+1 (234) 567-8901</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <p>New York, USA</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Dhie-boopI. All rights reserved.</p>
        <p>Last updated: {formattedDate}</p>
      </footer>
    </div>
  );
}

export default App;