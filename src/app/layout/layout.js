import React from 'react'
import Header from './header'

const layout = ({ children }) => {
  return (
    <div>
      <header className="border-b border-gray-100 flex justify-between px-8 h-[60px] font-sans">
        <Header />
      </header>
      {children}
    </div>
  )
}

export default layout