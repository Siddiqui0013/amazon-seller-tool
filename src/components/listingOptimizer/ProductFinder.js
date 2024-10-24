import React, { useState } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import EarthbornImg from '../../assets/productFinder.jpg'

function ProductFinder() {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: { min: '', max: '' },
    salesRank: { min: '', max: '' },
    estimatedSales: { min: '', max: '' },
    profitMargin: '30',
    reviewRating: 40,
    fulfillmentMethod: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="min-h-screen p-4">
      <div className="flex gap-4">
        <div className="bg-white w-[33%] p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Multi-level Category</label>
            <select
              name="category"
              className="w-full border border-gray-300 rounded p-2"
              onChange={handleFilterChange}
            >
              <option value="">Select Multi-level Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Price Range</label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="minPrice"
                placeholder="40,000$"
                className="w-full border border-gray-300 rounded py-2 px-4"
                onChange={handleFilterChange}
              />
              <span className='pt-2'>-</span>
              <input
                type="number"
                name="maxPrice"
                className="w-full border border-gray-300 rounded p-2"
                onChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Minimun Sales Rank</label>
            <input
              type="number"
              name="minimunSalesRank"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Minimun Rank"
              onChange={handleFilterChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Maximum Sales Rank</label>
            <input
              type="number"
              name="maximumSalesRank"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Maximum Rank"
              onChange={handleFilterChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Estimated Sales</label>
            <input
              type="number"
              name="estimatedSales"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="100-500"
              onChange={handleFilterChange}
            />
          </div>

          <div className="my-6">
            <label className="block mb-1 text-sm font-medium">Profit Margin</label>
            <input
              type="range"
              name="profitMargin"
              min="0"
              max="100"
              value={filters.profitMargin}
              className="w-full"
              onChange={handleFilterChange}
            />
            <span>{filters.profitMargin}%</span>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Review Rating</label>
            <input
              type="range"
              name="reviewRating"
              min="0"
              max="100"
              value={filters.reviewRating}
              className="w-full"
              onChange={handleFilterChange}
            />
            <span>{filters.reviewRating}%</span>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium">Fulfillment Method</label>
            <Rater className="flex space-x-3 text-4xl" total={5} rating={2} />
          </div>
        </div>

        {/* <div className="bg-white w-3/4 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Results</h2>

          <div className="bg-gray-50 p-4 rounded-md shadow mb-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Earthborn</h3>
              <p className="text-sm">Price: $13.20</p>
              <p className="text-sm">Estimated Sales: 12k (12%)</p>
              <p className="text-sm">Profit Potential: $0.115</p>
            </div>
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="w-16 h-16 rounded-md"
            />
          </div> */}

<div className="bg-white w-[33%] p-4 shadow-md rounded-md">
  <h2 className="text-xl font-semibold mb-4">Results</h2>

  {/* Toggle between Card View / List View */}
  <div className="flex items-center justify-between mb-4">
    <label className="text-sm font-medium">Card View / List View</label>
    <input type="checkbox" className="toggle" />
  </div>

  {/* Dropdown filters */}
  {/* <div className="mb-4">
    <select className="w-full border border-gray-300 rounded p-2 mb-2">
      <option>Best Sellers Rank</option>
      <option>Price</option>
      <option>Estimated Sales</option>
      <option>Profit Potential</option>
    </select>
    <select className="w-full border border-gray-300 rounded p-2 mb-2">
      <option>Price</option>
      <option>Best Sellers Rank</option>
      <option>Estimated Sales</option>
      <option>Profit Potential</option>
    </select>
    <select className="w-full border border-gray-300 rounded p-2 mb-2">
      <option>Estimated Sales</option>
      <option>Best Sellers Rank</option>
      <option>Price</option>
      <option>Profit Potential</option>
    </select>
    <select className="w-full border border-gray-300 rounded p-2 mb-2">
      <option>Profit Potential</option>
      <option>Best Sellers Rank</option>
      <option>Price</option>
      <option>Estimated Sales</option>
    </select>
  </div> */}

<div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Best Sellers Rank</label>
            <select
              name="sellRank"
              className="w-full border border-gray-300 rounded p-2"
              onChange={handleFilterChange}
            >
              <option value="">Best Sellers Rank</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Price</label>
            <select
              name="price"
              className="w-full border border-gray-300 rounded p-2"
              onChange={handleFilterChange}
            >
              <option value="">Price</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Estimated Sales</label>
            <select
              name="estimatedSales"
              className="w-full border border-gray-300 rounded p-2"
              onChange={handleFilterChange}
            >
              <option value="">Estimated Sales</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Profit Potential</label>
            <select
              name="profitPotential"
              className="w-full border border-gray-300 rounded p-2"
              onChange={handleFilterChange}
            >
              <option value="">Profit Potential</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>


  <div className="bg-gray-50 p-4 rounded-md shadow mb-4">
      <img
        src={EarthbornImg}
        alt="Earthborn Product"
        className="w-64 rounded-md"
      />
    </div>

    <div className='flex '>
      <p>Price : </p>
      <p>$ 13.20 </p>
    </div>


  <div className="bg-gray-50 p-4 rounded-md shadow mb-4">
    <div className="flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/100"
        alt="Earthborn Product"
        className="w-16 h-16 rounded-md"
      />
      <div>
        <h3 className="text-lg font-semibold">Earthborn</h3>
        <p className="text-sm">Price: $13.20</p>
        <div className="flex justify-between">
          <p className="text-sm">BSR: 12k (1%)</p>
          <p className="text-sm">Est. Sales: 12k (1%)</p>
          <p className="text-sm">Max Cost: $10.15</p>
        </div>
        <p className="text-sm font-semibold text-green-600">Profit Potential: $13.20</p>
      </div>
    </div>
    </div>

    {/* Buttons at the bottom */}
    {/* <div className="flex justify-between mt-4">
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Track</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Analyze</button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-md">View on Amazon</button>
    </div> */}
</div>




  <div className="p-4 shadow bg-white w-[33%] rounded-md">
    <h2 className="text-xl font-semibold mb-4">Detailed View</h2>
    <img
      src="https://via.placeholder.com/100"
      alt="Detailed Product"
      className="w-24 h-24 mx-auto rounded-md mb-4"
    />
    <p className="text-sm font-semibold">Earthborn Holistic Primitive Feline</p>
    <p className="text-sm">Price: $13.20</p>
    <p className="text-sm">ASIN: B0051GBKZM</p>

    <div className="mt-4">
      <h3 className="text-lg font-semibold">Sales Rank History</h3>
      <div className="flex justify-between">
        <p className="text-sm">Last Month: $3,004</p>
        <p className="text-sm">This Month: $4,504</p>
      </div>

      <div className="w-full h-40 bg-gray-100 mt-2 rounded">[Chart]</div>
    </div>

    <div className="mt-4">
      <h3 className="text-lg font-semibold">Estimated Sales Calculator</h3>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          placeholder="Price"
          className="border border-gray-300 p-2 rounded-md w-1/2"
        />
        <input
          type="text"
          placeholder="Sales Rank"
          className="border border-gray-300 p-2 rounded-md w-1/2"
        />
      </div>
      <button className="bg-blue-500 text-white p-2 mt-2 rounded">Calculate</button>
    </div>
  </div>
</div>

    </div>
  );
}

export default ProductFinder;
