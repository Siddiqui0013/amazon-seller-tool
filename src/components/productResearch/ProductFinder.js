import { useState, useEffect} from 'react';
import EarthbornImg from '../../assets/productFinder.jpg'
import LineChart from "../charts/linechart"
import Popup from "./Popup"

function ProductFinder() {


  const [categories, setCategories] = useState({}); 
  const [catArray, setCatArray] = useState([]); 

  const [deals, setDeals] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.keepa.com/category?key=2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban&domain=1&category=0');
        const data = await response.json();
        setCategories(data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories(); 
  }, []);


  useEffect(() => {
      if (categories.categories) {
      const newArray = Object.values(categories.categories) 
      setCatArray(newArray);
    }
  }, [categories]); 


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: { min: '', max: '' },
    salesRank: { min: '', max: '' },
    deltaRange: { min: '', max: '' },
    reviewRating: '',
    title: '',
    hasReviews: false,
    sortType : '',
    dateRange: '',
    filterErotic: false
  });

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRangeChange = (field, minMax, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: { ...prevFilters[field], [minMax]: value },
    }));
  };

  const testing = async () => {
    const queryJSON = {
      page: 0,
      domainId: 1,
      priceTypes: [0],
      "isFilterEnabled": true,
      "isRangeEnabled": true,
      "singleVariation": true,

    };

    if (filters.category && filters.category !== '') {
      queryJSON.includeCategories = [parseInt(filters.category)];
    }

    if(filters.dateRange && filters.dateRange !== '') {
      queryJSON.dateRange = parseInt(filters.dateRange);
    }

    if (filters.sortType && filters.sortType !== '') {
      queryJSON.sortType = parseInt(filters.sortType);
    }

    if (filters.priceRange.min && filters.priceRange.max) {
      queryJSON.currentRange = [
        filters.priceRange.min = parseInt(filters.priceRange.min),
        filters.priceRange.max = parseInt(filters.priceRange.max) 
      ].filter(x => x !== null);
    }
    if (filters.priceRange.min || filters.priceRange.max) {
      queryJSON.currentRange = [
        filters.priceRange.min ? parseInt(filters.priceRange.min) : 0,
        filters.priceRange.max ? parseInt(filters.priceRange.max) : 0
      ].filter(x => x !== null);
    }

    if (filters.salesRank.min && filters.salesRank.max) {
      queryJSON.salesRankRange = [
        filters.salesRank.min ? parseInt(filters.salesRank.min) : null,
        filters.salesRank.max ? parseInt(filters.salesRank.max) : null
      ].filter(x => x !== null);
    }

    if (filters.deltaRange.min && filters.deltaRange.max) {
      queryJSON.deltaRange = [
        filters.deltaRange.min ? parseInt(filters.deltaRange.min) : null,
        filters.deltaRange.max ? parseInt(filters.deltaRange.max) : null
      ].filter(x => x !== null);
    }

    if (filters.reviewRating > 0) {
      queryJSON.minRating = parseInt(filters.reviewRating);
    }

    if (filters.title) {
      queryJSON.titleSearch = filters.title;
    }

    if (filters.hasReviews) {
      queryJSON.hasReviews = true;
    }

    if (filters.filterErotic) {
      queryJSON.filterErotic = true;
    }

    console.log(JSON.stringify(queryJSON, null, 2));

    const query2 = JSON.stringify(queryJSON)

    const response = await fetch(`https://api.keepa.com/deal?key=2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban&selection=${query2}`)
    const dealsData = await response.json()

    const dealsArray = dealsData.deals.dr
    setDeals(dealsArray)
    
    openPopup();
  };


  const lines3data = [
    { name: "Page A", LastMonth: 4000, ThisMonth: 2400, amt: 2400 },
    { name: "Page B", LastMonth: 3000, ThisMonth: 1398, amt: 2210 },
    { name: "Page C", LastMonth: 2000, ThisMonth: 9800, amt: 2290 },
  ];
  const line3 = [
    { dataKey: "ThisMonth", stroke: "#8884d8", activeDot: { r: 8 } },
    { dataKey: "LastMonth", stroke: "#ffc658" },
  ];



  return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

      <div className="bg-gray-50 p-4 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium">Category</label>
            <select
              name="category"
              className="w-full border border-gray-300 rounded p-2"
              onChange={handleFilterChange}
              value={filters.category}
            >

              <option value="">Select Category</option>
              {catArray.map((category) => (
                <option key={category.catId} value={category.catId}>{category.name}</option>
              ))}


            </select>
          </div>


          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium">Date Range</label>
            <p className='text-sm mb-2 text-gray-600'>Time interval in which the product changed.</p>
            <select
              name="dateRange"
              className="w-full border border-gray-300 rounded p-2"
              onChange={handleFilterChange}
              value={filters.dateRange}
            >

              <option value="">Select Date Range </option>
              <option value="0">Last 24 Hours </option>
              <option value="1">Last 7 Days</option>
              <option value="2">Last 31 Days</option>
              <option value="3">Last 90 Days</option>


            </select>
          </div>


          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium">Sort By </label>
            <p className='text-sm mb-2 text-gray-600'>Determines the sort order of the retrieved deals.</p>
            <select
              name="sortType"
              className="w-full border border-gray-300 rounded p-2"
              onChange={handleFilterChange}
              value={filters.sortType}
            >

              <option value="">Select Sorting Order </option>
              <option value="1">Deal age - Newest deals first</option>
              <option value="2">Absolute delta - Highest delta to lowest</option>
              <option value="3">Sales Rank - Lowest rank to highest</option>
              <option value="4">Percentage delta - Highest percent to lowest</option>


            </select>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Price Range</label>
            <p className='text-sm mb-2 text-gray-600'>Set the minimum and maximum current price values for products.</p>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min Price"
                className="w-full border border-gray-300 rounded py-2 px-4"
                value={filters.priceRange.min}
                onChange={(e) => handleRangeChange('priceRange', 'min', e.target.value)}
              />
              <span className='pt-2'>-</span>
              <input
                type="number"
                placeholder="Max Price"
                className="w-full border border-gray-300 rounded p-2"
                value={filters.priceRange.max}
                onChange={(e) => handleRangeChange('priceRange', 'max', e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Sales Rank</label>
            <p className='text-sm mb-2 text-gray-600'>Define the range for the product's sales rank.</p>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min Sales Rank"
                className="w-full border border-gray-300 rounded py-2 px-4"
                value={filters.salesRank.min}
                onChange={(e) => handleRangeChange('salesRank', 'min', e.target.value)}
              />
              <span className='pt-2'>-</span>
              <input
                type="number"
                placeholder="Max Sales Rank"
                className="w-full border border-gray-300 rounded p-2"
                value={filters.salesRank.max}
                onChange={(e) => handleRangeChange('salesRank', 'max', e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Delta Range - Price Change</label>
            <p className='text-sm mb-2 text-gray-600'>Set the allowed difference between the current price and its historical average.</p>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min Price"
                className="w-full border border-gray-300 rounded py-2 px-4"
                value={filters.deltaRange.min}
                onChange={(e) => handleRangeChange('deltaRange', 'min', e.target.value)}
              />
              <span className='pt-2'>-</span>
              <input
                type="number"
                placeholder="Max Price"
                className="w-full border border-gray-300 rounded p-2"
                value={filters.deltaRange.max}
                onChange={(e) => handleRangeChange('deltaRange', 'max', e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 mb-4">
            <label className="text-lg font-medium">Include Items with reviews</label>
            <input 
              type="checkbox" 
              name="hasReviews"
              checked={filters.hasReviews}
              onChange={handleFilterChange}
              className="toggle" 
            />
          </div>

          <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Minimum Review Rating</label>
          <p className='text-sm mb-2 text-gray-600'>Set the minimum rating for products, ranging from 0 to 50 (e.g., 45 = 4.5 stars).</p>
          <input
            type="range"
            name="reviewRating"
            min="0"
            max="50"
            value={filters.reviewRating}
            className="w-full"
            onChange={handleFilterChange}
          />
          <span>{filters.reviewRating}</span>
        </div>         

          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium">Product Title Search</label>
            <p className='text-sm mb-2 text-gray-600'>Search for products by entering keywords in the product title.</p>
            <input
              type="text"
              name="title"
              value={filters.title}
              className="w-full p-2 border border-gray-300 rounded outline-none"
              onChange={handleFilterChange}
              placeholder='Enter product title'
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="text-lg font-medium">Include Items listed as Adults</label>
            <input 
              type="checkbox" 
              name="filterErotic"
              checked={filters.filterErotic}
              onChange={handleFilterChange}
              className="toggle" 
            />
          </div>

          <button 
            onClick={testing} 
            className="bg-[#FF9900] text-white p-2 mt-6 rounded w-full hover:bg-[#FF8800]">
            Find Products
          </button>
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




    </div>




  </div>

</div>

<Popup isOpen={isPopupOpen} onClose={closePopup}>
        <h2 className="text-lg font-semibold mb-2">List of All Products</h2>
        <div className="overflow-auto md:max-h-96">
            {deals.map((item) => (
            <div
              key={item.asin}
              className="border-b border-gray-200 py-2 flex items-center"
            >
              <img
                src={`https://images-na.ssl-images-amazon.com/images/I/${String.fromCharCode.apply("", item.image)}`}
                alt="Product"
                className="w-20 h-20 mr-4"
              />
              <div>
                <p>{item.title}</p>
                <p className="text-sm text-gray-500">ASIN : {item.asin}</p>
                <p className="text-sm text-gray-500">Price : { parseFloat((item.current[0])/100)   }$</p>
              </div>
            </div>
          ))}
        </div>
      </Popup>

    </div>
  );
}
export default ProductFinder;




// import { useState} from 'react';
// import EarthbornImg from '../../assets/productFinder.jpg'
// import Popup from "./Popup"

// function ProductFinder() {

//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [filters, setFilters] = useState({
//     category: '',
//     priceRange: { min: '', max: '' },
//     salesRank: { min: '', max: '' },
//     estimatedSales: { min: '', max: '' },
//     profitMargin: '30',
//     reviewRating: 40,
//     fulfillmentMethod: [],
//   });

//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   const handlePriceChange = (minMax, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       priceRange: { ...prevFilters.priceRange, [minMax]: value },
//     }));
//   };

//   const testing = async () => {
//     const jsonData = JSON.stringify(filters, null, 2);
//     console.log(jsonData);
//   };

//   return (
//     <div className="min-h-screen p-6">
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

//       <div className="bg-gray-50 p-4 shadow-md rounded-md">
//           <h2 className="text-xl font-semibold mb-4">Filters</h2>

//           <div className="mb-4">
//             <label className="block mb-2 text-md font-medium">Category</label>
//             <select
//               name="category"
//               className="w-full border border-gray-300 rounded p-2"
//               onChange={handleFilterChange}
//             >
//               <option value="">Select Root Category</option>
//               <option value="category1">Category 1</option>
//               <option value="category2">Category 2</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block  text-md font-medium">Price Range</label>
//             <p className='text-sm mb-2 text-gray-600'>Set the minimum and maximum current price values for products.</p>
//             <div className="flex space-x-2">
//               <input
//                 type="number"
//                 placeholder="Min Price"
//                 className="w-full border border-gray-300 rounded py-2 px-4"
//                 onChange={(e) => handlePriceChange('min', e.target.value)}
//               />
//               <span className='pt-2'>-</span>
//               <input
//                 type="number"
//                 placeholder="Max Price"
//                 className="w-full border border-gray-300 rounded p-2"
//                 onChange={(e) => handlePriceChange('max', e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-md font-medium">Sales Rank</label>
//             <p className='text-sm mb-2 text-gray-600'>Define the range for the product's sales rank.</p>
//             <div className="flex space-x-2">
//               <input
//                 type="number"
//                 placeholder="Min Sales Rank"
//                 className="w-full border border-gray-300 rounded py-2 px-4"
//                 onChange={(e) => handlePriceChange('min', e.target.value)}
//               />
//               <span className='pt-2'>-</span>
//               <input
//                 type="number"
//                 placeholder="Max Sales Rank"
//                 className="w-full border border-gray-300 rounded p-2"
//                 onChange={(e) => handlePriceChange('max', e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-md font-medium">Delta Range - Price Change</label>
//             <p className='text-sm mb-2 text-gray-600'>Set the allowed difference between the current price and its historical average..</p>
//             <div className="flex space-x-2">
//               <input
//                 type="number"
//                 placeholder="Min Price"
//                 className="w-full border border-gray-300 rounded py-2 px-4"
//                 onChange={(e) => handlePriceChange('min', e.target.value)}
//               />
//               <span className='pt-2'>-</span>
//               <input
//                 type="number"
//                 placeholder="Max Price"
//                 className="w-full border border-gray-300 rounded p-2"
//                 onChange={(e) => handlePriceChange('max', e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 text-md font-medium">Minimum Review Rating</label>
//             <p className='text-sm mb-2 text-gray-600'>Set the minimum rating for products, ranging from 0 to 50 (e.g., 45 = 4.5 stars).</p>
//             <input
//               type="range"
//               name="reviewRating"
//               min="0"
//               max="50"
//               value={filters.reviewRating}
//               className="w-full"
//               onChange={handleFilterChange}
//             />
//             <span>{filters.reviewRating}</span>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 text-md font-medium">Product Title Search</label>
//             <p className='text-sm mb-2 text-gray-600'>Search for products by entering keywords in the product title.</p>
//             <input
//               type="text"
//               name="title"
//               value={filters.title}
//               className="w-full p-2 outline-none"
//               onChange={handleFilterChange}
//               placeholder='Enter product title'
//             />
//           </div>

//           <div className="flex items-center justify-between mt-2 mb-4">
//     <label className="text-sm font-medium">Include Items with reviews</label>
//     <input type="checkbox" className="toggle" />
//   </div>

//   <div className="flex items-center justify-between mb-4">
//     <label className="text-sm font-medium">Include Items listed as Adults</label>
//     <input type="checkbox" className="toggle" />
//   </div>

//           <button 
//             onClick={testing} 
//             className="bg-[#FF9900] text-white p-2 mt-6 rounded">
//             Find Products
//           </button>
//         </div>

// </div>

// <Popup isOpen={isPopupOpen} onClose={closePopup}>
//         <h2 className="text-lg font-semibold mb-2">List of All Products</h2>
//         <div className="overflow-auto md:max-h-96">
//           {Array.from({ length: 10 }, (_, index) => (
//             <div
//               key={index}
//               className="border-b border-gray-200 py-2 flex items-center"
//             >
//               <img
//                 src={EarthbornImg}
//                 alt="Product"
//                 className="w-20 h-20 mr-4"
//               />
//               <div>
//                 <p>Earthborn Holistic Primitive Feline Cat Food</p>
//                 <p className="text-sm text-gray-500">ASIN: B0051G8KZM</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Popup>

//     </div>
//   );
// }

// export default ProductFinder;