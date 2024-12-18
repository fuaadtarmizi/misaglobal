'use client'
import React from 'react'
import Image from 'next/image'


function Syarat() {
  return (
    <>
      <section>
      <div className="py-4"></div>
      <div className="bg-slate-800 text-white py-4 rounded">
      <p className="pb-4 text-2xl font-bold text-center">Syarat Kelayakan</p>
        <div className="text-lg space-y-2">
        <div className="flex px-2 gap-3">
          <svg className="flex-shrink-0" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="25" rx="4" fill="green" /><path d="M7 13L11 17L18 10" stroke="white" stroke-width="2" /></svg>
          <p>Berumur 18 tahun - 35 tahun</p>
        </div>
        <div className="flex px-2 gap-3">
          <svg className="flex-shrink-0" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="25" rx="4" fill="green" /><path d="M7 13L11 17L18 10" stroke="white" stroke-width="2" /></svg>
          <p>Sihat tubuh badan</p>
        </div>
        <div className="flex px-2 gap-3">
          <svg className="flex-shrink-0" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="25" rx="4" fill="green" /><path d="M7 13L11 17L18 10" stroke="white" stroke-width="2" /></svg>
          <p>Tiada penyalahgunaan dadah</p>
        </div>
        <div className="flex px-2 gap-3">
          <svg className="flex-shrink-0" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="25" rx="4" fill="green" /><path d="M7 13L11 17L18 10" stroke="white" stroke-width="2" /></svg>
          <p>Lelaki - Pandai membaca, mengira, menulis, minat & mampu</p>
        </div>
      </div>
      </div>
    <div className="py-4"></div>
      </section>
      <section>
      <div className=" grid justify-center">
        <h className="font-extrabold text-xl lg:text-4xl text-center">LATIHAN PROFESIONAL</h>
        <h className="font-bold text-2xl lg:text-3xl text-center text-blue-700 py-2">15HARI BESERTA SIJIL CIDB / OGSP / BSE</h>
        <h className="font-semibold text-center text-lg lg:text-3xl">Makan (3x sehari) & Penginapan disediakan</h>
        <h className="font-semibold text-center text-lg lg:text-3xl">PERCUMA basic uniform PPE, Helmet keselamatan Kasut Keselamatan dan google keselamatan</h>
        </div>
      </section>
      <section>
      <div className="py-4 pt-8">
        <div className="border-b border-black border-1"></div>
      </div>
      <div className=" bg-red-600 flex justify-center p-4 ">
        <h className="text-lg lg:text-4xl font-bold text-white">KAMI PERLUKAN ANDA SEKARANG</h>
      </div>
        <div className="space-y-4 ">
          <p className="font-extrabold text-3xl lg:text-4xl text-center text-red-700">TERHAD KEPADA 27 KEKOSONGAN</p>
        </div>
      </section>
      <section>
      <div className=" flex justify-center">
        <Image
            className="w-full"
            src="/misa1.jpg"
            alt="misa4"
            width="600"
            height="80"
            style={{objectFit:"contain",}}/>
        </div>
      </section>
      

      
    </>
  )
}

export default Syarat