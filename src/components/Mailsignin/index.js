import React from 'react'

const MailSignIn = ({value, style}) => {
  return (
    <div>
        <button className={`bg-white bg-opacity-15 hover:bg-blue-200 hover:bg-opacity-45 transition-all p-4 mt-4 rounded-md border w-80 {$style} `}>
            {value}
        </button>
    </div>
  )
}

export default MailSignIn