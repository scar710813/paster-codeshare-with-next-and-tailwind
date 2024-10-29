'use client'

import React, { useState } from 'react'
import PremiumPanel from '@/components/PremiumPanel'
import PaymentForm1 from './PaymentForm1'
import PaymentForm2 from './PaymentForm2'
import Modal from '@/components/Modal'

const priceList = [
  {
    duration: 12,
    price:  2
  },
  {
    duration: 3,
    price:  6
  },
  {
    duration: 1,
    price:  9
  }
]

const PaymentForm = () => {
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(1);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className='px-8 py-6 flex flex-col gap-4'>
        <PremiumPanel value={0} setValue={setNum} data={priceList[0]} selected={num == 0} />
        <PremiumPanel value={1} setValue={setNum} data={priceList[1]} selected={num == 1} />
        <PremiumPanel value={2} setValue={setNum} data={priceList[2]} selected={num == 2} />
        <button onClick={() => setModalOpen(true)} className='w-full py-4 leading-4 border-2 border-white rounded-lg hover:bg-[#ffffff6b] transition-all'>Continue </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false)
        }}
      >
        {
          step == 1 && <PaymentForm1
            price={priceList[num].price}
            setStep={setStep}
          />
        }
        {
          step == 2 && <PaymentForm2
            price={priceList[num].price}
            setModalOpen={setModalOpen}
          />
        }
      </Modal>
    </div>
  )
}

export default PaymentForm
