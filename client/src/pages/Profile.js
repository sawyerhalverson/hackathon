import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const handleProfileCreation = () => {
    // Save user profile information (e.g., send to API, store in state, etc.)
    // For simplicity, we're logging the details here
    console.log('Profile Created:', { name, birthday, email, phone, address });

    // Redirect to the Rides page after profile creation
    navigate('/rides');
  };

  return (
    <div>
      <h2>Create Your Profile</h2>

      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />

      <label>
        Birthday:
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />

      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />

      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />

      <button onClick={handleProfileCreation}>Create Profile</button>
    </div>
  );
};

export default Profile;
