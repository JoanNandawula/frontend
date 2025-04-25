import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">QuickCart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li> */}
            {/* Adding new links for the new routes */}
            <li className="nav-item">
              <Link className="nav-link" to="/my-orders">My Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/add-edit-product">Add/Edit Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">Admin Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
