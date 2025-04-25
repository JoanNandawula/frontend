// src/pages/MyOrders.jsx
import React from 'react';
import './MyOrders.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyOrders() {
  const orders = [
    { id: 'ORD001', date: '2025-04-20', total: '$129.98', status: 'Delivered' },
    { id: 'ORD002', date: '2025-04-18', total: '$199.99', status: 'Shipped' },
    { id: 'ORD003', date: '2025-04-15', total: '$49.99', status: 'Processing' },
  ];

  return (
    <div className="orders-container">
      <Navbar />
      <main className="orders-content">
        <h2>My Orders</h2>
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
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

export default MyOrders;
