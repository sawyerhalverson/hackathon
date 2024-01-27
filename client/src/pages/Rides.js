import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '1.8rem',
    marginBottom: '20px',
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
    margin: '10px 0',
  },
  infoText: {
    fontSize: '1rem',
    marginBottom: '20px',
  }
};

const Rides = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Rides</h2>
      <p style={styles.infoText}>Select an option based on your profile:</p>
      <Link to="/map">
      <div>
        <button style={styles.button}>Give a Ride</button>
        <p style={styles.infoText}>Ready to offer a ride? Connect with passengers!</p>
      </div>
      </Link>
      <Link to="/map">
      <div>
        <button style={styles.button}>Get a Ride</button>
        <p style={styles.infoText}>Need a ride? Find a driver near you!</p>
      </div>
      </Link>
    </div>
  );
};

export default Rides;
