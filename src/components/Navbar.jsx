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
            src="/misalogo2.png"
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
                {/* <MenubarContent  >
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="./Aboutus">Corperate Overview</a> </div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/acm">Scaffolding</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Kulinari Oil and Gas</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Non-Destructive Testing</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Rigger Filter</a></div>
                    </MenubarItem>
                </MenubarContent> */}
            </MenubarMenu>
            {/* <MenubarMenu className="">
                <MenubarTrigger className="hover:bg-slate-700 hover:text-white">Oil and Gas</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/sphu">Pipe installation</a> </div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/acm">Scaffolding</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Kulinari Oil and Gas</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Non-Destructive Testing</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Rigger Filter</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu> */}
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
            {/* <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-700 hover:text-white">Renewble Energy</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhumywbl">Solar Technician</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu> */}

            {/* <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-700 hover:text-white">
                    <a className="" href="../article">Article</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-700 hover:text-white">
                <a className="" href="../testimoni">Testimony</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-700 hover:text-white">
                <a className="" href="../career">Job Vacancy</a></MenubarTrigger>
            </MenubarMenu> */}
            {/* <MenubarMenu>
                <MenubarTrigger><a className="">PDPT-YEG</a></MenubarTrigger>
                <MenubarContent>
                    <MenubarItem className="grid">
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="https://lll-52a72qasy-fuaadtarmizis-projects.vercel.app/">Haj Umrah Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Health Science Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Aviation Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Penguatkuasa Undang-Undang Examination</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu> */}
            <MenubarMenu>
                <MenubarTrigger className=" hover:bg-slate-500 rounded duration-500 text-white">
                <a href="../borangyeg">Contact Us</a> </MenubarTrigger>
            </MenubarMenu>
            </div>
            </Menubar>
       
    </nav>
  )
}

export default Navbar