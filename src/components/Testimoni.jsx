
'use client'
import React from 'react'
import Image from "next/image"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Fullscreen } from 'lucide-react';

const card = [
    {
        name: "Azizul", 
        program: "Rigger Fitter",
        image: "/testimoni/azizul.jpg",
        quote: "Sebelum ni saya tak tahu hala tuju lepas SPM. Tapi lepas join MISA, saya terus dapat kerja dalam Oil & Gas. Terbaik!"
      },
      {
      name: "AlifFikra",
      program: "Rigger Fitter",
      image: "/testimoni/alifFikra.jpg",
      quote: "MISA bukan sekadar kursus ia platform untuk ubah hidup. Kini saya bekerja di tapak projek Pengerang, gaji stabil dan masa depan cerah"
    },
    {
      name: "NazirulRahimi",
      program: "Rigger Fitter",
      image: "/testimoni/nazirulRahimi.jpg",
      quote: "Saya rasa bertuah sertai MISA. Dari tak ada pengalaman langsung, sekarang saya dah jadi Rigger di industri O&G. Terima kasih MISA!"
    },
    {
      name: "FarisIkhwan",
      program: "Rigger Fitter",
      image: "/testimoni/farisIkhwan.jpg",
      quote: "Dengan bimbingan dari MISA, saya belajar dari zero hingga boleh kerja. Sekarang saya dah bantu keluarga sendiri. Program yang sangat berbaloi."
    },
    {
      name: "ZakiYusuf",
      program: "Rigger Fitter",
      image: "/testimoni/zakiYusuf.jpg",
      quote: "MISA membuka peluang kerjaya yang saya tak pernah bayangkan. Saya bangga jadi sebahagian daripada alumni MISA!"
    },
    {
      name: "NurashimboiAzamboi",
      program: "Rigger Fitter",
      image: "/testimoni/nurashimboi.jpg",
      quote: "Program Rigger Fitter di MISA sangat hands-on dan mudah faham. Pensyarah pun supportive. Sekarang saya dah kerja tetap di Pengerang"
    },
  ];

const testimoni = () => {
  return (
    <>
    <div className="w-full overflow-hidden group py-2">
    <div className="flex animate-marquee group-hover:paused gap-8">
      {card.map((item, index) => (
        <div key={index} className="p-2 rounded drop-shadow-md min-w-[600px] bg-slate-200 flex items-center ">
          <div className="flex items-center ">
            <Image
              className="w-[300px] h-[200px] rounded-sm object-cover"
              src={item.image}
              alt={item.name}
              width={400}
              height={64}/>
            <div className="grid p-3">
                <h3 className="font-bold mt-2">{item.name} - {item.program}</h3>
                <p className="text-sm mt-2">{item.quote}</p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
    </div>



        
        
    </>
  )
}

export default testimoni