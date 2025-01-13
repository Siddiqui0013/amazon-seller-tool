import { useUser } from "../../UserContext";

function UserDetails() {

const {user} = useUser();

const AMAZON_MARKETPLACES = [
  { value: "amazon.com", label: "United States (amazon.com)" },
  { value: "amazon.co.uk", label: "United Kingdom (amazon.co.uk)" },
  { value: "amazon.de", label: "Germany (amazon.de)" },
  { value: "amazon.fr", label: "France (amazon.fr)" },
  { value: "amazon.it", label: "Italy (amazon.it)" },
  { value: "amazon.es", label: "Spain (amazon.es)" },
  { value: "amazon.co.jp", label: "Japan (amazon.co.jp)" },
  { value: "amazon.ca", label: "Canada (amazon.ca)" },
  { value: "amazon.com.mx", label: "Mexico (amazon.com.mx)" },
  { value: "amazon.com.br", label: "Brazil (amazon.com.br)" },
  { value: "amazon.com.au", label: "Australia (amazon.com.au)" },
  { value: "amazon.in", label: "India (amazon.in)" },
  { value: "amazon.nl", label: "Netherlands (amazon.nl)" },
  { value: "amazon.se", label: "Sweden (amazon.se)" },
  { value: "amazon.pl", label: "Poland (amazon.pl)" },
  { value: "amazon.sg", label: "Singapore (amazon.sg)" },
  { value: "amazon.ae", label: "United Arab Emirates (amazon.ae)" },
  { value: "amazon.sa", label: "Saudi Arabia (amazon.sa)" },
  { value: "amazon.tr", label: "Turkey (amazon.tr)" }
];

  return (
    <div className="p-6 min-h-screen flex items-center justify-between">
      <div className=" p-8 w-full flex items-start justify-around">
        <div className="pr-8  w-[70%]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Details</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 text-bold text-lg mb-1">Username</label>
              <input
                type="text"
                value={user.displayName}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-primary bg-opacity-60 text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-600 text-bold text-lg mb-1">Email</label>
              <input
                type="email"
                value={user.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-opacity-60 bg-primary text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-600 text-bold text-lg mb-1">Subscription</label>
              <input
                type="text"
                value="Getting Serious"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-primary bg-opacity-60 text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-600 text-bold text-lg mb-1">Home Marketplace</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-primary  bg-opacity-60 text-gray-700"
                defaultValue="amazon.com"
                
              >

              {AMAZON_MARKETPLACES.map((marketplace) => (
                <option key={marketplace.value} value={marketplace.value}>
                  {marketplace.label}
                </option>
              ))}

                {/* <option value="amazon.com">amazon.com</option>
                <option value="amazon.co.uk">amazon.co.uk</option>
                <option value="amazon.de">amazon.de</option> */}
              </select>
            </div>

            <div>
              <label className="block text-gray-600 text-bold text-lg mb-1">Merchant Token</label>
              <input
                type="text"
                value="Getting Serious"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-opacity-60 bg-primary text-gray-700"
                disabled
              />
            </div>
          </form>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg">
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserDetails;
