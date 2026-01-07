import "./App.css";
import profile from "./assets/profile.png";

export default function App() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-left">PORTFOLIO - Louies Andre Tabanao </div>
        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero container">
        <div className="hero-card">
          <div className="avatar" aria-label="Profile photo">
            <img className="avatar-img" src={profile} alt="Louies Andre Tabanao" />
          </div>

          <h1 className="hero-name">Louies Andre Tabanao</h1>
          <p className="hero-role">BSIT Student • Aspiring IT Intern</p>

          <p className="hero-summary">
            4th-year BSIT student from Cristal e-College seeking an internship opportunity.
            Interested in networking and system administration, and eager to gain real-world
            exposure in a professional IT environment.
          </p>

          <div className="hero-actions">
            <a className="btn" href="mailto:louiestabanao88@gmail.com">Email Me</a>
            <a className="btn ghost" href="https://github.com/WesCD-os" target="_blank" rel="noreferrer">GitHub</a>
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
        {/* ABOUT */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p className="text">
            I enjoy learning through hands-on practice and improving through feedback.
            I’m currently strengthening my foundation in networking, system administration,
            and troubleshooting while also building technical projects in development.
          </p>
        </section>

        {/* EXPERIENCE (matches resume) */}
        <section id="experience" className="section">
          <h2>Academic Experience</h2>

          <div className="grid">
            <article className="card">
              <div className="card-top">
                <h3>Capstone Project: HomeFitAR – AR Interior Design Mobile Application</h3>
                <span className="tag">Unity • C# • AR Foundation</span>
              </div>

              <ul className="list">
                <li>Developed an augmented reality (AR) mobile application that allows users to place virtual furniture in real-world spaces</li>
                <li>Implemented plane detection, object placement, drag, rotation, and scaling using AR Foundation</li>
                <li>Designed the user interface for furniture selection, preview, and layout management</li>
              </ul>

              <div className="links">
                {/* Replace # with real links later */}
                <a href="https://sites.google.com/cec.edu.ph/homefit-ar/home" target="_blank" rel="noreferrer">View Project</a>
                
              </div>
            </article>

            <article className="card">
              <div className="card-top">
                <h3>System Administration & Networking Experience</h3>
                <span className="tag">Windows Server • Active Directory</span>
              </div>

              <ul className="list">
                <li>Assisted in setting up and maintaining a Windows Server–based network environment</li>
                <li>Created and managed administrator and user accounts using Active Directory</li>
                <li>Configured user permissions, access control, and shared resources from a central admin workstation</li>
                <li>Connected multiple client PCs to the domain via a fiber-optic network infrastructure</li>
                <li>Performed basic network configuration and troubleshooting, including connectivity and access issues</li>
              </ul>

              <div className="links">
                {/* Replace # with real links later */}
              </div>
            </article>
          </div>
        </section>

        {/* SKILLS (matches resume grouping) */}
        <section id="skills" className="section">
          <h2>Skills</h2>

          <div className="grid">
            <div className="card">
              <h3>Technical & System Skills</h3>
              <ul className="list">
                <li>Windows Server administration (basic)</li>
                <li>Active Directory user & permission management</li>
                <li>Client–server network setup and troubleshooting</li>
                <li>Basic networking (LAN, TCP/IP, IP addressing)</li>
                <li>Fiber-optic–based network connectivity (basic exposure)</li>
              </ul>
            </div>

            <div className="card">
              <h3>Programming & Development</h3>
              <ul className="list">
                <li>C#</li>
                <li>JavaScript & TypeScript (basic)</li>
                <li>HTML & CSS</li>
                <li>Git & GitHub</li>
                <li>Python (basic)</li>
              </ul>
            </div>

            <div className="card">
              <h3>Tools and Platforms</h3>
              <ul className="list">
                <li>Windows OS (installation, configuration, troubleshooting)</li>
                <li>Unity Editor</li>
                <li>Visual Studio / VS Code</li>
                <li>Cisco Packet Tracer (basic)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION (matches resume) */}
        <section id="education" className="section">
          <h2>Education History</h2>

          <div className="grid">
            <div className="card">
              <h3>Cristal e-College</h3>
              <p className="text">Bachelor of Science in Information Technology, 2022–2026</p>
              <p className="muted">Expected Graduation: 2026</p>
            </div>

            <div className="card">
              <h3>Panglao Christian Academy Inc.</h3>
              <p className="text">General Academic Strand, 2020–2022</p>
            </div>
          </div>
        </section>

        {/* CONTACT (matches resume) */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card">
            <p className="text"><strong>Cell:</strong> +63 950 342 6923</p>
            <p className="text">
              <strong>Email:</strong>{" "}
              <a href="mailto:louiestabanao88@gmail.com">louiestabanao88@gmail.com</a>
            </p>
            <p className="text"><strong>Address:</strong> Danao, Panglao, Bohol</p>
            <p className="text">
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/WesCD-os" target="_blank" rel="noreferrer">github.com/WesCD-os</a>
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
