import BarChart from "../charts/barChart";
import AreaChart from "../charts/AreaChart";
import PieChart from "../charts/piechart";

const SalesAnalytics = () => {
	const BarData = [
		{ name: "Jan", SalesA: 1000, SalesB: 1200 },
		{ name: "Feb", SalesA: 2000, SalesB: 1800 },
		{ name: "Mar", SalesA: 1500, SalesB: 1700 },
		{ name: "Mar", SalesA: 1500, SalesB: 1700 },
	  ];
	  const bars = [
		{ dataKey: "SalesA", color: "#0E4DA4" },
		{ dataKey: "SalesB", color: "#FF9900" },
	  ];

	  const areaData = [
		{ name: "Jan", ProfitA: 4000, ProfitB: 2400, ProfitC: 4400 },
		{ name: "Feb", ProfitA: 3000, ProfitB: 1398, ProfitC: 2210 },
		{ name: "Mar", ProfitA: 2000, ProfitB: 9800, ProfitC: 3290 },
		{ name: "Apr", ProfitA: 2780, ProfitB: 3908, ProfitC: 5000 },
		{ name: "May", ProfitA: 1890, ProfitB: 4800, ProfitC: 1181 },
	  ];	
	  const areasConfig = [
		{ dataKey: "ProfitA", strokeColor: "#0E4DA4", fillColor: "#0E4DA480" },
		{ dataKey: "ProfitB", strokeColor: "#FF9900", fillColor: "#FF990080" },
		{ dataKey: "ProfitC", strokeColor: "#FF9900", fillColor: "#G3990080" },
	  ];

    const PieChartdata = [
      { name: "A", value: 400 },
      { name: "B", value: 300 },
      { name: "C", value: 300 },
      { name: "D", value: 200 },
    ];
    const PieChartCOLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	return (
		<div className="p-6 space-y-8">
			<h2 className="text-2xl font-semibold mb-4">Sales Trend</h2>
			<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
			<AreaChart
          data={areaData}
          width={1000}
          height={300}
          areas={areasConfig}
        />
			</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
<h2 className="text-xl font-semibold mb-4">Sales by Marketplace</h2>

<PieChart
        data={PieChartdata}
        width={400}
        height={300}
        colors={PieChartCOLORS}
        />
</div>
<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
<h2 className="text-xl font-semibold mb-6">Top selling products</h2>
<BarChart
          data={BarData}
          width={400}
          height={300}
          bars={bars}
        />

  </div>
</div>

<div className="bg-gray-50 border-gray-100 border-2 shadow-md rounded-lg p-6 my-8">
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

		</div>
	);
};

export default SalesAnalytics;
