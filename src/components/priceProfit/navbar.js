import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='border-b-2 border-gray-300 p-0 m-0'>
      <nav className="flex mt-3 ">
        <NavLink
          to="/price-profit/price-tracker"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Price Tracker</p>
        </NavLink>

        <NavLink
          to="/price-profit/profit-calculator"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Profit Calculator</p>
        </NavLink>

        <NavLink
          to="/price-profit/buybox-analysis"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Buy Box Analysis </p>
        </NavLink>

        <NavLink
          to="/price-profit/repricing-rules"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Repricing Rules</p>
        </NavLink>
      </nav>
    </div>
  );
}
