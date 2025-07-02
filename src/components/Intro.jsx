'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image'
import Collabration from '@/components/Collaboration.jsx'

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
    <>
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className=" ">
        <Image
        src="/home/image1.png"
        alt="MISA Global"
        fill
        priority
        className="object-cover"
      />
      </div>

      {/* Hero Content */}
      <div className="hero-content text-center text-white z-10">
        <h1 className="text-5xl md:text-7xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Welcome to Misa Global</h1>
        <p className="mt-4 text-lg md:text-2xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Misa Tecnical Training Centre</p>
        <div className="pt-8">
          <a href="/aboutus" className=" px-6 py-3 bg-blue-800 hover:bg-slate-800 transition rounded text-lg shadow-2xl hover:-translate-y-2">About MISA</a>
        </div>
      </div>
      </div>
      <div>
          <div>
            <Collabration/>
          </div>
        </div>
        </>
  );
};

export default HeroSection;
