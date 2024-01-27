import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
    padding: '50px',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '10px',
  },
  buttonText: {
    textDecoration: 'none',
    color: 'white',
  },
  infoText: {
    marginTop: '10px',
    fontSize: '0.9rem',
  }
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Stuber</h1>
      <p>Welcome to Stuber - Your Rideshare Solution</p>

      <div>
        <h2 style={styles.subHeader}>Choose an Option</h2>

        <div>
          <button style={styles.button}>
            <Link to="/login" style={styles.buttonText}>Login</Link>
          </button>
        </div>

        <div>
          <button style={styles.button}>
            <Link to="/signup" style={styles.buttonText}>Sign Up</Link>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;

