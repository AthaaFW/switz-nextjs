"use client";

import logo from "../asset/icon.svg"
import Image from "next/image";
import Hamburger from 'hamburger-react';
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = ({color}) => {

    const[ham, setHam] = useState(false)

    return ( 
        <>
            <div className={color ? "fixed w-full top-0 left-0 flex flex-row items-center justify-between pl-[2rem] nav-gradient shadow-xl transition z-[90]" : "w-full fixed top-0 left-0 flex flex-row items-center justify-between pl-[2rem] bg-blackTrans shadow-lg transition"}>
            <Image src={logo} alt="logo" width={150} height={150} className="nav-logo"/>
            <div className="flex flex-row items-center gap-[50px]">
                <a href="/" className="text-[13px] hover:text-gray-300">Day Tours</a>
                <a href="/" className="text-[13px] hover:text-gray-300">Multi-day Tours</a>
                <a href="/" className="text-[13px] hover:text-gray-300">Attractions</a>
                <a href="/" className="text-[13px] hover:text-gray-300">Themes</a>
                <div className="p-[0.7rem] bg-lightRed">
                    <Hamburger toggled={ham} toggle={() => setHam(!ham)} size={45}/>
                </div>
            </div>
        </div>
        <Sidebar open={ham}/>
        </>
     );
}
 
export default Navbar;