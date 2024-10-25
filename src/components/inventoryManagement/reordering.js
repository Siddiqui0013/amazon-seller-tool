import React from "react";
import HorizontalBarChart from "../charts/HorizontalBarChart";

const reorderData = [
  {
    productId: "0021",
    stockLevel: "Completed",
    reorderPoint: "2023-10-01",
    size: "1.2 MB",
    supplier: "Supplier A",
    leadTime: "14 days",
  },
  {
    productId: "3213",
    stockLevel: "Completed",
    reorderPoint: "2023-10-01",
    size: "1.2 MB",
    supplier: "Supplier B",
    leadTime: "10 days",
  },
  {
    productId: "6213",
    stockLevel: "Completed",
    reorderPoint: "2023-10-01",
    size: "1 MB",
    supplier: "Supplier AB",
    leadTime: "69 days",
  },
];

const BarChartdata = [
  { name: "Page A", uv: 590, pv: 800, amt: 1400, cnt: 490 },
  { name: "Page B", uv: 868, pv: 967, amt: 1506, cnt: 590 },
  { name: "Page C", uv: 1397, pv: 1098, amt: 989, cnt: 350 },
  { name: "Page D", uv: 1480, pv: 1200, amt: 1228, cnt: 480 },
  { name: "Page E", uv: 1520, pv: 1108, amt: 1100, cnt: 460 },
  { name: "Page F", uv: 1400, pv: 680, amt: 1700, cnt: 380 },
];

const BarChartlines = [
  { dataKey: "uv", stroke: "#ff7300" },
];

const BarChartbars = [
  { dataKey: "pv", fill: "#413ea0", barSize: 20 },
];

export default function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">

<h2 className="text-lg font-semibold mb-4">
          Reorder Recommendations Table
        </h2>

      <div className="bg-white rounded-lg mb-8">
        <table className="w-full table-auto shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 text-sm p-2">Product ID</th>
              <th className="border border-gray-300 text-sm p-2">Current Stock Level</th>
              <th className="border border-gray-300 text-sm p-2">Reorder Point</th>
              <th className="border border-gray-300 text-sm p-2">Suggested Quantity</th>
              <th className="border border-gray-300 text-sm p-2">Supplier Name</th>
              <th className="border border-gray-300 text-sm p-2">Lead Time</th>
              <th className="border border-gray-300 text-sm p-2">Action Buttons</th>
            </tr>
          </thead>
          <tbody>
            {reorderData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{item.productId}</td>
                <td className="border border-gray-300 px-4 py-2">{item.stockLevel}</td>
                <td className="border border-gray-300 px-4 py-2">{item.reorderPoint}</td>
                <td className="border border-gray-300 px-4 py-2">{item.size}</td>
                <td className="border border-gray-300 px-4 py-2">{item.supplier}</td>
                <td className="border border-gray-300 px-4 py-2">{item.leadTime}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-lg font-semibold mb-4">Supplier lead time tracker</h2>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-medium">Time Lead Tracker</h3>
          <div className="flex gap-2">
            <span className="text-sm text-gray-500">Deliver</span>
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
          </div>
          <h3 className="text-xl font-semibold">Total: <span>31,863</span></h3>
        </div>
        <div className="">
        <HorizontalBarChart
        data={BarChartdata }
        lines={BarChartlines}
        bars={BarChartbars}
        width={1000}
        height={400}
      />
        </div>
      </div>
    </div>
  );
}
