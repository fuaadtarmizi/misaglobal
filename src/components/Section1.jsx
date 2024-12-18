import React from 'react'


const info = [
  { id: 1, text: 'PLATFORM UNTUK KERJAYA DALAM INDUSTRI TEKNIKAL SEPERTI OIL & GAS, MARITIM, RENEWABLE ENERGY, AVIATION' },
  { id: 2, text: 'MENYEDIAKAN PELATIH LATIHAN TEKNIKAL YANG DIPERLUKAN UNTUK MENJADI PEKERJA KOMPITEN UNTUK BEKERJA DI INDUSTRI.' },
  { id: 3, text: 'MEMBANTU MENEMPATKAN PELATIH BEKERJA DI INDUSTRI YANG DIPILIH' },
]



function Section1() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:py-20 py-8 " style={{backgroundImage:"url('https://img.freepik.com/premium-photo/offshore-oil-rig-platform-with-machinery-sunset-sea_994764-150871.jpg')", backgroundSize: "cover", backgroundPosition: "center",}}>
        <div class="grid grid-rows-3 lg:grid-flow-col gap-4">

        <div className="row-span-3 relative grid justify-center items-center">
        <div className="lg:hidden md:hidden absolute w-[300px] h-[300px] rounded-full bg-white opacity-40 top-1/2 left-1/2"></div>
          <div className="row-span-3 bg-blue-950 w-[280px] h-[280px] rounded-full grid justify-center items-center z-10">
            <div className="grid">
              <p1 className="font-extrabold text-2xl text-white">APA ITU</p1>
              <p2 className="font-extrabold text-7xl text-white">MISA?</p2>
            </div>
          </div>
        </div>

          <div class="col-span-2 bg-slate-200 rounded">
          {info.filter(item => item.id === 1).map((item) => ( 
            <div key={item.id} data-index={item.id} className="row-span-3">
              <div className="p-3">
                <p1>{item.text}</p1>
              </div>
            </div>                    
          ))}
          </div>
          <div class="col-span-2 bg-slate-200 rounded">
          {info.filter(item => item.id === 2).map((item) => ( 
            <div key={item.id} data-index={item.id} className="row-span-3">
              <div className="p-3">
                <p1>{item.text}</p1>
              </div>
            </div>                    
          ))}
          </div>
          <div class="col-span-2 bg-slate-200 rounded">
          {info.filter(item => item.id === 3).map((item) => ( 
            <div key={item.id} data-index={item.id} className="row-span-3">
              <div className="p-3">
                <p1>{item.text}</p1>
              </div>
            </div>                    
          ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section1


