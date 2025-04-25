// src/api/axiosInstance.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';  // or whatever your API URL is

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 🔐 Attach token to every request dynamically
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token'); // Get latest token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
