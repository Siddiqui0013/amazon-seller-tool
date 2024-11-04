import PieChart from "../charts/piechart";
import TreeMap from "../charts/treemap";
import ScatterChart from "../charts/ScatterChart";
const CustomerInsights = () => {

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
				{ name: "VisibilityFilter", size: 3509 },
			],
		},
		{ name: "IOperator", size: 1286 },
		{
			name: "label",
			children: [
				{ name: "Labeler", size: 9956 },
				{ name: "RadialLabeler", size: 3899 },
				{ name: "StackedAreaLabeler", size: 3202 },
			],
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

	const scatterData = [
		{ x: 100, y: 200, z: 200 },
		{ x: 120, y: 100, z: 260 },
		{ x: 170, y: 300, z: 400 },
		{ x: 140, y: 250, z: 280 },
		{ x: 150, y: 400, z: 500 },
		{ x: 110, y: 280, z: 200 },
	];

	const PieChartdata = [
		{ name: "A", value: 400 },
		{ name: "B", value: 300 },
		{ name: "C", value: 300 },
		{ name: "D", value: 200 },
	];
	const PieChartCOLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	return (
		<div className="p-6">
			<h2 className="text-2xl font-semibold mb-4">Profit Trends</h2>

			<div className="border rounded-lg mb-4 border-gray-100 bg-gray-50 shadow-lg p-6">
				<h2 className="text-xl font-semibold mb-4">Customer Lifetime Value</h2>

				<ScatterChart
					data={scatterData}
					width="100%"
					height={300}
					xAxisKey="x"
					xAxisName="Stature"
					xAxisUnit="cm"
					yAxisKey="y"
					yAxisName="Weight"
					yAxisUnit="kg"
					scatterName="Student Data"
					scatterColor="#00C49F"
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				
        <div className="mb-4 bg-gray-50 border-gray-100 border-2 shadow-md rounded-lg p-3">
        <h2 className="text-xl font-semibold mb-6">Repeat Purchase Rate</h2>
					<PieChart
						data={PieChartdata}
						width={400}
						height={300}
						colors={PieChartCOLORS}
					/>
				</div>

				<div className="border-2 mb-4 rounded-lg border-gray-100 bg-gray-50 shadow-lg p-3">
					<h2 className="text-xl font-semibold mb-6">Customer Segmentation</h2>

					<TreeMap
						data={TreeData}
						width={450}
						height={300}
						colors={TreeColors}
					/>
				</div>

			</div>

			<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
				<h2 className="text-xl font-semibold mb-4">Geographic Sales Distribution</h2>

				<ScatterChart
					data={scatterData}
					width="100%"
					height={300}
					xAxisKey="x"
					xAxisName="Stature"
					xAxisUnit="cm"
					yAxisKey="y"
					yAxisName="Weight"
					yAxisUnit="kg"
					scatterName="Student Data"
					scatterColor="#00C49F"
				/>
			</div>


		</div>
	);
};

export default CustomerInsights;
