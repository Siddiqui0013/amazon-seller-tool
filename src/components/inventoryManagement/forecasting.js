import LineChartComponent from "../charts/LineChart"; // Using ApexCharts line chart
import CustomAreaChart from "../charts/AreaChart";    // Using ApexCharts area chart

export default function Forecasting() {
  // Data configurations
  const lines3data = [
    { name: "Page A", uv: 4000, pv: 2400, av: 2600, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, av: 2210, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, av: 2290, amt: 2290 },
  ];

  const line1data = [
    { name: "Page A", uv: 4000, pv: 2400, av: 2600, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, av: 2210, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, av: 2290, amt: 2290 },
  ];

  const areaChartData = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  ];

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Forecasting</h1>

      {/* Sales Velocity */}
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
        <LineChartComponent data={lines3data} height={300} width={950} />
      </div>

      {/* Stockout Risk Heat Map */}
      <div className="bg-white shadow-md rounded-lg p-6 my-8">
        <h2 className="text-lg font-semibold mb-12">Stockout Risk Heat Map</h2>

        <div className="grid grid-cols-6 gap-4">
          {["Insignificant", "Minor", "Moderate", "Major", "Extreme"].map((risk, index) => (
            <>
              <div>{risk}</div>
              {["green-500", "yellow-400", "gray-400", "purple-500", "blue-600"].map((color) => (
                <div key={`${risk}-${color}`} className={`bg-${color} h-12 rounded`}></div>
              ))}
            </>
          ))}
        </div>
      </div>

      {/* Demand Forecasting & Seasonal Trends */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Demand Forecasting Graph</h2>
          <LineChartComponent data={line1data} height={300} width={450} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Seasonal Trends Analyzer</h2>
          <CustomAreaChart
            data={areaChartData}
            width={450}
            height={300}
            areaKey="uv"
            strokeColor="#8884d8"
            fillColor="#8884d8"
          />
        </div>
      </div>
    </div>
  );
}
