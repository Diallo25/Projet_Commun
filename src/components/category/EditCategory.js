import React, { useState } from 'react';

const EditCategory = ({ category }) => {
  const [name, setName] = useState(category.name || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Category "${name}" updated successfully!`);
  };

  return (
    <div className="container mt-4">
      <h2>Edit Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Category Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Category
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
