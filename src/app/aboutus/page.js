/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"

import '../globals.css';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    },[]);

  return (
    <>
    <section>
    <div
      className="relative w-full h-screen bg-center bg-cover flex flex-col justify-end"
      style={{
        backgroundImage: "url('https://www.agoda.com/wp-content/uploads/2024/06/petronas-tower-kuala-lumpur.jpg')",
        opacity: 1,
        animation: 'expandCircle 1.5s ease-out forwards',
        WebkitClipPath: 'circle(0% at 50% 50%)',
        clipPath: 'circle(0% at 50% 50%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/70"></div>
      <div className="relative grid space-y-6 py-4 text-left lg:mx-20 mx-4 lg:p-4 bottom-12 ">
      <p className="text-white ">About Us</p>
      <p className="text-white font-semibold text-3xl">MISA Traning Centre</p>
      <p className="text-white font-medium text-lg">Our Objective is to be the main single hub of the academy in shaping the future of the workforce in Malaysia.</p>
      </div>
    </div>
    </section>
    <section>
      <div className="hidden lg:flex mx-20 relative">
      <div className="relative w-[800px] h-screen bottom-10 p-6 lg:pt-10" style={{backgroundColor: '#00b3b3',}}>
      <p className="text-xl font-semibold text-white py-6">Our Prograssion</p>
      <p className="text-white ">Petroliam Nasional Berhad (PETRONAS) is a global energy company committed to producing and delivering energy and solutions needed to advance society responsibly and sustainably.
      As Malaysia’s national oil and gas company, we safeguard and manage the nation’s hydrocarbon resources. Our aim is to maximise value through our integrated business model to meet the energy needs of the nation and our customers across the globe. Our portfolio includes oil and gas, petrochemicals, petroleum products, as well as a range of cleaner energy solutions.
      Ensuring sustainable practices across our operations is important to how we conduct our business. Our goal is to achieve net zero carbon emissions by 2050, and we strive to be a valuable partner to our stakeholders in transitioning to a lower carbon energy future in a just and responsible manner.</p>
      </div>
      <div className="bg-red-300 w-full flex justify-center lg:pt-10">
        <div style={{
        backgroundImage: "url('https://assets.isu.pub/document-structure/240624100038-a2905e49c197031183464b1730a91562/v1/b9cb8fa88d565614cf46a32a2e5ea2bd.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
    overflow: "hidden"
      }}
      ></div>
      </div>
      </div>
    </section>
    <section>
      <div className="bg-red-300 ">
        <div style={{
        backgroundImage: "url('https://allianceenergycorpe.com/wp-content/uploads/2022/12/HTJ_7302.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "800px",    
        overflow: "hidden"
      }}
      ></div>
      </div>
    </section>
    <section>
      <div className="hidden lg:flex mx-20 relative">
      <div className=" w-[800px] h-screen bottom-10 p-6 lg:pt-10 lg:space-y-10" style={{backgroundColor: '#00b3b3',}}>
        <div>
          <p className="text-xl font-semibold text-white py-4">Our Statements</p>
          <p className="text-white ">These statements define PETRONAS as an organisation, guiding our corporate activities and policies, setting our course for the future..</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-white py-4">Statement of Purpose</p>
          <p className="text-white ">A progressive energy and solutions partner enriching lives for a sustainable future.</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-white py-4">Shared Values</p>
          <p className="text-white ">Our values are embedded in our culture as the backbone of our business conduct, reflecting our sense of duty and responsibility in upholding our commitment towards contributing to the well-being of peoples and nations wherever we operate.</p>
        </div>
      </div>

      <div className="bg-red-300 w-full  lg:pt-10">
        <div className="w-full grid grid-cols-2">
          <div className="w-full bg-yellow-300 flex">
            <img 
              src="https://www.petronas.com/sites/default/files/inline-images/about-loyalty.svg"
              alt="Loyalty Illustration" 
              style={{ width: '100%', height: 'auto' }} 
            />

            <div className="space-y-2  bg-green-200">
              <p>Loyalty</p>
              <span>Loyal to corporation fuad.</span>
            </div>
          </div>
          <div className="max-w-[200px] bg-yellow-300 flex">
            <img 
              src="https://www.petronas.com/sites/default/files/inline-images/about-loyalty.svg"
              alt="Loyalty Illustration" 
              style={{ width: '100%', height: 'auto' }} 
            />

            <div className="space-y-2 min-w-[200px] bg-green-200">
              <p>Loyalty</p>
              <span>Loyal to corporation.</span>
            </div>
          </div>
          <div className="max-w-[200px] bg-yellow-300 flex">
            <img 
              src="https://www.petronas.com/sites/default/files/inline-images/about-loyalty.svg"
              alt="Loyalty Illustration" 
              style={{ width: '100%', height: 'auto' }} 
            />

            <div className="space-y-2 min-w-[200px] bg-green-200">
              <p>Loyalty</p>
              <span>Loyal to corporation.</span>
            </div>
          </div>
          <div className="max-w-[200px] bg-yellow-300 flex">
            <img 
              src="https://www.petronas.com/sites/default/files/inline-images/about-loyalty.svg"
              alt="Loyalty Illustration" 
              style={{ width: '100%', height: 'auto' }} 
            />

            <div className="space-y-2 min-w-[200px] bg-green-200">
              <p>Loyalty</p>
              <span>Loyal to corporation.</span>
            </div>
          </div>
        </div>
        
       
        
        </div>
        
        
      </div>
      
    </section>
    </>
  );
}

