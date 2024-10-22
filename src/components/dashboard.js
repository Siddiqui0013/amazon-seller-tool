import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { CiHome, CiBoxes,CiCalendar,CiSettings } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LuGamepad } from "react-icons/lu";



function Dashboard() {
  return (
    <div className="flex h-screen">

      <div className="w-1/5 ">
        <div className="p-6 text-xl font-bold text-blue-700">
          Logo
        </div>
        <nav className="flex flex-col mt-3 ">
          <div className="p-3 rounded-lg hover:bg-blue-100 flex gap-2 items-baseline"><CiHome size={25}/><p>Dashboard</p></div>
          <div className="p-3 rounded-lg hover:bg-blue-100 flex gap-2 items-baseline"><CiBoxes size={25}/><p>Product Research</p></div>
          <div className="p-3 rounded-lg hover:bg-blue-100 flex gap-2 items-baseline"><FiBox size={25}/><p>Inventory Management</p></div>
          <div className="p-3 rounded-lg hover:bg-blue-100 flex gap-2 items-baseline"><FaArrowTrendDown size={25}/><p>Price & Profit</p></div>
          <div className="p-3 rounded-lg hover:bg-blue-100 flex gap-2 items-baseline"><CiCalendar size={25}/><p>Listing Optimizer</p></div>
          <div className="p-3 rounded-lg hover:bg-blue-100 flex gap-2 items-baseline"><IoMdTime size={25}/><p>Alerts & Compliance</p></div>
          <div className="p-3 rounded-lg hover:bg-blue-100 flex gap-2 items-baseline"><LuGamepad size={25}/><p>Analytics</p></div>
          <div className="p-3 rounded-lg hover:bg-blue-100 flex gap-2 items-baseline"><CiSettings size={25}/><p>Settings</p></div>
        </nav>
      </div>

      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="bg-blue-600 p-4 flex items-center ">
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

        <div className="flex-1 overflow-y-auto p-10">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Section 1: Chart</h2>
            <div className="h-64 bg-white shadow rounded-lg"></div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Section 2: Chart</h2>
            <div className="h-64 bg-white shadow rounded-lg"></div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Section 3: Chart</h2>
            <div className="h-64 bg-white shadow rounded-lg"></div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Section 4: Chart</h2>
            <div className="h-64 bg-white shadow rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
