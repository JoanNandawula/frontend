// src/pages/Register.jsx
import React, { useState } from 'react';
import './Register.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        username,
        email,
        password,
      });

      setSuccess(true);
      setError('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirm('');
      console.log(response.data.message); // "User registered successfully"
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Registration failed');
      setSuccess(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="content register-page">
        <h2>Create an Account</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button type="submit">Register</button>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">Registration successful! 🎉</p>}
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Register;
