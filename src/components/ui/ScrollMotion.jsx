'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <h1>Scroll to animate!</h1>
    </div>
  );
};

export default MyComponent;
