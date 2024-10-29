import React from 'react';
import LineChart from '../charts/LineChart'; // Using the existing LineChart
import PieChart from '../charts/PieChart'; // Using the existing PieChart

const PriceTracker = () => {
  const lines4data = [
    { name: 'buyBox', data: [4000, 3000, 2000, 6000] },
    { name: 'amazon', data: [2400, 1398, 9800, 3800] },
    { name: 'fba', data: [2600, 2210, 2290, 8290] },
    { name: 'fbm', data: [3000, 2900, 1800, 800] },
  ];

  const categories = ['Page A', 'Page B', 'Page C', 'Page D'];

  const pieData = [80, 45, 25];
  const pieLabels = ['A', 'B', 'C'];
  const pieColors = ['#FF6384', '#36A2EB', '#FFCE56'];

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6">Price Tracker</h1>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Price History</h2>
        <LineChart data={lines4data} categories={categories} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Price Volatility Indicator</h2>
        <PieChart data={pieData} labels={pieLabels} colors={pieColors} />
      </div>
    </div>
  );
};

export default PriceTracker;
