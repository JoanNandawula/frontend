// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // Correctly import useCart
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart(); // Destructure addToCart from the context
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    setProductDetails(product); // Assuming you have the product info
  }, [product]);

  const handleAddToCart = () => {
    if (addToCart && productDetails) {
      addToCart(productDetails);
    }
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{productDetails.name}</h1>
      <p>{productDetails.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
