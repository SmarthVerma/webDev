import React from 'react'
import menu from "../assets/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg";

const Navbar = () => {
  return (
    <div className="flex h-screen items-center absolute top-0 ">
      <aside className="border-4 border-black w-15 box-content p-4 fixed left-16 min-h-[90vh] rounded-xl bg-[#E46B9C] bg-[url('https://t3.ftcdn.net/jpg/01/04/61/96/360_F_104619688_UP27I7cxkZKuNZn9GxCLCj0TztesAyMV.jpg')]  shadow-custom flex-col">
        <div className="bg-yellow-300 border-black border flex justify-center items-center cursor-pointer rounded-lg p-3">
          <img className="invert" src={menu} alt="" />
        </div>
        <div className="line w-11/12 border-[1.5px] border-red-500 my-6"></div>
      </aside>
    </div>
  );
}

export default Navbar
