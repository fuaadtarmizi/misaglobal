"use client"
import React, {useState} from 'react';
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
    formDatab.append("Media", selectedItem1);
    formDatab.append("State", selectedItem2);
    

    fetch(
      "https://script.google.com/macros/s/AKfycby_sYukN1TwrOvYYACSTt3Fhg4ti5OIHxqdSP63rhXa6SR-095WqhaSmmvnBcJtZ9xwSA/exec",
      {
        method: "POST",
        body: formDatab
      }
      
    )
      .then((res) => res.json())
      .then((data) => {
       if(data.success) {
        setAlertMessage('Form submitted successfully!');
        alert('Penghantaran Berjaya!, Pegawai kami akan menghubungi anda secepat mungkin');
       }else{
        alert('dokleh send..cuba lagi')
       }
      })
      .catch((error) => {
        console.log(error);
      });  
  }



    
  // program yeg
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  // media
    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
    };

  //state  
    const toggleDropdown2 = () => {
      setIsOpen2(!isOpen2);
    };


    // program yeg
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };

    // media 
      const handleItemClick1 = (item) => {
        setSelectedItem1(item);
        setIsOpen1(false);
      };
    //state
      const handleItemClick2 = (item) => {
          setSelectedItem2(item);
          setIsOpen2(false);
        };
      


  return (
    <main>
      <title>YEG Academy - Borang YEG</title>
    <div className="bg-black"  >
    <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/wbl2.png"
          alt="wbl2"
          width="1500"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>
          <div className="p-4 lg:flex justify-center  ">     
            <div className="w-full lg:w-2/3">
            <form className="bg-white w-full p-6 border space-y-5 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
            <div className="py-6 text-black text-3xl font-bold">
                <h>Course Enquiry</h>
          </div>
         
          <div className="grid md:flex gap-8">
          <div className="w-full grid rounded-md space-y-1 ">
              <h className="text-black">Full Name</h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md " placeholder="" name="Name" type="text" />
          </div>
          <div className="w-full grid space-y-1">
              <h>Phone Number</h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
          </div>
          </div>

          <div className="grid md:flex lg:flex gap-8">
          <div className="w-full grid rounded-md space-y-1 ">
            <h>Email</h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md " 
            placeholder="" 
            name="Email" 
            type="text" />
          </div>
            <div className="w-full grid space-y-1 ">
              <h>Age</h>
              <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Age" type="text" />
            </div>
          </div>
          
          <div>
          <div className="relative  inline-block text-left w-full py-8">
            <div className="pb-2">
            <h>Select your Programs</h>
          </div>
            
      <button
        onClick={toggleDropdown} 
        name="Program"
        type="button"
        className=" bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem ? selectedItem : "Select Programs"}
      </button>

      {isOpen && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">        
          <div className="pl-6 text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Renewable Energy Technician Certificate")}
          >Renewable Energy Technician Certificate</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Certificate in Basic Scaffolding Erector in Oil & Gas Industry")}
          >Certificate in Basic Scaffolding Erector in Oil & Gas Industry</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Certificate in Autorized Gas Tester Entry Supervisor")}
          >Certificate in Autorized Gas Tester Entry Supervisor</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Certificate in Non-Destructive Radiographic Testing Level 2")}
          >Certificate in Non-Destructive Radiographic Testing Level 2</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Drone Pilot Programme - Basic Remote Pilot of Certificate")}
          >Drone Pilot Programme - Basic Remote Pilot of Certificate</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Certificate in Fibre Optic Splicer Tecnician")}
          >Certificate in Fibre Optic Splicer Tecnician</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Certificate in Fibre Optic Tecnician")}
          >Certificate in Fibre Optic Tecnician</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Certificate in Protective Coating Technician")}
          >Certificate in Protective Coating Technician</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Certificate in Site Safety Supervisor")}
          >Certificate in Site Safety Supervisor</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Sijil Profesional Pemasangan Paip Gas (Pipe Gas Insulation)")}
          >Sijil Profesional Pemasangan Paip Gas (Pipe Gas Insulation)</p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("Sijil Profesional Rigger Fitter")}
          >Sijil Profesional Rigger Fitter</p>
          </div>
          
        </div>
      )}
    </div>     
    </div>

    <div className="grid md:flex lg:flex gap-8 ">
    <div className="w-full grid space-y-1">
        <h>Parents Name</h>
        <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentName" type="text" />
      </div>
          <div className="w-full grid space-y-1 ">
            <h>Parents Phone Number </h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentNumber"  type="text" />
          </div>
    </div> 

          <div className="grid  text-left">
        <p className="py-1 ">Negeri</p>
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
          <p></p>
 
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
          </div>     
        </div>
      )}
    </div>




          <div className=" inline-block text-left w-full">
        <p className="py-1 text-white">Where get this info:-</p>
      <button
        onClick={toggleDropdown1} 
        name="Media"
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem1 ? selectedItem1 : "Select Media"}
      </button>

      {isOpen1 && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
 
          <div className=" text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Website YEG Academy")}
          >
            Website YEG Academy
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Tiktok")}
          >
            Tiktok
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Event")}
          >
            Event
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Youtube")}
          >
            Youtube
          </p>
          </div>     
        </div>
      )}
    </div>

    <div className="py-6 pt-10 flex justify-center">
    <button className="hover:animate-bounce px-6 py-2 border rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-md duration-300" name="Submit" type="submit" >Submit</button>
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
    <div>
      <Footer/>
    </div>
    </main>
  );
}