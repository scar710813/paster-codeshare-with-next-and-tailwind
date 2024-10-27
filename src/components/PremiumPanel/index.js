import React from 'react'

const PremiumPanel = () => {
    return (
        <button className='w-[480px] h-[67px] border-2 border-red-100 p-2 pl-5 rounded-lg flex items-center justify-between bg-gradient-to-r from-[#6f14f5] to-[#861fef]'>
            <div className='w-fit'>
                <p className='w-fit text-[15px] '>12 Months <span className='tracking-widest rounded-lg text-[10px] bg-pink-600 px-2 py-1'>85% OFF</span></p>
                <p className='w-fit line-through'>Was $19.99/month</p>
            </div>
            <div className='w-fit flex items-center'>
                <p className='w-fit mr-4 text-2xl'>$2</p>
                <div className='leading-[1] text-[15px]'><span className='font-bold'>.99</span><br/><span className='font-thin'>/month</span></div>
            </div>
        </button>
    )
}

export default PremiumPanel