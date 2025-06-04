import React from 'react'
import Image from "next/image"


function Intro() {
  return (
    <>
    {/* <div className="py-2 lg:py-10 md:[height:80px]"></div> */}
    <div className="py-8 bg-slate-100">
      <div className="w-full flex justify-center py-2">
          <span className="lg:text-4xl font text-lg text-blue-950 font-bold text-center">THE <span className="text-yellow-600">YEG ACADEMY</span> DIFFERENCE</span>
        </div>
        <div className="w-full h-full grid lg:grid-cols-12 gap-2 md:col-span-2 py-2 p-2 bg-slate-100">
          <div className="flex justify-center w-full h-full mx-auto col-span-12 md:col-span-6 lg:col-span-6 md:order-2">
            <Image
              src="/home/RakyatMisa.jpg"
              alt="alumni"
              width={600}
              height={10}
              style={{objectFit:"contain"}}/>
          </div>
          <div className="w-auto h-full grid mx-9 lg:mx-auto md:mx-16 col-span-12 md:col-span-6 gap-6 lg:col-span-5 md:order-3 pl-4 items-center">   
            <div className="flex space-x-8 h-full justify-start">
            
            </div>
            <div className="w-full h-full space-y-3  grid justify-center">
              <p className=" font-normal text-md text-slate-700 "><a className="border-b-2 border-yellow-600 font-bold" href="/">Misa Academy</a> merupakan sebuah organisasi pendidikan di Malaysia yang menawarkan program pembelajaran dan pembangunan kerjaya yang selari dengan keperluan semasa pasaran kerja. Seiring dengan itu, MISA Academy komited untuk memahami kekuatan, nilai dan keperluan unik setiap pelajar, di samping menggalakkan penglibatan ahli keluarga dalam proses perancangan pendidikan mereka.</p>
              <p className="text-slate-700">Bagi memastikan kualiti pendidikan yang terbaik dapat diberikan kepada setiap pelajar dan calon, MISA Academy telah memperkukuhkan kerjasama strategik bersama pelbagai institusi profesional seperti Ranaco Marine Sdn Bhd, , Ranaco Marine Sdn Bhd, Ranaco Marine Sdn Bhd dan Ranaco Marine Sdn Bhd</p>
            </div>
            <div className=" flex justify-between ">
              <Image
              src="/home/malayfounding.svg"
              alt="malayfounding"
              width="180"
              height="00"
              style={{
                objectFit:"contain",
              }}
            />
            <Image
            className="hidden lg:block"
              src="/home/malaysia.svg"
              alt="malaysia"
              width="180"
              height="200"
              style={{objectFit:"contain",}}
            /> 
            </div>  
          </div>  
        </div>
      </div>
    </>
    
  )
}

export default Intro