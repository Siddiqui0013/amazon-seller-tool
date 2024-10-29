import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='border-b-2 border-gray-500 p-0 m-0'>
      <nav className="flex mt-3 ">
        <NavLink
          to="/alerts-compliance/alert-center"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Alert Center</p>
        </NavLink>

        <NavLink
          to="/alerts-compliance/compliance-checker"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Compliance Checker</p>
        </NavLink>

        <NavLink
          to="/alerts-compliance/brand-protection"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Brand Protection</p>
        </NavLink>

        <NavLink
          to="/alerts-compliance/feedback-manager"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Feedback Manager</p>
        </NavLink>
      </nav>
    </div>
  );
}
