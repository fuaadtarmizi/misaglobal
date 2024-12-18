'use client'

import React from 'react';

const serviceItems = [
  { id: 1, letter: 'A', text: 'Automatic collection and accounting\nenergy consumption indicators' },
  { id: 2, letter: 'B', text: 'Indicator monitoring\ncomfort of premises' },
  { id: 3, letter: 'C', text: 'Set up automation and\noptimum operation of equipment' },
  { id: 4, letter: 'D', text: 'Condition monitoring\nengineering equipment, systematization of service' },
  { id: 5, letter: 'E', text: 'Setting up an object to comply with international standards' },
  { id: 6, letter: 'F', text: 'Analytical Center for Promotion energy efficiency' },
  { id: 7, letter: 'G', text: 'Analytical Center for Promotion energy efficiency' },
  { id: 8, letter: 'H', text: 'Analytical Center for Promotion energy efficiency' },
  { id: 9, letter: 'I', text: 'Analytical Center for Promotion energy efficiency' },
  { id: 10, letter: 'J', text: 'Analytical Center for Promotion energy efficiency' },
  { id: 11, letter: 'K', text: 'Analytical Center for Promotion energy efficiency' },
  { id: 12, letter: 'L', text: 'Analytical Center for Promotion energy efficiency' },
];

const DynamicServices = () => {
  return (
    <div className="container mx-auto py-12 px-6 bg-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl space-y-2">
          <h1 className="text-blue-900 font-extrabold">MISA</h1>
          <h2 className="font-bold"> Course </h2>
        </h2>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded p-6 text-center duration-300 hover:-translate-y-4 hover:scale-110"
              data-index={item.id}
            >
              <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <p className="text-lg font-bold">{item.letter}</p>
              </div>
              <div className="">
                <p className="text-sm text-gray-700 whitespace-pre-line">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicServices;

