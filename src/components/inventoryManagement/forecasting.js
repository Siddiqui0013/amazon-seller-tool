import React from "react";
import LineChartComponent from "../charts/linechart";
import CustomAreaChart from "../charts/AreaChart";
import { Bar } from "recharts";

export default function App() {

  const lines3data = [
    { name: "Page A", uv: 4000, pv: 2400, av: 2600, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, av: 2210, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, av: 2290, amt: 2290 },
  ];
  const line3 = [
    { dataKey: "pv", stroke: "#8884d8", activeDot: { r: 8 } },
    { dataKey: "uv", stroke: "#82ca9d" },
  ];

  const line1data = [
    { name: "Page A", uv: 4000, pv: 2400, av: 2600, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, av: 2210, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, av: 2290, amt: 2290 },
  ];
  const line1 = [
    { dataKey: "pv", stroke: "#8884d8", activeDot: { r: 8 } },
  ];

  const AreaChartdata = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Forecasting</h1>

      <div className="bg-white shadow-md rounded-lg mb-8 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Sales Velocity</h2>
          <div className="flex gap-2">
            <span className="text-sm text-gray-500">Past sales velocity</span>
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="text-sm text-gray-500">Future sales velocity</span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-100 text-blue-500 rounded-full">Day</button>
            <button className="px-4 py-2 bg-blue-100 text-blue-500 rounded-full">Week</button>
            <button className="px-4 py-2 bg-blue-100 text-blue-500 rounded-full">Month</button>
            <button className="px-4 py-2 bg-blue-100 text-blue-500 rounded-full">Year</button>
          </div>
        </div>
        <div className="">
          <LineChartComponent data={lines3data} lines={line3} height={300} width={950} />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 my-8">
        <h2 className="text-lg font-semibold mb-12">Stockout Risk Heat Map</h2>

        <div className="grid grid-cols-6 gap-4">

          <div>Insignificant</div>
          <div className="bg-green-500 h-12 rounded"></div>
          <div className="bg-yellow-400 h-12 rounded"></div>
          <div className="bg-gray-400 h-12 rounded"></div>
          <div className="bg-purple-500 h-12 rounded"></div>
          <div className="bg-blue-600 h-12 rounded"></div>

          <div>Minor</div>
          <div className="bg-green-500 h-12 rounded"></div>
          <div className="bg-yellow-400 h-12 rounded"></div>
          <div className="bg-gray-400 h-12 rounded"></div>
          <div className="bg-purple-500 h-12 rounded"></div>
          <div className="bg-blue-600 h-12 rounded"></div>

          <div>Moderate</div>
          <div className="bg-gray-400 h-12 rounded"></div>
          <div className="bg-yellow-400 h-12 rounded"></div>
          <div className="bg-purple-500 h-12 rounded"></div>
          <div className="bg-blue-600 h-12 rounded"></div>
          <div className="bg-green-500 h-12 rounded"></div>

          <div>Major</div>
          <div className="bg-gray-400 h-12 rounded"></div>
          <div className="bg-yellow-400 h-12 rounded"></div>
          <div className="bg-purple-500 h-12 rounded"></div>
          <div className="bg-blue-600 h-12 rounded"></div>
          <div className="bg-green-500 h-12 rounded"></div>

          <div>Extreme</div>
          <div className="bg-gray-400 h-12 rounded"></div>
          <div className="bg-yellow-400 h-12 rounded"></div>
          <div className="bg-purple-500 h-12 rounded"></div>
          <div className="bg-blue-600 h-12 rounded"></div>
          <div className="bg-green-500 h-12 rounded"></div>
        </div>
        <div className="pl-36 pt-4 grid grid-cols-5 text-center mt-2">
          <span>Insignificant</span>
          <span>Minor</span>
          <span>Moderate</span>
          <span>Major</span>
          <span>Extreme</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Demand Forecasting Graph</h2>
          <div className=" box-content overflow-hidden">
            <LineChartComponent data={line1data} lines={line1} height={300} width={450} />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Seasonal Trends Analyzer</h2>
          <div className="">
          <CustomAreaChart
        data={AreaChartdata}
        width={450}
        height={300}
        areaKey="uv" // This is the key for the area chart
        strokeColor="#8884d8" // Customize stroke color
        fillColor="#8884d8" // Customize fill color
      />
          </div>
        </div>
      </div>
    </div>
  );
}