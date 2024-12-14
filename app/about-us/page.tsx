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
    <div className=" backgroundExploreMore grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-mont-sans)]">
     About page
    </div>
  )
}