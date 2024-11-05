function UserDetails() {
  return (
    <div className="p-6 min-h-screen flex items-center justify-between">
      <div className=" p-8 w-full flex items-start justify-around">
        <div className="pr-8  w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Details</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Username</label>
              <input
                type="text"
                value="lyshipping"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-purple-50 text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                value="workemail@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-purple-50 text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Subscription</label>
              <input
                type="text"
                value="Getting Serious"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-purple-50 text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Password</label>
              <input
                type="password"
                value="Getting Serious"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-purple-50 text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Home Marketplace</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-purple-50 text-gray-700"
                defaultValue="amazon.com"
              >
                <option value="amazon.com">amazon.com</option>
                <option value="amazon.co.uk">amazon.co.uk</option>
                <option value="amazon.de">amazon.de</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Merchant Token</label>
              <input
                type="text"
                value="Getting Serious"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-purple-50 text-gray-700"
                disabled
              />
            </div>
          </form>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 border border-yellow-500 text-yellow-500 font-semibold rounded-lg">
              Cancel
            </button>
            <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg">
              Save Changes
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-40 h-40 bg-purple-50 rounded-full border-dashed border-2 border-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Profile Picture</span>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
            Change Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
