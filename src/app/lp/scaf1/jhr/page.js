'use client'
import React from 'react'
import Image from 'next/image'
import FormblastingScaffoldingJohor from '@/components/lp/Scaffoldingg/FormScaffolding(bdc)/FormblastingScaffoldingJohor'
import ScaffoldingContent from '@/components/lp/Scaffoldingg/ScaffoldingContent'
import Helpbutton from '@/components/lp/Scaffoldingg/Helpbutton'

function page() {
  return (
    <div>
      <div className="px-6">
        <ScaffoldingContent/>
        <section>
        <div className="">
          <FormblastingScaffoldingJohor/>
        </div>
      </section>
      <div className=" py-2 md:py-4 lg:py-8"></div>
      <section>
        <div className=" flex justify-center">
        <Image
            className="w-full"
            src="/misa1.jpg"
            alt="misa1"
            width="600"
            height="112"
            style={{objectFit:"contain"}}/>
          </div>
      </section>
      <div className="py-2 md:py-4 lg:py-8"></div>
      <Helpbutton/>
      
      <div className="py-2 md:py-4 lg:py-8"></div>
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
      </div>
      </div>
       
  )
}

export default page