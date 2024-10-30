import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='border-b-2 border-gray-300 p-0 m-0'>
      <nav className="flex mt-3 ">
        <NavLink
          to="/listing-optimizer/listing-analyzer"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Listing Analyzer</p>
        </NavLink>

        <NavLink
          to="/listing-optimizer/keyword-research"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Keyword Research</p>
        </NavLink>

        <NavLink
          to="/listing-optimizer/ab-testing"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">A/B Testing</p>
        </NavLink>

        <NavLink
          to="/listing-optimizer/image-optimizor"
          className={({ isActive }) =>
            `p-3 rounded-lg flex gap-2 items-normal ${isActive ? 'text-blue-500' : ''}`
          }
          end
        >
          <p className="p-px">Image Optimizor</p>
        </NavLink>
      </nav>
    </div>
  );
}
