// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductCategories from './pages/ProductCategories';
import Products from './pages/Products';
import Models from './pages/Models';
import Catalogues from './pages/Catalogues';
import DealerNetwork from './pages/DealerNetwork';
import Markets from './pages/Markets';
import News from './pages/News';
import Events from './pages/Events';
import RegisteredUsers from './pages/RegisteredUsers';
import Login from './pages/Login';
import NotFound from './pages/NotFound';




function App() {
  return (
    <Router>
      <div>
        {/* Your navigation bar or menu can go here */}
        <Routes>
          {/* Define routes using Route component */}
          {/* Each Route should have a path and corresponding component */}
          <Route path="/" element={<Home />} />
          <Route path="/ProductCategories" element={<ProductCategories />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Models" element={<Models />} />
          <Route path="/Catalogues" element={<Catalogues />} />
          <Route path="/DealerNetwork" element={<DealerNetwork />} />
          <Route path="/Markets" element={<Markets />} />
          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/RegisteredUsers" element={<RegisteredUsers />} />
          <Route path="/Login" element={<Login />} />

          
          {/* This route will catch any other routes not defined above */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
