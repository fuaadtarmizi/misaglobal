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
    {/* <div className="bg-red-300 flex grid-cols-2 gap-2 ">
        <div>
        <div className={`bg-slate-600 grid justify-center items-center rounded-full w-[350px] h-[350px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'} ease-in-out`}>
        <div className="">
        <h className="text-4xl font-bold text-white">APA ITU MISA ?</h>
        <p className="text-xs font-bold text-white">MALAYSIA INDUSTRIAL SKILLS ACADEMY</p>
        </div>
      </div>
        </div>
        
      <div>
        <div className="bg-green-300 ">
            <div className="grid grid-cols-3 gap-5 ">
                <div className="space-y-4 py-4">
                    <div className={`bg-slate-600 p-4 w-[450px] grid justify-center items-center rounded transition-all duration-3000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'} ease-in-out`}>
                        <p className="text-white">MISA ADALAH SATU PLATFORM DI BAWAH YEG ACADEMY SDN BHD. MISA DIWUJUDKAN ATAS KOLABORASI YEG ACADEMY SDN.BHD BERSAMA PENYEDIA LATIHAN YANG MERUPAKAN PAKAR INDUSTRY DALAM BIDANG MEREKA TERSENDIRI.</p>
                    </div>
                    <div className={`bg-slate-600 p-4 w-[450px] grid justify-center items-center rounded transition-all duration-3000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'} ease-in-out`}>
                        <p className="text-white">MISA TERDIRI DARIPADA DUA KONSEP. KONSEP PERTAMA ADALAH PENEMPATAN KERJA & LATIHAN. MANAKALA, KONSEP KEDUA PULA ADALAH LATIHAN & PENEMPATAN KERJA.</p>
                    </div>
                    <div className={`bg-slate-600 p-4 w-[450px] grid justify-center items-center rounded transition-all duration-3000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'} ease-in-out`}>
                        <p className="text-white">OBJEKTIF MISA ADALAH UNTUK MENJADI HUB TUNGGAL UTAMA AKADEMI DALAM MEMBENTUK MASA DEPAN TENAGA KERJA DI MALAYSIA.</p>
                    </div>
                </div>
            </div>
            
            
        </div>
      </div>
    </div> */}
    <section>
    <div
      className="relative w-full h-screen bg-center bg-cover bg-red-300 flex flex-col justify-end"
      style={{
        backgroundImage: "url('https://www.agoda.com/wp-content/uploads/2024/06/petronas-tower-kuala-lumpur.jpg')",
        opacity: 1,
        animation: 'expandCircle 1.5s ease-out forwards',
        WebkitClipPath: 'circle(0% at 50% 50%)',
        clipPath: 'circle(0% at 50% 50%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/70"></div>
      <div className="relative grid space-y-6 py-4 text-left mx-20 p-4 bottom-12 ">
      <p className="text-white ">About Us</p>
      <p className="text-white font-semibold text-3xl">MISA Traning Cente</p>
      <p className="text-white font-medium text-lg">Our Objective is to be the main single hub of the academy in shaping the future of the workforce in Malaysia.</p>
      </div>
    </div>
    </section>
    <section>
      <div className="mx-20 flex relative">
      <div className="relative w-1/2 h-screen bottom-10 p-6" style={{backgroundColor: '#00a19c',}}>
      <p className="text-xl font-semibold">Our Prograssion</p>
      <p className="">Petroliam Nasional Berhad (PETRONAS) is a global energy company committed to producing and delivering energy and solutions needed to advance society responsibly and sustainably.
      As Malaysia’s national oil and gas company, we safeguard and manage the nation’s hydrocarbon resources. Our aim is to maximise value through our integrated business model to meet the energy needs of the nation and our customers across the globe. Our portfolio includes oil and gas, petrochemicals, petroleum products, as well as a range of cleaner energy solutions.
      Ensuring sustainable practices across our operations is important to how we conduct our business. Our goal is to achieve net zero carbon emissions by 2050, and we strive to be a valuable partner to our stakeholders in transitioning to a lower carbon energy future in a just and responsible manner.</p>
      </div>
      <div className="bg-red-300">MISA TERDIRI DARIPADA DUA KONSEP . KONSEP PERTAMA ADALAH PENEMPATAN KERJA & LATIHAN . MANAKALA, KONSEP KEDUA PULA ADALAH LATIHAN & PENEMPATAN  KERJA</div>
      </div>
      
    </section>
    </>
  );
}

