import React, { useState, CSSProperties, FormEvent } from 'react';
import Link from 'next/link';  // Importing Next.js Link
import backgroundImage from '../public/pexels-adonyi-foto-1414651.jpg';

const Login: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles with CSSProperties type
  const styles: Record<string, CSSProperties> = {
    loginPage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: `url(${backgroundImage}) no-repeat center center / cover`,
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
    },
    loginContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
      width: '90%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '20px',
      fontSize: '3rem',
      textShadow: '2px 2px 5px white',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    label: {
      fontSize: '1rem',
      textAlign: 'left',
    },
    input: {
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    button: {
      padding: '10px',
      backgroundColor: isHovered ? '#218838' : '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    forgotPassword: {
      display: 'block',
      margin: '10px 0',
      textDecoration: 'none',
      fontSize: '0.9rem',
    },
    registerButton: {
      background: 'none',
      border: 'none',
      color: '#ffc107',
      fontSize: '1rem',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  return (
    <div id="login-page" style={styles.loginPage}>
      <div className="login-container" style={styles.loginContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form id="login-form" style={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            style={styles.input}
            placeholder="Enter your email"
          />
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            style={styles.input}
            placeholder="Enter your password"
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Login
          </button>
        </form>
        <a href="/forgot-password" className="forgot-password" style={styles.forgotPassword}>
          Forgot password?
        </a>
        <p>
          Don't have an account yet?{' '}
          <Link href="/register" passHref>
            <button
              id="register-btn"
              className="register-btn"
              style={styles.registerButton}
            >
              Register
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
