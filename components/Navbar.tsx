import Image from 'next/image'
import React from 'react'
import Logo from '@/public/assets/images/Logo.png'
import Navlinks from '@/constants/index'
import Link from 'next/link'
import Button from './Button'
import Menubar from './Menubar'





export default function Navbar() {
  return (
    <nav className=' flex  justify-between items-center px-5 py-8 font-[family-name:var(--font-mont-sans)]'>
      <Image width={120} alt='Quality Meats Logo' src={Logo}/>
      <ul className=' md:flex md:gap-10 lg:gap-20  text-lg hidden'>
        {Navlinks.map((links, index) => (
           <li key={index}>
            <Link href={links.href}>
            {links.name}
            </Link>

        </li>
        ))}
       
      </ul>

      <Button label='Contact' href='/contact' className=' bg-[#A41A21] md:flex hidden text-white' />
      <Menubar/>
     
     
    </nav>
  )
}