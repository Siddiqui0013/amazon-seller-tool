import BarChartComponent from "../charts/barChart";
import AreaChart from "../charts/AreaChart";

const FbaManagement = () => {
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

	return (
		<div className="p-6 space-y-8">
			<h2 className="text-xl font-semibold mb-4">Profitability Comparison</h2>

			<div className=" border-gray-100 border-2 rounded-lg bg-gray-50 shadow-md p-4">
				<h3 className="text-lg font-medium mb-6">
					Analyze FBA vs. FBM Profit Margins
				</h3>

				<div className="w-full rounded-lg">
				<BarChartComponent 
            data={BarData} 
            bars={bars} 
            width={1000} 
            height={300} 
            barSize={30} 
            orientation="vertical" 
          />
				</div>
			</div>

			<h2 className="text-xl font-semibold mb-4">Storage Fee Estimator</h2>

			<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
				<form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="grid grid-cols-1 gap-4">
						<div>
							<label className="block font-medium mb-1">Length</label>
							<input type="number" className="w-full border rounded-lg p-2" />
						</div>
						<div>
							<label className="block font-medium mb-1">Width</label>
							<input type="number" className="w-full border rounded-lg p-2" />
						</div>
						<div>
							<label className="block font-medium mb-1">Height</label>
							<input type="number" className="w-full border rounded-lg p-2" />
						</div>
					</div>

					<div className="grid grid-cols-1 gap-4">
						<div>
							<label className="block font-medium mb-1">Product Weight</label>
							<select className="w-full border rounded-lg p-2">
								<option>Weight</option>
								<option>Light</option>
								<option>Heavy</option>
							</select>
						</div>

						<div className="flex gap-2 flex-col space-x-2">
							<label className="block font-medium mb-1">
								Product Type Filter
							</label>
							<div className="flex gap-2 items-center">
								<input type="checkbox" className="w-4 h-4" />
								<label className="font-medium">
									Standard/Oversized Product
								</label>
							</div>
							
						</div>
					</div>

					<div>
						<label className="block font-medium mb-1">Storage Duration</label>
						<input
							type="number"
							placeholder="Storage"
							className="w-full border rounded-lg p-2"
						/>
					</div>
				</form>

				<p className="mt-12	 border-b border-gray-300"></p>

				<div className="mt-3 space-y-2">
					<p>
						Cost per unit: <span className="text-green-600">0 USD</span>
					</p>
					<p>
						Cost per month: <span className="text-green-600">0 USD</span>
					</p>
					<p>
						Cost per year: <span className="text-green-600">0 USD</span>
					</p>
				</div>
			</div>


			<h2 className="text-xl font-semibold mb-4">Long-term Storage Forecast </h2>

			<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
			<AreaChart
          data={areaData}
          width={1000}
          height={300}
          areas={areasConfig}
        />
			</div>
		</div>
	);
};

export default FbaManagement;
