import React from 'react'
import Image from 'next/image'
import Image21 from '@/public/assets/images/image21.png'
import Link from 'next/link'

type Props = {}

export default function ChooseUs({}: Props) {
  return (
    <section className=' p-20 max-md:p-8 bg-[#FDF7F7]'>
      <div className=' flex gap-10 items-center '>
        {/*Info / content */}
        <div className=' max-md:text-center flex flex-col gap-8 text-start'>
          <h1 className=' text-4xl font-extrabold '>Why Choose Us?</h1>
          <p className=' text-lg  '>At Quality Meats, we offer top-quality meats, veggies, fruits, and beverages with exceptional customer service. We are built on strong customer relations and are known for sourcing the best local products. Our daily mission is to provide the best service, experience, and prices to meet all your needs.</p>
<div className=' mt-2'>

  <Link className= ' w-fit max-md:flex-none  font-normal py-3 px-8   bg-crimsonRed text-white' href='/about-us'>
  Learn More
  </Link>
</div>

        </div >
        <Image
        className=' hidden lg:flex object-contain w-full '
        alt='Why choose us image'
        src={Image21}
       
        />
       
      </div>
    </section>
  )
}