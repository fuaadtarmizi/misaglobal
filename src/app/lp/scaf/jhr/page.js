'use client'
import React from 'react'
import Image from 'next/image'
import FormblastingScaffoldingJohor from '@/components/lp/Scaffoldingg/FormScaffolding/FormblastingScaffoldingJohor'
import ScaffoldingContent from '@/components/lp/Scaffoldingg/ScaffoldingContent'

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
      <section id="target-section">
        <div className="w-full bg-slate-300 p-4 rounded-md">
          <div className=" grid justify-center">
            <div className="p-2">
              <h className="font-semibold text-2xl">PERTANYAAN LANJUT:</h>
            </div>
            <div className="flex space-x-2">
            <div className="" > 
              <svg width="35" height="35" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
            <a href="https://wa.me/+601115403660" className="bg-green-600 hover:bg-green-400 motion-safe:transition-all motion-safe:duration-700 ease-in-out flex items-center justify-center px-4 w-full border-2 border-black rounded-full">
              <h className="text-lg font-semibold">Whatsapp (En.Sayyid)</h>
            </a>
          </div>
          <div className="flex space-x-2 pt-4">
            <div className="" > 
            <svg width="35" height="35" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10.3285 1.13607C10.1332 0.940809 9.81662 0.940808 9.62136 1.13607C9.42609 1.33133 9.42609 1.64792 9.62136 1.84318L10.2744 2.49619L5.42563 6.13274L4.31805 5.02516C4.12279 4.8299 3.80621 4.8299 3.61095 5.02516C3.41569 5.22042 3.41569 5.537 3.61095 5.73226L5.02516 7.14648L6.08582 8.20714L2.81545 11.4775C2.62019 11.6728 2.62019 11.9894 2.81545 12.1846C3.01072 12.3799 3.3273 12.3799 3.52256 12.1846L6.79293 8.91425L7.85359 9.97491L9.2678 11.3891C9.46306 11.5844 9.77965 11.5844 9.97491 11.3891C10.1702 11.1939 10.1702 10.8773 9.97491 10.682L8.86733 9.57443L12.5039 4.7257L13.1569 5.37871C13.3522 5.57397 13.6687 5.57397 13.864 5.37871C14.0593 5.18345 14.0593 4.86687 13.864 4.6716L12.8033 3.61094L11.3891 2.19673L10.3285 1.13607ZM6.13992 6.84702L10.9887 3.21047L11.7896 4.01142L8.15305 8.86015L6.13992 6.84702Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
            <a href="tel:+601115403660" className="bg-red-600 hover:bg-red-400 motion-safe:transition-all motion-safe:duration-700 ease-in-out flex items-center justify-center px-4 w-full border-2 border-black rounded-full">
              <h className="text-lg font-semibold">Hotline (En.Sayyid)</h>
            </a>
          </div>
        </div>      
        </div>
      </section>
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