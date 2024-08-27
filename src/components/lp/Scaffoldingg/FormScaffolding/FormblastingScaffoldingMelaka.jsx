"use client"
import React, { useState } from 'react';
// import Image from 'next/image';
// import Footer from "@/components/Footer.jsx";
// import Navbar from "@/components/Navbar.jsx";
// import Sidebar from "@/components/Sidebar.jsx";

export default function App() {

  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);



  const [selectedItem2, setSelectedItem2] = useState(null);
  const [selectedItem3, setSelectedItem3] = useState(null);
  const [selectedItem4, setSelectedItem4] = useState(null);



  const [alertMessage, setAlertMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');

  function Submit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const emailValue = e.target.elements.Email.value;
    const nameValue = e.target.elements.Name.value;
    const phoneValue = e.target.elements.NumberPhone.value;
    const ageValue = e.target.elements.Age.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all fields are filled
    if (!nameValue || !phoneValue || !emailValue || !ageValue) {
      setFormError('All fields must be filled.');
      return;
    }
    // Validate email format
    if (!emailRegex.test(emailValue)) {
      setEmailError('Email must be in a valid format.');
      alert('Email is incorrect!');
      return;
    }
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    formData.append("Cert", selectedItem4);
    formData.append("Status", selectedItem3);
    formData.append("Region", selectedItem2);

    fetch(
      "https://script.google.com/macros/s/AKfycbxU0O-K_KtQJOuAXjc6_XknL-NuqRKUSt5VNEOOs2J_8MnGgk0JC1eegM82Mq0n5CdfCA/exec",
      {
        method: "POST",
        body: formData
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
    setFormError(''); // Clear form error message
    setEmailError(''); // Clear email error message
  }

  //state  
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleItemClick2 = (item) => {
    setSelectedItem2(item);
    setIsOpen2(false);
  };

  //Status  
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleItemClick3 = (item) => {
    setSelectedItem3(item);
    setIsOpen3(false);
  };

  //CERT  
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleItemClick4 = (item) => {
    setSelectedItem4(item);
    setIsOpen4(false);
  };

  return (
    <main>
      <div className="">
        <div className="hidden lg:block"></div>
        <div className=" lg:flex justify-center">
          <div className="w-full lg:w-2/3 ">

          {/* FORM PAHANG */}
          <form className="backdrop-blur-lg w-full p-6 border space-y-5 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
          <input type="hidden" name="SheetName" value="pahang" />
            {/* <div className="py-6 text-black text-3xl font-bold">
              <h>Borang Permohonan</h>
            </div> */}
            <div className="grid space-y-4">
              <div className="grid rounded-md space-y-1">
                <h className="">Nama</h>
                <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Name" type="text" />
              </div>
              <div className="grid space-y-1">
                <h>Nombor Telefon</h>
                <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
              </div>
            </div>
            <div className="grid space-y-4">
              <div className="grid rounded-md space-y-1">
                <h>Email</h>
                <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Email" type="text" />
              </div>
              <div className="grid space-y-1">
                <h>Umur</h>
                <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Age" type="text" />
              </div>
            </div> 
          <div className="grid  text-left">
            <p className="text-black"></p>
          <button
            onClick={toggleDropdown4} 
            name="Cert"
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800">
            {selectedItem4 ? selectedItem4 : "Akademik Tertinggi"}
          </button>
          {isOpen4 && (
            <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div className=" text-sm bg-yellow-500">
              <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick4("TIDAK SEKOLAH")}>TIDAK SEKOLAH</p>
              <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick4("PMR")}>PMR</p>
              <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick4("SPM")}>SPM</p>
              <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick4("SIJIL DAN SETARAF(KEMAHIRAN)")}>SIJIL DAN SETARAF(KEMAHIRAN)</p>
                <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick4("DIPLOMA")}>DIPLOMA</p>
                <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick4("IJAZAH")}>IJAZAH</p>
                <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                onClick={() => handleItemClick4("LAIN-LAIN")}>LAIN-LAIN</p>
              </div>     
            </div>)}</div>
            <div className="grid text-left">
                <p className=" text-black"></p>
              <button
                onClick={toggleDropdown3} 
                name="Status"
                type="button"
                className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
              >
                {selectedItem3 ? selectedItem3 : "Status Perkahwinan"}
              </button>
              {isOpen3 && (
                <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className=" text-sm bg-yellow-500 rounded-md">
                  <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                    onClick={() => handleItemClick3("Bujang")}>Bujang</p>
                  <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                    onClick={() => handleItemClick3("Berkahwin")}>Berkahwin</p>
                  </div>     
                </div>
              )}
            </div>
            <div className="grid  text-left">
              <p className="py-1 text-white">Negeri</p>
            <button
              onClick={toggleDropdown2} 
              name="Negeri"
              type="button"
              className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
            >
              {selectedItem2 ? selectedItem2 : "Tempat Pilihan Interview"}
            </button>

            {isOpen2 && (
              <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">

                <div className=" text-sm bg-yellow-500">
                <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                  onClick={() => handleItemClick2("Bandar Melaka")}
                >
                  Bandar Melaka
                </p>
                <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
                  onClick={() => handleItemClick2("Simpang Ampat")}
                >
                  Simpang Ampat
                </p>
                </div>     
              </div>
            )}
          </div>

            <div className="pt-4 flex justify-center">
              <button className="px-6 py-2 border rounded-md bg-red-700 hover:bg-red-600 hover:shadow-md duration-300 text-white" name="Submit" type="submit">APPLY NOW</button>
            </div>
          </form>



           



            {formError && <div className="alert">{formError}</div>}
            {emailError && <div className="alert">{emailError}</div>}
            {alertMessage && <div className="alert">{alertMessage}</div>}
          </div>
        </div>
      </div>
    </main>
  );
}

