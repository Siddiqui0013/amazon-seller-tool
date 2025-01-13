import { useState } from 'react';
import Barchart from "../charts/barChart";
import GaugeChart from "../charts/gaugeChart";
import Treemap from "../charts/treemap";
import { AiOutlineSearch } from "react-icons/ai";

export default function NicheAnalysis() {

  const [showGraphs, setshowGraphs] = useState(false)

  const [term, setTerm] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [gaugeData, setGaugeData] = useState([
    { name: 'A', value: 0, color: '#ff0000' },
    { name: 'B', value: 2000, color: '#00ff00' },
    { name: 'C', value: 3000, color: '#0000ff' },
  ]);
  const [treeData, setTreeData] = useState([]);

  const termsearch = async () => {
    const url = 'https://developer.junglescout.com/api//keywords/keywords_by_keyword_query?marketplace=us&sort=-monthly_search_volume_exact&page[size]=5';
    const headers = {
      'Authorization': 'seller_tool:-6KiaIRE2LdP6ET0VnItOTm75nz-G1E6vwpGMOMeJJg',
      'X-API-Type': 'junglescout',
      'Accept': 'application/vnd.junglescout.v1+json',
      'Content-Type': 'application/vnd.api+json',
    };
    const body = JSON.stringify({
      data: {
        type: 'keywords_by_keyword_query',
        attributes: {
          search_terms: term,
          min_monthly_search_volume_exact: 1,
          max_monthly_search_volume_exact: 99999,
          min_monthly_search_volume_broad: 1,
          max_monthly_search_volume_broad: 99999,
          min_word_count: 1,
          max_word_count: 99999,
          min_organic_product_count: 1,
          max_organic_product_count: 99999,
        },
      },
    });

    try {
      setshowGraphs(true)
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
      });
      const result = await response.json();
      setSearchData(result.data);

      // Update gauge data based on search volume
      const searchVolume = result.data[0]?.attributes?.monthly_search_volume_exact ?? 0;
      let newGaugeData;
      if (searchVolume < 2000) {
        newGaugeData = [
          { name: 'A', value: searchVolume, color: '#ff0000' },
          { name: 'B', value: 2000, color: '#00ff00' },
          { name: 'C', value: 3000, color: '#0000ff' },
        ];
      } else if (searchVolume < 5000) {
        newGaugeData = [
          { name: 'A', value: 2000, color: '#ff0000' },
          { name: 'B', value: searchVolume, color: '#00ff00' },
          { name: 'C', value: 3000, color: '#0000ff' },
        ];
      } else {
        newGaugeData = [
          { name: 'A', value: 2000, color: '#ff0000' },
          { name: 'B', value: 3000, color: '#00ff00' },
          { name: 'C', value: searchVolume, color: '#0000ff' },
        ];
      }
      setGaugeData(newGaugeData);

      if (result.data.length >= 4) {
        const newTreeData = result.data.slice(1, 5).map((item, index) => ({
          name: item.attributes.name,
          children: [
            { name: "Axes", size: item.attributes.monthly_search_volume_exact },
          ],
        }));
        setTreeData(newTreeData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const termBar = searchData && searchData.length > 0 ? [
    { 
      name: term, 
      "Monthly Trend": searchData[0].attributes.monthly_trend,
      "Quarterly Trend": searchData[0].attributes.quarterly_trend 
    },
  ] : [{ name: '', "Monthly Trend": 0, "Quarterly Trend": 0 }];

  const termBars = [
    { dataKey: "Monthly Trend", color: "#0E4DA4" },
    { dataKey: "Quarterly Trend", color: "#FF9900" },
  ];

  const termsBar = searchData &&  searchData.length > 0 
    ? searchData.map(item => ({
        name: item.attributes.name,
        "Monthly Search Volume": item.attributes.monthly_search_volume_exact,
      }))
    : [{ name: 'No Data', "Monthly Search Volume": 0 }];

  const termsBars = [
    { dataKey: "Monthly Search Volume", color: "#0E4DA4" },
  ];

  const TreeColors = ["#8889DD", "#9597E4", "#8DC77B", "#A5D297"];

  return (
    <div className='p-6'>
      <div className='flex mt-2 flex-wrap mx-4 items-center justify-between overflow-x-hidden'>
        <h1 className='font-semibold text-2xl'>Niche Analysis</h1>

        <div className="relative flex border-2 rounded-3xl ml-auto">
          <div>
            <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="p-2 pl-10 rounded-3xl focus:outline-none"
            />
          </div>
          <button
            className="px-4 py-2 bg-primary text-white rounded-r-3xl"
            onClick={termsearch}
          >
            Search
          </button>
        </div>
      </div>

      {showGraphs && (
      <div className='grid grid-cols-1 p-4 gap-3 mb-6 flex-wrap m-auto justify-evenly'>
      <div className="bg-gray-50 p-4 border-gray-100 border-2 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2 py-4'>Trend Graph for niche growth</p>
        <div className='box-content overflow-hidden'>
          <Barchart data={termBar} bars={termBars} height={300} color="#0E4DA4" barSize={20} />
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-gray-100 border-2 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2 py-4'>Top sellers in niche</p>
        <Barchart data={termsBar} bars={termsBars} height={300} color="#0E4DA4" barSize={20} />
      </div>

      <div className="bg-gray-50 border-gray-100 border-2 p-4 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2 py-4'>Niche Saturation Index</p>
        <GaugeChart data={gaugeData} height={250} cx={180} />
      </div>
      
      <div className="bg-gray-50 border-gray-100 border-2 p-4 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2 py-4'>Seasonal Demand Chart</p>
        {treeData.length > 0 && (
          <Treemap data={treeData} width={400} height={250} colors={TreeColors} />
        )}
      </div>
    </div>      
      )}

      
      <div className='grid grid-cols-1 p-4 gap-3 mb-6 flex-wrap m-auto justify-evenly'>
      <div className="bg-gray-50 p-4 border-gray-100 border-2 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2 py-4'>Trend Graph for niche growth</p>
        <div className='box-content overflow-hidden'>
          <Barchart data={termBar} bars={termBars} height={300} color="#0E4DA4" barSize={20} />
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-gray-100 border-2 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2 py-4'>Top sellers in niche</p>
        <Barchart data={termsBar} bars={termsBars} height={300} color="#0E4DA4" barSize={20} />
      </div>

      <div className="bg-gray-50 border-gray-100 border-2 p-4 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2 py-4'>Niche Saturation Index</p>
        <GaugeChart data={gaugeData} height={250} cx={180} />
      </div>
      
      <div className="bg-gray-50 border-gray-100 border-2 p-4 shadow-md rounded-md">
        <p className='font-semibold text-lg px-2 py-4'>Seasonal Demand Chart</p>
        {treeData.length > 0 && (
          <Treemap data={treeData} width={400} height={250} colors={TreeColors} />
        )}
      </div>
    </div>      
      



      {/* {searchData.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <h2 className="text-xl font-semibold">Search Results</h2>
          <pre>{JSON.stringify(searchData, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}











// import { useState} from 'react'
// import LineChart from "../charts/linechart"
// import Barchart from "../charts/barChart"
// import GaugeChart from "../charts/gaugeChart"
// import Treemap from "../charts/treemap"
// import { AiOutlineSearch } from "react-icons/ai";


// export default function NicheAnalysis() {

//   const [term, setTerm] = useState('')

//   const termsearch = () => {

//     console.log(term)
//   }

//   const GaugeData = [
//     { name: 'A', value: 80, color: '#ff0000' },
//     { name: 'B', value: 45, color: '#00ff00' },
//     { name: 'C', value: 25, color: '#0000ff' },
//   ];


//   const lines3data = [
//     { name: "Page A", uv: 4000, pv: 2400, av: 2600, amt: 2400 },
//     { name: "Page B", uv: 3000, pv: 1398, av: 2210, amt: 2210 },
//     { name: "Page C", uv: 2000, pv: 9800, av: 2290, amt: 2290 },
//   ];

//   const line3 = [
//     { dataKey: "pv", stroke: "#8884d8", activeDot: { r: 8 } },
//     { dataKey: "uv", stroke: "#82ca9d" },
//     { dataKey: "av", stroke: "#ffc658" },
//   ];

// 	const BarData = [
// 		{ name: "Jan", SalesA: 1000, SalesB: 1200 },
// 		{ name: "Feb", SalesA: 2000, SalesB: 1800 },
// 		{ name: "Mar", SalesA: 1500, SalesB: 1700 },
// 		{ name: "Mar", SalesA: 1500, SalesB: 1700 },
// 	  ];
	
// 	  const bars = [
// 		{ dataKey: "SalesA", color: "#0E4DA4" },
// 		{ dataKey: "SalesB", color: "#FF9900" },
// 	  ];

//   const TreeData = [
//     {
//       name: "axis",
//       children: [
//         { name: "Axes", size: 1302 },
//         { name: "Axis", size: 24593 },
//         { name: "AxisGridLine", size: 652 },
//         { name: "AxisLabel", size: 636 },
//         { name: "CartesianAxes", size: 6703 },
//       ],
//     },
//     {
//       name: "filter",
//       children: [
//         { name: "FisheyeTreeFilter", size: 5219 },
//         { name: "GraphDistanceFilter", size: 3165 },
//         { name: "VisibilityFilter", size: 3509 }
//       ]
//     },
//     { name: "IOperator", size: 1286 },
//     {
//       name: "label",
//       children: [
//         { name: "Labeler", size: 9956 },
//         { name: "RadialLabeler", size: 3899 },
//         { name: "StackedAreaLabeler", size: 3202 }
//       ]
//     },
//   ];
//   const TreeColors = [
//     "#8889DD",
//     "#9597E4",
//     "#8DC77B",
//     "#A5D297",
//     "#E2CF45",
//     "#F8C12D",
//   ];


//   return (
//     <div className='p-6'>

// <div className='flex mt-2 flex-wrap mx-4  items-center justify-between overflow-x-hidden'>

//   <h1 className='font-semibold text-2xl '>Niche Analysis</h1>

//   <div className="relative flex border-2 rounded-3xl ml-auto">
//     <div>
//     <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={20} />
//     <input
//       type="text"
//       placeholder="Search"
//       value={term}
//       onChange={(e) => setTerm(e.target.value)}
//       className="p-2 pl-10 rounded-3xl focus:outline-none"
//     />
//     </div>
//     <button
//     className="px-4 py-2 bg-blue-500 text-white rounded-r-3xl hover:bg-blue-600"
//     onClick={ termsearch}
//     >Search</button>
//   </div>
// </div>


//       <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-3 mb-6 flex-wrap m-auto justify-evenly'>

//       <div className="bg-gray-50 p-4 border-gray-100 border-2 shadow-md rounded-md">
//         <p className='font-semibold text-lg px-2  py-4'>Trend Graph for niche growth</p>
        
//         <div className='box-content overflow-hidden'>
//         <LineChart data={lines3data} lines={line3} width = {500} height = {300}/>
//         </div>
        
//         </div>
        
//         <div className="bg-gray-50 p-4  border-gray-100 border-2 shadow-md rounded-md">
//           <p className='font-semibold text-lg px-2  py-4'>Top sellers in niche</p>
//           <Barchart 
//           data={BarData} 
//           bars={bars}
//           width={400} 
//           height={300} 
//           color="#0E4DA4" 
//           barSize={20} 
          
//           />
//         </div>
        
//         <div className="bg-gray-50 border-gray-100 border-2 p-4 shadow-md rounded-md">
//           <p className='font-semibold text-lg px-2  py-4'>Niche Saturation Index</p>

// <GaugeChart data={GaugeData} width={330} height={250} cx={180} />

//         </div>
        
//         <div className="bg-gray-50 border-gray-100 border-2 p-4 shadow-md  rounded-md">
//           <p className='font-semibold text-lg px-2  py-4'>Seasonal Demand Chart</p>
//           <Treemap
//            data={TreeData}
//            width={400}
//            height={250}
//            colors={TreeColors}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
