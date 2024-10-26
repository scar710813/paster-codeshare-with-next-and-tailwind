import Image from 'next/image'
import React from 'react'
import MailSignIn from '@/components/Mailsignin'

const page = () => {
  return (
    <div>
      <div className='w-fit m-auto flex flex-col items-center mt-12 justify-between'>
        <Image width={41} height={41} alt="standard" src="./standard.svg" className='mx-auto' />
        <h1>Your Paster Account</h1>
        <MailSignIn value={"Continue with Google"} style={""}/>
        <MailSignIn value={"Continue with Apple"} style={""}/>
        <MailSignIn value={"Continue with Discord"} style={""}/>
        <MailSignIn value={"Continue with Email"} style={" bg-white"}/>
      </div>


    </div>
  )
}

export default page