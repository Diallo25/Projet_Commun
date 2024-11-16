import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layot/navbar';
import CategoryList from './components/category/CategoryList';
import ProductList from './components/product/ProductList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
