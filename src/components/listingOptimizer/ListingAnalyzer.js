// ListingAnalyzer.js
import React from 'react';
import GaugeChart from '../charts/gaugeChart';
import BarChartComponent from '../charts/barChart';
import RadarChart from '../charts/RadarChart';

export default function ListingAnalyzer() {
  const BarData = [
    { name: "Jan", sales: 1000 },
    { name: "Feb", sales: 2000 },
    { name: "Mar", sales: 1500 },
  ];

  const GaugeData = [
    { name: 'A', value: 80, color: '#ff0000' },
    { name: 'B', value: 45, color: '#00ff00' },
    { name: 'C', value: 25, color: '#0000ff' },
  ];

  const radarData = [
    { subject: 'Math', A: 120, B: 110, C: 98, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, C: 90, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, C: 70, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, C: 43, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, C: 95, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, C: 83, fullMark: 150 },
  ];

  const radarDataKeys = ["A", "B", "C"];
  const radarColors = ["#8884d8", "#82ca9d", "#ffc658"];

  return (
    <div className='p-6'>
      <h1 className="text-2xl font-bold mb-6">Listing Analyzer</h1>
      <h2 className="text-xl text-grey-800 mb-6">Analyze and Improve Your Product Listing Performance</h2>
      <p className="text-lg text-gray-600 mb-6">Get a detailed breakdown of your product listing performance. See your overall score, section-by-section analysis, improvement suggestions, and competitor comparisons.</p>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-6">
        <div className='p-4 bg-gray-50 border-gray-100 border-2 rounded-lg'>
          <h1 className='text-2xl my-2'>Overall Listing Score</h1>
          <div>
            <GaugeChart data={GaugeData} width="100%" height={300} />
          </div>
          <p>This score is based on your listing's title, images, keywords, and description.</p>
        </div>

        <div className=' p-4 bg-gray-50 border-gray-100 border-2 rounded-lg'>
          <h1 className='text-2xl my-2'>Sales Over Time</h1>
          <div className='mt-4'>

          <BarChartComponent
              data={BarData} 
              dataKey="sales" 
              width={400} 
              height={300} 
              color="#0E4DA4" 
              barSize={20}
              orientation="horizontal"
            />

          </div>
        </div>
      </div>

      <div className="mt-8">
        <RadarChart
          data={radarData} 
          dataKeys={radarDataKeys} 
          colors={radarColors} 
          title="Subject Scores Comparison"
        />
      </div>
    </div>
  );
}
