
// File: src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post('/login/', form).then(res => {
      localStorage.setItem('token', res.data.access);
      navigate('/');
    }).catch(() => alert('Login failed'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input type="text" className="form-control" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;