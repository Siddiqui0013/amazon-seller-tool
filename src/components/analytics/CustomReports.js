const reportsData = [
  {
    title: "Report Title",
    dateCreated: "23 Jan 2023",
    lastModified: "23 Jan 2023",
  },
  {
    title: "Report Title",
    dateCreated: "23 Jan 2023",
    lastModified: "23 Jan 2023",
  },
  {
    title: "Report Title",
    dateCreated: "23 Jan 2023",
    lastModified: "23 Jan 2023",
  },
];

export default function CustomReports() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Custom Reports</h1>
      <h2 className="text-lg font-semibold mb-6">Reports</h2>
      
      <table className="w-full border rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Date Created</th>
            <th className="p-2 border">Last Modified</th>
            <th className="p-2 border">Action Button</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map((report, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{report.title}</td>
              <td className="p-2 border">{report.dateCreated}</td>
              <td className="p-2 border">{report.lastModified}</td>
              <td className="p-2 border">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">Edit</button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">View</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
