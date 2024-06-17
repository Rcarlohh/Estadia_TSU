import React from 'react';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
