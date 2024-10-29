import React from 'react';
import LineChart from "../charts/linechart"
import GaugeChart from '../charts/gaugeChart';

const KeywordResearch = () => {

  const lines3data = [
    { name: "Page A", pv: 4000, amt: 2400 },
    { name: "Page B", pv: 3000, amt: 2210 },
    { name: "Page C", pv: 2000, amt: 2290 },
  ];
  const line3 = [
    { dataKey: "pv", stroke: "#8884d8", activeDot: { r: 8 } },
  ];

  const GaugeData = [
    { name: 'A', value: 80, color: '#ff0000' },
    { name: 'B', value: 45, color: '#00ff00' },
    { name: 'C', value: 25, color: '#0000ff' },
  ]


  return (
    <div className="p-8">
      {/* Historical Keyword Rank Data */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Historical Keyword Rank Data</h2>
        <p className="text-gray-600 mb-4">Analyze the performance of your keywords over time.</p>
        <div className="overflow-auto rounded-lg">
          
          <table className="w-full border border-gray-200 rounded-lg text-left">




            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
                <th className="p-3 border-b border-gray-200">Keyword</th>
                <th className="p-3 border-b border-gray-200">Current Rank</th>
                <th className="p-3 border-b border-gray-200">Historical Rank</th>
                <th className="p-3 border-b border-gray-200">Change</th>
                <th className="p-3 border-b border-gray-200">Best Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-200">Competitor A</td>
                <td className="p-3 border-b border-gray-200">$29.99</td>
                <td className="p-3 border-b border-gray-200">one week ago</td>
                <td className="p-3 border-b border-gray-200">+5</td>
                <td className="p-3 border-b border-gray-200">9</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-200">Competitor B</td>
                <td className="p-3 border-b border-gray-200">$29.99</td>
                <td className="p-3 border-b border-gray-200">one week ago</td>
                <td className="p-3 border-b border-gray-200">-3</td>
                <td className="p-3 border-b border-gray-200">10</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-200">Competitor C</td>
                <td className="p-3 border-b border-gray-200">$29.99</td>
                <td className="p-3 border-b border-gray-200">one week ago</td>
                <td className="p-3 border-b border-gray-200">-7</td>
                <td className="p-3 border-b border-gray-200">15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Keyword Search Volume Trends</h2>
        <p className="text-gray-600 mb-4">Track how often people are searching for your keywords over time.</p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4  ">

        <LineChart data={lines3data} lines={line3} width = {500} height = {300}/>

        </div>
      </section>

      {/* Keyword Difficulty Score & Long-Tail Keyword Suggestions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-sm">
        <div className="">
          <h3 className="text-lg font-medium mb-4">Keyword Difficulty Score</h3>
          <p className="text-gray-600">Assess how challenging it is to rank for a specific keyword.</p>

          <div className="bg-gray-100 rounded-lg mt-4 border border-gray-200 p-4">
          <GaugeChart 
           data={GaugeData} 
           cx={250} 
           cy={200} 
           innerRadius={100} 
           outerRadius={150} 
           value={50} 
           width={500} 
           height={250} 
          />
          </div>
        </div>

        <div className="">
          <h3 className="text-lg font-medium mb-4">Long-Tail Keyword Suggestions</h3>
          <p className="text-gray-600">Discover less competitive long-tail keywords to enhance your listing's visibility.</p>
          {/* Suggestions Placeholder */}
          <div className=" rounded-lg bg-gray-100 border p-4 mt-4">
          <GaugeChart 
           data={GaugeData} 
           cx={250} 
           cy={200} 
           innerRadius={100} 
           outerRadius={150} 
           value={50} 
           width={500} 
           height={250} 
          />
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeywordResearch;
