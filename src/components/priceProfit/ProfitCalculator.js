import React, { useState } from 'react';
import GaugeChart from '../charts/GaugeChart'; 
import BarChart from '../charts/BarChart'; 

const ProfitCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [fbaFee, setFbaFee] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const [totalCost, setTotalCost] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [netProfit, setNetProfit] = useState(0);

  const handleSave = () => {
    const currentTotalCost = parseFloat(fbaFee) + parseFloat(shippingCost) + parseFloat(purchasePrice);
    const currentRevenue = parseFloat(salePrice);
    const currentProfit = currentRevenue - currentTotalCost;

    setTotalCost((prevCost) => prevCost + currentTotalCost);
    setRevenue((prevRevenue) => prevRevenue + currentRevenue);
    setNetProfit((prevProfit) => prevProfit + currentProfit);

    // Reset inputs
    setPurchasePrice(0);
    setSalePrice(0);
    setFbaFee(0);
    setShippingCost(0);
  };

  // ApexCharts Gauge Data
  const gaugeOptions = {
    series: [((netProfit / totalCost) * 100) || 0], // Example calculation for the gauge
    chart: {
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: '#f2f2f2',
          strokeWidth: '100%',
          margin: 0, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '22px',
            color: '#888',
            offsetY: 50,
          },
          value: {
            show: true,
            fontSize: '16px',
            color: '#333',
            offsetY: 0,
          },
        },
      },
    },
    fill: {
      colors: ['#00E396'],
    },
    labels: ['Profit Margin'],
  };

  // ApexCharts Bar Chart Data
  const barOptions = {
    series: [
      {
        name: 'Costs',
        data: [
          parseFloat(purchasePrice) || 0,
          parseFloat(fbaFee) || 0,
          parseFloat(shippingCost) || 0,
        ],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories: ['Purchase Price', 'FBA Fees', 'Shipping Costs'],
    },
    colors: ['#0E4DA4'],
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6">Price Tracker</h1>

      <div className="flex gap-6 mb-8 m-auto">
        <div className="flex flex-col gap-6 mb-8 w-[49%]">
          <div>
            <label className="block text-sm font-medium mb-2">Purchase Price</label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              placeholder="Enter price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-500 text-sm mt-1">Enter the cost at which you purchased the product.</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Selling Price</label>
            <input
              type="number"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              placeholder="Enter price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-500 text-sm mt-1">Enter the cost at which you sold the product.</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">FBA Fees</label>
            <input
              type="number"
              value={fbaFee}
              onChange={(e) => setFbaFee(e.target.value)}
              placeholder="Enter fee"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-500 text-sm mt-1">Enter the FBA fulfillment fee or suggested value.</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Shipping Costs</label>
            <input
              type="number"
              value={shippingCost}
              onChange={(e) => setShippingCost(e.target.value)}
              placeholder="Enter cost"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-500 text-sm mt-1">Enter the shipping costs associated with the product.</p>
          </div>
        </div>

        <div className="flex flex-col w-[49%] gap-6 mb-8 self-end">
          <div className="p-6 bg-gray-100 text-center rounded-lg">
            <div className="my-8">
              <h3 className="text-lg font-semibold">Total Costs</h3>
              <p className="text-3xl font-bold text-blue-600">${totalCost}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-xl font-medium">Total Revenue</p>
                <p className="text-3xl font-extrabold">${revenue}</p>
              </div>
              <div>
                <p className="text-xl font-medium">Net Profit</p>
                <p className="text-3xl font-extrabold">${netProfit}</p>
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-3 mb-6 rounded-md text-lg font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Profit Margin</h3>
          <div className="bg-white rounded-lg shadow-md">
            <GaugeChart options={gaugeOptions} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Breakdown of Costs</h3>
          <div className="bg-white rounded-lg shadow-md">
            <BarChart options={barOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;




// import React, {useState, useEffect} from 'react';
// import GaugeChart from '../charts/gaugeChart';
// import CustomBarChart from '../charts/CustomBarChart';

// const PriceTracker = () => {

//   const [purchasePrice, setPurchasePrice] = useState(0)
//   const [salePrice, setSalePrice] = useState(0)
//   const [netProfit, setNetProfit] = useState(0)
//   const [fbaFEe, setFbaFEee] = useState(0)
//   const [shippingcost, setShippingcost] = useState(0)
//   const [totalCost, setTotalCost] = useState(0)
//   const [revenue, setRevenue] = useState(0)

//   // setNetProfit(revenue - totalCost)
//   // setTotalCost(fbaFEe + shippingcost + purchasePrice)
//   // setRevenue(salePrice)

//   useEffect(() => {
//     setTotalCost(Number(fbaFee) + Number(shippingCost) + Number(purchasePrice));
//   }, [purchasePrice, fbaFee, shippingCost]);

//   useEffect(() => {
//     setRevenue(Number(salePrice));
//   }, [salePrice]);

//   useEffect(() => {
//     setNetProfit(revenue - totalCost);
//   }, [revenue, totalCost]);


//   const GaugeData = [
//     { name: 'A', value: 80, color: '#ff0000' },
//     { name: 'B', value: 45, color: '#00ff00' },
//     { name: 'C', value: 25, color: '#0000ff' },
//   ];

//   const Bardata = [
//     { name: "Group A", uv: -4000 },
//     { name: "Group B", uv: 3000},
//     { name: "Group C", uv: -2000},
//     { name: "Group D", uv: 2780},
//     { name: "Group E", uv: -1890},
//     { name: "Group F", uv: 2390},
//     { name: "Group G", uv: 3490 },
//   ];

//   return (
//     <div className="p-8 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-semibold mb-6">Price Tracker</h1>

//       <div className="flex gap-6 mb-8 m-auto ">
//       <div className="flex flex-col gap-6 mb-8 w-[49%]">
//         <div>
//           <label className="block text-sm font-medium mb-2">Purchase Price</label>
//           <input
//             type="number"
//             value={purchasePrice}
//             placeholder="Enter price"
//             onChange={(e) => setPurchasePrice(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <p className="text-gray-500 text-sm mt-1">Enter the cost at which you purchased the product.</p>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Selling Price</label>
//           <input
//             type="number"
//             value={salePrice}
//             onChange={(e) => setSalePrice(e.target.value)}
//             placeholder="Enter price"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <p className="text-gray-500 text-sm mt-1">Enter the expected selling price on Amazon.</p>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">FBA Fees</label>
//           <input
//             type="number"
//             onChange={(e) => setFbaFEee(e.target.value)}
//             value={fbaFEe}
//             placeholder="Enter price"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <p className="text-gray-500 text-sm mt-1">Enter the FBA fulfillment fee or suggested value.</p>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Shipping Costs</label>
//           <input
//             type="number"
//             onChange={(e) => setShippingcost(e.target.value)}
//             value={shippingcost}
//             placeholder="Enter price"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <p className="text-gray-500 text-sm mt-1">Enter the shipping costs associated with the product.</p>
//         </div>
//       </div>

//       <div className="flex flex-col w-[49%] gap-6 mb-8 self-end">
//         <div className="p-6 bg-gray-100 text-center rounded-lg">
//           <div className=' my-8'>
//           <h3 className="text-lg font-semibold">Total Costs</h3>
//           <p className="text-3xl font-bold text-blue-600">${totalCost}</p>
//           </div>
//           <div className="mt-4 flex justify-between">
//             <div>
//               <p className="text-xl font-medium">Total Revenue</p>
//               <p className="text-3xl font-extrabold">${revenue}</p>
//             </div>
//             <div>
//               <p className="text-xl font-medium">Net Profit</p>
//               <p className="text-3xl font-extrabold">${netProfit}</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-end">
//           <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium">
//             Save
//           </button>
//         </div>
//       </div>


//       </div>


//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// <div>
// <div>
// <h3 className="text-lg font-medium mb-4">Profit Margin</h3>
// </div>

//         <div className=" bg-white rounded-lg shadow-md">
//           <div className="bg-gray-50 rounded-lg">
//           <GaugeChart 
//            data={GaugeData} 
//            cx={200} 
//            cy={200} 
//            innerRadius={100} 
//            outerRadius={150} 
//            value={50} 
//            width={400} 
//            height={250} 
//           />
//           </div>
//         </div>
// </div>


// <div>
// <h3 className="text-lg font-medium mb-4">Breakdown of Costs</h3>
// <div className=" bg-white rounded-lg shadow-md">

// <div className="bg-gray-100 rounded-lg">
// <CustomBarChart
//         data={Bardata}
//         width={500}
//         height={250}
//         barColors={["#0E4DA4"]}
//       />
// </div>
// </div>
// </div>
//       </div>
//     </div>
//   );
// };

// export default PriceTracker;
