import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to view your cart.');
      navigate('/login');
      return;
    }

    API.get('/cart/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setCartItems(res.data.cart_items || []);
        setTotal(res.data.total || 0);
      })
      .catch(err => {
        console.error('Error fetching cart:', err);
        alert('Unable to load cart. Please log in again.');
        navigate('/login');
      });
  }, [navigate]);

  const checkout = () => navigate('/checkout');

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.product}</strong> × {item.quantity}
                </div>
                <span>UGX {item.subtotal}</span>
              </li>
            ))}
          </ul>
          <h5>Total: UGX {total}</h5>
          <button className="btn btn-primary mt-3" onClick={checkout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
