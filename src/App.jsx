import { useState } from "react";
import "./App.css";

import {
  FaOrcid,
  FaLinkedin,
  FaEnvelope,
  FaDatabase,
  FaResearchgate,
} from "react-icons/fa";

import {
  SiClarivate,
  SiGooglescholar,
} from "react-icons/si";

const skills = [
  "C & C++",
  "Java",
  "Python",
  "Python Full Stack",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Flask",
  "Django",
  "AWS",
  "Data Analytics",
  "Machine Learning",
];

const researchHighlights = [
  {
    title: "Athletic Performance Optimization",
    description:
      "Ph.D. research on a multi-objective data prediction model that provides personalized recommendations for athletes, coaches, and trainers.",
    technologies: ["Recommendation Systems", "AI", "Data Prediction"],
  },
  {
    title: "Smart Healthcare through Data Mining & IoT",
    description:
      "Indian patent for a real-time smart healthcare system that brings together data mining and Internet of Things technologies.",
    technologies: ["Data Mining", "IoT", "Healthcare"],
  },
  {
    title: "Motivational Recommendation System",
    description:
      "Indian patent covering a motivational recommendation system and method, published in March 2020.",
    technologies: ["Recommendation Systems", "Machine Learning"],
  },
];

const experience = [
  {
    date: "Jan 2018 – Present",
    role: "Assistant Professor",
    institution: "KL College of Engineering, KL University",
    description:
      "Teaching, mentoring, and research in computer science and engineering at KL University, Vijayawada.",
  },
  {
    date: "Jul 2013 – Dec 2017",
    role: "Assistant Professor",
    institution:
      "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
    description:
      "Contributed to teaching, departmental activities, accreditation work, placement initiatives, and student development in Chennai.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="container nav-container">

          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
          >
            Deepak<span>.</span>
          </a>

          <div
            className={`nav-links ${menuOpen ? "active" : ""}`}
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#research" onClick={closeMenu}>
              Research
            </a>

            <a href="#certifications" onClick={closeMenu}>
              Certifications
            </a>

            <a href="#network" onClick={closeMenu}>
              Network
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">
        <div className="container hero-container">

          <div className="hero-content">

            <p className="hero-intro">
              HELLO, I AM
            </p>

            <h1>
              Dr. Deepak <span>V.</span>
            </h1>

            <h2>
              Professor & Researcher | Full Stack Developer | Python Enthusiast
            </h2>

            <p className="hero-description">
              An experienced Computer Science and Engineering professional
              passionate about innovation, academic excellence, and research
              that advances technology.
            </p>

            <div className="hero-buttons">

              <a
                href="#research"
                className="primary-button"
              >
                Explore Research
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* ================= PROFILE IMAGE ================= */}

          <div className="hero-image-container">

            <div className="image-background" />

            <img
              src="/Deepak1.png"
              alt="Dr. Deepak V."
              className="profile-image"
            />

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="container">

          <div className="section-header">
            <p>ABOUT ME</p>
            <h2>Professional Profile</h2>
          </div>

          <div className="about-grid">

            <div className="about-card">

              <h3>Educator, Researcher & Mentor</h3>

              <p>
                I bring 12.8 years of teaching and research experience in
                Computer Science and Engineering. My work combines data
                analytics, artificial intelligence, cloud computing, and
                practical software development.
              </p>

              <p>
                I have guided undergraduate and postgraduate projects,
                contributed to accreditation and institutional initiatives, and
                teach subjects ranging from programming and data structures to
                data mining and Python full-stack development.
              </p>

            </div>

            <div className="stats-grid">

              <div className="stat-card">
                <h3>12.8</h3>
                <p>Years of Experience</p>
              </div>

              <div className="stat-card">
                <h3>29</h3>
                <p>Publications</p>
              </div>

              <div className="stat-card">
                <h3>3</h3>
                <p>Indian Patents Published</p>
              </div>

              <div className="stat-card">
                <h3>200+</h3>
                <p>Scopus Citations</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section section-light">

        <div className="container">

          <div className="section-header">
            <p>EXPERTISE</p>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div
                className="skill-card"
                key={skill}
              >
                <span>{skill}</span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">

        <div className="container">

          <div className="section-header">
            <p>CAREER</p>
            <h2>Professional Experience</h2>
          </div>

          <div className="timeline">

            {experience.map((item) => (

              <div
                className="timeline-item"
                key={item.institution}
              >

                <div className="timeline-dot" />

                <div className="timeline-content">

                  <span className="timeline-date">
                    {item.date}
                  </span>

                  <h3>{item.role}</h3>

                  <h4>{item.institution}</h4>

                  <p>{item.description}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= RESEARCH ================= */}

      <section id="research" className="section section-light">

        <div className="container">

          <div className="section-header">
            <p>RESEARCH & INNOVATION</p>
            <h2>Featured Work</h2>
          </div>

          <div className="projects-grid">

            {researchHighlights.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-list">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section
        id="certifications"
        className="section certifications-section"
      >

        <div className="container">

          <div className="section-header">
            <p>GLOBAL CERTIFICATIONS</p>
            <h2>Professional Certifications</h2>
          </div>

          <div className="certifications-grid">

            {/* AWS */}

            <div className="certification-card">

              <div className="certification-logo">
                <img
                  src="/certifications/aws.jpg"
                  alt="AWS Certification"
                />
              </div>

              <div className="certification-content">

                <h3>
                  AWS Certified Cloud Practitioner
                </h3>

                <p>
                  Amazon Web Services
                </p>

              </div>

            </div>

            {/* MONGODB */}

            <div className="certification-card">

              <div className="certification-logo">

                <img
                  src="/certifications/mongo.jpg"
                  alt="MongoDB Certification"
                />

              </div>

              <div className="certification-content">

                <h3>
                  MongoDB Certified Associate Developer
                </h3>

                <p>
                  MongoDB
                </p>

              </div>

            </div>

            {/* SCRUMSTUDY */}

            <div className="certification-card">

              <div className="certification-logo">

                <img
                  src="/certifications/scrumstudy.png"
                  alt="SCRUMstudy Certification"
                />

              </div>

              <div className="certification-content">

                <h3>
                  Scrum Fundamentals Certified
                </h3>

                <p>
                  SCRUMstudy
                </p>

              </div>

            </div>

            {/* AUTOMATION ANYWHERE ADVANCED */}

            <div className="certification-card">

              <div className="certification-logo">

                <img
                  src="/certifications/rpa.jpg"
                  alt="Automation Anywhere Certification"
                />

              </div>

              <div className="certification-content">

                <h3>
                  Automation Anywhere Certified Advanced RPA Professional
                </h3>

                <p>
                  Automation Anywhere
                </p>

              </div>

            </div>

            {/* AUTOMATION ANYWHERE ESSENTIALS */}

            <div className="certification-card">

              <div className="certification-logo">

                <img
                  src="/certifications/rpa.jpg"
                  alt="Automation Anywhere Certification"
                />

              </div>

              <div className="certification-content">

                <h3>
                  Automation Anywhere Certified Essentials RPA Professional
                </h3>

                <p>
                  Automation Anywhere
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROFESSIONAL NETWORK ================= */}

      <section
        id="network"
        className="section professional-network-section"
      >

        <div className="container">

          <div className="section-header">

            <p>CONNECT & COLLABORATE</p>

            <h2>
              Professional Network
            </h2>

          </div>

          <div className="professional-network-grid">

            {/* ORCID */}

            <a
              href="https://orcid.org/0000-0002-9043-4755"
              target="_blank"
              rel="noreferrer"
              className="network-card"
            >

              <div className="network-icon">
                <FaOrcid />
              </div>

              <div className="network-content">

                <h3>
                  ORCID
                </h3>

                <p>
                  Researcher Profile
                </p>

              </div>

              <span className="network-arrow">
                →
              </span>

            </a>

            {/* WEB OF SCIENCE */}

            <a
              href="http://www.webofscience.com/wos/author/record/U-5912-2018"
              target="_blank"
              rel="noreferrer"
              className="network-card"
            >

              <div className="network-icon">
                <SiClarivate />
              </div>

              <div className="network-content">

                <h3>
                  Web of Science
                </h3>

                <p>
                  Author Profile
                </p>

              </div>

              <span className="network-arrow">
                →
              </span>

            </a>

            {/* SCOPUS */}

            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57192693256"
              target="_blank"
              rel="noreferrer"
              className="network-card"
            >

              <div className="network-icon">
                <FaDatabase />
              </div>

              <div className="network-content">

                <h3>
                  Scopus
                </h3>

                <p>
                  Author & Citation Profile
                </p>

              </div>

              <span className="network-arrow">
                →
              </span>

            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/drdeepakv"
              target="_blank"
              rel="noreferrer"
              className="network-card"
            >

              <div className="network-icon">
                <FaLinkedin />
              </div>

              <div className="network-content">

                <h3>
                  LinkedIn
                </h3>

                <p>
                  Professional Profile
                </p>

              </div>

              <span className="network-arrow">
                →
              </span>

            </a>

            {/* RESEARCHGATE */}

            <a
              href="https://www.researchgate.net/profile/Deepak-v"
              target="_blank"
              rel="noreferrer"
              className="network-card"
            >

              <div className="network-icon researchgate-icon">
                <FaResearchgate />
              </div>

              <div className="network-content">

                <h3>
                  ResearchGate
                </h3>

                <p>
                  Research & Publications
                </p>

              </div>

              <span className="network-arrow">
                →
              </span>

            </a>

            {/* GOOGLE SCHOLAR */}

            <a
              href="https://scholar.google.com/citations?user=CG_adjQAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="network-card"
            >

              <div className="network-icon scholar-icon">
                <SiGooglescholar />
              </div>

              <div className="network-content">

                <h3>
                  Google Scholar
                </h3>

                <p>
                  Citations & Publications
                </p>

              </div>

              <span className="network-arrow">
                →
              </span>

            </a>

            {/* EMAIL */}

            <a
              href="mailto:v.d@live.in"
              className="network-card"
            >

              <div className="network-icon">
                <FaEnvelope />
              </div>

              <div className="network-content">

                <h3>
                  Email
                </h3>

                <p>
                  Get in Touch
                </p>

              </div>

              <span className="network-arrow">
                →
              </span>

            </a>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section className="section">

        <div className="container">

          <div className="section-header">
            <p>EDUCATION & CREDENTIALS</p>
            <h2>Academic Background</h2>
          </div>

          <div className="education-grid">

            <div className="education-card">

              <span>01</span>

              <h3>
                Ph.D. — Big Data Analytics
              </h3>

              <p>
                KL College of Engineering, Koneru Lakshmaiah Education
                Foundation, KL University · 2023
              </p>

            </div>

            <div className="education-card">

              <span>02</span>

              <h3>
                M.Tech — Computer Science & Engineering
              </h3>

              <p>
                Faculty of Engineering and Technology, SRM University · 2012
              </p>

            </div>

            <div className="education-card">

              <span>03</span>

              <h3>
                B.Tech — Information Technology
              </h3>

              <p>
                Saveetha School of Engineering, Saveetha University · 2010
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="container contact-container">

          <div className="contact-content">

            <p>GET IN TOUCH</p>

            <h2>
              Let&apos;s Collaborate.
            </h2>

            <p>
              Reach out for academic collaboration, research discussions,
              mentoring, or technology-focused initiatives.
            </p>

          </div>

          <div className="contact-card">

            <div className="contact-item">

              <span>Email</span>

              <p>
                v.d@live.in
              </p>

            </div>

            <div className="contact-item">

              <span>Phone</span>

              <p>
                +91 9XXXXXXX80
              </p>

            </div>

            <div className="contact-item">

              <span>Institution</span>

              <p>
                KL University, Vijayawada, Andhra Pradesh, India
              </p>

            </div>

            <a
              href="mailto:v.d@live.in"
              className="contact-button"
            >
              Send Message
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-container">

          <p>
            © {new Date().getFullYear()} Dr. Deepak V.
            All rights reserved.
          </p>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;