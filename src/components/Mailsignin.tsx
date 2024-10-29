import Image from 'next/image'
import React from 'react'

const MailSignIn = ({
    value,
    img_icon
}:{
    value: string,
    img_icon: string
}) => {
  return (
    <div>
      <button className={`flex items-center pl-[15%] mr-4 bg-white bg-opacity-15 hover:bg-blue-200 hover:bg-opacity-45 transition-all p-4 mt-4 rounded-md border w-80`}>
        { img_icon && <Image width={16} height={16} alt="img" src={img_icon} className="mr-4" />}{value}
      </button>
    </div>
  )
}

export default MailSignIn