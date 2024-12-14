import React from 'react'
import bgExploreMore from '@/public/assets/images/Component6.png'
import Image from 'next/image'

type Props = {}

export default function ExploreMore({}: Props) {
  return (
    <section className="justify-center flex items-center px-10  pb-20 gap-10  font-[family-name:var(--font-mont-sans)]">
     <div className='flex relative w-full h-[400px] max-md:h-[250px] items-center justify-center'>

      <Image
      src={bgExploreMore}
      alt='Explore More'
      fill
      className=' object-contain'
      />
 <button className='font-extralight relative z-10 flex-none py-3 px-8 max-md:py-[6px] max-md:px-4 max-md:text-sm bg-white text-black'>
    <a href='/about-us'>
     Learn More
    </a>
    </button>
     </div>
   
    
    
    
   
    
        </section>
  )
}