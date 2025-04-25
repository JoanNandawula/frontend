import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />
        <label>Address</label>
        <input type="text" placeholder="Enter your address" />
        <label>Payment Method</label>
        <select>
          <option>Credit Card</option>
          <option>PayPal</option>
        </select>
        <button className="btn">Complete Purchase</button>
      </div>
    </div>
  );
};

export default Checkout;
