'use client';

import Image from 'next/image'
import MailSignIn from '@/components/Mailsignin'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/store/authSlice';
import jwt from 'jsonwebtoken';

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!flag) { setFlag(true); }
    else {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)){
          alert("Wrong Email type");
          return ;
        };
        
      try {
        const response = await axios.post("/api/auth/login", { email: email });
        console.log(response.data);
        if (response.data.success) {
          dispatch(login({ user: response.data.user, token: response.data.token }))
          router.push("/layout");
        }
      } catch (error) {
        console.error('Login failed', error);
      }
    }
  }


  return (
    <div>
      <div className='w-fit m-auto flex flex-col items-center mt-[20vh] justify-between'>
        <Image width={41} height={41} alt="standard" src="./standard.svg" className='mx-auto mb-8' />
        <h1 className='text-3xl'>Your Paster Account</h1>
        <div className='mt-6'>
          <MailSignIn value={"Continue with Google"} img_icon={"/googleicon.svg"} />
          <MailSignIn value={"Continue with Apple"} img_icon={"/appleicon.svg"} />
          <MailSignIn value={"Continue with Discord"} img_icon={"/discordicon.svg"} />
          <hr className={!flag ? `mr-4 border-0` : `mt-8 mr-4 transition-all duration-500`} />
          <input type='text' value={email} onChange={(e) => {
            setEmail(e.target.value); console.log(e.target.value);
          }} className={`flex items-center justify-center bg-white bg-opacity-15 hover:bg-blue-200 hover:bg-opacity-45  ` + (!flag ? `h-0` : ` transition-all duration-500 p-4 mt-4 rounded-md border w-80`)} />
          <button onClick={handleSubmit} className={`flex items-center justify-center bg-white bg-opacity-15 hover:bg-blue-200 hover:bg-opacity-45 transition-all p-4 mt-4 rounded-md border w-80`}>
            Continue with Email
          </button>
        </div>
      </div>


    </div>
  )
}

export default page