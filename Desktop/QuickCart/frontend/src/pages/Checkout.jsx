// src/pages/Checkout.jsx
import React from 'react';
import './Checkout.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Checkout() {
  const cartItems = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', quantity: 1 },
    { id: 2, name: 'Smart Watch', price: '$199.99', quantity: 2 },
  ];

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="checkout-container">
      <Navbar />
      <main className="checkout-content">
        <h2>Checkout</h2>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <p>{item.name} (x{item.quantity})</p>
              <p>{item.price}</p>
            </div>
          ))}
          <h4>Total: ${getTotal()}</h4>
        </div>

        <form className="checkout-form">
          <h3>Shipping Information</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Zip Code" required />
          <input type="email" placeholder="Email" required />

          <h3>Payment</h3>
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Expiry Date" required />
          <input type="text" placeholder="CVV" required />

          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
