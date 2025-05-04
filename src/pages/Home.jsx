// File: src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products/').then(res => setProducts(res.data.products));
  }, []);

  return (
    <div className="row">
      {products.map((p, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card">
            <img src={p.image_url || 'https://via.placeholder.com/150'} className="card-img-top" alt={p.name} />
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">UGX {p.price}</p>
              <Link to={`/product/${index + 1}`} className="btn btn-primary">View</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;