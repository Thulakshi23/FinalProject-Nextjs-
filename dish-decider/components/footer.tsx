"use client";

import React, { useState } from "react";

const Footer: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const footerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#fc3132",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const logoStyle: React.CSSProperties = {
    maxWidth: "50px",
    height: "auto",
  };

  const paragraphStyle: React.CSSProperties = {
    margin: "10px 0",
    fontSize: "14px",
    color: "white",
  };

  const socialLinksStyle: React.CSSProperties = {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
  };

  const socialLinkStyle: React.CSSProperties = {
    margin: "0 10px",
  };

  const socialIconStyle: React.CSSProperties = {
    width: "30px",
    height: "30px",
    transition: "transform 0.3s ease",
    transform: hoveredIcon ? "scale(1.1)" : "scale(1)",
  };

  return (
    <footer style={footerStyle}>
      <div className="footer-logo">
        <img
          src="/IMG-20250105-WA0089(1).jpg"
          alt="Dish Decider Logo"
          style={logoStyle}
        />
      </div>
      <p style={paragraphStyle}>© 2024 DishDecider.com</p>
      <div className="social-links" style={socialLinksStyle}>
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
          style={socialLinkStyle}
          onMouseEnter={() => setHoveredIcon("facebook")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src="/fb.jpg" alt="Facebook" style={socialIconStyle} />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          style={socialLinkStyle}
          onMouseEnter={() => setHoveredIcon("instagram")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src="/insta.png" alt="Instagram" style={socialIconStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
