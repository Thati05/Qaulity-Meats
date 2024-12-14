import React from "react";
import HeroSection from "@/components/HeroSection";
import BestButcher from "@/sections/Landing Page/BestButcher";
import ExporeRange from "@/sections/Landing Page/ExporeRange";
export default function Home() {
  return (
    <main className=" relative w-full justify-center  overflow-hidden font-[family-name:var(--font-mont-sans)]">
   <section className=" mb-6" >
     
 <HeroSection/>

   </section>

   <section className=" mt-32">

<BestButcher />
   </section>
<section>
  <ExporeRange/>
</section>
    </main>
  );
}
