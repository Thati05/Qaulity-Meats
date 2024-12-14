import React from 'react';
import Image from 'next/image';
import Component3 from '@/public/assets/images/Component 3.png';
import Link from 'next/link';

type Props = {};

export default function BestButcher({}: Props) {
  return (
    <main className=" backgroundImage min-h-screen flex max-md:flex-col items-center p-8 pb-20 gap-10  sm:p-20 font-[family-name:var(--font-mont-sans)]">
     
    <div >
    <Image
    alt=''
    className=' max-md:w-full '
    width={1500}
    src={Component3} />
    </div>
    
    <div className=' flex flex-col gap-5 text-center'>
      <span className=' text-2xl font-[family-name:var(--font-kalam)] text-crimsonRed font-bold'>Qaulity Meats</span>
      <h1 className=" capitalize text-4xl font-bold ">Best Bucther in your city Area</h1>
      <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, mollitia voluptatum totam reprehenderit porro, repellat, consequatur optio rem assumenda minima pariatur molestias fugiat at aliquam! Eos exercitationem vel nesciunt amet!</p>
    <div>
    
    <button className='font-extralight flex-none py-3 px-8 bg-crimsonRed text-white'>
    <Link href='/about-us'>
     Learn More
    </Link>
    </button>
    </div>
    
    </div>
        
        </main>
  );
}
