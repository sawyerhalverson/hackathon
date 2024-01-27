
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Stuber</h1>
      <p>Welcome to Stuber - Your Rideshare Solution</p>

      <div>
        <h2>Choose an Option</h2>

        <div>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <p>Already have an account? Login here.</p>
        </div>

        <div>
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
          <p>New user? Sign up for an account.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

