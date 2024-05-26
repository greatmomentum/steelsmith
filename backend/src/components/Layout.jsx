// Layout.jsx
import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const Layout = () => {
  return (
    <div>
      <Menu />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Layout;
