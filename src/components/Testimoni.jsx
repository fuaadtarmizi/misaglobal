
'use client'
import React from 'react'
import Image from "next/image"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Fullscreen } from 'lucide-react';

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640, 
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };

const card = [
    {
      name: "Naufal Raziman",
      program: "Scaffolding",
      image: "/testimoni/testimoni1.png",
      quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang. Terima Kasih MISA"
    },
    {
        name: "Naufal w",
        program: "Scaffolding",
        image: "/testimoni/testimoni1.png",
        quote: "Misa ini adalah program yang terbaik bagi saya. Sekarang saya bekerja sebagai scafolding di syarikat Oil & Gas Pengerang"
      }
  ];

const testimoni = () => {
  return (
    <>
    <div className="w-full overflow-hidden">
    <Slider {...settings}>
      {card.map((item, index) => (
        <div key={index} className="p-4 rounded-md drop-shadow-md gap-5">
          <div className="flex items-center bg-red-300">
            <Image
              className="w-[30%] rounded-sm object-contain"
              src={item.image}
              alt={item.name}
              width={1200}
              height={64}
            />
            <div className="grid">
                <h3 className="font-bold mt-2">{item.name} - {item.program}</h3>
                <p className=" mt-2">{item.quote}</p>
            </div>
            
          </div>
        </div>
      ))}
    </Slider>

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
        <div className="w-full flex justify-center"> 
        <Image
          id="image1"
            className="rounded-md"
            src="/bersamatun.svg"
            alt="bersamatun"
            width="1470"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        </div>
        
    </>
  )
}

export default testimoni