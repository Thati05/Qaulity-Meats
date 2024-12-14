import React from 'react';
import Image from 'next/image';
import Beef from '@/public/assets/icons/cow.png';
import Lamb from '@/public/assets/icons/sheep.png';
import Pork from '@/public/assets/icons/pig.png';
import Chicken from '@/public/assets/icons/chicken.png';
import Goat from '@/public/assets/icons/goat.png';

type Props = {}

export default function About({}: Props) {
  return (
    <main className=" min-h-screen flex max-md:flex-col items-center p-8 pb-20 gap-10  sm:p-20 font-[family-name:var(--font-mont-sans)]">
         {/* Range Section */}
         <div className="text-center">
        <h1 className="text-4xl mb-20 font-extralight ">Explore The Range</h1>
        <div className=' mt-20 flex items-center gap-10'>
          <div className='flex flex-col items-center gap-8'>
            <Image
             width={100}
             alt='beef'
              height={100}
             src={Beef}/>
             <span className="mt-2 font-medium text-lg mr-5" >Beef</span>

          </div>
          <div className='flex flex-col items-center gap-8'>
            <Image
             width={100}
             alt='beef'
              height={100}
             src={Lamb}/>
             <span className="mt-2 font-medium text-lg mr-5" >Lamb</span>

          </div>
          <div className='flex flex-col items-end  gap-8 object-bottom'>
            <Image
             width={100}
             alt='beef'
              height={100}
             src={Pork}/>
             <span className="mt-2 font-medium text-lg mr-5" >Pork</span>

          </div>
          <div className='flex  flex-col items-end mt-20 gap-14 object-bottom'>
            <Image
             width={80}
             alt='beef'
              height={100}
             src={Chicken}/>
             <span className=" font-medium text-lg mr-5" >Chicken</span>

          </div>
          <div className='flex  flex-col items-end mt-20 gap-14 object-bottom'>
            <Image
             width={100}
             alt='beef'
              height={100}
             src={Goat}/>
             <span className=" font-medium text-lg mr-5" >Goat</span>

          </div>
        </div>
      </div>

    </main>
  )
}