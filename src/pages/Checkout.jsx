// File: src/pages/Checkout.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({ cart_items: [], total: 0 });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in");
      navigate("/login");
      return;
    }

    API.get("/cart/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setCart(res.data); // ✅ Set entire cart response
      })
      .catch(err => {
        console.error("Checkout fetch error:", err);
        alert("Failed to load cart.");
      });
  }, [navigate]);

  const placeOrder = () => {
    const token = localStorage.getItem("token");
    API.post('/order/place/', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        alert('Order placed!');
        navigate('/');
      })
      .catch(err => {
        console.error('Order error:', err.response?.data || err.message);
        alert('Failed to place order. Make sure you are logged in.');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      {cart.cart_items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.cart_items.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                <span>{item.product}</span>
                <span>Qty: {item.quantity}</span>
                <span>UGX {item.subtotal}</span>
              </li>
            ))}
          </ul>
          <h5>Total: UGX {cart.total}</h5>
          <button className="btn btn-success mt-3" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
