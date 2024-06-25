import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';


const ScrollButtonComponent = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`btn btn-lg btn-primary back-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      <FaAngleDoubleUp className="icon-style" />
    </div>
  );
};

export default ScrollButtonComponent;
