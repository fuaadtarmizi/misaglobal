'use client'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className="">
      <div className="bg-slate-200 flex justify-center">
      <Image
          className=""
          src="/lpmisa.jpg"
          alt="lpmisa"
          width="600"
          height="112"
          style={{objectFit:"contain"}}/>
        </div>
    </div>
  )
}

export default page


