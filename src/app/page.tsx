'use client'

import Image from "next/image";
import Header from "../components/header";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content); 
  }
  return (
    <div>
      <header className="border-b border-gray-100 flex justify-between px-8 h-[60px] font-sans">
        <Header />
      </header>
      <main className="container  max-w-7xl mx-auto px-16 ">
        <div className="mt-14">
          <form action={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className=" border-2 rounded-md outline-0 text-white w-full mb-4 p-4 text-2xl  bg-transparent focus:bg-opacity-45 focus:bg-white transition-all" placeholder="Title" />
            <textarea  value={content} onChange={(e) => setContent(e.target.value)}  placeholder="Add text..." className=" border-2 rounded-md w-full h-[50vh] p-2 text-white border-blue-100 outline-0 p-4 bg-transparent focus:bg-opacity-45 focus:bg-white transition-all "></textarea>
          </form>
        </div>
        <div>
          <div className="flex justify-between text-white mt-8 items-end">
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4 items-center">
                <p className='w-12'>Option</p>
                <a className="flex rounded-md hover:opacity-100 hover:bg-white hover:bg-opacity-25 transition-all px-4 py-2 cursor-default"><Image width={14} height={14} alt="pen" src="/pen.svg" /> <span className='ml-2'>Edit Code</span> </a>
              </div>
              <div className="flex gap-4 items-center">
                <p className='w-12'>Tools</p>
                <a className="flex opacity-70 rounded-md hover:opacity-100 hover:bg-white hover:bg-opacity-25 transition-all px-4 py-2 cursor-default"><Image width={14} height={14} alt="tools" src="/tools.svg" /> <span className='ml-2'>Insert template</span></a>
              </div>
            </div>
            <div>
              <button type="submit" onClick={handleSubmit} className='rounded-md bg-white text-gray-600 hover:bg-white hover:bg-opacity-25 hover:text-white transition-all p-2 px-4 cursor-default'>Create paste</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
