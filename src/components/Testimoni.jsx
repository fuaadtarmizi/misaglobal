
'use client'
import React from 'react'
import Image from "next/image"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Fullscreen } from 'lucide-react';

const card = [
    // {
    //   name: "Naufal Raziman",
    //   program: "Scaffolding",
    //   image: "/testimoni/naufal.png",
    //   quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    // },
    {
        name: "Azizul",
        program: "Rigger Fitter",
        image: "/testimoni/azizul.jpg",
        quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang"
      },
      {
      name: "Alif Fikra",
      program: "Rigger Fitter",
      image: "/testimoni/alif-fikra.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
      name: "Nazirul Rahimi",
      program: "Rigger Fitter",
      image: "/testimoni/nazirul-rahimi.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
      name: "Faris Ikhwan",
      program: "Rigger Fitter",
      image: "/testimoni/faris-ikhwan.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
      name: "Zaki Yusuf",
      program: "Rigger Fitter",
      image: "/testimoni/zaki-yusuf.jpg",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
      name: "Nurashimboi Azamboi",
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
        <div key={index} className="p-4 rounded drop-shadow-md min-w-[600px] bg-slate-200 flex items-center ">
          <div className="flex items-center ">
            <Image
              className="min-w-[300px] rounded-sm object-contain"
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

        {/* <section1 className="px-28">
        <div className="pt-8">
            <div className="flex justify-center py-8">
        <div className="group w-3/4 h-full grid justify-center ">
          <span className="text-slate-700 font-bold text-4xl bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          TESTIMONI</span>
      </div>
      </div>
            </div>
            <div className="pt-8">
            <div className="flex justify-center py-8">
        <div className="group w-3/4 h-full grid justify-center ">
          <span className="text-slate-700 font-bold text-4xl bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          ALUMNI</span>
      </div>
      </div>
            </div>

            


        </section1> */}
        
        </div>



        
        
    </>
  )
}

export default testimoni