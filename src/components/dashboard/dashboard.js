import React from "react";
import LineChart from "../charts/LineChart";
import AreaChart from "../charts/AreaChart";
import PieChart from "../charts/PieChart";
import Treemap from "../charts/Treemap";
import RadialBarChart from "../charts/RadialBar";

function Dashboard() {
  // Dummy data for the charts
  const lineData = [{ name: "Sales", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }];
  const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

  const pieData = [400, 300, 300, 200, 200];
  const pieLabels = ["Customized", "Export", "General", "Priorities", "Trending"];
  const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A5D297"];

  const treeData = [
    { name: "Axes", size: 1302 },
    { name: "Axis", size: 24593 },
    { name: "AxisGridLine", size: 652 },
  ];

  const progressData1 = 70; // Buy Box Percentage
  const progressData2 = 30; // Order Defect Rate
  const progressData3 = 85; // Feedback Score
  const progressColors = ["#0E4DA4", "#D3D3D3"];

  return (
    <div className="p-4 m-auto flex flex-col">
      <div className="flex mb-1 flex-row justify-between">
        <h1 className="font-medium text-xl">Dashboard</h1>
        <div className="mb-4">
          <select name="alerts" className="w-full border border-gray-300 rounded p-2">
            <option value="">Recent Alerts</option>
            <option value="category1">Alerts 1</option>
            <option value="category2">Alerts 2</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between gap-4 mb-4">
        <div className="border border-gray-200 bg-white w-2/6 rounded-md">
          <div className="flex justify-between p-2">
            <p>TODAY'S SALE</p>
            <p>36%</p>
          </div>
          <div className="p-2 flex justify-between items-center">
            <p className="font-bold">$12,246</p>
            <AreaChart data={[10, 20, 30]} />
          </div>
        </div>
        <div className="border border-gray-200 bg-white w-2/6 rounded-md">
          <div className="flex justify-between p-2">
            <p>WEEK-TO-DATE</p>
            <p>36%</p>
          </div>
          <div className="p-2 flex justify-between items-center">
            <p className="font-bold">$8,546</p>
            <AreaChart data={[20, 30, 40]} />
          </div>
        </div>
        <div className="border border-gray-200 bg-white w-2/6 rounded-md">
          <div className="flex justify-between p-2">
            <p>MONTH-TO-DATE</p>
            <p>36%</p>
          </div>
          <div className="p-2 flex justify-between items-center">
            <p className="font-bold">$15,436</p>
            <AreaChart data={[30, 40, 50]} />
          </div>
        </div>
      </div>

      <div className="border border-gray-200 bg-white rounded-md">
        <h1 className="p-3 font-bold text-2xl">Sales Overview</h1>
        <LineChart data={lineData} categories={categories} />
      </div>

      <div className="flex pt-2 gap-2">
        <div className="border p-3 bg-white flex-1 rounded-md">
          <PieChart data={pieData} labels={pieLabels} colors={pieColors} />
        </div>

        <div className="border p-3 bg-white rounded-md">
          <Treemap data={treeData} />
        </div>
      </div>

      <div className="border border-gray-200 mt-4 bg-white rounded-md">
        <h1 className="font-medium text-xl px-3 pt-2">Performance Metrics</h1>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <RadialBarChart value={progressData1} colors={progressColors} />
            <h1 className="pl-6 py-2 font-bold">Buy Box Percentage</h1>
          </div>
          <div className="flex flex-col items-center">
            <RadialBarChart value={progressData2} colors={progressColors} />
            <h1 className="pl-6 py-2 font-bold">Order Defect Rate</h1>
          </div>
          <div className="flex flex-col items-center">
            <RadialBarChart value={progressData3} colors={progressColors} />
            <h1 className="pl-6 py-2 font-bold">Feedback Score</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
