import React from 'react';
import PieChart from "../charts/PieChart"
import LineChart from "../charts/LineChart"
import {AiOutlineSearch} from "react-icons/ai"

const CompetitorResearch = () => {

  const sellerData = [
    {
      competitor: 'Competitor A',
      price: '$29.99',
      sales: 1500,
      revenue: '$45,000',
      visits: 30000,
      marketplaceShare: '⭐⭐⭐⭐⭐',
    },
    {
      competitor: 'Competitor B',
      price: '$29.99',
      sales: 2000,
      revenue: '$45,000',
      visits: 20000,
      marketplaceShare: '⭐⭐⭐⭐⭐',
    },
    {
      competitor: 'Competitor C',
      price: '$29.99',
      sales: 1800,
      revenue: '$45,000',
      visits: 1000,
      marketplaceShare: '⭐⭐⭐⭐',
    },
  ];
  
  const line1data = [
    { name: "Page A", av: 4000, amt: 2400 },
    { name: "Page B", av: 5000, amt: 2400 },
  ];
  const line1 = [
    { dataKey: "av", stroke: "#8884d8", activeDot: { r: 8 } },
  ];

  const lines3data = [
    { name: "Page A", uv: 4000, pv: 2400, av: 2600, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, av: 2210, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, av: 2290, amt: 2290 },
  ];
  const line3 = [
    { dataKey: "pv", stroke: "#8884d8", activeDot: { r: 8 } },
    { dataKey: "uv", stroke: "#82ca9d" },
    { dataKey: "av", stroke: "#ffc658" },
  ];

  const PieChartdata = [
    { name: "Competitor A", value: 400 },
    { name: "Competitor B", value: 300 },
    { name: "Competitor C", value: 300 },
    { name: "Competitor D", value: 200 },
  ];
  const PieChartCOLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="p-8 min-h-screen">


<div className='flex my-6 flex-wrap w-[98%] items-center justify-between overflow-x-hidden'>

<h2 className="text-2xl font-semibold mb-4">Competitor Research</h2>

  <div className="relative flex border-2 rounded-3xl ml-auto">
    <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={20} />
    <input
      type="text"
      placeholder="Search"
      className="p-2 pl-10 rounded-3xl focus:outline-none"
    />
  </div>
</div>      
      
      
      <p className="text-gray-600 mb-8">
        Analyze market share, price positioning, seller comparisons, and historical trends to gain insights into competitor strategies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-100 rounded-lg flex flex-col justify-between shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Market share breakdown</h3>
          <div className="">
            <PieChart
             data={PieChartdata}
             width={300}
             height={300}
             colors={PieChartCOLORS}
            />
          </div>
        </div>


        <div className="bg-gray-100 rounded-lg flex flex-col justify-between shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Price positioning map</h3>
          <div className="box-border overflow-hidden ">
            <LineChart data={line1data} lines={line1} width = {500} height = {300}/>
          </div>
        </div>

      </div>

      <h3 className="text-lg font-medium mt-8 ">Seller Comparison</h3>

      <div className="bg-white shadow-md my-3">
        <table className="w-full border-collapse border my-2 border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Competitor</th>
              <th className="border border-gray-300 p-2 text-left">Price</th>
              <th className="border border-gray-300 p-2 text-left">Sales</th>
              <th className="border border-gray-300 p-2 text-left">Revenue</th>
              <th className="border border-gray-300 p-2 text-left">Visits</th>
              <th className="border border-gray-300 p-2 text-left">Marketplace Share</th>
            </tr>
          </thead>
          <tbody>
            {sellerData.map((seller, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="border border-gray-300 p-2">{seller.competitor}</td>
                <td className="border border-gray-300 p-2">{seller.price}</td>
                <td className="border border-gray-300 p-2">{seller.sales}</td>
                <td className="border border-gray-300 p-2">{seller.revenue}</td>
                <td className="border border-gray-300 p-2">{seller.visits}</td>
                <td className="border border-gray-300 p-2">{seller.marketplaceShare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-lg font-medium mt-8 pb-6 ">Historical performance trends</h3>
        <div className="bg-white shadow-sm p-2 rounded-lg my-3">

        <LineChart data={lines3data} lines={line3} width = {1000} height = {300}/>

        </div>
      </div>

    </div>
  );
};

export default CompetitorResearch;
