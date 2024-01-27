import React from 'react';
import { Link } from 'react-router-dom';

const Rides = () => {
  return (
    <div>
      <h2>Rides</h2>
      <p>Select an option based on your profile:</p>

      <div>
      <Link to="/map">
          <button>Give a Ride</button>
        </Link>
        <p>Ready to offer a ride? Connect with passengers!</p>
      </div>

      <div>
      <Link to="/map">
          <button>Get a Ride</button>
        </Link>
        <p>Need a ride? Find a driver near you!</p>
      </div>
    </div>
  );
};

export default Rides;
