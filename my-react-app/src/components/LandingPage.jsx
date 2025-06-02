import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import InfiniteScroll from "./InfiniteScroll.jsx";
import ScrollProgress from "./ScrollProgress.jsx";
import FadeInSection from "./FadeInSection.jsx";
import WelcomeModal from "./WelcomeModal.jsx";

import "../styles/LandingPageStyle.css";
import PortfolioLogo from "../assets/images/killuaa.png";
import UniversityLogo from "../assets/images/hassiba_ben_bouali_chlef_logo-removebg-preview.png";
import project01 from "../assets/images/project01.png";
import project02 from "../assets/images/project02.png";
import project03 from "../assets/images/project03.png";


export default function LandingPage() {
  const [showModal, setShowModal] = useState(true);

  const projects = [
    {
      title: "RedHope",
      description: "I built a platform that connects donors, recipients, and hospitals through geolocation for fast, efficient blood donations.",
      link: "https://github.com/Ayres-Adel/RedHope",
      image: project01,
    },
    {
      title: "E-commerce product",
      description: "I built an e-commerce product page that showcases products with interactive features and a responsive design, based on the Frontend Mentor challenge.",
      link: "https://github.com/Ayres-Adel/ecommerce-product-page-main",
      image: project02,
    },
    {
      title: "DiamondCare",
      description: "I built a medical web platform that allows patients to register, book appointments, and access healthcare services, while admins can manage users and services through a secure dashboard",
      link: "https://github.com/Ayres-Adel/DiamondCare-",
      image: project03,
    },
  ];

  return (
    <>
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
      <ScrollProgress />
      <div className="homepage dark-theme">
        <Navbar />

        {/* HERO SECTION */}
        <FadeInSection>
          <section className="Container_01" id="home">
            <div>
              <h1>
                Hi, I'm <span className="accent">Ayres</span>
              </h1>
              <h2>Full-Stack Developer</h2>
              <p>
                I craft beautiful, fast, and accessible web experiences. Explore my work and let’s build something amazing together!
              </p>
              <div className="hero-buttons">
                <a
                  href="/resume.pdf"
                  className="hero-btn hero-btn-cv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download" style={{ marginRight: 8 }}></i>
                  Download CV
                </a>
                <Link to="https://github.com/Ayres-Adel" className="hero-btn hero-btn-projects">
                  <i className="fas fa-folder-open" style={{ marginRight: 8 }}></i>
                  Show Projects
                </Link>
              </div>
            </div>
            <div>
              <img
                src={PortfolioLogo}
                alt="Profile"
                className="profile-img"
              />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection className="heartbeat">
          <InfiniteScroll />
        </FadeInSection>

        {/* ABOUT SECTION */}
        <FadeInSection>
          <section className="Container_05" id="about">
            <div className="about-profile-card">
              <img
                src={PortfolioLogo}
                alt="Ayres Profile"
                className="about-profile-img"
              />
              <div className="about-accent-bar"></div>
            </div>
            <h1>
              <span className="accent">About</span> Me
            </h1>
            <div className="about-content">
              <p>
                A man in mission and passionate developer who began my journey in computer science in 2023 as a student at Hassiba Ben Bouali University in Chlef. I love solving problems, creating useful web experiences, and continuously pushing myself to learn and grow.
              </p>
            </div>
          </section>
        </FadeInSection>

        {/* PROJECTS SECTION */}
        <FadeInSection>
          <section className="Container_04" id="projects">
            <h1 className="accent">Featured Projects</h1>
            <div className="grid_Container_04">
              {projects.map((project, i) => (
                <div key={i} className="project-card">
                  <div className="project-image-box">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-languages">
                    {i === 2 ? (
                      <>
                        <span className="project-lang-icon" title="HTML5">
                          <i className="devicon-html5-plain colored"></i>
                        </span>
                        <span className="project-lang-icon" title="CSS3">
                          <i className="devicon-css3-plain colored"></i>
                        </span>
                        <span className="project-lang-icon" title="PHP">
                          <i className="devicon-php-plain colored"></i>
                        </span>
                      </>
                    ) : i === 1 ? (
                      <>
                        <span className="project-lang-icon" title="HTML5">
                          <i className="devicon-html5-plain colored"></i>
                        </span>
                        <span className="project-lang-icon" title="CSS3">
                          <i className="devicon-css3-plain colored"></i>
                        </span>
                        <span className="project-lang-icon" title="JavaScript">
                          <i className="devicon-javascript-plain colored"></i>
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="project-lang-icon" title="React">
                          <i className="devicon-react-original colored"></i>
                        </span>
                        <span className="project-lang-icon" title="HTML5">
                          <i className="devicon-html5-plain colored"></i>
                        </span>
                        <span className="project-lang-icon" title="CSS3">
                          <i className="devicon-css3-plain colored"></i>
                        </span>
                        <span className="project-lang-icon" title="JavaScript">
                          <i className="devicon-javascript-plain colored"></i>
                        </span>
                        <span className="project-lang-icon" title="MongoDB">
                          <i className="devicon-mongodb-plain colored"></i>
                        </span>
                        <span className="project-lang-icon" title="Express">
                          <i className="devicon-express-original"></i>
                        </span>
                        <span className="project-lang-icon" title="Node.js">
                          <i className="devicon-nodejs-plain colored"></i>
                        </span>
                      </>
                    )}
                  </div>
                  <div className="project-btns">
                    <Link to={project.link} className="primary-button" style={{ marginTop: 12 }}>
                      View Project
                    </Link>
                    {project.source && (
                      <a
                        href={project.source}
                        className="primary-button source-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: 12, marginLeft: 10 }}
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* LANGUAGES SECTION */}
        <FadeInSection>
          <section className="Container_06" id="languages">
            <h1>
              <span className="accent">Languages</span> I Know
            </h1>
            <div className="languages-list">
              <div className="language-item">
                <i className="devicon-react-original colored" title="React"></i>
                <span>React</span>
              </div>
              <div className="language-item">
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <span>HTML5</span>
              </div>
              <div className="language-item">
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <span>CSS3</span>
              </div>
              <div className="language-item">
                <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                <span>JavaScript</span>
              </div>
              <div className="language-item">
                <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
                <span>MongoDB</span>
              </div>
              <div className="language-item">
                <i className="devicon-express-original" title="Express"></i>
                <span>Express</span>
              </div>
              <div className="language-item">
                <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                <span>Node.js</span>
              </div>
              <div className="language-item">
                <i className="devicon-c-plain colored" title="C"></i>
                <span>C</span>
              </div>
              <div className="language-item">
                <i className="devicon-java-plain colored" title="Java"></i>
                <span>Java</span>
              </div>
              <div className="language-item">
                <i className="devicon-nestjs-plain colored" title="NestJS"></i>
                <span>NestJS</span>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* EDUCATION SECTION */}
        <FadeInSection>
          <section className="Container_07" id="education">
            <h1>
              <span className="accent">Education</span>
            </h1>
            <div className="education-list">
              <div className="education-item">
                <img
                  src={UniversityLogo}
                  alt="Hassiba Ben Bouali University Logo"
                  className="education-logo"
                />
                <div className="education-details">
                  <div className="education-header">
                    <span className="education-school">Hassiba Ben Bouali University</span>
                    <span className="education-date">June 2023 - June 2025</span>
                  </div>
                  <div className="education-degree">
                    Bachelor’s Degree in Computer Science
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* CONTACT SECTION */}
        <FadeInSection>
          <footer className="footer" id="contact">
            <div className="grid_footer">
              <div>
                <h1>Contact Me</h1>
                <p>
                  Let's connect! I'm open to freelance work, collaborations, or just a friendly chat.
                </p>
                <form
                  className="contact-form"
                  action="https://formspree.io/f/xjkrbpeo"
                  method="POST"
                >
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-row">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="send-btn">
                    <i className="fas fa-paper-plane" style={{ marginRight: 8 }}></i>
                    Send Message
                  </button>
                </form>
                <p style={{ marginTop: 18, fontSize: "1rem", color: "var(--text-light)" }}>
                  Or email me directly at <a href="mailto:mr.ladouiadel@gmail.com" className="accent">mr.ladouiadel@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="rights">
              &copy; {new Date().getFullYear()} <span className="rights-name">Ayres</span> &mdash; All rights reserved
            </div>
          </footer>
        </FadeInSection>

        {/* Sticky Social Media Box */}
        <div className="sticky-social-box">
          <a
            href="https://discord.com/users/553161166902525952"
            className="social-btn discord"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <i className="fab fa-discord"></i>
          </a>
          <a
            href="https://github.com/Ayres-Adel"
            className="social-btn github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/x_ayres_x/?next=%2F"
            className="social-btn instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
}