import React, { useState } from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
  ]);

  return (
    <div className="container mt-4">
      <h2>Categories</h2>
      <ul className="list-group">
        {categories.map((category) => (
          <li key={category.id} className="list-group-item d-flex justify-content-between align-items-center">
            {category.name}
            <button className="btn btn-sm btn-outline-secondary">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
