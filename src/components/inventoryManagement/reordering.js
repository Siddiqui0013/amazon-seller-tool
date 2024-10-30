import BarChartComponent from "../charts/barChart"; 

const reorderData = [
  {
    productId: "0021",
    stockLevel: "Completed",
    reorderPoint: "2023-10-01",
    size: "1.2 MB",
    supplier: "Supplier A",
    leadTime: "14 days",
  },
  {
    productId: "3213",
    stockLevel: "Completed",
    reorderPoint: "2023-10-01",
    size: "1.2 MB",
    supplier: "Supplier B",
    leadTime: "10 days",
  },
  {
    productId: "6213",
    stockLevel: "Completed",
    reorderPoint: "2023-10-01",
    size: "1 MB",
    supplier: "Supplier AB",
    leadTime: "69 days",
  },
];


const BarData = [
  { name: "Jan", SalesA: 1000, SalesB: 1200 },
  { name: "Feb", SalesA: 2000, SalesB: 1800 },
  { name: "Mar", SalesA: 1500, SalesB: 1700 },
  ];

  const bars = [
  { dataKey: "SalesA", color: "#0E4DA4" },
  { dataKey: "SalesB", color: "#FF9900" },
  ];

export default function App() {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-lg font-semibold mb-4">Reorder Recommendations Table</h2>

      <div className="bg-gray-50 border-gray-100 border-2 rounded-lg mb-8 overflow-x-auto">
        <table className="w-full table-auto shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 text-sm p-2">Product ID</th>
              <th className="border border-gray-300 text-sm p-2">Current Stock Level</th>
              <th className="border border-gray-300 text-sm p-2">Reorder Point</th>
              <th className="border border-gray-300 text-sm p-2">Suggested Quantity</th>
              <th className="border border-gray-300 text-sm p-2">Supplier Name</th>
              <th className="border border-gray-300 text-sm p-2">Lead Time</th>
              <th className="border border-gray-300 text-sm p-2">Action Buttons</th>
            </tr>
          </thead>
          <tbody>
            {reorderData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{item.productId}</td>
                <td className="border border-gray-300 px-4 py-2">{item.stockLevel}</td>
                <td className="border border-gray-300 px-4 py-2">{item.reorderPoint}</td>
                <td className="border border-gray-300 px-4 py-2">{item.size}</td>
                <td className="border border-gray-300 px-4 py-2">{item.supplier}</td>
                <td className="border border-gray-300 px-4 py-2">{item.leadTime}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-lg font-semibold mb-4">Supplier Lead Time Tracker</h2>

      <div className="bg-gray-50 border-gray-100 border-2 shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-medium">Time Lead Tracker</h3>
          <div className="flex gap-2">
            <span className="text-sm text-gray-500">Deliver</span>
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
          </div>
          <h3 className="text-xl font-semibold">Total: <span>31,863</span></h3>
        </div>
        <div className="overflow-hidden">
          {/* <HorizontalBarChart
            data={BarChartdata}
            lines={BarChartlines}
            bars={BarChartbars}
            width={1000}
            height={400}
          /> */}

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
    </div>
  );
}
