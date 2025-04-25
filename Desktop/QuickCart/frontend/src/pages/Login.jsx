import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from "../redux/slices/userSlice";
import './Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for redirecting after login

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username: email, // Django uses "username" even if you're using email
        password: password,
      });

      const { token, user } = response.data;
      dispatch(loginSuccess({ token, user }));  // Store user data and token in Redux store

      setError('');

      // Redirect to home page after successful login
      navigate('/'); // You can change '/' to '/dashboard' or '/admin' based on user role

    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="content login-page">
        <h2 className="login-title">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email address"
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
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="register-link">
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
