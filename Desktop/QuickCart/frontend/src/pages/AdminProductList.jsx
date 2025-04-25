import React, { useState } from 'react';
import './AdminProductList.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';



function AdminProductList() {
    // Sample products (you would normally fetch this from an API)
    const [products, setProducts] = useState([
        { id: 1, name: 'Wireless Headphones', price: '$99.99', stock: 50 },
        { id: 2, name: 'Smart Watch', price: '$199.99', stock: 30 },
        { id: 3, name: 'Bluetooth Speaker', price: '$49.99', stock: 100 },
        { id: 4, name: 'Gaming Mouse', price: '$39.99', stock: 75 },
    ]);

    // Function to handle product deletion (just for demo)
    const handleDelete = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="admin-product-list-container">
            <Navbar />
            <main className="admin-product-list-content">
                <h2>Product List</h2>
                <Link to="/admin/add-product" className="add-product-btn">
                    Add New Product
                </Link>
                {products.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                        <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default AdminProductList;
