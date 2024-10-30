import React from "react";
import GaugeChart from "../charts/gaugeChart"
import BarChartComponent from "../charts/barChart";

const products = [
  {
    sku: "SKU001",
    asin: "B08XXXX",
    title: "Product A",
    price: "$100",
    quantity: 50,
    daysOfSupply: 30,
    reorderStatus: "In Stock",
  },
  {
    sku: "SKU002",
    asin: "B09XXXX",
    title: "Product B",
    price: "$150",
    quantity: 20,
    daysOfSupply: 10,
    reorderStatus: "Low Stock",
  },
  {
    sku: "SKU003",
    asin: "B07XXXX",
    title: "Product C",
    price: "$200",
    quantity: 5,
    daysOfSupply: 5,
    reorderStatus: "Out of Stock",
  },
  {
    sku: "SKU004",
    asin: "B06XXXX",
    title: "Product D",
    price: "$250",
    quantity: 100,
    daysOfSupply: 60,
    reorderStatus: "In Stock",
  },
];

export default function App() {

  const GaugeData = [
    { name: 'A', value: 80, color: '#ff0000' },
    { name: 'B', value: 45, color: '#00ff00' },
    { name: 'C', value: 25, color: '#0000ff' },
  ];

  const BarData = [
    { name: "Jan", sales: 1000 },
    { name: "Feb", sales: 2000 },
    { name: "Mar", sales: 1500 },
  ];

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-1">Inventory Health Dashboard</h1>
      <p className="text-gray-500 mb-6">Track and Manage Inventory Levels and Reorders</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 border-gray-100 border-2 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Inventory Health Score</h2>
          <div className="flex items-center justify-center">
          <GaugeChart 
           data={GaugeData} 
           cx={200} 
           cy={150} 
           innerRadius={100} 
           outerRadius={150} 
           value={50} 
           width={500} 
           height={250} 
          />
          </div>
        </div>

        <div className="bg-gray-50 border-gray-100 border-2 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Inventory Health Score</h2>
          <div className="h-52">
            <BarChartComponent
                       data={BarData} 
                       dataKey="sales" 
                       width={400} 
                       height={250} 
                       color="#0E4DA4" 
                       barSize={20} 
             />
          </div>
        </div>
      </div>

<div className="flex justify-between pt-4">
<h1 className="text-xl font-semibold">Product List with Key Metrics</h1>
      <div className="flex gap-4 mb-4">
        <button className="px-4 py-2 border-[2px] border-blue-500 rounded-full">Category</button>
        <button className="px-4 py-2 border-[2px] border-blue-500 rounded-full">Supplier</button>
        <button className="px-4 py-2 border-[2px] border-blue-500 rounded-full">Fulfillment Method</button>
      </div>

</div>

      <table className="w-full table-auto bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">SKU</th>
            <th className="border px-4 py-2 text-left">ASIN</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Price</th>
            <th className="border px-4 py-2 text-left">Quantity</th>
            <th className="border px-4 py-2 text-left">Days of Supply</th>
            <th className="border px-4 py-2 text-left">Reorder Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{product.sku}</td>
              <td className="border px-4 py-2">{product.asin}</td>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.quantity}</td>
              <td className="border px-4 py-2">{product.daysOfSupply}</td>
              <td className="border px-4 py-2">{product.reorderStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
