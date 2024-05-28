import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="bg-slate-900 fixed top-0 w-full text-white left-0 h-11 ">
      <ul className="flex space-x-4 mx-4 items-center h-full">
        <li className='cursor-pointer'> Home</li>
        <li className='cursor-pointer'> Download</li>
        <li className='cursor-pointer'> Help</li>
      </ul>
    </nav>
      <div className='h-11 w-full bg-red-500' ></div>
    </>
  );
}

export default Navbar
