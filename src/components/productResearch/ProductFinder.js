import { useState, useEffect } from "react";
import Popup from "./Popup";

function ProductFinder() {
	const [categories, setCategories] = useState({});
	const [catArray, setCatArray] = useState([]);

	const [detailsLoading, setdetailsLoading] = useState(false);

	const [deals, setDeals] = useState([]);

	const [productDetails, setproductDetails] = useState({
		title: "",
		BSR: "",
		img: "",
		category: "",
		price: "",
		reviewRating: "",
		reviews: "",
		BSRFlat: "",
		estimatedSales: "",
		FBAFee: "",
	});

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch(
					"https://api.keepa.com/category?key=2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban&domain=1&category=0"
				);
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
			const newArray = Object.values(categories.categories);
			setCatArray(newArray);
		}
	}, [categories]);

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [filters, setFilters] = useState({
		category: "",
		priceRange: { min: "", max: "" },
		salesRank: { min: "", max: "" },
		deltaRange: { min: "", max: "" },
		reviewRating: "",
		title: "",
		hasReviews: false,
		sortType: "",
		dateRange: "",
		filterErotic: true,
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
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleRangeChange = (field, minMax, value) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[field]: { ...prevFilters[field], [minMax]: value },
		}));
	};

	const testing = async () => {
    try {
    setdetailsLoading(true);

		const queryJSON = {
			page: 0,
			domainId: 1,
			priceTypes: [0],
			isFilterEnabled: true,
			isRangeEnabled: true,
			singleVariation: true,
			filterErotic: true,
		};

		if (filters.category && filters.category !== "") {
			queryJSON.includeCategories = [parseInt(filters.category)];
		}

		if (filters.dateRange && filters.dateRange !== "") {
			queryJSON.dateRange = parseInt(filters.dateRange);
		}

		if (filters.sortType && filters.sortType !== "") {
			queryJSON.sortType = parseInt(filters.sortType);
		}

		if (filters.priceRange.min && filters.priceRange.max) {
			queryJSON.currentRange = [
				(filters.priceRange.min = parseInt(filters.priceRange.min)),
				(filters.priceRange.max = parseInt(filters.priceRange.max)),
			].filter((x) => x !== null);
		}
		if (filters.priceRange.min || filters.priceRange.max) {
			queryJSON.currentRange = [
				filters.priceRange.min ? parseInt(filters.priceRange.min) : 0,
				filters.priceRange.max ? parseInt(filters.priceRange.max) : 0,
			].filter((x) => x !== null);
		}

		if (filters.salesRank.min && filters.salesRank.max) {
			queryJSON.salesRankRange = [
				filters.salesRank.min ? parseInt(filters.salesRank.min) : null,
				filters.salesRank.max ? parseInt(filters.salesRank.max) : null,
			].filter((x) => x !== null);
		}

		if (filters.salesRank.min || filters.salesRank.max) {
			queryJSON.salesRankRange = [
				filters.salesRank.min ? parseInt(filters.salesRank.min) : 0,
				filters.salesRank.max ? parseInt(filters.salesRank.max) : 0,
			].filter((x) => x !== null);
		}

		if (filters.deltaRange.min && filters.deltaRange.max) {
			queryJSON.deltaRange = [
				filters.deltaRange.min ? parseInt(filters.deltaRange.min) : null,
				filters.deltaRange.max ? parseInt(filters.deltaRange.max) : null,
			].filter((x) => x !== null);
		}

		if (filters.deltaRange.min || filters.deltaRange.max) {
			queryJSON.deltaRange = [
				filters.deltaRange.min ? parseInt(filters.deltaRange.min) : 0,
				filters.deltaRange.max ? parseInt(filters.deltaRange.max) : 0,
			].filter((x) => x !== null);
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
			queryJSON.filterErotic = false;
		}

		console.log(JSON.stringify(queryJSON, null, 2));

		const query2 = JSON.stringify(queryJSON);

		const response = await fetch(
			`https://api.keepa.com/deal?key=2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban&selection=${query2}`
		);
		const dealsData = await response.json();

		const dealsArray = dealsData.deals.dr;
		setDeals(dealsArray);

		openPopup();

		setFilters({
			category: "",
			priceRange: { min: "", max: "" },
			salesRank: { min: "", max: "" },
			deltaRange: { min: "", max: "" },
			reviewRating: "",
			title: "",
			hasReviews: false,
			sortType: "",
			dateRange: "",
			filterErotic: true,
		})
  } catch (error) {
    console.error(error);
  }
  finally{
    setdetailsLoading(false);
  }
	}


  async function handleProductClick(item) {
    try {
      setdetailsLoading(true);
      setproductDetails((p) => ({
        ...p,
        asin: item.asin,
        title: item.title,
        price: parseFloat(item.current[0] / 100),
      }));
      const [keepaResponse, rainforestResponse] = await Promise.all([
        fetch(
          `https://api.keepa.com/product?domain=1&key=2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban&asin=${item.asin}`
        ),
        fetch(
          `https://api.rainforestapi.com/request?api_key=9D5CBD8E1EEA44548567C61852F15F69&amazon_domain=amazon.com&asin=${item.asin}&type=product`
        )
      ]);
      const keepaData = await keepaResponse.json();
      const rainforestData = await rainforestResponse.json();
      setproductDetails((p) => ({
        ...p,
        category: keepaData.products[0].categoryTree[0].name,
        FBAFee: keepaData.products[0].fbaFees.pickAndPackFee
          ? keepaData.products[0].fbaFees.pickAndPackFee
          : 0,
      }));
        setproductDetails((p) => ({
        ...p,
        reviewRating: parseFloat(rainforestData.product.rating),
        reviews: rainforestData.product.ratings_total,
        img: rainforestData.product.main_image.link,
        BSRFlat: rainforestData.product.bestsellers_rank_flat,
        estimatedSales: rainforestData.product.recent_sales,
      }))  
    } catch (error) {
      console.error('Error fetching product details:', error);
    } finally {
      setdetailsLoading(false);
    }
  }

	return (
		<div className="min-h-screen p-6">
			<div className="grid grid-cols-2 relative md:grid-cols-3 gap-4">

 {detailsLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-[999]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
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
								<option key={category.catId} value={category.catId}>
									{category.name}
								</option>
							))}
						</select>
					</div>

					<div className="mb-4">
						<label className="block mb-2 text-lg font-medium">Date Range</label>
						<p className="text-sm mb-2 text-gray-600">
							Time interval in which the product changed.
						</p>
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
						<p className="text-sm mb-2 text-gray-600">
							Determines the sort order of the retrieved deals.
						</p>
						<select
							name="sortType"
							className="w-full border border-gray-300 rounded p-2"
							onChange={handleFilterChange}
							value={filters.sortType}
						>
							<option value="">Select Sorting Order </option>
							<option value="1">Deal age - Newest deals first</option>
							<option value="2">
								Absolute delta - Highest delta to lowest
							</option>
							<option value="3">Sales Rank - Lowest rank to highest</option>
							<option value="4">
								Percentage delta - Highest percent to lowest
							</option>
						</select>
					</div>

					<div className="mb-4">
						<label className="block text-lg font-medium">Price Range</label>
						<p className="text-sm mb-2 text-gray-600">
							Set the minimum and maximum current price values for products (Cents).
              <br/>
              <b>100 = 1$</b>
						</p>
						<div className="flex space-x-2">
							<input
								type="number"
								placeholder="Min Price"
								className="w-full border border-gray-300 rounded py-2 px-4"
								value={filters.priceRange.min}
								onChange={(e) =>
									handleRangeChange("priceRange", "min", e.target.value)
								}
							/>
							<span className="pt-2">-</span>
							<input
								type="number"
								placeholder="Max Price"
								className="w-full border border-gray-300 rounded p-2"
								value={filters.priceRange.max}
								onChange={(e) =>
									handleRangeChange("priceRange", "max", e.target.value)
								}
							/>
						</div>
					</div>

          <div className="mb-4">
						<label className="block text-lg font-medium">
							Delta Range - Price Change
						</label>
						<p className="text-sm mb-2 text-gray-600">
							Set the allowed difference between the current price and its
							historical average (Cents).
              <br/>
              <b>100 = 1$</b>
						</p>
						<div className="flex space-x-2">
							<input
								type="number"
								placeholder="Min Price"
								className="w-full border border-gray-300 rounded py-2 px-4"
								value={filters.deltaRange.min}
								onChange={(e) =>
									handleRangeChange("deltaRange", "min", e.target.value)
								}
							/>
							<span className="pt-2">-</span>
							<input
								type="number"
								placeholder="Max Price"
								className="w-full border border-gray-300 rounded p-2"
								value={filters.deltaRange.max}
								onChange={(e) =>
									handleRangeChange("deltaRange", "max", e.target.value)
								}
							/>
						</div>
					</div>

					<div className="mb-4">
						<label className="block text-lg font-medium">Sales Rank</label>
						<p className="text-sm mb-2 text-gray-600">
							Define the range for the product's sales rank.
						</p>
						<div className="flex space-x-2">
							<input
								type="number"
								placeholder="Min Sales Rank"
								className="w-full border border-gray-300 rounded py-2 px-4"
								value={filters.salesRank.min}
								onChange={(e) =>
									handleRangeChange("salesRank", "min", e.target.value)
								}
							/>
							<span className="pt-2">-</span>
							<input
								type="number"
								placeholder="Max Sales Rank"
								className="w-full border border-gray-300 rounded p-2"
								value={filters.salesRank.max}
								onChange={(e) =>
									handleRangeChange("salesRank", "max", e.target.value)
								}
							/>
						</div>
					</div>

					<div className="flex items-center justify-between mt-2 mb-4">
						<label className="text-lg font-medium">
							Include Items with reviews
						</label>
						<input
							type="checkbox"
							name="hasReviews"
							checked={filters.hasReviews}
							onChange={handleFilterChange}
							className="toggle"
						/>
					</div>

					<div className="mb-4">
						<label className="block mb-2 text-lg font-medium">
							Minimum Review Rating
						</label>
						<p className="text-sm mb-2 text-gray-600">
							Set the minimum rating for products, ranging from 0 to 50 (e.g.,
							45 = 4.5 stars).
						</p>
						<input
							type="range"
							name="reviewRating"
							min="0"
							max="50"
							value={filters.reviewRating}
							className="w-full"
							onChange={handleFilterChange}
						/>
						<b>{filters.reviewRating}</b>
					</div>

					<div className="mb-4">
						<label className="block mb-2 text-lg font-medium">
							Product Title Search
						</label>
						<p className="text-sm mb-2 text-gray-600">
							Search for products by entering keywords in the product title.
						</p>
						<input
							type="text"
							name="title"
							value={filters.title}
							className="w-full p-2 border border-gray-300 rounded outline-none"
							onChange={handleFilterChange}
							placeholder="Enter product title"
						/>
					</div>

					<div className="flex items-center justify-between mb-4">
						<label className="text-lg font-medium">
							Include Items listed as Adults
						</label>
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
						className="bg-[#FF9900] text-white p-2 mt-6 rounded w-full hover:bg-[#FF8800]"
					>
						Find Products
					</button>
				</div>

				<div className="bg-gray-50 p-4 shadow-md rounded-md">
					<h2 className="text-xl font-semibold mb-4">Results</h2>

					<div className="mb-4">
						<label className="text-lg font-bold">Price : </label>
						{<p>{productDetails.price}</p>}
					</div>
					<div className="mb-4">
						<label className="text-lg font-bold">FBA Fee : </label>
						{<p>{parseFloat(productDetails.FBAFee / 100)}</p>}
					</div>
					<div className="mb-4">
						<label className="text-lg font-bold">Total Reviews : </label>
						{<p>{productDetails.reviews}</p>}
					</div>
					<div className="mb-4">
						<label className="text-lg font-bold">Rating : </label>
						{<p>{productDetails.reviewRating}</p>}
					</div>
					<div className="mb-4">
						<label className="text-lg font-bold">Estimated Sales : </label>
						{
							<p>
								{productDetails.estimatedSales
									? productDetails.estimatedSales
									: "No Data"}
							</p>
						}
					</div>
					<div className="mb-4">
						<label className="text-lg font-bold">BSR : </label>
						{<p>{productDetails.BSRFlat ? productDetails.BSRFlat : "N/A"}</p>}
					</div>

					<div className="bg-gray-50 p-4 rounded-md shadow mb-4">
						<img
							src={
								productDetails.img
									? productDetails.img
									: "https://via.placeholder.com/150"
							}
							alt="Earthborn Product"
							className="w-64 rounded-md"
						/>
					</div>

					<div className="bg-gray-50 p-4 rounded-md shadow mb-4">
						<div className="flex items-center space-x-4">
							<div>
								<h3 className="text-lg font-semibold">
									{productDetails.title}
								</h3>
								<div className="flex gap-2 justify-between flex-col m-auto">
									<p className="text-sm">
										Price: $
										{productDetails.price ? productDetails.price : "N/A"}
									</p>
									<p className="text-sm">
										Est. Sales :{" "}
										{productDetails.estimatedSales
											? productDetails.estimatedSales
											: "N/A"}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between text-white gap-1">
						<button className="bg-[#FF9900] rounded-md py-2 w-[33%] ">
							Track
						</button>
						<button className="bg-[#FF9900] rounded-md py-2 w-[33%] ">
							Analyze
						</button>
						<button className="bg-[#FF9900] rounded-md  w-[33%] "
						onClick={() => window.open(`https://www.amazon.com/dp/${productDetails.asin}`, "_blank")}
						// href={`https://www.amazon.com/dp/${productDetails.asin}`}
						>
							View on Amazon
						</button>
					</div>
				</div>

				<div className="p-4 shadow-md md:col-span-1 col-span-2 bg-gray-50 rounded-md">
					<h2 className="text-xl font-semibold mb-4">Detailed View</h2>

					<div className="border-2 border-gray-300">
						<img
							src={
								productDetails.img
									? productDetails.img
									: "https://placehold.co/600x400"
							}
							alt="Detailed Product"
							className="w-40 h-40 mx-auto rounded-md mb-4"
						/>
					</div>

					<p className="text-xl pb-2 font-semibold">
						{productDetails.title ? productDetails.title : "Loading..."}
					</p>
					<p className="text-lg text-gray-700">
						`{productDetails.asin ? productDetails.asin : "Loading..."}`
					</p>

					<div className="mt-4 bg-gray-100 rounded p-2">
						<h3 className="text-lg font-semibold">Price Change History</h3>
						<div className="w-full    mt-2 rounded">
							<img
								alt="Graph"
								src={
									productDetails.asin
										? `https://api.keepa.com/graphimage?key=2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban&domain=1&width=350&height=250&asin=${productDetails.asin}`
										: "https://placehold.co/600x400"
								}
								width={300}
								height={200}
							/>
						</div>

						<div className="flex justify-between"></div>
					</div>

					<div className="mt-4 bg-gray-100 rounded p-2">
						<h3 className="text-lg font-semibold">Best Seller Rank</h3>
						<div className="w-full    mt-2 rounded">
							<img
								alt="Graph"
								src={
									productDetails.asin
										? `https://api.keepa.com/graphimage?key=2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban&domain=1&amazon=0&new=0&cSales=3a883a&width=350&height=250&salesrank=1&asin=${productDetails.asin}`
										: "https://placehold.co/600x400"
								}
								width={300}
								height={200}
							/>
						</div>

						<div className="flex justify-between"></div>
					</div>

					<div className="mt-4">
						<h3 className="text-lg font-semibold">
							Estimated Sales Calculator
						</h3>

						<div className="flex flex-col gap-4">
							<div className="w-full">
								<div className="mt-2 flex gap-1">
									<div>
										<h3 className="my-2">Price</h3>
										<input
											type="text"
											placeholder={
												productDetails.price ? productDetails.price : "N/A"
											}
											readOnly
											className="border border-gray-300 p-2 rounded-md w-full"
										/>
									</div>
								</div>
							</div>
							<h3>Category</h3>
							<input
								type="text"
								readOnly
								placeholder={
									productDetails.category ? productDetails.category : "N/A"
								}
								className="border border-gray-300 p-2 rounded-md w-full"
							/>
						</div>
					</div>
				</div>
			</div>

			<Popup isOpen={isPopupOpen} onClose={closePopup}>
				<h2 className="text-lg font-semibold mb-2">List of All Products</h2>
				<div className="overflow-auto md:max-h-96">
					{deals.length > 0 ? (
						deals.map((item) => (
							<div
								key={item.asin}
								onClick={() => handleProductClick(item) }
								className={`border-b cursor-pointer border-gray-200 py-2 flex items-center`}
							>
								<img
									src={`https://images-na.ssl-images-amazon.com/images/I/${String.fromCharCode.apply(
										"",
										item.image
									)}`}
									alt="Product"
									className="w-20 h-20 mr-4"
								/>
								<div>
									<p>{item.title}</p>
									<p className="text-sm text-gray-500">ASIN : {item.asin}</p>
									<p className="text-sm text-gray-500">
										Price : {parseFloat(item.current[0] / 100)}$
									</p>
								</div>
							</div>
						))
					) : (
						<div>
							<p>No Products Found</p>
						</div>
					)}
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
