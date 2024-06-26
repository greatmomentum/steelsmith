import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '20px' }}> {/* Adjust padding top as needed */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;