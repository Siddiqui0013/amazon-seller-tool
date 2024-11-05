import React from 'react'

export default function BrandProtection() {
  return (
    <div>BrandProtection</div>
  )
}





// import GaugeChart from '../charts/gaugeChart';


// function BrancProtection() {

//   const unauthorizedSellers = [
//     { sellerName: 'FastSeller123', listingId: 'LST-001', price: '$22.99', status: 'Unauthorized' },
//     { sellerName: 'FastSeller123', listingId: 'LST-001', price: '$22.99', status: 'Unauthorized' },
//     { sellerName: 'FastSeller123', listingId: 'LST-001', price: '$22.99', status: 'Unauthorized' },
//   ];

//   const mapViolations = [
//     { productName: 'Bluetooth Speaker', currentPrice: '$25.00', mapPrice: '$22.99' },
//     { productName: 'Bluetooth Speaker', currentPrice: '$25.00', mapPrice: '$22.99' },
//   ];
  
//   const changeLogs = [
//     {
//       productName: 'Wireless Headphones',
//       changeType: 'Title',
//       oldContent: 'Wireless Bluetooth Headphones',
//       newContent: '"Wireless Bluetooth Over-Ear Headphones"',
//       changeDate: '2024-10-20',
//     },
//     {
//       productName: 'Wireless Headphones',
//       changeType: 'Title',
//       oldContent: 'Wireless Bluetooth Headphones',
//       newContent: '"Wireless Bluetooth Over-Ear Headphones"',
//       changeDate: '2024-10-20',
//     },
//   ];
  
//   const GaugeData = [
//     { name: 'A', value: 80, color: '#ff0000' },
//     { name: 'B', value: 45, color: '#00ff00' },
//     { name: 'C', value: 25, color: '#0000ff' },
//   ];



//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Brand Protection</h1>

//       <h2 className="text-xl font-semibold my-6">Unauthorized Seller Tracker</h2>
//       <div className="bg-white shadow-md rounded-lg mb-6">
//       <table className="min-w-full text-sm">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="py-2 px-4">Seller Name</th>
//             <th className="py-2 px-4">Listing ID</th>
//             <th className="py-2 px-4">Price</th>
//             <th className="py-2 px-4">Violation Status</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {unauthorizedSellers.map((seller, index) => (
//             <tr key={index} className="border-b">
//               <td className="py-2 px-4">{seller.sellerName}</td>
//               <td className="py-2 px-4">{seller.listingId}</td>
//               <td className="py-2 px-4">{seller.price}</td>
//               <td className="py-2 px-4">{seller.status}</td>
//               <td className="py-2 px-4 flex gap-2">
//                 <button className="bg-red-500 text-white py-1 px-3 rounded">Send Warning</button>
//                 <button className="bg-yellow-400 text-white py-1 px-3 rounded">Contact Seller</button>
//                 <button className="bg-orange-500 text-white py-1 px-3 rounded">Report</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>


//     <h2 className="text-xl font-semibold mt-8 mb-4">MAP Violation Detector</h2>
//     <div className="bg-white shadow-md rounded-lg mb-6">
//       <table className="min-w-full text-sm">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="py-2 px-4">Product Name</th>
//             <th className="py-2 px-4">Current Price</th>
//             <th className="py-2 px-4">MAP Price</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mapViolations.map((violation, index) => (
//             <tr key={index} className="border-b">
//               <td className="py-2 px-4">{violation.productName}</td>
//               <td className="py-2 px-4">{violation.currentPrice}</td>
//               <td className="py-2 px-4">{violation.mapPrice}</td>
//               <td className="py-2 px-4 flex gap-2">
//                 <button className="bg-red-500 text-white py-1 px-3 rounded">Send Warning</button>
//                 <button className="bg-orange-500 text-white py-1 px-3 rounded">Report</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     <h2 className="text-xl font-semibold mt-8 mb-4">Change Log Table</h2>
//     <div className="bg-white shadow-md rounded-lg">
//       <table className="min-w-full text-sm">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="py-2 px-4">Product Name</th>
//             <th className="py-2 px-4">Change Type</th>
//             <th className="py-2 px-4">Old Content Preview</th>
//             <th className="py-2 px-4">New Content Preview</th>
//             <th className="py-2 px-4">Change Date</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {changeLogs.map((log, index) => (
//             <tr key={index} className="border-b">
//               <td className="py-2 px-4">{log.productName}</td>
//               <td className="py-2 px-4">{log.changeType}</td>
//               <td className="py-2 px-4">{log.oldContent}</td>
//               <td className="py-2 px-4">{log.newContent}</td>
//               <td className="py-2 px-4">{log.changeDate}</td>
//               <td className="py-2 px-4 flex gap-2">
//                 <button className="bg-yellow-400 text-white py-1 px-3 rounded">Approve</button>
//                 <button className="bg-orange-500 text-white py-1 px-3 rounded">Revert</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     <h2 className="text-xl font-semibold mt-8 mb-4">Brand Health Score</h2>
//     <div className="bg-gray-50 flex justify-between p-2 shadow-md rounded-lg">
//     <div className='flex flex-col w-[33%] items-center'>
//             <GaugeChart data={GaugeData} width="100%" height={300} />
//             <p className='text-lg font-medium'>Map Compliance</p>
//           </div>
//     <div className='flex flex-col w-[33%] items-center'>
//             <GaugeChart data={GaugeData} width="100%" height={300} />
//             <p className='text-lg font-medium'>Content Consistency</p>
//           </div>
//     <div className='flex flex-col w-[33%] items-center'>
//             <GaugeChart data={GaugeData} width="100%" height={300} />
//             <p className='text-lg font-medium'>Unauthorized Sellers</p>
//           </div>
//     </div>






//     </div>
//   );
// }

// export default BrancProtection;
