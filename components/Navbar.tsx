"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/assets/images/Logo.png";
import Navlinks from "@/constants/index";
import Link from "next/link";
import Button from "./Button";
import Menubar from "./Menubar";

export default function Navbar() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleNavClick = (index: number): void => {
    setSelected(index);
  };

  return (
    <nav className="flex justify-between items-center px-5 py-8 font-[family-name:var(--font-mont-sans)]">
      <Image width={120} alt="Quality Meats Logo" src={Logo} />
      <ul className="md:flex md:gap-10 lg:gap-20 text-lg hidden">
        {Navlinks.map((link, index) => (
          <li key={index} className="relative group">
            <Link
              href={link.href}
              className={`after:content-[''] after:block after:w-full after:h-[4px] after:bg-[#A41A21] after:transition-transform after:duration-300 ${
                selected === index
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              }`}
              onClick={() => handleNavClick(index)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        label="Contact"
        href="/contact"
        className="bg-[#A41A21] md:flex hidden text-white"
      />
      <Menubar />
    </nav>
  );
}
