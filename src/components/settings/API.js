export default function ApiIntegrationSettings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">API Integration Settings</h1>
      
      <p className="mb-2">
        Your active subscription level generates 5 tokens per minute and will be renewed on Nov 5, 2024, at 1:59 
        <a href="#" className="text-blue-600 ml-1">Data Subscription</a>.
      </p>
      <p className="mb-4">
        You can increase your token rate by 
        <a href="#" className="text-blue-600 ml-1">adding an API subscription</a>.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Private API access key:</label>
        <p>Currently available tokens:</p>
      </div>

      <div className="mb-6 flex items-center">
        <label className="block text-gray-700 font-semibold mr-2">Notification webhook endpoint:</label>
        <input
          type="text"
          placeholder="http://..."
          className="border rounded-lg px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="ml-2 p-2 bg-gray-200 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l6 6L20 6" />
          </svg>
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Receipts:</h2>
      <table className="w-full border rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Price Plan</th>
            <th className="p-2 border">Start Date</th>
            <th className="p-2 border">End Date</th>
            <th className="p-2 border">Payment Method</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Download</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((_, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">23 Jan 2023</td>
              <td className="p-2 border">19,00 €</td>
              <td className="p-2 border">Data Access 19</td>
              <td className="p-2 border">23 Jan 2023</td>
              <td className="p-2 border">23 Jan 2023</td>
              <td className="p-2 border">CreditCard</td>
              <td className="p-2 border">Regular</td>
              <td className="p-2 border text-green-600 font-semibold">Paid</td>
              <td className="p-2 border">
                <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l6 6L20 6" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
