// Rides.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  },
};

const Rides = () => {
  const navigate = useNavigate();

  const handleMapOpacityChange = () => {
    // Navigate to the /map route and change the opacity
    navigate('/map');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Rides</h2>
      <p style={styles.infoText}>Select an option based on your profile:</p>
      <div>
        <button
          style={{ ...styles.button, opacity: 1 }} // Always fully visible in this example
          onClick={() => handleMapOpacityChange()}
        >
          Give a Ride
        </button>
        <p style={styles.infoText}>Ready to offer a ride? Connect with passengers!</p>
      </div>
      <div>
        <button
          style={{ ...styles.button, opacity: 1 }} // Always fully visible in this example
          onClick={() => handleMapOpacityChange()}
        >
          Get a Ride
        </button>
        <p style={styles.infoText}>Need a ride? Find a driver near you!</p>
      </div>
    </div>
  );
};

export default Rides;
