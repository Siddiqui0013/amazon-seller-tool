import React from 'react';
import PieChart from "../charts/productResearch/CompititorResearch/pieChart"
import LineChart from "../charts/productResearch/CompititorResearch/lineChart"
import Line3Chart from "../charts/productResearch/CompititorResearch/line3chart"

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

const CompetitorResearch = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Competitor Research</h2>
      <p className="text-gray-600 mb-8">
        Analyze market share, price positioning, seller comparisons, and historical trends to gain insights into competitor strategies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-50 rounded-lg flex flex-col justify-between shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Market share breakdown</h3>
          <div className="">
            <PieChart/>
          </div>
        </div>


        <div className="bg-gray-50 rounded-lg flex flex-col justify-between shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Price positioning map</h3>
          <div className="">
            <LineChart/>
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
        <Line3Chart />
        </div>
      </div>

    </div>
  );
};

export default CompetitorResearch;
