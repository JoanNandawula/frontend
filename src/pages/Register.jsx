


// File: src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post('/register/', form).then(() => navigate('/login')).catch(() => alert('Registration failed'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input type="text" className="form-control" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      </div>
      <button className="btn btn-success">Register</button>
    </form>
  );
};

export default Register;
