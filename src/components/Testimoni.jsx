
'use client'
import React from 'react'
import Image from "next/image"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Fullscreen } from 'lucide-react';

const card = [
    {
        name: "Azizul", 
        program: "Rigger Fitter",
        image: "/testimoni/azizul.jpg",
        quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang"
      },
      {
      name: "AlifFikra",
      program: "Rigger Fitter",
      image: "/testimoni/alifFikra.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
      name: "NazirulRahimi",
      program: "Rigger Fitter",
      image: "/testimoni/nazirulRahimi.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
      name: "FarisIkhwan",
      program: "Rigger Fitter",
      image: "/testimoni/farisIkhwan.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
      name: "ZakiYusuf",
      program: "Rigger Fitter",
      image: "/testimoni/zakiYusuf.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
      name: "NurashimboiAzamboi",
      program: "Rigger Fitter",
      image: "/testimoni/nurashimboi.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
  ];

const testimoni = () => {
  return (
    <>
    <div className="w-full overflow-hidden group py-2">
    <div className="flex animate-marquee group-hover:paused gap-8">
      {card.map((item, index) => (
        <div key={index} className="p-2 rounded drop-shadow-md min-w-[600px] bg-slate-200 flex items-center ">
          <div className="flex items-center ">
            <Image
              className="w-[300px] h-[200px] rounded-sm object-cover"
              src={item.image}
              alt={item.name}
              width={400}
              height={64}/>
            <div className="grid p-3">
                <h3 className="font-bold mt-2">{item.name} - {item.program}</h3>
                <p className="text-sm mt-2">{item.quote}</p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
    </div>



        
        
    </>
  )
}

export default testimoni