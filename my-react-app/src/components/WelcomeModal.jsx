import React from "react";
import PortfolioLogo from "../assets/images/killuaa.png";
import "../styles/WelcomeModal.css";

export default function WelcomeModal({ onClose }) {
  return (
    <div className="welcome-modal-backdrop">
      <div className="welcome-modal-card">
        <div className="welcome-modal-accent-bar"></div>
        <button className="welcome-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <img src={PortfolioLogo} alt="Ayres" className="welcome-modal-avatar" />
        <h2>Welcome to My Portfolio!</h2>
        <p className="welcome-modal-message">
          👋 Hi, I'm <span className="accent">Ayres</span>.<br />
          Thanks for stopping by!<br />
          Explore my projects, skills, and feel free to reach out.
        </p>
        <button className="welcome-modal-btn" onClick={onClose}>
          Get Started
        </button>
      </div>
    </div>
  );
}