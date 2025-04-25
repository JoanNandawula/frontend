import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Import Footer component
import Login from './pages/Login';
import AdminAddEditProduct from './pages/AdminAddEditProduct';
import AdminOrderList from './pages/AdminOrderList';
import MyOrders from './pages/MyOrders';
import { CartProvider } from './context/CartContext'; // Import CartProvider

import './App.css';

const App = () => {
  return (
    <CartProvider>
      <>
        <Navbar />  {/* Render Navbar */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} /> {/* Cart component will use context */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/admin/add-edit-product" element={<AdminAddEditProduct />} />
            <Route path="/admin/orders" element={<AdminOrderList />} />
          </Routes>
        </div>
        <Footer />  {/* Render Footer */}
      </>
    </CartProvider>
  );
};

export default App;
