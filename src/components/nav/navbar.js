import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { CiHome, CiBoxes, CiCalendar, CiSettings,CiMoneyBill  } from "react-icons/ci";
import { HiOutlineCube } from "react-icons/hi2";
import { BsGraphUp } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { } from "firebase/auth"

export default function Navbar() {



  const nav = useNavigate();
  return (
    <div className=" h-screen sticky top-0 bg-white shadow">
      <div className="p-6  cursor-pointer text-xl font-bold text-blue-700" onClick={() => nav('/') }>Logo</div>
      <nav className="flex flex-col mt-3">
        <NavLink
          to="/"
          className={({ isActive }) => `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiHome size={25} className='mr-2' />
          <p className="p-px">Dashboard</p>
        </NavLink>
        <NavLink
          to="/product-research"
          className={({ isActive }) => `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiBoxes size={25} className='mr-2'  />
          <p className="p-px">Product Research</p>
        </NavLink>
        <NavLink
          to="/inventory-management"
          className={({ isActive }) => `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <HiOutlineCube size={25} className='mr-2'  />
          <p className="p-px">Inventory Management</p>
        </NavLink>
        <NavLink
          to="/price-profit"
          className={({ isActive }) => `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <BsGraphUp size={23}  className='mr-2' />
          <p className="p-px">Price & Profit</p>
        </NavLink>
        <NavLink
          to="/listing-optimizer"
          className={({ isActive }) => `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiCalendar size={25}  className='mr-2' />
          <p className="p-px">Listing Optimizer</p>
        </NavLink>
        <NavLink
          to="/alerts-compliance"
          className={({ isActive }) => `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <IoMdTime size={25}  className='mr-2' />
          <p className="p-px">Alerts & Compliance</p>
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) => `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiMoneyBill size={25}  className='mr-2' />
          <p className="p-px">Analytics</p>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'bg-blue-100' : ''}`}
        >
          <CiSettings size={25}  className='mr-2' />
          <p className="p-px">Settings</p>
        </NavLink>
      </nav>
    </div>
  );
}
