// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">QuickCart</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/my-orders">My Orders</Link>
        <Link to="/AdminProductList">Product List</Link>
        <Link to="/" className="logout-link">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
