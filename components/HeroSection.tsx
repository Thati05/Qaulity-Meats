import React from 'react'
import AnimatedText from "@/components/AnimatedText";
import Hero from "@/sections/Landing Page/Hero";
import BestButcher from "@/sections/Landing Page/BestButcher";

type Props = {}

export default function HeroSection({}: Props) {
  return (
    <div className=" pt-20  flex flex-col items-center justify-center font-[family-name:var(--font-mont-sans)]">
     
     {/**Hero section */}
     <>
      <div className="relative items-center flex justify-center z-10 w-full max-w-2xl mx-auto px-4 aspect-[16/9]">
         <Hero  />
      </div>
     
      <div className="  absolute w-full mt-8 space-y-4">
        <AnimatedText itemsWrapperClassName="animate-move-left" />
        <AnimatedText itemsWrapperClassName="animate-move-right" />
        <AnimatedText itemsWrapperClassName="animate-move-left" />
      </div>
     </>

   

    </div>
  )
}