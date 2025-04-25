import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = [
    { id: 1, name: 'New Phone', price: 99.99 }, // Example product
    { id: 2, name: 'Laptop', price: 799.99 },
    { id: 3, name: 'Smart Watch', price: 149.99 },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`}> {/* Change here */}
            <button className="btn">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
