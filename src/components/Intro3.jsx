'use client';

import React from 'react';

const serviceItems = [
  { id: 1, letter: '54', text: 'Renewable Energy Technician Certificate'},
  { id: 2, letter: '23', text: 'Certificate in Basic Scaffolding Erector in Oil & Gas Industry'},
  { id: 3, letter: '102', text: 'Certificate in Autorized Gas Tester Entry Supervisor'},
  { id: 4, letter: '112', text: 'Certificate in Non-Destructive Radiographic Testing Level 2'},
  { id: 5, letter: '78', text: 'Drone Pilot Programme - Basic Remote Pilot of Certificate' },
  { id: 6, letter: '134', text: 'Certificate in Fibre Optic Splicer Tecnician'},
  { id: 7, letter: '98', text: 'Certificate in Fibre Optic Tecnician'},
  { id: 8, letter: '87', text: 'Certificate in Protective Coating Technician'},
  { id: 9, letter: '66', text: 'Certificate in Site Safety Supervisor'},
  { id: 10, letter: '94', text: 'Sijil Profesional Pemasangan Paip Gas (Pipe Gas Insulation)' },
  { id: 11, letter: '67', text: 'Sijil Profesional Rigger Fitter'},
];

const DynamicServices = () => {
  const firstItems = serviceItems.slice(0, serviceItems.length - 2);
  const lastTwoItems = serviceItems.slice(-2);

  return (
    <>
    <div className="bg-gray-800 w-full">
    <div className="container py-12 px-6 ">
      <div className="text-center mb-8">
        <h2 className="text-3xl space-y-2">
          <h1 className="text-yellow-600 font-extrabold">MISA Course</h1>
        </h2>
      </div>
      <div className="relative">
        {/* First 9 cards in a 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {firstItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded text-center duration-300 hover:-translate-y-1 hover:scale-100"
              data-index={item.id}
            >
              <div className="p-4 h-full flex flex-col justify-between">
                <p className="text-sm text-gray-700 whitespace-pre-line">{item.text}</p>
                <p className="text-xs flex justify-end pt-6">👤{item.letter}</p>
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
              <div className="p-4 h-full flex flex-col justify-between">
                <p className="text-sm text-gray-700 whitespace-pre-line">{subItem.text}</p>
                <p className="text-xs flex justify-end pt-6">👤{subItem.letter}</p>
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
