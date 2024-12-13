import React from "react";
import Meat from "@/public/assets/images/Meat.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative items-center flex justify-center z-10 w-full max-w-2xl mx-auto px-4 aspect-[16/9]">
      <Image
        src={Meat}
        alt="Premium steak slices on a fork"
        width={350}
        className=" object-contain"
        
      />
    </div>
  );
}
