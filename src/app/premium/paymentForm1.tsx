'use client'

import React, { useState, Dispatch, SetStateAction } from 'react'

const PaymentForm1 = ({
  price,
  setStep
}:{
  setStep: Dispatch<SetStateAction<number>>,
  price: number,
}) => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');

  const onSubmit = (e: any) => {
    console.log("321321")
    setStep(2)
  }

  return (
    <div className="max-w-2xl w-full bg-gray-900 rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="flex-1 p-6 border-b border-gray-700 md:border-b-0 md:border-r">
        <h2 className="text-xl font-bold text-indigo-400 mb-4">Order summary</h2>
        <div className="text-3xl font-semibold text-indigo-400 mb-1">€9.99 <span className="text-sm font-normal">inc. VAT</span></div>
        <p className="text-gray-400 mb-4">then €9.99 monthly</p>
        
        <div className="flex items-center justify-between mb-4">
          <span>Paster Premium</span>
        </div>

        <div className="space-y-2 text-gray-300">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>€{price}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Your details</h2>
        <p className="text-gray-400 mb-4">We collect this information to help combat fraud, and to keep your payment secure.</p>
        
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-gray-400 mb-1">Email address <span className="text-red-500">*</span></label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="email@example.com" />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Country <span className="text-red-500">*</span></label>
            <input id="country" required value={country} onChange={e => setCountry(e.target.value)} name="country" className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">ZIP/Postcode <span className="text-red-500">*</span></label>
            <input type="text" required value={zipcode} onChange={e => setZipcode(e.target.value)} className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="ZIP/Postcode"/>
          </div>

          <input type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700">Continue</input>
        </form>
      </div>
    </div>
  )
}

export default PaymentForm1
