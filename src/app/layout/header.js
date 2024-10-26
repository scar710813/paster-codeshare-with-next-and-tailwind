import React from 'react'
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <div className='w-full flex justify-between'>
      <div className="flex items-center text-white ">
        <Link href="/">
          <Image width={23} height={22.5} src="./standard.svg" className="mx-2" /></Link>
        <svg fill="none" height={20} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        <Link href="/auth" className="flex items-center hover:bg-white hover:bg-opacity-20 rounded-md p-1">
          <Image width={20} height={20} src="/dummy-profile.jpeg" className="mx-2 rounded-md h-[20px]" /> Sign in
          <Image width={12} height={12} alt='updownarrow' src="/updownarrow.svg" className='ml-1' />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <a className="flex items-center text-white border rounded-md px-2"><Image width={16} height={16} src="/jewel.svg" /> <span className='ml-1'>Get Ads Free</span></a>
        <a className="rounded-full border p-1"><Image width={15} height={15} src="/headphone.svg" /></a>
      </div>
    </div>
  )
}

export default header