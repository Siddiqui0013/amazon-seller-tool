import React from 'react'
import { FaBell, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";


export default function searchBar() {
  return (
    <div className='sticky top-0 z-50'>
            <div className="bg-blue-600 p-4 flex items-center">
            <div className="relative flex w-1/2 mx-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-[399px] p-2 rounded-3xl pl-10 focus:outline-none"
              />
              <AiOutlineSearch className="absolute top-3 left-3 text-gray-500" size={20} />
            </div>
            <div className="flex items-center space-x-4 text-white">
              <FaBell size={24} />
              <FaUserCircle size={30} />
            </div>
          </div>

    </div>
  )
}
