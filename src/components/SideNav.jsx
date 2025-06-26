"use client"

// src/components/Navbar.js
import React, { useState } from 'react';
import Image from "next/image"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleNavbar1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };
  const toggleNavbar2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleNavbar3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleNavbar4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleNavbar5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleNavbar6 = () => {
    setIsOpen6(!isOpen6);
  };


  return (
    <nav className="bg-gray-800 p-2 py-4">
      <div className="flex items-center justify-between">
        <a href="/"
        className="text-white font-bold text-xl">
        <Image
          className=""
          src="/misalogo2.png"
          alt="misalogo2"
          height="10"
          width="80"
          style={{
            objectFit: "contain",
          }}
        />
        </a>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <Image
          className=""
          src="./home/menu.svg"
          alt="menur"
          height="25"
          width="25"
          style={{
            objectFit: "contain",
          }}
        />
        </button>
      </div>

      {/* Responsive Navigation */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
          <button
          className="flex justify-start p-2 w-full hover:bg-gray-700">
            <a className="text-md text-white ml-2" href="/">About Us</a>
          </button>
          <button
          className="flex justify-start p-2 w-full hover:bg-gray-700">
            <a className="text-md text-white ml-2" href="/">News & Media</a>
          </button>
          <button
          onClick={() => setIsOpen2(!isOpen2)}
          className="flex justify-start p-2 w-full hover:bg-gray-700">
            <a className="text-md text-white ml-2" >Our Partner</a>
          </button>
          {isOpen2 && (
            <div className="lg:hidden mt-4 bg-yellow-700">
              {/* Add your navigation links here */}
                <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
                Sirim</a>
                <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
                Pelita</a>
                <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
                Ranaco Marine Sdn Bhd</a>
                <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
                Sirim Academy</a>
                <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
                Meatech College</a>
                <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
                Src Global</a>
            </div>
            )}

          <button
          className="flex justify-start p-2 w-full hover:bg-gray-700">
            <a className="text-md text-white ml-2" href="../borangmisa">Contact Us</a>
          </button>
        </div>
      )}         
    </nav>






  );
};

export default Navbar;

