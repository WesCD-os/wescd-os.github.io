import "./App.css";

export default function App() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-left">Louies Andre Tabanao</div>
        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero container">
        <div className="hero-card">
          <div className="avatar" aria-label="Profile photo">
            {/* Optional: replace with your real image later */}
            <div className="avatar-circle" />
          </div>

          <h1 className="hero-name">Louies Andre Tabanao</h1>
          <p className="hero-role">BSIT Student • Aspiring IT Intern</p>

          <p className="hero-summary">
            I am a 4th-year BSIT student from Cristal e-College seeking an internship opportunity.
            I’m adaptable, motivated to learn, and interested in gaining real-world exposure to professional IT environments.
          </p>

          <div className="hero-actions">
            <a className="btn" href="mailto:louiestabanao88@gmail.com">Email Me</a>
            <a className="btn ghost" href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>

          <div className="hero-meta">
            <span>Panglao, Bohol</span>
            <span>•</span>
            <span>Available for Internship</span>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about" className="section">
          <h2>About</h2>
          <p className="text">
            I enjoy learning through hands-on practice, improving through feedback, and working with a team.
            I’m currently building projects that strengthen both my technical foundation and my professional communication.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Featured Projects</h2>

          <div className="grid">
            <article className="card">
              <div className="card-top">
                <h3>HomeFitAR</h3>
                <span className="tag">Unity • C# • AR</span>
              </div>
              <p className="text">
                Augmented reality interior design app that allows users to place and preview furniture in real-world spaces.
              </p>
              <ul className="list">
                <li>Implemented object placement and interaction logic</li>
                <li>Built UI flow for selecting and previewing items</li>
                <li>Focused on debugging and stability improvements</li>
              </ul>
              <div className="links">
                <a href="#" target="_blank" rel="noreferrer">View Project</a>
                <a href="#" target="_blank" rel="noreferrer">Demo</a>
              </div>
            </article>

            <article className="card">
              <div className="card-top">
                <h3>Windows Server & Networking Lab</h3>
                <span className="tag">Systems • Networking</span>
              </div>
              <p className="text">
                Academic hands-on setup of a client–server environment focusing on user access and connectivity.
              </p>
              <ul className="list">
                <li>Created users and managed permissions (Active Directory)</li>
                <li>Configured shared resources and access control</li>
                <li>Verified connectivity and resolved access issues</li>
              </ul>
              <div className="links">
                <a href="#" target="_blank" rel="noreferrer">Documentation</a>
                <a href="#" target="_blank" rel="noreferrer">Screenshots</a>
              </div>
            </article>

            <article className="card">
              <div className="card-top">
                <h3>Networking Practice</h3>
                <span className="tag">Fundamentals</span>
              </div>
              <p className="text">
                Network simulations and notes focused on IP addressing, topology basics, and troubleshooting.
              </p>
              <ul className="list">
                <li>Built basic LAN topologies</li>
                <li>Practiced IP configuration and connectivity testing</li>
                <li>Documented common issues and fixes</li>
              </ul>
              <div className="links">
                <a href="#" target="_blank" rel="noreferrer">Notes</a>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="grid">
            <div className="card">
              <h3>IT & Systems</h3>
              <ul className="list">
                <li>Troubleshooting fundamentals</li>
                <li>Windows environment (basic)</li>
                <li>System administration exposure</li>
              </ul>
            </div>
            <div className="card">
              <h3>Networking</h3>
              <ul className="list">
                <li>LAN & TCP/IP fundamentals</li>
                <li>Basic connectivity testing</li>
                <li>Documentation of issues and fixes</li>
              </ul>
            </div>
            <div className="card">
              <h3>Development</h3>
              <ul className="list">
                <li>Unity & C#</li>
                <li>HTML, CSS, JavaScript (basic)</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="card">
            <h3>Cristal e-College</h3>
            <p className="text">
              Bachelor of Science in Information Technology • Expected 2026
            </p>
            <p className="muted">
              Relevant coursework: Networking, Web Development, Hardware Troubleshooting
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card">
            <p className="text">
              If you’d like to connect regarding internship opportunities, you can reach me here:
            </p>
            <p className="text">
              Email: <a href="mailto:louiestabanao88@gmail.com">louiestabanao88@gmail.com</a>
            </p>
            <p className="text">
              GitHub: <a href="https://github.com/LouiesTabanao" target="_blank" rel="noreferrer">github.com/LouiesTabanao</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Louies Andre Tabanao</div>
      </footer>
    </div>
  );
}
