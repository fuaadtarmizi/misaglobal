import React from 'react'
import SliderIntro from '@/components/SliderIntro'
import Navbar from '@/components/Navbar'
import Maps from '@/components/Maps'


function Intro() {
  return (
    <>
    <div className="sticky top-0 z-50">
      <Navbar/>
    </div>
    <div className=" w-full">
      <SliderIntro/>
    </div>
    <div className="py-4"></div>
    <div>
      <Maps/>
    </div>
    </> 
  )
}

export default Intro