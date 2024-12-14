import Image from 'next/image';
import React from 'react';
import Beef from '@/public/assets/icons/cow.png';
import Lamb from '@/public/assets/icons/sheep.png';
import Pork from '@/public/assets/icons/pig.png';
import Chicken from '@/public/assets/icons/chicken.png';
import Goat from '@/public/assets/icons/goat.png';

type Props = {};


export default function ExploreRange({}: Props) {
  return (
    <section className="  justify-center flex max-md:flex-col items-center p-8  max-md:mt-16 max-md:pb-0  mt-10 pb-20 gap-10  sm:p-20 font-[family-name:var(--font-mont-sans)]">
         {/* Range Section */}
         <div className=' text-center'>
        <h1 className="text-4xl max-md:text-2xl max-md:mb-0 mb-20 font-light ">Explore The Range</h1>
        <div className=' mt-20 hidden md:flex items-center gap-24 '>
          <div className='flex flex-col items-center gap-2'>
            <Image
             width={110}
             alt='beef'
              height={100}
             src={Beef}/>
             <span className="mt-2 font-normal text-lg mr-5" >Beef</span>

          </div>
          <div className='flex flex-col items-center gap-2'>
            <Image
             width={110}
             alt='lamb'
              height={100}
             src={Lamb}/>
             <span className="mt-2 font-normal text-lg " >Lamb</span>

          </div>
          <div className='flex flex-col items-end  gap-1 object-bottom'>
            <Image
            
             width={120}
             alt='pork'
              height={110}
             src={Pork}/>
             <span className="mt-2 font-normal text-lg mr-8" >Pork</span>

          </div>
          <div className='flex  flex-col items-end  gap-7 object-bottom'>
            <Image
             width={90}
             
             alt='chicken'
             className=' mr-5 mt-5'
              height={100}
             src={Chicken}/>
             <span className=" font-normal text-lg mr-5" >Chicken</span>

          </div>
          <div className='flex  flex-col items-end gap-8 object-bottom'>
            <Image
             width={100}
             alt='goat'
              height={100}
             src={Goat}/>
             <span className=" font-normal text-lg mr-7" >Goat</span>

          </div>
        </div>
      </div>
      {/**Banner Section/ Explore more section  */}

    </section>
  );
}
