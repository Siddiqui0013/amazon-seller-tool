function BillingSubscription() {

  const billingHistory = [
    { invoiceId: "#23456", billingDate: "23 Jan 2023", plan: "Basic Plan", amount: "$1200", status: "Paid" },
    { invoiceId: "#23456", billingDate: "23 Jan 2023", plan: "Basic Plan", amount: "$1200", status: "Paid" },
    { invoiceId: "#23456", billingDate: "23 Jan 2023", plan: "Basic Plan", amount: "$1200", status: "Paid" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Billing & Subscription</h2>
        <p className="text-xl mt-4">Current plan</p>
      </div>

      <div className="flex gap-6 mb-8">
        <div className="w-1/2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Current Plan Summary</h3>
            <button className="px-4 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-md">Upgrade</button>
          </div>
          <div className="text-gray-600 mb-4">
            <p><span className="font-semibold">Plan Name:</span> Growth Plan</p>
            <p><span className="font-semibold">Billing Cycle:</span> Monthly</p>
            <p><span className="font-semibold">Plan Cost:</span> $5698</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-1">Usage</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: "97%" }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">4850 out of 5K monthly active users</p>
          </div>
        </div>

        <div className="w-1/2 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
          <div className="flex items-center mb-6">
            <div className="bg-gray-100 rounded-full overflow-hidden mr-4">
              <img src="https://via.placeholder.com/100" alt="Card Icon" />
            </div>
            <div>
              <p className="text-gray-800 font-semibold">Master Card **** **** **** 4002</p>
              <p className="text-gray-600 text-sm">Expire on 20/2024</p>
              <p className="text-gray-600 text-sm">billing@acme.corp</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md">Change</button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-4">Billing History</h3>
      <div className="bg-white rounded-lg shadow mb-8">
        <table className="w-full text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100 text-gray-600 p-2 uppercase text-sm font-semibold">
              <th className="py-2 border-b">Invoice ID</th>
              <th className="py-2 border-b">Billing Date</th>
              <th className="py-2 border-b">Plan</th>
              <th className="py-2 border-b">Amount</th>
              <th className="py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((item, index) => (
              <tr key={index}>
                <td className="py-2 border-b">{item.invoiceId}</td>
                <td className="py-2 border-b">{item.billingDate}</td>
                <td className="py-2 border-b">{item.plan}</td>
                <td className="py-2 border-b">{item.amount}</td>
                <td className="py-2 border-b">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notifications and Alerts</h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-700">Email/SMS Alerts</p>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-purple-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default BillingSubscription;
