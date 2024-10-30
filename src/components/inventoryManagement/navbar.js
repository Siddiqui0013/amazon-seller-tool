import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='border-b-2 border-gray-300 p-0 m-0'>
      <nav className="flex mt-3 ">
        <NavLink
          to="/inventory-management/overview"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Overview</p>
        </NavLink>

        <NavLink
          to="/inventory-management/forecasting"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Forecasting</p>
        </NavLink>

        <NavLink
          to="/inventory-management/reordering"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Reordering</p>
        </NavLink>

        <NavLink
          to="/inventory-management/fba-management"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">FBA Management</p>
        </NavLink>
      </nav>
    </div>
  );
}
