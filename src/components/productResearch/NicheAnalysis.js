import React from 'react'
import LineChart from "../charts/linechart"
import Barchart from "../charts/barChart"
import GaugeChart from "../charts/gaugeChart"
import Treemap from "../charts/treemap"
import { AiOutlineSearch } from "react-icons/ai";


export default function NicheAnalysis() {

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

  const BarData = [
    { name: "Jan", sales: 1000 },
    { name: "Feb", sales: 2000 },
    { name: "Mar", sales: 1500 },
  ];

  const GaugeData = [
    { name: 'A', value: 80, color: '#ff0000' },
    { name: 'B', value: 45, color: '#00ff00' },
    { name: 'C', value: 25, color: '#0000ff' },
  ];

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
    "#8889DD",
    "#9597E4",
    "#8DC77B",
    "#A5D297",
    "#E2CF45",
    "#F8C12D",
  ];


  return (
    <div >

<div className='flex m-6 flex-wrap w-[95%] items-center justify-between overflow-x-hidden'>

  <h1 className='font-semibold text-2xl p-6'>Niche Analysis</h1>

  <div className="relative flex border-2 rounded-3xl ml-auto">
    <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={20} />
    <input
      type="text"
      placeholder="Search"
      className="p-2 pl-10 rounded-3xl focus:outline-none"
    />
  </div>
</div>


      <div className='flex gap-3  mb-6 flex-wrap m-auto justify-evenly'>

      <div className="bg-white w-[45%] p-4 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2  py-4'>Trend Graph for niche growth</p>
        
        <div className='box-content overflow-hidden'>
        <LineChart data={lines3data} lines={line3} width = {500} height = {300}/>
        </div>
        
        </div>
        
        <div className="bg-white w-[45%] p-4  shadow-md rounded-md">
          <p className='font-semibold text-lg px-2  py-4'>Top sellers in niche</p>
          <Barchart 
          
          data={BarData} 
          dataKey="sales" 
          width={400} 
          height={300} 
          color="#0E4DA4" 
          barSize={20} 
          
          />
        </div>
        
        <div className="bg-white w-[45%] p-4 shadow-md rounded-md">
          <p className='font-semibold text-lg px-2  py-4'>Niche Saturation Index</p>
          <GaugeChart 
           data={GaugeData} 
           cx={200} 
           cy={150} 
           innerRadius={100} 
           outerRadius={150} 
           value={50} 
           width={500} 
           height={200} 
          />
        </div>
        
        <div className="bg-white w-[45%] p-4 shadow-md h-[30%] rounded-md">
          <p className='font-semibold text-lg px-2  py-4'>Seasonal Demand Chart</p>
          <Treemap
           data={TreeData}
           width={400}
           height={200}
           colors={TreeColors}
          />
        </div>
      </div>
    </div>
  )
}
