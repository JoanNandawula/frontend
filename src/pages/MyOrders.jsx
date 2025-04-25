import React from 'react';
import './MyOrders.css';

const MyOrders = () => {
  const orders = [
    { id: 1, total: '$59.99', status: 'Pending' },
    { id: 2, total: '$39.99', status: 'Completed' },
  ];

  return (
    <div className="my-orders">
      <h1>My Orders</h1>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <p>Order ID: {order.id}</p>
            <p>Total: {order.total}</p>
            <p>Status: {order.status}</p>
            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
