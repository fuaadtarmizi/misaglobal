'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  useEffect(() => {
    // Fade in the hero content on load
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://your-image-url.com/hero.jpg')"
      }}></div>
      
      {/* Overlay for Dark Effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="hero-content text-center text-white z-10">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to Misa Global</h1>
        <p className="mt-4 text-lg md:text-2xl">Misa Tecnical Training Center</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
