import React from "react";
import Linechart from "../charts/dashboard/linechart";
import Dashboard3charts from "../charts/dashboard/dashboard3charts"
import PieChart from "../charts/dashboard/piechart"
import Treemap from "../charts/dashboard/treemap"
import PerformanceMetric from "../charts/dashboard/performanceMetricsChart"


function Dashboard() {
  return (
    <div className="flex m-auto p-4">


      <div className="flex-1 p-4 flex flex-col bg-gray-50 ">

        <div className="flex mb-1 flex-row justify-between ">
          <h1 className="font-medium text-xl">Dashboard</h1>

          <div className="mb-4">
            <select
              name="alerts"
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Recent Alerts</option>
              <option value="category1">Alerts 1</option>
              <option value="category2">Alerts 2</option>
            </select>
          </div>
          
        {/* <button className="border-2 border-blue-400 p-1 rounded-lg">Recents Alerts</button> */}
        
        </div>

        <div className="flex justify-between gap-4 w-full mb-4 text-gray-700 ">
          <div className="border border-gray-200 bg-white m-auto w-2/6 rounded-md">
          
          <div className="flex justify-between p-2 ">
          <p>TODAYS'S SALE</p>
          <p>36 % </p>
          </div>
          <div className="p-2 flex justify-between items-center">
          <p className="font-bold">$ 12,246 </p>
          <Dashboard3charts/>
          </div>
          </div>

          <div className="border border-gray-200 m-auto bg-white w-2/6 rounded-md">
          <div className="flex justify-between p-2 ">
          <p>WEEK-TO-DATE</p>
          <p>36 % </p>
          </div>
          <div className="p-2 flex justify-between items-center">
          <p className="font-bold">$ 12,246 </p>
          <Dashboard3charts/>
          </div>
          </div>
          <div className="border border-gray-200 m-auto bg-white w-2/6 rounded-md">
          <div className="flex justify-between p-2 ">
          <p>MONTH-TO-DATE</p>
          <p>36 % </p>
          </div>
          <div className="p-2 flex justify-between items-center">
          <p className="font-bold">$ 12,246 </p>
          <Dashboard3charts/>
          </div>
          </div>
        </div>

        <div className="border border-gray-200 m-auto w-full flex bg-white flex-col rounded-md">
          <h1 className="p-3 font-bold text-2xl">Sales Overview</h1>
        <Linechart />
        </div>

        <div className="flex pt-2 gap-2 m-auto w-full ">

        <div className="border border-gray-200 p-3 flex-1 bg-white flex rounded-md justify-center">
        <PieChart/>
        </div>

        <div className="border p-3 border-gray-200 bg-white flex rounded-md">
          <Treemap/>
        </div>

        </div>

        <div className="border border-gray-200 mt-4 bg-white rounded-md">
        
        <h1 className="font-medium text-xl px-3 pt-2">Performance Metrics</h1>

        <div className="m-auto flex ">
        <div className="flex flex-col items-center">
        <PerformanceMetric/>
        <h1 className="pl-28 py-2 font-bold">Buy Box Percentage</h1>
        </div>

        <div className="flex flex-col items-center">
        <PerformanceMetric/>
        <h1 className="pl-28 py-2 font-bold">Order Defect Rate</h1>
        </div>

        <div  className="flex flex-col items-center">
        <PerformanceMetric/>
        <h1 className="pl-28 py-2 font-bold">Feedback Score</h1>
        </div>
        </div>
        
        </div>

        </div>
    </div>
  );
}

export default Dashboard;
