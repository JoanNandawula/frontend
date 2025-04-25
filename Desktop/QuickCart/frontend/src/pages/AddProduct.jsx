// src/pages/AddProduct.jsx
import React, { useState } from 'react';
import './AddProduct.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axiosInstance from '../api/axiosInstance'; // make sure this path is correct based on your folder structure

function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('products/', {
        name: form.name,
        price: form.price,
        stock: form.stock
      });

      console.log('Product added:', response.data);
      alert('Product added successfully!');
      setForm({ name: '', price: '', stock: '' }); // reset form
    } catch (error) {
      console.error('Error adding product:', error.response?.data || error.message);
      alert('Failed to add product. Please check your input or try again.');
    }
  };

  return (
    <div className="add-product-container">
      <Navbar />
      <main className="add-product-content">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label>
            Product Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Stock:
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default AddProduct;
