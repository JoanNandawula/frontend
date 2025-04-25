// src/pages/Cart.jsx
import React from 'react';
import './Cart.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


function Cart() {
    const cartItems = [
        { id: 1, name: 'Wireless Headphones', price: '$99.99', quantity: 1, image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Smart Watch', price: '$199.99', quantity: 2, image: 'https://via.placeholder.com/100' },
    ];

    const getTotal = () => {
        return cartItems
            .reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0)
            .toFixed(2);
    };

    return (
        <div className="cart-container">
            <Navbar />
            <main className="cart-content">
                <h2>Your Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-image" />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>Price: {item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-total">
                            <h3>Total: ${getTotal()}</h3>
                            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
                        </div>
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default Cart;
