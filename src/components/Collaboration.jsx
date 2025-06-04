/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react'
import Image from "next/image"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


 const logo = [
  {
    gambar: "/Collabration/sirim.png",
    name: "logo_sirim",
    width: 70,
  },
  {
    gambar: "/Collabration/logopelita.svg",
    name: "logo_sirim",
    width: 95,
  },
  {
    gambar: "/Collabration/ranaco.png",
    name: "logo_sirim",
    width: 80,
  },
  {
    gambar: "/Collabration/sirim_academy.png",
    name: "logo_sirim",
    width: 140,
  },
  {
    gambar: "/Collabration/logo_meatech.png",
    name: "logo_sirim",
    width: 190,
  },
  {
    gambar: "/Collabration/src_global.png",
    name: "logo_sirim",
    width: 105,
  },
    
  ]


function Collaboration() {

  return (
    <>
    {/* <div className="py-2 lg:py-10 md:[height:80px]"></div> */}
    <div className="relative">
    <div className="w-full absolute bottom-0 px-24 hidden lg:block ">
      
    <div className="w-full h-full bg-white rounded grid justify-center shadow-2xl space-x-16">
      <div className="p-3 text-gray-400 border-spacing-1.5 flex justify-center">
        <div className="w-full max-w-[150px] h-px bg-gray-300 mt-2.5 mr-2" />
        <p className="text-gray-400 whitespace-nowrap text-sm">Our Top Collaboration</p>
        <div className="w-full max-w-[150px] h-px bg-gray-300 mt-2.5 ml-2"/>
      </div>
      <div className=" flex space-x-14 justify-center pb-2 items-center">
        {logo.map((item, index) => (
          <div key={index}>
            <Image 
            className="rounded"
            src={item.gambar}
            alt={item.name}
            width={item.width}
            height={10}
            />
          </div>
        ))}
      </div>
      
    </div>
    </div>
    </div>
    <div>
      <div className="lg:hidden p-3 text-gray-400 border-spacing-1.5 flex justify-center">
        <div className="w-full max-w-[150px] h-px bg-gray-300 mt-2.5 mr-2" />
        <p className="text-gray-400 whitespace-nowrap text-sm">Our Top Collaboration</p>
        <div className="w-full max-w-[150px] h-px bg-gray-300 mt-2.5 ml-2"/>
      </div>
      <div className="lg:hidden w-full flex animate-marquee group-hover:paused gap-4 md:gap-8">
        {logo.map((item, index) => (
          <div key={index} className="p-2 rounded drop-shadow-md flex items-center ">
            <div className="flex items-center ">
              <Image
                className="rounded-sm"
                src={item.gambar}
                alt={item.name}
                width={90}
                height={10}/>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  )
}

export default Collaboration


// import React from 'react';
// import Image from 'next/image';

// function Collabration() {
//   return (
//     <div className="relative w-full">
//       {/* Blinking Light Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-900 rounded-md blur-lg animate-pulse"></div>

//       {/* Logos Section */}
//       <section className="w-full absolute bottom-16 px-24 hidden lg:block">
//         <div className="w-full h-full bg-white rounded-md flex justify-center shadow-2xl space-x-16">
//           <div className="flex items-center">
//             <Image
//               src="/collabration/iuclogo.png"
//               width={160}
//               height={200}
//               style={{
//                 objectFit: 'contain',
//               }}
//             />
//           </div>
//           <div className="flex items-center">
//             <Image
//               src="/collabration/meatech2logo.svg"
//               alt="meatech2logo"
//               width={230}
//               height={200}
//               style={{
//                 objectFit: 'contain',
//               }}
//             />
//           </div>
//           <div className="flex items-center">
//             <Image
//               src="/collabration/mahsalogo.svg"
//               alt="mahsalogo"
//               width={180}
//               height={200}
//               style={{
//                 objectFit: 'contain',
//               }}
//             />
//           </div>
//           <div className="flex items-center">
//             <Image
//               src="/collabration/logoamtc.svg"
//               alt="logoamtc"
//               width={180}
//               height={200}
//               style={{
//                 objectFit: 'contain',
//               }}
//             />
//           </div>
//           <div className="flex items-center">
//             <Image
//               src="/collabration/meatechlogo.svg"
//               alt="meatechlogo"
//               width={120}
//               height={200}
//               style={{
//                 objectFit: 'contain',
//               }}
//             />
//           </div>
//           <div className="flex items-center">
//             <Image
//               src="/collabration/logopelita.svg"
//               alt="logopelita"
//               width={90}
//               height={200}
//               style={{
//                 objectFit: 'contain',
//               }}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Collabration;
