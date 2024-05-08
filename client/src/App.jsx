import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainLayout from './layouts/MainLayout';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductCategories from "./pages/ProductCategories";
import Products from "./pages/Products";
import ProductModels from './pages/ProductModels';
import ProductSingle from './pages/ProductSingle';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ProductCategories" element={<ProductCategories />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductModels" element={<ProductModels />} />
          <Route path="/ProductSingle" element={<ProductSingle />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
