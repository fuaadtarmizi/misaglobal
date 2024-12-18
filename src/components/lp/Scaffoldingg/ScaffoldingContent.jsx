'use client'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div>
      <div className="">
      <section>
      <div className="py-4 pt-8">
        <div className="border-b border-black border-1"></div>
      </div>
      <div className="space-y-1">
        <p className="font-bold text-LG lg:text-2xl text-center">PEKERJAAN TERSEDIA DALAM</p>
        <p className="font-bold text-2xl lg:text-3xl text-center text-blue-700">SEKTOR MINYAK DAN GAS MALAYSIA</p>
      </div>
      </section>
        <div className="" style={{ backgroundImage: 'url("/misabg.jpg")', backgroundSize: 'contain', backgroundPosition: 'center' }}>
      </div>
      <div className=" py-2 md:py-4 lg:py-8"></div>
      <section>
        <div className=" flex justify-center">
        <Image
            className=""
            src="/misalogo.png"
            alt="misalogo"
            width="600"
            height="112"
            style={{objectFit:"contain"}}/>
          </div>
      </section>
      <div className="bg-slate-200  md:py-4 lg:py-8"></div>
      
      
      
     
      
     
      
      </div>
      </div>
      
  )
}

export default page




{/* <div className="flex justify-center">
      <Image
          className=""
          src="/misaheader.png"
          alt="misaheader"
          width="600"
          height="80"
          style={{objectFit:"contain"}}/>
      </div>
      <div className=" py-2 md:py-3 lg:py-6"></div>
      <div className=" flex justify-center py-2">
        <Image
            className=""
            src="/misalogo.png"
            alt="misalogo"
            width="600"
            height="112"
            style={{
              objectFit:"contain"}}/>
        </div>
      <div className=" py-2 md:py-3 lg:py-6"></div>
      <section>
        <div className="w-full p-2 ">
          <div className="flex justify-center  ">
            <h className="text-black font-extrabold text-2xl lg:text-5xl text-center">TEMUDUGA PEKERJAAN</h>
          </div>
        </div>
      </section>
      <section>
        <div className=" ">
          <div className="justify-center grid ">
            <p style={{color: '#0046AA', letterSpacing:'3.5px', fontFamily: '"Anton", Sans-serif', fontSize: '52px', textAlign: 'center', lineHeight:'1'}}>SCAFFOLDING BASIC ERECTOR</p> 
            <h className="text-red-600 text-2xl lg:text-4xl font-extrabold text-center py-4">INDUSTRI OIL AND GAS</h>
          </div>
        </div>
      </section> */}

      // <section>
      //   <div className=" p-2 py-6">
      //     <div className="flex justify-center p-2">
      //       <p>Scafolding eroctor adalah penting untuk pembinaan dan penyelenggaraan loji minyak, gas dan kimia. Mereka menyediakan akses selamat ke kawasan yang sukar dicapai seperti platform minyak luar pesisir atau tiang pembetulan di kilang penapisan, di mana tugas seperti mengecat, penebat atau kerja pemasangan dijalankan.</p>
      //     </div>
      //   </div>
      // </section>

      {/* <section className="">
          <div className="m lg:px-10 p-6 flex justify-center bg-black">
            <div className="">
            <video
            controls 
            autoPlay  // Add this attribute for autoplay
            className=""
          >
            <source src="/videoscaffolding.mp4" type="video/mp4" />
          </video> 
            </div>
          </div>
      </section> */}

    //   <div className=" flex justify-stretch">
    //   <p className="text-base lg:text-5xl font-bold text-center">SEBAGAI SCAFFOLDING ERECTOR DI SEKTOR MINYAK & GAS SELURUH MALAYSIA</p>
    // </div>