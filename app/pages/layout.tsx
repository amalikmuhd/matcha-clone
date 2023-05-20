import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = ({child}: {child: React.ReactNode}) => {
  return (
    <main className="primary">
      <NavBar />
      {child}
      <Footer />
    </main>
  );
};

export default Layout;
