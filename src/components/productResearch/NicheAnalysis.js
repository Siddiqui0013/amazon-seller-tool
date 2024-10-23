import React from 'react'
import Linechart from "../charts/nicheAnalysis/linechart"
import Barchart from "../charts/nicheAnalysis/barChart"
import GaugeChart from "../charts/nicheAnalysis/gaugeChart"
import Treemap from "../charts/nicheAnalysis/treeMap"


export default function NicheAnalysis() {
  return (
    <div >
      <h1 className='font-bold text-lg p-6'>Niche Analysis</h1>
      <div className='flex gap-3 flex-wrap m-auto justify-evenly'>

      <div className="bg-white w-[45%] p-4 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2  py-4'>Trend Graph for niche growth</p>
        <Linechart />
        </div>
        
        <div className="bg-white w-[45%] p-4  shadow-md rounded-md">
          <p className='font-semibold text-lg px-2  py-4'>Top sellers in niche</p>
          <Barchart />
        </div>
        
        <div className="bg-white w-[45%] p-4 shadow-md rounded-md">
          <p className='font-semibold text-lg px-2  py-4'>Niche Saturation Index</p>
          <GaugeChart />
        </div>
        
        <div className="bg-white w-[45%] p-4 shadow-md h-[30%] rounded-md">
          <p className='font-semibold text-lg px-2  py-4'>Seasonal Demand Chart</p>
          <Treemap />
        </div>
      </div>
    </div>
  )
}
