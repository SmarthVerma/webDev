import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-500 flex justify-between items-center px-4" >
        <div className="font-bold text-blue-100 cursor-pointer font-serif">NavingUP</div>
        <ul className="flex">
          <button class="btn">
            Home
          </button>
          <button class="btn">
            About Us
          </button>
          <button class="btn">
            Contact us
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
