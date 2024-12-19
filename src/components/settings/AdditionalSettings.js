import { useState, useEffect } from 'react';

import { db } from "../../firebase"
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useUser } from "../../UserContext";

const AdditionalSettings = () => {

  const [loading, setLoading] = useState(true);

  const { user } = useUser();
  const userPreferencesRef = doc(db, 'userPreferences', user.uid);
  const [toggles, setToggles] = useState({
    peakStorageFee: false,
    CEPStorage: false,
    topOffers: false,
    keepaOnSearch: false,
    showProfit: false,
    showRoi: false,
    showOfferSummary: false,
    pushNotifications: false,
    showPricesChart: false,
    showSoldChart: false,
    showOffersChart: false,
    showProfitMargin: false,
    showBreakeven: false,
    storeGeoLocation: false,
    darkMode: false,
  });

  const [settings, setSettings] = useState({
    minBSR: 0.00,
    maxBSR: 0.00,
    minProfit: 0.00,
    minROI: 0.00,
    prepFee: 0.00,
    miscFee: 0.00,
    fulfilment: 'FBA',
    miscFeePercentage: 0.00,
    inboundShipping: 0.60,
    ranksPricesTimeFrame: 'Current',
    buyBoxTimeFrame: '90 Days',
    fbmCost: 0.00,
    storageTime: 0,
    customROICalc: 35.00,
    chartsTimeFrame: 'All Time'
  });

  useEffect(() => {

    const loadPreferences = async () => {
      try {
        const docSnap = await getDoc(userPreferencesRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.toggles) setToggles(data.toggles);
          if (data.settings) setSettings(data.settings);
        }
      } catch (error) {
        console.error('Error loading preferences:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPreferences();
  }, [user.uid]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));
  };

  const handleToggleChange = (name) => {
    setToggles(prev => {
      const newValue = !prev[name];
      return {
        ...prev,
        [name]: newValue
      };
    });
  };
  
  const handleSave = async () => {
    try {
      await setDoc(userPreferencesRef, {
        settings,
        toggles
      // }, { merge: true });
      });
      console.log('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  const ToggleSwitch = ({ name, value, onChange }) => (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onChange(name);
      }}
      aria-checked={value}
      role="switch"
      className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        value ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
          value ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

    {loading ? (
      <div className="text-center w-full h-96 ">Loading...</div>
    ) : (
      <div>

      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Buying Criteria</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Minimum BSR (%)</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="minBSR"
                  value={settings.minBSR}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Maximum BSR (%)</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="maxBSR"
                  value={settings.maxBSR}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Minimum Profit</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="minProfit"
                  value={settings.minProfit}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">$</span>
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Minimum ROI</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="minROI"
                  value={settings.minROI}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </label>
          </div>
        </div>
      </div>

        {/* Additional Costs */}
      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Additional Costs</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Prep Fee</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="prepFee"
                  value={settings.prepFee}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">$</span>
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Misc Fee</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="miscFee"
                  value={settings.miscFee}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">$</span>

              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Misc Fee (%)</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="miscFeePercentage"
                  value={settings.miscFeePercentage}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Inbound Shipping (per pound)</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="inboundShipping"
                  value={settings.inboundShipping}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">$</span>
              </div>
            </label>
            <div className='flex flex-col gap-4'>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Use Peak Storage Fees</span>
              <ToggleSwitch name="peakStorageFee" value={toggles.peakStorageFee} onChange={handleToggleChange} />
            </label>
            <label className="flex items-center justify-between">
  <span className="text-gray-700">Enable CEP Storage</span>
  <ToggleSwitch name="CEPStorage" value={toggles.CEPStorage} onChange={handleToggleChange} />
</label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Default Values</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Ranks & Prices Time Frame</span>
              <select
                name="ranksPricesTimeFrame"
                value={settings.ranksPricesTimeFrame}
                onChange={handleChange}
                className="w-48 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="Current">Current</option>
                <option value="7 Days">7 Days</option>
                <option value="30 Days">30 Days</option>
                <option value="90 Days">90 Days</option>
              </select>
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Buy Box Time Frame</span>
              <select
                name="buyBoxTimeFrame"
                value={settings.buyBoxTimeFrame}
                onChange={handleChange}
                className="w-48 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="90 Days">90 Days</option>
                <option value="30 Days">30 Days</option>
                <option value="7 Days">7 Days</option>
              </select>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">FBM Cost</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="fbmCost"
                  value={settings.fbmCost}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">$</span>

              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Storage Time</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="storageTime"
                  value={settings.storageTime}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                />
                <span className="ml-2 text-gray-600">months</span>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Fulfillment</span>
              <select
                name="fulfilment"
                value={settings.fulfilment}
                onChange={handleChange}
                className="w-48 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="FBA">FBA</option>
                <option value="FBM">FBM</option>
              </select>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Custom ROI Calc</span>
              <div className="flex items-center">
                <input
                  type="number"
                  name="customROICalc"
                  value={settings.customROICalc}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Miscellaneous</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center justify-between">
  <span className="text-gray-700">Top Offers on Search Results</span>
  <ToggleSwitch name="topOffers" value={toggles.topOffers} onChange={handleToggleChange} />
</label>

<label className="flex items-center justify-between">
  <span className="text-gray-700">Keepa on Search Results</span>
  <ToggleSwitch name="keepaOnSearch" value={toggles.keepaOnSearch} onChange={handleToggleChange} />
</label>

<label className="flex items-center justify-between">
  <span className="text-gray-700">Store Geo Location</span>
  <ToggleSwitch name="storeGeoLocation" value={toggles.storeGeoLocation} onChange={handleToggleChange} />
</label>

<label className="flex items-center justify-between">
  <span className="text-gray-700">Dark Mode (Beta)</span>
  <ToggleSwitch name="darkMode" value={toggles.darkMode} onChange={handleToggleChange} />
</label>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Quick Info</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Profit</span>
              <ToggleSwitch name="showProfit" value={toggles.showProfit} onChange={handleToggleChange} />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Profit Margin</span>
              <ToggleSwitch name="showProfitMargin" value={toggles.showProfitMargin} onChange={handleToggleChange} />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show ROI</span>
              <ToggleSwitch name="showROI" value={toggles.showROI} onChange={handleToggleChange} />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Breakeven</span>
              <ToggleSwitch name="showBreakeven" value={toggles.showBreakeven} onChange={handleToggleChange} />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Offer Summary</span>
              <ToggleSwitch name="showOfferSummary" value={toggles.showOfferSummary} onChange={handleToggleChange} />
            </label>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Charts</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Prices Chart</span>
              <ToggleSwitch name="showPricesChart" value={toggles.showPricesChart} onChange={handleToggleChange} />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Sold Chart</span>
              <ToggleSwitch name="showSoldChart" value={toggles.showSoldChart} onChange={handleToggleChange} />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Offers Chart</span>
              <ToggleSwitch name="showOffersChart" value={toggles.showOffersChart} onChange={handleToggleChange} />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Charts Time Span</span>
              <select
                name="chartsTimeSpan"
                value={settings.chartsTimeSpan}
                onChange={handleChange}
                className="w-48 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="All Time">All Time</option>
                <option value="1 Year">1 Year</option>
                <option value="6 Months">6 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="1 Month">1 Month</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        > Save Settings </button>
      </div>
      </div>
    )}

    </div>
  );
};

export default AdditionalSettings;