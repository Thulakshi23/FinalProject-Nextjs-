import React, { useState } from 'react';

const Footer: React.FC = () => {
  // State to handle hover effects
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Inline styles
  const footerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fc3132',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle: React.CSSProperties = {
    maxWidth: '50px',
    height: 'auto',
  };

  const paragraphStyle: React.CSSProperties = {
    margin: '10px 0',
    fontSize: '14px',
    color: 'white',
  };

  const socialLinksStyle: React.CSSProperties = {
    marginTop: '15px',
    display: 'flex', // Added to arrange social links
    alignItems: 'center',
  };

  const socialLinkStyle: React.CSSProperties = {
    margin: '0 10px', // Spacing between social icons
    display: 'inline-block',
  };

  const socialIconStyle: React.CSSProperties = {
    width: '30px', // Icon size
    height: '30px',
    transition: 'transform 0.3s ease', // Smooth hover effect
    transform: hoveredIcon ? 'scale(1.1)' : 'scale(1)', // Apply hover effect based on state
  };

  return (
    <footer style={footerStyle}>
      <div className="footer-logo">
        <img src="/IMG-20250105-WA0089(1).jpg" alt="Dish Decider Logo" style={logoStyle} />
      </div>
      <p style={paragraphStyle}>© 2024 DishDecider.com</p>
      <div className="social-links" style={socialLinksStyle}>
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
          style={socialLinkStyle}
          onMouseEnter={() => setHoveredIcon('facebook')} // Set hovered icon
          onMouseLeave={() => setHoveredIcon(null)} // Reset hovered icon
        >
          <img
            src="/fb.jpg"
            alt="Facebook"
            style={socialIconStyle}
          />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          style={socialLinkStyle}
          onMouseEnter={() => setHoveredIcon('instagram')} // Set hovered icon
          onMouseLeave={() => setHoveredIcon(null)} // Reset hovered icon
        >
          <img
            src="/insta.png"
            alt="Instagram"
            style={socialIconStyle}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
