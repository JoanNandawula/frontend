import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
