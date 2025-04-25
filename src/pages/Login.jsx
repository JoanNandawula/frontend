import React, { useState } from 'react';
import './Login.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-register">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <form className="form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="btn">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="switch-btn">
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default LoginRegister;
