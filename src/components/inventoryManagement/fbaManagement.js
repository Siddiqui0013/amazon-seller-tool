import BarChartComponent from "../charts/barChart";

const FbaManagement = () => {
	const barData = [
		{ name: "Jan", SalesA: 1000, SalesB: 1200 },
		{ name: "Feb", SalesA: 2000, SalesB: 1800 },
		{ name: "Mar", SalesA: 1500, SalesB: 1700 },
	];

	const bars = [
		{ name: "Sales A", data: [1000, 2000, 1500], color: "#0E4DA4" },
		{ name: "Sales B", data: [1200, 1800, 1700], color: "#FF9900" },
	];

	return (
		<div className="p-8 space-y-8">
			<h2 className="text-xl font-semibold mb-4">Profitability Comparison</h2>

			<div className="border rounded-lg bg-gray-50 shadow-md p-4">
				<h3 className="text-lg font-medium mb-2">
					Analyze FBA vs. FBM Profit Margins
				</h3>

				<div className="w-full rounded-lg">
					<BarChartComponent data={bars} width="1000" height="300" />
				</div>
			</div>

			<h2 className="text-xl font-semibold mb-4">Storage Fee Estimator</h2>

			<div className="border rounded-lg shadow-lg p-6">
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

				<div className="mt-6 space-y-2">
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
		</div>
	);
};

export default FbaManagement;
