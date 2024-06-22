// RevealOnScroll.js
import React, { useEffect, useRef } from 'react';
import './App.css';

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const reveal = () => {
      if (ref.current) {
        const windowHeight = window.innerHeight;
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          ref.current.classList.add('show');
        } else {
          ref.current.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    reveal(); 

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <div ref={ref} className="hidden">
      {children}
    </div>
  );
};

export default RevealOnScroll;
