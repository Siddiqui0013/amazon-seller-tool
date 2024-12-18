import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='border-b-2 border-gray-500 p-0 m-0'>
      <nav className="flex mt-3 ">
        <NavLink
          to="/settings/account-settings"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Account Settings</p>
        </NavLink>

        <NavLink
          to="/settings/notification"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Notification and Prefrences</p>
        </NavLink>

        <NavLink
          to="/settings/api"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">API and Integration</p>
        </NavLink>

        <NavLink
          to="/settings/billing"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Billing and Subscription</p>
        </NavLink>

        <NavLink
          to="/settings/additional-settings"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Additional Settings</p>
        </NavLink>

      </nav>
    </div>
  );
}
