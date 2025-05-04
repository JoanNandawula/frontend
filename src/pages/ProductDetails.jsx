import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}/`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        alert("Failed to load product details.");
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You need to log in to add items to your cart.");
      navigate("/login");
      return;
    }

    try {
      await API.post(`/cart/add/${id}/`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Item added to cart!");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please log in again.");
        navigate("/login");
      } else {
        console.error("Add to cart failed:", error);
        alert("Failed to add item to cart.");
      }
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img
        src={product.image ? product.image : 'https://via.placeholder.com/300'}
        alt={product.name}
        className="img-fluid mb-3"
        style={{ maxWidth: '300px' }}
      />
      <p>{product.description || "No description available."}</p>
      <p><strong>Price:</strong> UGX {product.price}</p>
      <button className="btn btn-success" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
