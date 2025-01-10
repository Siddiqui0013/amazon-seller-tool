import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { CiHome, CiBoxes, CiCalendar, CiSettings,CiMoneyBill,CiClock2  } from "react-icons/ci";
import { HiOutlineCube } from "react-icons/hi2";
import { IoIosTrendingUp  } from "react-icons/io";
import { } from "firebase/auth"
import logo from "../../assets/logo.png"

export default function Navbar() {



  const nav = useNavigate();
  return (
    <div className=" h-screen sticky top-0  md:w-[18%] bg-white shadow">
      <div className="p-4  cursor-pointer text-xl font-bold text-blue-700" onClick={() => nav('/') }>
        <img src={logo} alt="logo" className="w-1/2" />
      </div>
      <nav className="flex items-center md:items-stretch flex-col mt-3">
        <NavLink
          to="/"
          className={({ isActive }) => `p-3 rounded-lg flex gap-3 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiHome size={25} className='mr-2' />
          <p className="p-px hidden md:block">Dashboard</p>
        </NavLink>
        <NavLink
          to="/product-research"
          className={({ isActive }) => `p-3 rounded-lg flex gap-3 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiBoxes size={25} className='mr-2'  />
          <p className="p-px hidden md:block">Product Research</p>
        </NavLink>
        <NavLink
          to="/inventory-management"
          className={({ isActive }) => `p-3 rounded-lg flex gap-3 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <HiOutlineCube size={25} className='mr-2'  />
          <p className="p-px hidden md:block">Inventory Management</p>
        </NavLink>
        <NavLink
          to="/price-profit"
          className={({ isActive }) => `p-3 rounded-lg flex gap-3 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <IoIosTrendingUp size={23}  className='mr-2' />
          <p className="p-px hidden md:block">Price & Profit</p>
        </NavLink>
        <NavLink
          to="/listing-optimizer"
          className={({ isActive }) => `p-3 rounded-lg flex gap-3 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiCalendar size={25}  className='mr-2' />
          <p className="p-px hidden md:block">Listing Optimizer</p>
        </NavLink>
        <NavLink
          to="/alerts-compliance"
          className={({ isActive }) => `p-3 rounded-lg flex gap-3 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiClock2 size={25}  className='mr-2' />
          <p className="p-px hidden md:block">Alerts & Compliance</p>
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) => `p-3 rounded-lg flex gap-3 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiMoneyBill size={25}  className='mr-2' />
          <p className="p-px hidden md:block">Analytics</p>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => `p-3 rounded-lg flex gap-3 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiSettings size={25}  className='mr-2' />
          <p className="p-px hidden md:block">Settings</p>
        </NavLink>
      </nav>
    </div>
  );
}