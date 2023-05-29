import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
interface LayoutProps {
  child: React.ReactNode;
}

export const Layout = ({child}: LayoutProps) => {
  return (
    <main className="">
      <NavBar />
      {child}
      <Footer />
    </main>
  );
};
