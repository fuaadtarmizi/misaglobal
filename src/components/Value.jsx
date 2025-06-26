import React from 'react'

const value = [
  {
    id:1,
    input: '2030',
    desc: 'Target pencapaian sebanyak 5000 pelatih yang dapat membantu pelatih kerja di industri Oil & Gas'
  },
  {
    id:2,
    input: '70%',
    desc: '70% pelajar berjaya mendapatkan penempatan kerja selepas tamat latihan industri dalam bidang Oil & Gas & Maritim (kerjasama industri).'
  },
  {
    id:3,
    input: '50%',
    desc: '50% graduan MISA diserap terus bekerja di syarikat rakan industri dalam tempoh 6 bulan selepas tamat kursus.'
  },
  {
    id:4,
    input: '2050',
    desc: 'Melahirkan tenaga kerja mahir bertaraf global untuk industri Oil & Gas, Maritim, dan Teknologi melalui pendidikan teknikal bersijil.'
  }
]


function Value() {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap px-2 gap-8">
        <div className="flex-1">
          <div className="flex flex-col justify-between bg-gradient-to-t from-[#1e3a8a] to-[#0e7490] flex-1 rounded-[8px] p-6">
            <h2 className="pb-5 font-normal text-3xl text-white">Creating Sustainable Value</h2>
            <p className="text-white">Melahirkan tenaga kerja teknikal mahir bagi menyokong pembangunan tenaga bersih, menjamin kemakmuran masa depan, kesejahteraan masyarakat dan pertumbuhan industri negara.</p>
            <div href="https://www.petronas.com/integrated-report-2023/" className="text-white font-bold py-3">
              → Read more
            </div>
            {value.map((misi) => (
              <div key={misi.id} className="flex gap-4 py-2 ">
              <div className="w-[15px] h-[15px] rounded-full bg-[#00a19c]"></div>
              <div className="text-white space-y-1 ">
                <h1 className="text-xl">{misi.input}</h1>
                <p className="">{misi.desc}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:block hidden flex-1">
          <div className="relative h-full min-h-[400px] rounded-[8px] overflow-hidden">
            <div
              className="absolute inset-0 bg-center bg-cover z-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://www.petrosync.com/blog/wp-content/uploads/2024/03/Top-10-offshore-drilling-companies-1200x900-1.png')",
              }}
            ></div>
            <div className="absolute inset-0 flex items-end p-6 text-white z-10">
              <p>
                Off the coast of Borneo, green turtles remain protected through marine
                conservation efforts. MISA supports initiatives to safeguard our
                natural heritage for future generations.
              </p>
            </div>
          </div>
        </div>


        
          

          
        </div>
    </div>
  )
}

export default Value