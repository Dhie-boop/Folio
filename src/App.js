import { useState, useEffect, useRef } from 'react';
import './App.css';
import './animations.css';
import ParticleBackground from './components/ParticleBackground';
import { TodoAppSVG, BlogApiSVG, EcommerceSVG } from './components/ProjectIllustrations';

function App() {
  const currentUser = "Dhie-boop";
  const formattedDate = "2025-05-30 16:17:10";
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const cursorRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add magnetic effect to buttons
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - buttonCenterX, e.clientY - buttonCenterY);
        
        if (distance < 100) {
          const angle = Math.atan2(e.clientY - buttonCenterY, e.clientX - buttonCenterX);
          const force = (100 - distance) / 10;
          button.style.transform = `translate(${Math.cos(angle) * force}px, ${Math.sin(angle) * force}px)`;
          setCursorVariant('hover');
        } else {
          button.style.transform = 'translate(0, 0)';
        }
      });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <ParticleBackground darkMode={darkMode} />
      <div 
        ref={cursorRef}
        className={`cursor-glow ${cursorVariant}`} 
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y 
        }}
      />

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Portfolio<span className="highlight">.</span></div>
        <div className="meta-info">
          {formattedDate} | {currentUser}
        </div>
        <div className="nav-links">
          <a href="#home" className="active">Home</a>
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
          <div className="small-text">Hello, I am</div>
          <h1>Dhie-boop<span className="highlight">.</span></h1>
          <h2>Full Stack Developer</h2>
          <p>I build exceptional digital experiences with Python and React</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">3+</span>
              <span className="stat-text">Years<br/>Experience</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">15+</span>
              <span className="stat-text">Projects<br/>Completed</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">5+</span>
              <span className="stat-text">Happy<br/>Clients</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454633-2918522.png" alt="Developer Illustration" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <span className="section-subtitle">Get To Know</span>
          <h2>About Me<span className="highlight">.</span></h2>
        </div>
        <div className="about-container">
          <div className="about-image">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/male-programmer-working-on-project-5691620-4759501.png" alt="About Illustration" />
          </div>
          <div className="about-content">
            <p className="about-intro">
              I'm a passionate Full Stack Developer with expertise in Python frameworks (Django, Flask, FastAPI) and modern frontend technologies like React. With a focus on creating clean, efficient, and user-friendly websites, I transform ideas into digital reality.
            </p>
            
            <div className="experience">
              <div className="exp-card">
                <div className="exp-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" width="40" />
                </div>
                <h3>Backend Development</h3>
                <p>3+ Years</p>
                <div className="skills">
                  <span>Python</span>
                  <span>Django</span>
                  <span>Flask</span>
                  <span>FastAPI</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
              
              <div className="exp-card">
                <div className="exp-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" width="40" />
                </div>
                <h3>Frontend Development</h3>
                <p>2+ Years</p>
                <div className="skills">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Next.js</span>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn secondary-btn">Let's Talk</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2>My Services<span className="highlight">.</span></h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2282/2282188.png" alt="Web Development" width="50" />
            </div>
            <h3>Web Development</h3>
            <p>I build responsive web applications using Python frameworks (Django, Flask, FastAPI) and modern frontend technologies.</p>
            <ul className="service-details">
              <li>Full-stack web applications</li>
              <li>Database design & optimization</li>
              <li>API development</li>
              <li>Authentication & security</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png" alt="UI/UX Design" width="50" />
            </div>
            <h3>UI/UX Design</h3>
            <p>I create intuitive user interfaces and engaging user experiences that balance aesthetics with functionality.</p>
            <ul className="service-details">
              <li>Responsive design</li>
              <li>Interactive prototypes</li>
              <li>User-centered interfaces</li>
              <li>Accessibility compliance</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png" alt="Consulting" width="50" />
            </div>
            <h3>Tech Consulting</h3>
            <p>I provide expert advice on technology choices, architecture decisions, and implementation strategies.</p>
            <ul className="service-details">
              <li>Technology stack selection</li>
              <li>System architecture planning</li>
              <li>Performance optimization</li>
              <li>Security audits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <span className="section-subtitle">My Recent Work</span>
          <h2>Projects<span className="highlight">.</span></h2>
        </div>
        <div className="projects-grid">
          <div className="project-card glass-card">
            <div className="project-image">
              <TodoAppSVG />
            </div>
            <h3>Advanced Todo Application</h3>
            <p>A feature-rich task management application with categories, priorities, and filtering options.</p>
            <div className="project-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">LocalStorage</span>
            </div>
            <div className="project-links">
              <a href="#" className="btn btn-interactive small-btn">Live Demo</a>
              <a href="#" className="btn btn-interactive small-btn secondary-btn">Source Code</a>
            </div>
          </div>
          
          <div className="project-card glass-card">
            <div className="project-image">
              <BlogApiSVG />
            </div>
            <h3>Blog API Platform</h3>
            <p>A robust RESTful API for content management with user authentication and media handling.</p>
            <div className="project-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
            <div className="project-links">
              <a href="#" className="btn btn-interactive small-btn">Documentation</a>
              <a href="#" className="btn btn-interactive small-btn secondary-btn">Source Code</a>
            </div>
          </div>
          
          <div className="project-card glass-card">
            <div className="project-image">
              <EcommerceSVG />
            </div>
            <h3>E-Commerce Platform</h3>
            <p>A complete online shopping solution with product management, cart functionality, and payment gateway integration.</p>
            <div className="project-tags">
              <span className="skill-tag">Django</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Stripe</span>
            </div>
            <div className="project-links">
              <a href="#" className="btn btn-interactive small-btn">Live Demo</a>
              <a href="#" className="btn btn-interactive small-btn secondary-btn">Source Code</a>
            </div>
          </div>
        </div>
        <div className="more-projects">
          <a href="#" className="btn btn-interactive secondary-btn">View All Projects</a>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <span className="section-subtitle">Client Reviews</span>
          <h2>Testimonials<span className="highlight">.</span></h2>
        </div>
        <div className="testimonials-slider">
          <div className="testimonial">
            <div className="testimonial-avatar">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
            </div>
            <h4>Sarah Johnson</h4>
            <p className="testimonial-position">CEO at TechStart</p>
            <div className="testimonial-rating">★★★★★</div>
            <p className="testimonial-text">
              "Working with Dhie-boop was a game-changer for our company. They delivered our web platform ahead of schedule with exceptional attention to detail. Highly recommended!"
            </p>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-avatar">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
            </div>
            <h4>Michael Chen</h4>
            <p className="testimonial-position">Project Manager</p>
            <div className="testimonial-rating">★★★★★</div>
            <p className="testimonial-text">
              "Dhie-boop has an incredible ability to translate complex requirements into elegant solutions. Their Python expertise saved us countless hours of development time."
            </p>
          </div>
        </div>
      </section>

      {/* Shows Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2>Contact Me<span className="highlight">.</span></h2>
        </div>
        <div className="contact-container">
          <div className="contact-options">
            <div className="contact-option">
              <div className="contact-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="Email" width="30" />
              </div>
              <h3>Email</h3>
              <a href="mailto:dhie.boop@example.com">dhie.boop@example.com</a>
            </div>
            
            <div className="contact-option">
              <div className="contact-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="LinkedIn" width="30" />
              </div>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/dhie-boop" target="_blank" rel="noreferrer">dhie-boop</a>
            </div>
            
            <div className="contact-option">
              <div className="contact-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" alt="GitHub" width="30" />
              </div>
              <h3>GitHub</h3>
              <a href="https://github.com/dhie-boop" target="_blank" rel="noreferrer">dhie-boop</a>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">Portfolio<span className="highlight">.</span></div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" alt="GitHub" width="20" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="LinkedIn" width="20" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="20" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dhie-boop. All rights reserved.</p>
          <p>Last updated: {formattedDate}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;