"use client";
import React, { useState } from "react";
import Navlinks from "@/constants/index";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/assets/images/Logo.png'


export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); //true
  };

  return (
    <div className="relative md:hidden flex">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="text-4xl text-[#A41A21] p-2"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <ul className="flex flex-col p-5 pr-12 space-y-5">
           <Image width={80} src={Logo} alt=" Quality Meats logo" />
          {Navlinks.map((link, index) => (
            <li key={index} className=" relative w-fit group">
              <Link onClick={() => setIsOpen(false)} href={link.href}>
               {link.name}
               <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-crimsonRed transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              
            </li>
            
          ))}
          <li className=" relative w-fit group">

          <Link onClick={() => setIsOpen} href='/contact' >
              Contact
              </Link>
              <span className=" absolute bottom-0 left-0 w-0 h-[3px] bg-crimsonRed transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
         
        </ul>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
}
