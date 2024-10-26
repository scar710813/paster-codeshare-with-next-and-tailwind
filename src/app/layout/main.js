import React from 'react'

const main = () => {
  return (
    <div>
    <main className="container  max-w-7xl mx-auto px-16 ">
        <div className=" mt-14">
          <form>
            <input type="text" className=" border-2 rounded-md outline-0 text-white w-full mb-4 p-4 text-2xl  bg-transparent focus:bg-opacity-45 focus:bg-white transition-all" placeholder="Title" />
            <textarea placeholder="Add text..." className=" border-2 rounded-md w-full h-[50vh] p-2 text-white border-blue-100 outline-0 p-4 bg-transparent focus:bg-opacity-45 focus:bg-white transition-all "></textarea>
          </form>
        </div>
        <div>
          <div className="flex justify-between text-white">
            <div>
              <div className="flex">
                <p>Option</p>
                <a className="flex"><Image width={14} height={14} alt="" src="pen.svg" /> Edit Code </a>
              </div>
              <div className="flex">
                <p>Tools</p>
                <a className="flex"><Image width={14} height={14} alt="" src="tools.svg" /> Insert template</a>
              </div>
            </div>
            <div>
              <a>Create paste</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default main