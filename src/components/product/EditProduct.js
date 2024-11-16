import React, { useState } from 'react';

const EditProduct = ({ product }) => {
  const [name, setName] = useState(product.name || '');
  const [category, setCategory] = useState(product.category || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product "${name}" updated under category "${category}"!`);
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
