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
    <nav className="relative w-full p-6 bg-gradient-to-b from-[#102d41] via-[#4aa5e2] to-transparent">
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
                <MenubarTrigger className="hover:bg-slate-500 rounded duration-500 text-white">News & Media</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../odl/diploma1">Deck Rating</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../odl/diploma1">Ranaco</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-500 rounded duration-500 text-white">Our Partner</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dhumy">Authorised Gas Tester</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dle">Feet On Street(FOS)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dnur">Fiber Optic Technician(FOT)</a></div>
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