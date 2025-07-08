"use client"
import React from 'react'
import Image from "next/image"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
  } from "@/components/ui/menubar"
  

function Navbar() {
  return (
    <nav className="relative w-full h-32 p-6 bg-gradient-to-b from-[#292f52] via-[#57b4b4] to-transparent">
        <Menubar>
        <div className="pl-4">
            <a href="/" className="">
            <Image
            className=""
            src="/home/misalogo2.png"
            alt="logoyeg"
            height="140"
            width="140"
            style={{objectFit: "contain"}}/>
            </a>
            </div>
            <div className=" flex w-full justify-end space-x-8">
            <MenubarMenu className="">
                <MenubarTrigger className="hover:bg-slate-500 rounded duration-500">
                    <a className="text-md text-white ml-2" href="/aboutus">About Us</a> 
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-500 rounded duration-500">
                    <a className="text-md text-white ml-2" href="/aboutus">News & Media</a> 
                </MenubarTrigger>
                {/* <MenubarTrigger className=" rounded duration-500 text-white">News & Media</MenubarTrigger>
                <MenubarContent className="backdrop-blur rounded text-white">
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2 " href="../odl/diploma1">Deck Rating</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../odl/diploma1">Ranaco</a></div>
                    </MenubarItem>
                </MenubarContent> */}
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-800 rounded duration-500 text-white">Our Partner</MenubarTrigger>
                <MenubarContent className="backdrop-blur rounded text-white">
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-gray-500 hover:rounded ">
                        <a className="text-md font-light ml-2" href="https://www.sirim.my/">Sirim Berhad</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-gray-500 hover:rounded">
                        <a className="text-md font-light ml-2" href="https://www.pelitaakademi.com/">Pelita Akademi</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-gray-500 hover:rounded">
                        <a className="text-md font-light ml-2" href="https://ranacomarine.my/">Ranaco Marine Sdn Bhd</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-gray-500 hover:rounded">
                        <a className="text-md font-light ml-2" href="https://www.sirimacademy.my/">Sirim Academy</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-gray-500 hover:rounded">
                        <a className="text-md font-light ml-2" href="https://www.meatech.edu.my/">Meatech College</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu> 
            <MenubarMenu>
                <MenubarTrigger className=" hover:bg-slate-500 rounded duration-500 text-white">
                <a href="../borangmisa">Contact Us</a> </MenubarTrigger>
            </MenubarMenu>
            </div>
            </Menubar>
       
    </nav>
  )
}

export default Navbar