"use client";
import React, { useState } from "react";
import Navlinks from "@/constants/index";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {Navlinks.map((link, index) => (
            <li key={index} className="hover:bg-gray-700 p-2 rounded-lg">
              <Link onClick={() => setIsOpen(false)} href={link.href}>
               {link.name}
              </Link>
            </li>
          ))}
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
