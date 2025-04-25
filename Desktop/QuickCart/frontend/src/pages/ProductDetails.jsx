// src/pages/ProductDetails.jsx
import React from 'react';
import './ProductDetails.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductDetails() {
  const product = {
    id: 1,
    name: 'Wireless Headphones',
    price: '$99.99',
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    image: 'https://via.placeholder.com/300',
  };

  return (
    <div className="product-details-container">
      <Navbar />
      <main className="product-details-content">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetails;
