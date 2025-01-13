import React from "react";
import LineChart from "../charts//linechart";
import Dashboard3charts from "../charts/dashboard3charts"
import PieChart from "../charts/piechart"
import Treemap from "../charts/treemap"
import ProgressBarChart from "../charts/performanceMetricsChart"

function Dashboard() {

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
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 300 },
    { name: "D", value: 200 },
  ];
  const PieChartCOLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const TreeData = [
    {
      name: "axis",
      children: [
        { name: "Axes", size: 1302 },
        { name: "Axis", size: 24593 },
        { name: "AxisGridLine", size: 652 },
        { name: "AxisLabel", size: 636 },
        { name: "CartesianAxes", size: 6703 },
      ],
    },
    {
      name: "filter",
      children: [
        { name: "FisheyeTreeFilter", size: 5219 },
        { name: "GraphDistanceFilter", size: 3165 },
        { name: "VisibilityFilter", size: 3509 }
      ]
    },
    { name: "IOperator", size: 1286 },
    {
      name: "label",
      children: [
        { name: "Labeler", size: 9956 },
        { name: "RadialLabeler", size: 3899 },
        { name: "StackedAreaLabeler", size: 3202 }
      ]
    },
  ];
  const TreeColors = [
    "#187AA9",
    "#9597E4",
    "#8DC77B",
    "#A5D297",
    "#E2CF45",
    "#F8C12D",
  ];

  const ProgressData = [
    { name: "Completed", value: 70 },
    { name: "Remaining", value: 30 },
  ];
  const ProgressColors = ["#5ABDF5", "#D3D3D3"]; 


  return (
      <div className="p-6 bg-gray-50 m-auto flex flex-col">

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
                  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-gray-700 ">
          <div className="border border-gray-200 bg-white rounded-md">
          
          <div className="flex justify-between p-2 ">
          <p>TODAYS'S SALE</p>
          <p>36 % </p>
          </div>
          <div className="p-2 flex justify-between items-center">
          <p className="font-bold">$ 12,246 </p>
          <Dashboard3charts/>
          </div>
          </div>

          <div className="border border-gray-200 bg-white rounded-md">
          <div className="flex justify-between p-2 ">
          <p>WEEK-TO-DATE</p>
          <p>36 % </p>
          </div>
          <div className="p-2 flex justify-between items-center">
          <p className="font-bold">$ 12,246 </p>
          <Dashboard3charts/>
          </div>
          </div>
          <div className="border border-gray-200 bg-white rounded-md">
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

          <LineChart data={lines3data} lines={line3} width = {500} height = {300}/>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-2 gap-2 m-auto w-full ">

        <div className="border border-gray-200 p-3 flex-1 bg-white flex rounded-md justify-center">
        <PieChart
        data={PieChartdata}
        width={300}
        height={230}
        colors={PieChartCOLORS}
        />
        </div>

        <div className="border p-3 border-gray-200 bg-white flex rounded-md">
          <Treemap
                     data={TreeData}
                     width={400}
                     height={230}
                     colors={TreeColors}
          />
        </div>

        </div>

        <div className="border border-gray-200 mt-4 bg-white rounded-md">
        
        <h1 className="font-medium text-xl px-3 pt-2">Performance Metrics</h1>

        <div className="m-auto flex items-center justify-around">
        <div className="flex flex-col items-center ">
        <ProgressBarChart
         data={ProgressData} 
         colors={ProgressColors} 
         width={200} 
         height={200} 
         innerRadius={60} 
         outerRadius={80} 
        />
        <h1 className="pl-6 py-2 font-bold">Buy Box Percentage</h1>
        </div>

        <div className="flex flex-col items-center">
        <ProgressBarChart
         data={ProgressData} 
         colors={ProgressColors} 
         width={200} 
         height={200} 
         innerRadius={60} 
         outerRadius={80} 
        />        <h1 className="pl-6 py-2 font-bold">Order Defect Rate</h1>
        </div>

        <div  className="flex flex-col items-center">
        <ProgressBarChart
         data={ProgressData} 
         colors={ProgressColors} 
         width={200} 
         height={200} 
         innerRadius={60} 
         outerRadius={80} 
        />        <h1 className="pl-6 py-2 font-bold">Feedback Score</h1>
        </div>
        </div>
        
        </div>

        </div>  );
}

export default Dashboard;
