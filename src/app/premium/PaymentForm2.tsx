'use client'

import React, { useState, Dispatch, SetStateAction } from 'react'

const PaymentForm2 = ({
  price,
  setModalOpen
}:{
  setModalOpen: Dispatch<SetStateAction<boolean>>,
  price: number,
}) => {
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
        <form className="space-y-4">

        </form>
      </div>
    </div>
  )
}

export default PaymentForm2
