import React, { CSSProperties, FormEvent } from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook from Next.js

const Register: React.FC = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const handleBackToLogin = () => {
    router.push('/login'); // Navigate to the login page using router.push()
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Registration form submitted');
  };

  // Inline styles with CSSProperties type
  const styles: Record<string, CSSProperties> = {
    registerPage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: `url('/pexels-alesiakozik-6544243.jpg')`, // Use string directly for the background image
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      fontFamily: 'Arial, sans-serif',
    },
    registerContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 4, 0.3)',
      width: '90%',
      maxWidth: '500px',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '20px',
      fontSize: '3rem',
      textShadow: '2px 1px 5px white',
      color: '#fff',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    label: {
      fontSize: '1rem',
      textAlign: 'left',
      color: '#ccc',
    },
    input: {
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px',
    },
    button: {
      padding: '10px',
      width: '100%',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    submitBtn: {
      backgroundColor: '#28a745',
      color: '#fff',
    },
    backBtn: {
      backgroundColor: '#dc3545',
      color: '#fff',
    },
    hoverSubmitBtn: {
      backgroundColor: '#218838',
    },
    hoverBackBtn: {
      backgroundColor: '#c82333',
    },
  };

  return (
    <div style={styles.registerPage}>
      <div style={styles.registerContainer}>
        <h2 style={styles.heading}>Register</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="first-name" style={styles.label}>First Name</label>
          <input type="text" id="first-name" style={styles.input} required />
          <label htmlFor="last-name" style={styles.label}>Last Name</label>
          <input type="text" id="last-name" style={styles.input} required />
          <label htmlFor="email" style={styles.label}>Email</label>
          <input type="email" id="email" style={styles.input} required />
          <label htmlFor="password" style={styles.label}>Password</label>
          <input type="password" id="password" style={styles.input} required />
          <label htmlFor="confirm-password" style={styles.label}>Confirm Password</label>
          <input type="password" id="confirm-password" style={styles.input} required />
          <div style={styles.buttonContainer}>
            <button
              type="submit"
              style={{ ...styles.button, ...styles.submitBtn }}
            >
              Submit
            </button>
            <button
              type="button"
              style={{ ...styles.button, ...styles.backBtn }}
              onClick={handleBackToLogin} // Calling the router to go back to login
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
