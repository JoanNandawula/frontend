// import React, { useState } from 'react';
// import './AdminAddEditProduct.css';

// const AdminAddEditProduct = () => {
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//     imageUrl: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({
//       ...product,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic for submitting the product details
//     console.log('Product submitted:', product);
//   };

//   return (
//     <div className="admin-add-edit-product">
//       <h1>Add/Edit Product</h1>
//       <form onSubmit={handleSubmit} className="form">
//         <label>Product Name</label>
//         <input
//           type="text"
//           name="name"
//           value={product.name}
//           onChange={handleChange}
//           placeholder="Enter product name"
//         />
//         <label>Description</label>
//         <input
//           type="text"
//           name="description"
//           value={product.description}
//           onChange={handleChange}
//           placeholder="Enter product description"
//         />
//         <label>Price</label>
//         <input
//           type="text"
//           name="price"
//           value={product.price}
//           onChange={handleChange}
//           placeholder="Enter product price"
//         />
//         <label>Image URL</label>
//         <input
//           type="text"
//           name="imageUrl"
//           value={product.imageUrl}
//           onChange={handleChange}
//           placeholder="Enter product image URL"
//         />
//         <button type="submit" className="btn">Save Product</button>
//       </form>
//     </div>
//   );
// };

// export default AdminAddEditProduct;
