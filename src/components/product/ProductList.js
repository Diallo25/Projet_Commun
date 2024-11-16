import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Smartphone', category: 'Electronics' },
    { id: 2, name: 'Laptop', category: 'Electronics' },
    { id: 3, name: 'Novel', category: 'Books' },
  ]);

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            {product.name} <span className="badge bg-primary">{product.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
