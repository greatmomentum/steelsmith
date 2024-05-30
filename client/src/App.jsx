import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

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
import CatalogueDownloads from './pages/CatalogueDownloads.jsx';
import IntroductionToClamps from './pages/IntroductionToClamps.jsx';
import TypesOfToggleAction from './pages/TypesOfToggleAction.jsx';
import WhatIsAToggleClamp from './pages/WhatIsAToggleClamp.jsx';
import Applications from './pages/Applications.jsx';
import TestingFacilities from './pages/TestingFacilities.jsx';


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
          <Route path="/CatalogueDownloads" element={<CatalogueDownloads />} />
          <Route path="/IntroductionToClamps" element={<IntroductionToClamps />} />
          <Route path="/TypesOfToggleAction" element={<TypesOfToggleAction />} />
          <Route path="/WhatIsAToggleClamp" element={<WhatIsAToggleClamp />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/TestingFacilities" element={<TestingFacilities />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
