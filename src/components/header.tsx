'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from 'axios';

const header = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  useEffect(() => {
    const token = localStorage.getItem('token');
    const verifyToken = async (token: string | null) => {
      if (!token) {
        console.log("No token found, redirecting to /auth");
        // router.push('/auth');
        return;
      }

      try {
        const response = await axios.post('/api/protected', { token });
        if (response.data.valid) {
          setEmail(response.data.user.email);
        }
      } catch (error) {
        console.error("Verification failed:", error);
        router.push('/auth');
      }
    };

    verifyToken(token);
  }, [router]);

  return (
    <div className='w-full flex justify-between'>
      <div className="flex items-center text-white ">
        <Link href="/">
          <Image width={23} height={22.5} alt='standard' src="/standard.svg" className="mx-2" /></Link>
        <svg fill="none" height={20} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        {email ? <p> {email} </p> : <Link href="/auth" className="flex items-center hover:bg-white hover:bg-opacity-20 rounded-md p-1">
          <Image width={20} height={20} alt="dummy" src="/dummy-profile.jpeg" className="mx-2 rounded-md h-[20px]" /> Sign in
          <Image width={12} height={12} alt='updownarrow' src="/updownarrow.svg" className='ml-1' />
        </Link>}
      </div>
      <div className="flex items-center gap-3">
        <Link href="/premium" className="flex items-center text-white border rounded-md px-2 cursor-default">
          <Image width={16} height={16} alt='jewel' src="/jewel.svg" />
          <span className='ml-1'>Get Ads Free</span>
        </Link>
        <a className="rounded-full border p-1"><Image width={15} height={15} alt='headphone' src="/headphone.svg" /></a>
      </div>
    </div>
  )
}

export default header