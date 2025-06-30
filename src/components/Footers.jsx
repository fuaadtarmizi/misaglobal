import React from 'react'
import Image from "next/image"


function footer() {
  return (
    <div>
    <div style={{ backgroundImage: "url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg')", backgroundSize:"cover", backgroundPosition: 'center',  }}>
      <a className="flex justify-center" href="/">
    <Image
      className="" 
      src="/home/misalogo2.png"
      alt="misalogo2"
      width="260"
      height="10"
      style={{objectFit:"contain"}}/>
    </a>
      <div className=" grid justify-center py-2">
        <div className=" grid justify-center">
          <div className="grid text-center">
            <h className="font-bold">MISA GLOBAL WORK SDN BHD</h>
            <h>19 Jalan 4, Bandar Baru Salak Tinggi,43900 Sepang, Selangor</h>
          </div>
          <div className="grid py-2 text-center">
            <h>Working hours : 8.30am-5.30pm</h>
            <h>Email: info@misa-global.com</h>
          <div className="grid py-2 text-center">
            <h>Customer Service: +603-6143 5073</h>
          </div>
      </div>
      </div>
      <div className="flex space-x-4 justify-center">
        <a className="grid" href="/">
        <svg viewBox="0 0 1024 1024" fill="currentColor" height="30" width="30" > <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" /></svg>
        </a>
        <a className="grid " href="https://www.instagram.com/misacademy.official/"> 
        <svg viewBox="0 0 1024 1024" fill="currentColor" height="30" width="30" ><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" /></svg>
        </a>
        <a className="grid" href="https://www.tiktok.com/@misa.my">
        <svg viewBox="0 0 448 512" fill="currentColor" height="25" width="25"><path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z" /></svg>
        </a>
        <a className="grid" href="/">
        <svg viewBox="0 0 1024 1024" fill="currentColor" height="30" width="30"><path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" /></svg>
        </a>
        </div>
      </div>
      <div className="bg-black w-max-[300px]  text-white text-xs flex justify-center text-center p-4">
        <h>@ 2023 MISA (M) Sdn Bhd 1334979-W | Hak Cipta Terpelihara | Developed by PetalCode Labs</h>
      </div>
    </div>
    </div>
  )
}

export default footer