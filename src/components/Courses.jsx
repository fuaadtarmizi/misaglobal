'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const serviceItems = [
  // { id: 1, 
  //   letter: '549', 
  //   text: 'Renewable Energy Technician Certificate',
  //   image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 2,
    letter: '237',
    text: 'Certificate in Basic Scaffolding Erector in Oil & Gas Industry',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 3,
    letter: '985',
    text: 'Certificate in Fibre Optic Tecnician',
    image:'https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d8cb9d78fc03d90f8e7fe0c_qualifications.jpg'},

  { id: 4,
    letter: '512',
    text: 'Certificate in Non-Destructive Testing',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 5,
    letter: '672',
    text: 'Sijil Profesional Rigger Fitter',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 6,
    letter: '634',
    text: 'Certificate in Fibre Optic Splicer Tecnician',
    image:'https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d8cb9d78fc03d90f8e7fe0c_qualifications.jpg'},

  // { id: 7,
  //   letter: '902',
  //   text: 'Certificate in Autorized Gas Tester Entry Supervisor',
  //   image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  // { id: 8,
  //   letter:'871',
  //   text: 'Certificate in Protective Coating Technician', 
  //   image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 9,
    letter: '667',
    text: 'Certificate in Site Safety Supervisor',
    image: 'https://assets.nst.com.my/images/articles/21xxbangla1_1682663476.jpg'},

  { id: 10,
    letter: '944',
    text: 'Certificate in Pipe Gas Insulation', 
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 11,
    letter: '783',
    text: 'Drone Pilot Programme - Basic Remote Pilot of Certificate',
    image: 'https://gaotek.com/wp-content/uploads/elementor/thumbs/Applications-of-Payload-Drones-in-the-Environmental-Monitoring-IndustryBy-Sibgha-qsy4fyhsyzmvu9tl2heexk23r75avx6rkn13q8pyc0.jpg'},

  { id: 12,
    letter: '689',
    text: 'Certificate in Kursus Kelasi Katering',
    image: 'https://www.acclaindia.com/success-stories/wp-content/uploads/2019/03/Galley_prep.jpg'},

  { id: 13,
    letter: '487',
    text: 'Certificate in Kursus Kulinari',
    image: 'https://www.acclaindia.com/success-stories/wp-content/uploads/2019/03/Galley_prep.jpg'},

  { id: 14,
    letter: '837',
    text: 'Certificate in Kelasi Geladak Enjin / Deck Rating',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjT5coLkXMnDSSEjokCpExIgLImLbCE87IMSZs7hpMqiTeRI88kdzH4_D5rIJal4LiliNfa8xxKLAOQu8dWT3P3KOilJ0fY3mfJ_3jErG-91sBbnNM23HxvsGQeCI3jLnPm26uYG_luh0/s1600/2013-04-06_200108.png'},

  { id: 15,
    letter: '441',
    text: 'Certificate in Kelasi Enjin Kapal / Engine Rating',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjT5coLkXMnDSSEjokCpExIgLImLbCE87IMSZs7hpMqiTeRI88kdzH4_D5rIJal4LiliNfa8xxKLAOQu8dWT3P3KOilJ0fY3mfJ_3jErG-91sBbnNM23HxvsGQeCI3jLnPm26uYG_luh0/s1600/2013-04-06_200108.png'},


];

const DynamicServices = () => {
  const firstItems = serviceItems.slice(0, serviceItems.length - 0); //"-2" UBAH KALAU ADE TAMBAH COURSE
  // const lastTwoItems = serviceItems.slice(-1); //"-2" UBAH KALAU ADE TAMBAH COURSE

  return (
    <>
    <div className="bg-gray-700 w-full">
    <div className="container py-12 px-6 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl space-y-2">
          <span className="text-yellow-500 font-extrabold">MISA CERTIFICATE</span>
        </h1>
      </div>
      <div className="relative">
        {/* First 9 cards in a 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {firstItems.map((item) => (
            <div
              key={item.id}
              className="group rounded shadow-current p-2 shadow-2xl text-center duration-300 hover:-translate-y-1 hover:scale-100"
              data-index={item.id}
            >
              <div 
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overlay: 1,
              }}
               className="p-4 h-[130px] flex flex-col justify-between rounded">
                <p className="text-md text-white whitespace-pre-line">{item.text}</p>
                <div className="flex justify-between items-end">
                  <Link href={`/Detail/${item.id}`} className="text-white text-sm p-1 px-4 rounded font-bold bg-gradient-to-r mt-3 from-yellow-500 to-yellow-400 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">Grab Certificate Now</Link>
                  <p className="text-xs text-white flex justify-end ">👤{item.letter}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        {/* Last 2 items centered */}
        {/* <div className=" lg:flex justify-center gap-6">
          {lastTwoItems.map((subItem) => (
            <div
              key={subItem.id}
              className="group rounded p-2 shadow-current shadow-md text-center duration-300 hover:-translate-y-1 hover:scale-100 w-full lg:w-[480px] h-[140px] "
              data-index={subItem.id}
            >
            <div style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${subItem.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overlay: 1,
            }}
            className="p-4 h-full flex flex-col justify-between rounded">
              <p className="text-sm text-white whitespace-pre-line">{subItem.text}</p>
              <div className="flex justify-between  items-end">
                <Link href={`/Detail/${subItem.id}`} className="text-white text-sm p-1 px-4 rounded font-bold bg-gradient-to-r mt-3 from-yellow-500 to-yellow-400 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">Get Certificate Now</Link>
                <p className="text-xs text-white flex justify-end ">👤{subItem.letter}</p>
              </div>
            </div>
          </div>
          ))}
        </div> */}
      </div>
    </div>
    </div>
    </>
  );
};

export default DynamicServices;
