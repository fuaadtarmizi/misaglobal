'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const serviceItems = [
  { id: 1, 
    letter: '54', 
    text: 'Renewable Energy Technician Certificate',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 2,
    letter: '23',
    text: 'Certificate in Basic Scaffolding Erector in Oil & Gas Industry',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 3,
    letter: '902',
    text: 'Certificate in Autorized Gas Tester Entry Supervisor',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 4,
    letter: '512',
    text: 'Certificate in Non-Destructive Radiographic Testing Level 2',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 5,
    letter: '783',
    text: 'Drone Pilot Programme - Basic Remote Pilot of Certificate',
    image: 'https://gaotek.com/wp-content/uploads/elementor/thumbs/Applications-of-Payload-Drones-in-the-Environmental-Monitoring-IndustryBy-Sibgha-qsy4fyhsyzmvu9tl2heexk23r75avx6rkn13q8pyc0.jpg'},

  { id: 6,
    letter: '634',
    text: 'Certificate in Fibre Optic Splicer Tecnician',
    image:'https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d8cb9d78fc03d90f8e7fe0c_qualifications.jpg'},

  { id: 7,
    letter: '985',
    text: 'Certificate in Fibre Optic Tecnician',
    image:'https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d8cb9d78fc03d90f8e7fe0c_qualifications.jpg'},

  { id: 8,
    letter:'871',
    text: 'Certificate in Protective Coating Technician', 
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'
  },
  { id: 9,
    letter: '667',
    text: 'Certificate in Site Safety Supervisor',
    image: 'https://assets.nst.com.my/images/articles/21xxbangla1_1682663476.jpg'},

  { id: 10,
    letter: '944',
    text: 'Sijil Profesional Pemasangan Paip Gas (Pipe Gas Insulation)', 
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},

  { id: 11,
    letter: '672',
    text: 'Sijil Profesional Rigger Fitter',
    image: 'https://www.offshore-technology.com/wp-content/uploads/sites/20/2020/10/Feature-Image-Top-ten-oil-and-gas-companies.jpg'},
];

const DynamicServices = () => {
  const firstItems = serviceItems.slice(0, serviceItems.length - 2);
  const lastTwoItems = serviceItems.slice(-2);

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
              className="bg-white shadow-2xl rounded text-center duration-300 hover:-translate-y-1 hover:scale-100"
              data-index={item.id}
            >
              <div 
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overlay: 1,
              }}
               className="p-4 h-full flex flex-col justify-between rounded">
                <p className="text-sm text-white whitespace-pre-line">{item.text}</p>
                <p className="text-xs text-white flex justify-end pt-6">👤{item.letter}</p>
                <Link 
                href={`/Detail/${item.id}`} className="text-white">More</Link>
              </div>
            </div>
          ))}
        </div>
        {/* Last 2 items centered */}
        <div className="col-span-3 flex justify-center gap-6">
          {lastTwoItems.map((subItem) => (
            <div
              key={subItem.id}
              className="bg-white shadow-lg rounded text-center duration-300 hover:-translate-y-1 hover:scale-100 w-[450px]"
              data-index={subItem.id}
            >
            <div style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${subItem.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overlay: 1,
            }}
            className="p-4 h-full flex flex-col justify-between">
              <p className="text-sm text-white whitespace-pre-line">{subItem.text}</p>
              <p className="text-xs text-white flex justify-end pt-6">👤{subItem.letter}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default DynamicServices;
