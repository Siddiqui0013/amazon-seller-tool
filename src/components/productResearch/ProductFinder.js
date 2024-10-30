import React, { useState } from 'react';
import EarthbornImg from '../../assets/productFinder.jpg'
import LineChart from "../charts/linechart"
import Popup from "./Popup"

function ProductFinder() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    console.log(isPopupOpen)

  }
  const closePopup = () => 
    {
      setIsPopupOpen(false);
      console.log(isPopupOpen)
    }


  const lines3data = [
    { name: "Page A", LastMonth: 4000, ThisMonth: 2400, amt: 2400 },
    { name: "Page B", LastMonth: 3000, ThisMonth: 1398, amt: 2210 },
    { name: "Page C", LastMonth: 2000, ThisMonth: 9800, amt: 2290 },
  ];

  const line3 = [
    { dataKey: "ThisMonth", stroke: "#8884d8", activeDot: { r: 8 } },
    { dataKey: "LastMonth", stroke: "#ffc658" },
  ];

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
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 shadow-md rounded-md">
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

          <div className="mt-4 flex gap-2 flex-col">
            <label className="block mb-2 mt-4 text-lg font-medium">Fulfillment Method</label>
            
            <div className='space-x-2'>
            <input type="checkbox" className="toggle" />
            <label className="text-lg ">FBA</label>
            </div>

            <div className='space-x-2'>
            <input type="checkbox" className="toggle" />
            <label className="text-lg ">FBM</label>
            </div>

            <div className='space-x-2'>
            <input type="checkbox" className="toggle" />
            <label className="text-lg ">Amazon</label>
            </div>

          </div>
          <button onClick={openPopup} className="bg-[#FF9900] text-white p-2 mt-6 rounded">Find Products</button>
        </div>


<div className="bg-gray-50 p-4 shadow-md rounded-md">
  <h2 className="text-xl font-semibold mb-4">Results</h2>

  <div className="flex items-center justify-between mb-4">
    <label className="text-sm font-medium">Card View / List View</label>
    <input type="checkbox" className="toggle" />
  </div>


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
      <p> $13.20 </p>
    </div>


  <div className="bg-gray-50 p-4 rounded-md shadow mb-4">
    <div className="flex items-center space-x-4">
      <div>
        <h3 className="text-lg font-semibold">Earthborn</h3>
        <p className="text-sm pb-2">Price: $13.20</p>
        <div className="flex justify-between m-auto">
          <p className="text-sm">BSR: 12k (1%)</p>
          <p className="text-sm">Est. Sales: 12k (1%)</p>
          <p className="text-sm">Max Cost: $10.15</p>
        </div>
        <p className="text-sm font-semibold text-green-600">Profit Potential: $13.20</p>
      </div>
    </div>
    </div>

    <div className='flex justify-between text-white gap-1'>
      <button className='bg-[#FF9900] rounded-md py-2 w-[33%] '>Track</button>
      <button className='bg-[#FF9900] rounded-md py-2 w-[33%] '>Analyze</button>
      <button className='bg-[#FF9900] rounded-md  w-[33%] '>View on Amazon</button>
    </div>

    {/* <div className='flex justify-between text-white'>
      <button className='bg-[#FF9900] rounded-md py-2 px-[10px]'>Track</button>
      <button className='bg-[#FF9900] rounded-md py-2  px-[10px]'>Analyze</button>
      <button className='bg-[#FF9900] rounded-md py-2 px-[10px]'>View on Amazon</button>
    </div> */}


</div>

  <div className="p-4 shadow-md md:col-span-1 col-span-2 bg-gray-50 rounded-md">
    <h2 className="text-xl font-semibold mb-4">Detailed View</h2>
    
    <div className='border-2 border-gray-300'>
    <img
      src={EarthbornImg}
      alt="Detailed Product"
      className="w-40 h-40 mx-auto rounded-md mb-4"
    />

    </div>
    
    <p className="text-xl pb-2 font-semibold">Earthborn Holistic Primitive Feline Grain-free Dry Cat Food 5 pound (Pack of 1)</p>
    <p className="text-lg text-gray-700">ASIN: B0051GBKZM</p>

    <div className="mt-4 bg-gray-100 rounded p-2">
      <h3 className="text-lg font-semibold">Sales Rank History</h3>
      <div className="w-full    mt-2 rounded">
      <LineChart data={lines3data} lines={line3} width = {300} height = {200}/>        
        </div>

      <div className="flex justify-between">
      </div>

    </div>

    <div className="mt-4">
      <h3 className="text-lg font-semibold">Estimated Sales Calculator</h3>

<div className='flex flex-col gap-4'>
<div className="w-full">

  <div className='mt-2 flex gap-1'>
    <div>
    <h3 className='my-2'>Price</h3>
  <input
          type="text"
          placeholder="Price"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
    </div>
    <div>
    <h3 className='my-2'>Sales Rank</h3>  
        <input
          type="text"
          placeholder="Sales Rank"
          className="border border-gray-300 p-2 rounded-md w-full"
        />

    </div>
  </div>

  
      </div>
      <h3>Category</h3>
      <input
          type="text"
          placeholder="Category"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      <h3>Sales Velocity</h3>        
                <input
        type="text"
        placeholder="Sales Velocity"
        className="border border-gray-300 p-2 rounded-md w-full"
      />
</div>

      <button className="bg-[#FF9900] text-white p-2 mt-4 rounded">Calculate Sales</button>


      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <h2 className="text-lg font-semibold mb-2">List of All Products</h2>
        <div className="overflow-auto md:max-h-96">
          {Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-2 flex items-center"
            >
              <img
                src={EarthbornImg}
                alt="Product"
                className="w-20 h-20 mr-4"
              />
              <div>
                <p>Earthborn Holistic Primitive Feline Cat Food</p>
                <p className="text-sm text-gray-500">ASIN: B0051G8KZM</p>
              </div>
            </div>
          ))}
        </div>
      </Popup>



    </div>
  </div>
</div>

    </div>
  );
}

export default ProductFinder;