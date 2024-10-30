import CustomComposedChart from "../charts/ComposedChart";
import ScatterChart from "../charts/ScatterChart";
import Treemap from "../charts/treemap";
import BarChartComponent from "../charts/barChart";

const ProfitAnalytics = () => {

  const ComposedChartData = [
    { name: "Page A", uv: 590, pv: 800, amt: 1400 },
    { name: "Page B", uv: 868, pv: 967, amt: 1506 },
    { name: "Page C", uv: 1397, pv: 1098, amt: 989 },
    { name: "Page D", uv: 1480, pv: 1200, amt: 1228 },
    { name: "Page E", uv: 1520, pv: 1108, amt: 1100 },
    { name: "Page F", uv: 1400, pv: 680, amt: 1700 },
  ];
  const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
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

  const BarData = [
    { name: "Jan", SalesA: 1000, SalesB: 1200 },
    { name: "Feb", SalesA: 2000, SalesB: 1800 },
    { name: "Mar", SalesA: 1500, SalesB: 1700 },
    ];
    const bars = [
    { dataKey: "SalesB", color: "#FF9900" },
    ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Profit Trends</h2>

      <div className="mb-4 bg-gray-50 border-gray-100 border-2 shadow-md rounded-lg">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
<h2 className="text-xl font-semibold mb-4">Sales by Marketplace</h2>

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
<div className="border rounded-lg border-gray-100 bg-gray-50 shadow-lg p-6">
<h2 className="text-xl font-semibold mb-6">Top selling products</h2>

<Treemap
                     data={TreeData}
                     width={450}
                     height={300}
                     colors={TreeColors}
          />

  </div>
</div>

<div className="bg-gray-50 p-3 border-gray-100 border-2 mt-6 shadow-md rounded-lg">
<BarChartComponent 
            data={BarData} 
            bars={bars}
            barRadius={[0, 10, 10, 0]} 
            width={1000} 
            height={300} 
            barSize={20} 
            orientation="horizontal" 
          />

</div>


    </div>
  );
};

export default ProfitAnalytics;
