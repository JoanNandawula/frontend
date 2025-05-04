// import React from 'react';
// import './AdminOrderList.css';

// const AdminOrderList = () => {
//   const orders = [
//     { id: 1, customer: 'John Doe', total: '$59.99', status: 'Pending' },
//     { id: 2, customer: 'Jane Smith', total: '$39.99', status: 'Completed' },
//   ];

//   return (
//     <div className="admin-order-list">
//       <h1>Order List</h1>
//       <table className="order-table">
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Customer</th>
//             <th>Total</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.customer}</td>
//               <td>{order.total}</td>
//               <td>{order.status}</td>
//               <td>
//                 <button className="btn">View Details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminOrderList;
