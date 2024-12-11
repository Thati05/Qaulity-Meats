import Link from 'next/link';
import React from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
  label: string;
  href: string;
  className?:string
}

export default function Button({label, href, className}: Props) {
  return (
    <div className={twMerge("w-auto py-2 px-11 ", className)}>
      <Link className='inline-flex text-lg ' href={href}>
      {label}
      </Link>

    </div>
  )
}