import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainLayout from './layouts/MainLayout';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductCategories from "./pages/ProductCategories";
import AllProducts from "./pages/AllProducts";
import Products from "./pages/Products";
import ProductModels from './pages/ProductModels';
import ProductSingle from './pages/ProductSingle';
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import News from './pages/News';
import Downloads from './pages/Downloads';
import Markets from './pages/Markets';
import DealerNetwork from './pages/DealerNetwork';
import Register from './pages/Register';
import EnquiryCart from './pages/EnquiryCart';


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ProductCategories" element={<ProductCategories />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductModels" element={<ProductModels />} />
          <Route path="/ProductSingle" element={<ProductSingle />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/News" element={<News />} />
          <Route path="/Downloads" element={<Downloads />} />
          <Route path="/Markets" element={<Markets />} />
          <Route path="/DealerNetwork" element={<DealerNetwork />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/EnquiryCart" element={<EnquiryCart />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
