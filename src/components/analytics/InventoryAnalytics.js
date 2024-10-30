import CustomComposedChart from "../charts/ComposedChart";
import ScatterChart from "../charts/ScatterChart";
import GaugeChart from "../charts/gaugeChart";
import AreaChart from "../charts/AreaChart";

const InventoryAnalytics = () => {

  const ComposedChartData = [
    { name: "Page A", uv: 590, pv: 800, amt: 1400 },
    { name: "Page B", uv: 868, pv: 967, amt: 1506 },
    { name: "Page C", uv: 1397, pv: 1098, amt: 989 },
    { name: "Page D", uv: 1480, pv: 1200, amt: 1228 },
    { name: "Page E", uv: 1520, pv: 1108, amt: 1100 },
    { name: "Page F", uv: 1400, pv: 680, amt: 1700 },
  ];

  const GaugeData = [
    { name: 'A', value: 80, color: '#ff0000' },
    { name: 'B', value: 45, color: '#00ff00' },
    { name: 'C', value: 25, color: '#0000ff' },
  ];

  const areaData3 = [
		{ name: "Jan", ProfitA: 4000, ProfitB: 2400, ProfitC: 4400 },
		{ name: "Feb", ProfitA: 3000, ProfitB: 1398, ProfitC: 2210 },
		{ name: "Mar", ProfitA: 2000, ProfitB: 9800, ProfitC: 3290 },
		{ name: "Apr", ProfitA: 2780, ProfitB: 3908, ProfitC: 5000 },
		{ name: "May", ProfitA: 1890, ProfitB: 4800, ProfitC: 1181 },
	  ];	
	  const areasConfig3 = [
		{ dataKey: "ProfitA", strokeColor: "#0E4DA4", fillColor: "#0E4DA480" },
		{ dataKey: "ProfitB", strokeColor: "#FF9900", fillColor: "#FF990080" },
		{ dataKey: "ProfitC", strokeColor: "#FF9900", fillColor: "#G3990080" },
	  ];

    const areaData1 = [
      { name: "Jan", ProfitA: 4000 },
      { name: "Feb", ProfitA: 3000},
      { name: "Mar", ProfitA: 2000},
      { name: "Apr", ProfitA: 2780},
      { name: "May", ProfitA: 1890},
      ];	
      const areasConfig1 = [
      { dataKey: "ProfitA", strokeColor: "#0E4DA4", fillColor: "#0E4DA480" },
      ];
  



  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Profit Trends</h2>

      {/* <div className="mb-4 bg-gray-50 border-gray-100 border-2 shadow-md rounded-lg">
      <CustomComposedChart
        data={ComposedChartData}
        width="100%"
        height={400}
        xDataKey="name"
        lineKey="uv"
        lineColor="#ff7300"
        areaKey="amt"
        areaColor="#82ca9d"
        barKey="pv"
        barColor="#8884d8"
        barSize={30}
      />
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
<h2 className="text-xl font-semibold mb-4">Sales by Marketplace</h2>

<GaugeChart
              data={GaugeData}
              cx={200}
              cy={200}
              innerRadius={100}
              outerRadius={150}
              value={50}
              width={400}
              height={400}
            />

</div>
<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
<h2 className="text-xl font-semibold mb-6">Top selling products</h2>

<AreaChart
          data={areaData3}
          width={500}
          height={400}
          areas={areasConfig3}
        />

  </div>

  <div className="bg-gray-50 p-3 border-gray-100 border-2 mt-6 shadow-md rounded-lg">
<CustomComposedChart
        data={ComposedChartData}
        width={500}
        height={400}
        xDataKey="name"
        lineKey="uv"
        lineColor="#ff7300"
        areaKey="amt"
        areaColor="#82ca9d"
        barKey="pv"
        barColor="#8884d8"
        barSize={30}
      />

</div>

<div className="bg-gray-50 p-3 border-gray-100 border-2 mt-6 shadow-md rounded-lg">
<AreaChart
          data={areaData1}
          width={500}
          height={400}
          areas={areasConfig1}
        />

</div>

</div>




    </div>
  );
};

export default InventoryAnalytics;
