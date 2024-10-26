import React from 'react'
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <div className='w-full flex justify-between'>
         <div className="flex items-center text-white ">
          <Link href=""><Image width={23} height={22.5} src="/standard.svg" className="mx-2"/></Link> 
            <svg fill="none" height={20} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M16.88 3.549L7.12 20.451"></path></svg>
          <Link href="" className="flex"><Image width={20} height={20} src="/dummy-profile.jpeg" className="mx-2 rounded-md"/> Sign in </Link>
        </div>
        <div className="flex items-center">
          <a className="flex items-center text-white"><Image width={16} height={16}  src="/jewel.svg" /> Get Ads Free</a>
          <a className=""><Image width={15} height={15}  src="/headphone.svg"/></a>
        </div>
    </div>
  )
}

export default header