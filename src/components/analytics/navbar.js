import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='border-b-2 border-gray-300 p-0 m-0'>
      <nav className="flex mt-3 ">
        <NavLink
          to="/analytics/sales-analytics"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Sales Analytics</p>
        </NavLink>

        <NavLink
          to="/analytics/profit-analytics"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Profit Analytics</p>
        </NavLink>

        <NavLink
          to="/analytics/inventory-analytics"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Inventory Analytics</p>
        </NavLink>

        <NavLink
          to="/analytics/customer-insights"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Customer Insights</p>
        </NavLink>

        <NavLink
          to="/analytics/team-management"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Team Management</p>
        </NavLink>
      </nav>
    </div>
  );
}
