// src/api.js
import axios from 'axios';

const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: 'http://localhost:8000', // Adjust if different
  headers: {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export default API;
