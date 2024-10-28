"use client"

import React, { useEffect, useState } from 'react'
import Header from './header'
import { useRouter } from 'next/navigation';
import axios from 'axios';

const layout = ({ children }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  useEffect(() => {
    const token = localStorage.getItem('token');
    const verifyToken = async (token) => {
      if (!token) {
        console.log("No token found, redirecting to /auth");
        // router.push('/auth');
        return;
      }

      try {
        const response = await axios.post('/api/protected', { token });
        if (!response.data.valid) {
          console.log("Invalid token, redirecting to /auth");
          // router.push('/auth');
        } else {
          // Optionally, you can handle the user info here
          console.log("User verified:", response.data.user);
          setEmail(response.data.user.email);
          // console.log(email);
          
        }
      } catch (error) {
        console.error("Verification failed:", error);
        router.push('/auth');
      }
    };

    verifyToken(token);
  }, [router]);
  return (
    <div>
      <header className="border-b border-gray-100 flex justify-between px-8 h-[60px] font-sans">
        <Header email={email} />
      </header>
      {children}
    </div>
  )
}

export default layout