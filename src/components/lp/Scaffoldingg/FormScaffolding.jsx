"use client"
"use client"
import React, {useState} from 'react';
import {useEffect} from 'react';
import Image from 'next/image'
import Footer from "@/components/Footer.jsx"

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);


    const [alertMessage, setAlertMessage] = useState('');
    const [emailError, setEmailError] = useState('');

  function Submit(e) {

    const emailValue = e.target.elements.Email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(emailValue)) {
      setEmailError('Email must be in a valid format.');
      alert('Email is incorrect!');
      return;
    }

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    formDatab.append("Program", selectedItem);
    formDatab.append("State", selectedItem2);
    

    fetch(
      "https://script.google.com/macros/s/AKfycbyG0qKRdu8ThJgMNOe2Fp5dhBcfOu_FEpy0mtUFmGJ-aPqaR5V21zfZS6UaxClWUE2hxA/exec",
      {
        method: "POST",
        body: formDatab
      }
      
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

      setAlertMessage('Form submitted successfully!');
      alert('Penghantaran Berjaya!, Pegawai kami akan menghubungi anda secepat mungkin');
  }

  // program yeg
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  // // media
  //   const toggleDropdown1 = () => {
  //     setIsOpen1(!isOpen1);
  //   };

  //state  
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

 

    // program yeg
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };

    // // media 
    //   const handleItemClick1 = (item) => {
    //     setSelectedItem1(item);
    //     setIsOpen1(false);
    //   };
    //state
    const handleItemClick2 = (item) => {
      setSelectedItem2(item);
      setIsOpen2(false);
    };
     
  return (
    <main>
      <section>
        <div className="bg-black p-3 space-y-2">
          <p className="font-extrabold text-2xl lg:text-4xl text-white text-center">BORANG PERMOHONAN</p>
          <p className="text-lg lg:text-4xl text-white text-center">PANGGILAN TEMUDUGA & PEKERJAAN</p>
        </div>
      </section>      
    <div className="w-full">
        <div className="p-4 lg:flex justify-center">     
      <div className=" w-full">
      <form className="backdrop-blur-lg w-full p-6 border space-y-3 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
        <h className="py-6 text-black text-3xl font-bold">Course Enquiry</h>
 
      <div className="grid rounded-md">
        <h className="">Nama</h>
      <input className="bg-gray-200 px-3  hover:shadow-md duration-500 rounded-md " placeholder="" name="Name" type="text" />
      </div>
      <div className="grid rounded-md">
        <h>Email</h>
      <input className="bg-gray-200 px-3 hover:shadow-md duration-500 rounded-md " 
        placeholder="" 
        name="Email" 
        type="text" />
      </div>
      <div className="grid lg:flex  ">
      <div className="grid">
            <h> No Tel Anda </h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
          </div>
          <div className="grid ">
            <h>Umur</h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Age" type="text" />
          </div>
      </div>
      
      <div className="w-full relative inline-block text-left">
        <div>Pilih Kerjaya</div>
      <button
        onClick={toggleDropdown} 
        name="Program"
        type="button"
        className=" bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem ? selectedItem : "Program"}
      </button>

      {isOpen && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
        
          <div className="pl-6 text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick("Renewable Energy Technician")}>Renewable Energy Technician</p>
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick(" Basic Scaffolding Erector in Oil & Gas Industry")}> Basic Scaffolding Erector in Oil & Gas Industry</p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick(" Authorized Gas Tester Entry Supervisor")}> Authorized Gas Tester Entry Supervisor</p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick("Non-Destructive Testing Radiographic Testing Level 2")}>Non-Destructive Testing Radiographic Testing Level 2</p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick("Drone Pilot Programme - Basic Remote Pilot")}>Drone Pilot Programme - Basic Remote Pilot</p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick("Fibre Optic Splicer Technician")}>Fibre Optic Splicer Technician</p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick("Fibre Optic Technician")}>Fibre Optic Technician</p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick("Sijil Profesional Pemasangan Paip Gas (Pipe Gas Insulation),Sijil Profesional Rigger Fitter")}>Sijil Profesional Pemasangan Paip Gas (Pipe Gas Insulation),Sijil Profesional Rigger Fitter</p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick("Sijil Profesional Dek Kapal (Deck Rating),Sijil Profesional Enjin Kapal (Engine Rating),Sijil Profesional Kulinari (Oil & Gas Culinary),Sijil Profesional Katering Kapal (Catering Rating), Sijil Profisiensi Perkapalan")}>Sijil Profesional Dek Kapal (Deck Rating),Sijil Profesional Enjin Kapal (Engine Rating),Sijil Profesional Kulinari (Oil & Gas Culinary),Sijil Profesional Katering Kapal (Catering Rating), Sijil Profisiensi Perkapalan</p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick("Sijil Profesional Pemasangan Paip Gas Insulation (ZABSI),Sijil Profesional Rigger Fitter (ZABSI)")}>Sijil Profesional Pemasangan Paip Gas Insulation (ZABSI),Sijil Profesional Rigger Fitter (ZABSI)</p> 
          </div>
          
        </div>
      )}
    </div> 

          
      <div className="grid  text-left">
        <p className="py-1 text-black">Tempat Interview</p>
      <button
        onClick={toggleDropdown2} 
        name="Negeri"
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem2 ? selectedItem2 : "Select State"}
      </button>

      {isOpen2 && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
 
          <div className=" text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Johor")}
          >
            Johor
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kedah")}
          >
            Kedah
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kelantan")}
          >
            Kelantan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kuala Lumpur")}
          >
            Kuala Lumpur
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Labuan")}
          >
            Labuan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Melaka")}
          >
            Melaka
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Negeri Sembilan")}
          >
            Negeri Sembilan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Pahang")}
          >
            Pahang
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Perak")}
          >
            Perak
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Perlis")}
          >
            Perlis
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Pulau Pinang")}
          >
            Pulau Pinang
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Putrajaya")}
          >
            Putrajaya
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Sabah")}
          >
            Sabah
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Serawak")}
          >
            Serawak
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Selangor")}
          >
            Selangor
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Terengganu")}
          >
            Terengganu
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Singapore")}>Singapore</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Brunei")}>Brunei</p>
          </div>     
        </div>
      )}
    </div>      

    <div className="pt-4">
    <button className="px-6 py-2 border rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-md duration-300" name="Submit" type="submit" >Submit</button>
    </div>
  
        </form>

        {emailError && (
        <div className="alert">
          {emailError}
        </div>
      )}

      {alertMessage && (
        <div className="alert">
          {alertMessage}
        </div>
        )}
    </div>
    </div> 
    </div>
    
   
    </main>
  );
}
