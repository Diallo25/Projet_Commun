import React, { useState } from 'react';

const AddCategory = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Category "${name}" added successfully!`);
    setName('');
  };

  return (
    <div className="container mt-4">
      <h2>Add Category</h2>
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
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
