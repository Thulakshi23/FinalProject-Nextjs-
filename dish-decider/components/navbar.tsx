import React from 'react';
import Link from 'next/link';  // Importing Next.js Link
import Logo from '../public/IMG-20250105-WA0089(1).jpg';

const Navbar: React.FC = () => {
  const navbarStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fc3132',
    boxShadow: '0 2px 4px rgba(190, 40, 40, 0.1)',
  };

  const logoStyle: React.CSSProperties = {
    height: '50px',
    width: 'auto',
  };

  const navLinksStyle: React.CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
    padding: '0',
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  };

  const searchLoginStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const searchBarStyle: React.CSSProperties = {
    padding: '5px 10px',
    border: '1px solid #ddd',
    borderRadius: '20px',
    outline: 'none',
    fontSize: '14px',
    transition: 'box-shadow 0.3s ease',
  };

  const loginLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#007bff', // Blue color for login link
    fontWeight: 500,
    padding: '5px 10px',
    border: '1px solid #007bff',
    borderRadius: '20px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  return (
    <div style={navbarStyle}>
      <div className="logo">
        {/* Use a direct path to the image in the public folder */}
        <img src="/IMG-20250105-WA0089(1).jpg" alt="Dish Decider Logo" style={logoStyle} />
      </div>
      <nav>
        <ul style={navLinksStyle}>
          <li>
            <Link href="/" passHref>
              <span style={linkStyle}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/mealplanner" passHref>
              <span style={linkStyle}>Meal Planner</span>
            </Link>
          </li>
          <li>
            <Link href="/contactus" passHref>
              <span style={linkStyle}>Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div style={searchLoginStyle}>
        <input type="text" style={searchBarStyle} placeholder="🔍 Search..." />
        <Link href="/login" passHref>
          <span style={loginLinkStyle}>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
