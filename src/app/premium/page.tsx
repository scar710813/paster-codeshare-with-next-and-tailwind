import React from 'react'
import Image from 'next/image'
import Header from "@/components/header";
import PaymentForm from './paymentForm';

const Premium = () => {
  return (
    <div>
      <header className="border-b border-gray-100 flex justify-between px-8 h-[60px] font-sans">
        <Header />
      </header>
      <div>
        <div className='mt-8 flex flex-col w-fit items-center mx-auto'>
          <Image width={48} height={48} alt='bluejewel' src="/jewel-blue.svg" className=' mb-[20px]' />
          <p className='text-[15px] tracking-[0.5em] mb-[15px] bg-gradient-to-r from-red-800 via-red-600 to-black bg-clip-text text-transparent'>PASTER PREMIIM</p>
          <h1 className='text-2xl  tracking-[0.08em]' >Choose your plan</h1>
          <p className='mt-[17px] mb-11 text-[1em]'>Reminder 7 days before renewal. Cancel anytime</p>
          <div className='w-full border flex rounded-xl'>
            <PaymentForm />
            <div className='px-8 py-6'>
              <h4 className='bg-gradient-to-r from-white via-red-500 to-gray-600 bg-clip-text text-transparent font-medium text-xl'>
                First subscription
              </h4>
              <p className=' mt-2 mb-4 leading-tight'>
                Up to <span className='text-[#fc768a] '>85%</span> off for first subscription <br />
                <span className='text-[#fc768a] leading-tight inline-block'>Get An Exclusive Discount Only Today</span>
              </p>
              <div className='flex gap-2'>
                <div className='w-[60px] h-[60px] flex leading-5 justify-center items-center flex-col text-xl rounded-sm border border-gray-500'>
                  0 <br /> <span className='text-[12px]'>Min</span>
                </div>
                <div className='w-[60px] h-[60px] flex leading-5 justify-center items-center flex-col text-xl rounded-sm border border-gray-500'>
                  0 <br /> <span className='text-[12px]'>Sec</span>
                </div>
                <div className='w-[60px] h-[60px] flex leading-5 justify-center items-center flex-col text-xl rounded-sm border border-gray-500'>
                  0 <br /> <span className='text-[12px]'>Ms </span>
                </div>
              </div>
              <div className='mt-8'>
                <h4 className='mb-2 text-[18px] font-bold'>Preminum benefits</h4>
                <p className='flex leading-[35px]'> <Image width={16} height={16} alt='tick' src="/tick.svg" className='mr-2' />  Unlimited access</p>
                <p className='flex leading-[35px]'> <Image width={16} height={16} alt='tick' src="/tick.svg" className='mr-2' /> Millions of contents</p>
                <p className='flex leading-[35px]'> <Image width={16} height={16} alt='tick' src="/tick.svg" className='mr-2' /> Skip waiting time</p>
                <p className='flex leading-[35px]'> <Image width={16} height={16} alt='tick' src="/tick.svg" className='mr-2' /> Premium Status</p>
                <p className='flex leading-[35px]'> <Image width={16} height={16} alt='tick' src="/tick.svg" className='mr-2' /> No ads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium