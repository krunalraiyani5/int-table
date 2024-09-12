import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow relative border-b-2 border-transparent">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">All Plans</h1>
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-400" />
          {/* <input
            type="text"
            className="border p-2 rounded-md"
            placeholder="Search..."
          /> */}
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-[-2px] h-1 bg-gradient-to-r from-[#a4de48] to-[#5ec1b0]"></div>
    </header>
  );
};

export default Header;
