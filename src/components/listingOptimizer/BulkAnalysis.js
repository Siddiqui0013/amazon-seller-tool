import React, { useState } from "react";

const resultsData = [
  {
    fileName: "report_2023.pdf",
    status: "Completed",
    analysisDate: "2023-10-01",
    fileSize: "1.2 MB",
    shared: false,
  },
  {
    fileName: "report_2023.pdf",
    status: "Completed",
    analysisDate: "2023-10-01",
    fileSize: "1.2 MB",
    shared: false,
  },
  {
    fileName: "report_2023.pdf",
    status: "Completed",
    analysisDate: "2023-10-01",
    fileSize: "1.2 MB",
    shared: false,
  },
];

export default function App() {
  const [uploadStatus, setUploadStatus] = useState(45); // Example upload status

  return (
    <div className="p-8">
      {/* Bulk Analysis Header */}
      <h2 className="text-2xl font-bold mb-4">Bulk Analysis</h2>

      {/* Upload Section */}
      <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center mb-6">
        <p className="text-gray-500">Drag and drop your file here or click to upload</p>
        <p className="text-sm text-gray-400 mt-2">Supported formats: CSV, Excel</p>
        <p className="text-green-500 mt-4">Analyzing: {uploadStatus}%</p>
      </div>

      {/* Results Section */}
      <h3 className="text-xl font-semibold mb-4">Results</h3>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">File Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Analysis Date</th>
            <th className="border border-gray-200 px-4 py-2 text-left">File Size</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Shared</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((result, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">{result.fileName}</td>
              <td className="border border-gray-200 px-4 py-2">{result.status}</td>
              <td className="border border-gray-200 px-4 py-2">{result.analysisDate}</td>
              <td className="border border-gray-200 px-4 py-2">{result.fileSize}</td>
              <td className="border border-gray-200 px-4 py-2">
                {result.shared ? "Yes" : ""}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                <button className="bg-[#FF9900] text-white px-4 py-1 rounded mr-2">
                  Export
                </button>
                <button className="bg-[#FF9900] text-white px-4 py-1 rounded">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
