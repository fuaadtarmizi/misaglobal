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
        backgroundImage: "url('https://ww3.rics.org/content/dam/rics/images/modus/built-environment/february-2022/petronas-towers/Modus_feb22_petronastowers_closeup.jpg')",
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
      <div className=" lg:flex lg:mx-20 relative flex-row-reverse">
        <div className=" w-full flex justify-center lg:items-center bg-[#00b3b3]">
        <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]"
        style={{
        backgroundImage: "url('https://assets.isu.pub/document-structure/240624100038-a2905e49c197031183464b1730a91562/v1/b9cb8fa88d565614cf46a32a2e5ea2bd.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // width: "500px",
        // height: "500px", 
        borderRadius: "50%",
        overflow: "hidden"}}
      ></div>
      </div>
      <div className="lg:relative w-full  h-screen bottom-10 p-6 lg:pt-10 bg-gradient-to-t from-[#3a4372] to-[#00b3b3]">
      <p className="text-xl font-semibold text-white py-6">About MISA</p>
      <p className="text-white py-1">MISA (Malaysian Industrial Skills Academy) ialah sebuah platform latihan kemahiran industri yang komited dalam membentuk tenaga kerja mahir untuk memenuhi keperluan sektor Oil & Gas, pembinaan, logistik, dan industri berat lain di Malaysia. Sebagai sebuah pusat latihan yang memfokuskan kepada kemahiran teknikal dan persijilan industri, MISA memainkan peranan penting dalam menyediakan laluan kerjaya yang jelas dan berkualiti untuk belia Malaysia.</p>
      <p className="text-white py-1">Matlamat kami adalah untuk memaksimumkan nilai kebolehpasaran graduan melalui program latihan berstruktur, pensijilan yang diiktiraf industri, serta penempatan kerja bersama rakan strategik di lapangan. Portfolio latihan kami meliputi bidang seperti Rigger Fitter, Scaffolding, Safety, Welding, dan pelbagai kemahiran teknikal lain yang kritikal dalam sektor pembangunan negara.</p>
      <p className="text-white py-1">Kami percaya bahawa pembangunan kemahiran mesti selari dengan amalan mampan dan etika kerja yang bertanggungjawab. MISA komited untuk menjadi rakan industri yang dipercayai dalam membekalkan tenaga kerja berdaya saing dan menyokong agenda pembangunan negara ke arah masa depan yang lebih mampan dan inklusif.</p>
      </div>
      </div>
    </section>
    <section>
      <div >
        <div className="bg-red-300 w-full h-[300px] lg:h-[800px]"
        style={{
          backgroundImage: "url('https://allianceenergycorpe.com/wp-content/uploads/2022/12/HTJ_7302.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          // width: "100%",
          // height: "800px",
          overflow: "hidden"}}
      ></div>
      </div>
    </section>
    <section>
      <div className="lg:flex w-full lg:px-20">
      <div className=" w-full h-full  p-6 lg:py-20 lg:space-y-10 space-y-6 bg-[#00b3b3]">
        <div className="">
          <p className="text-2xl font-semibold text-white py-2">Our Statements</p>
          <p className="text-white ">These statements define PETRONAS as an organisation, guiding our corporate activities and policies, setting our course for the future..</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-white py-2">Statement of Purpose</p>
          <p className="text-white ">A progressive energy and solutions partner enriching lives for a sustainable future.</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-white py-2">Shared Values</p>
          <p className="text-white ">Our values are embedded in our culture as the backbone of our business conduct, reflecting our sense of duty and responsibility in upholding our commitment towards contributing to the well-being of peoples and nations wherever we operate.</p>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#3a4372] to-[#00b3b3] w-full lg:pt-10 flex items-center">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 ">
          <div className="w-full  flex p-6">
            <img className="w-[110px] h-[80px] invert brightness-0"
              src="https://www.petronas.com/sites/default/files/inline-images/about-loyalty.svg"
              alt="Loyalty Illustration" 
            />
            <div className="space-y-3  px-5">
              <p className="text-xl font-bold text-white">Loyalty</p>
              <p className="text-white">Setia kepada misi latihan dan pembangunan negara.</p>
            </div>
          </div>
          <div className="w-full flex p-6">
            <img className="w-[110px] h-[80px] invert brightness-0"
              src="https://www.petronas.com/sites/default/files/inline-images/about-integrity.svg"
              alt="Loyalty Illustration" 
            />
            <div className="space-y-3 px-5">
              <p className="text-xl font-bold text-white">Integrity</p>
              <p className="text-white">Jujur, amanah dan di jamin pekerjaan</p>
            </div>
          </div>
          <div className="w-full flex p-6">
            <img className="w-[110px] h-[80px] invert brightness-0"
              src="https://www.petronas.com/sites/default/files/inline-images/about-professionalism.svg"
              alt="Loyalty Illustration" 
            />
            <div className="space-y-3 min-w-[200px] px-5">
              <p className="text-xl font-bold text-white">Professionalism</p>
              <p className="text-white">Cemerlang dalam kemahiran dan sikap.</p>
            </div>
          </div>
          <div className="w-full flex p-8">
            <img className="w-[110px] h-[80px] invert brightness-0"
              src="https://www.petronas.com/sites/default/files/inline-images/about-cohesiveness.svg"
              alt="Loyalty Illustration" 
              // style={{ width: '510px', height: 'auto' }} 
            />
            <div className="space-y-3 min-w-[200px] px-5">
              <p className="text-xl font-bold text-white">Cohesiveness</p>
              <p className="text-white">Bersatu, saling menghormati dan bekerjasama.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}

