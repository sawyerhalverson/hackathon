import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  label: {
    display: 'block',
    marginBottom: '10px',
    fontSize: '1rem',
  },
  input: {
    padding: '8px',
    fontSize: '1rem',
    margin: '5px 0 20px 0',
    width: 'calc(100% - 16px)', // account for padding
    boxSizing: 'border-box', // makes sure padding doesn't add to the width
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
  }
};

const Profile = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const handleProfileCreation = () => {
    console.log('Profile Created:', { name, birthday, email, phone, address });
    navigate('/rides');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Create Your Profile</h2>

      <label style={styles.label}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Birthday:
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
      </label>

      <label style={styles.label}>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
      </label>

      <button onClick={handleProfileCreation} style={styles.button}>Create Profile</button>
    </div>
  );
};

export default Profile;