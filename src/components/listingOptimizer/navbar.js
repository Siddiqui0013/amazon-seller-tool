import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='border-b-2 border-gray-500 p-0 m-0'>
      <nav className="flex mt-3 ">
        <NavLink
          to="/product-research/product-finder"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Product Finder</p>
        </NavLink>

        <NavLink
          to="/product-research/niche-analysis"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Niche Analysis</p>
        </NavLink>

        <NavLink
          to="/product-research/competitor-research"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Competitor Research</p>
        </NavLink>

        <NavLink
          to="/product-research/bulk-analysis"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Bulk Analysis</p>
        </NavLink>
      </nav>
    </div>
  );
}
