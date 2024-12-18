import { useState } from 'react';

const AdditionalSettings = () => {
  const [settings, setSettings] = useState({
    minBSR: 1.00,
    maxBSR: 4.00,
    minProfit: 2.00,
    minROI: 10.00,
    prepFee: 0.00,
    miscFee: 0.00,
    miscFeePercentage: 0.00,
    inboundShipping: 0.60,
    inboundPlacement: 'Amazon Optimized Splits',
    usePeakStorage: false,
    enabledCEPStorage: true,

    minBSR: 1.00,
    maxBSR: 4.00,
    minProfit: 2.00,
    minROI: 10.00,
    
    prepFee: 0.00,
    miscFee: 0.00,
    miscFeePercentage: 0.00,
    inboundShipping: 0.60,
    inboundPlacement: 'Amazon Optimized Splits',
    usePeakStorage: false,
    enabledCEPStorage: true,

    ranksPricesTimeFrame: 'Current',
    buyBoxTimeFrame: '90 Days',
    fbmCost: 0.00,
    storageTime: 0,
    localFulfillment: 'FBA',
    europeanFulfillment: 'EFN',
    customROICalc: 35.00,

    topOffers: true,
    keepa: true,
    storeGeoLocation: false,
    darkMode: false,

    showProfit: true,
    showProfitMargin: false,
    showROI: true,
    showBreakeven: false,
    showOfferSummary: true,

    showPricesChart: true,
    showSoldChart: true,
    showOffersChart: true,
    chartsTimeSpan: 'All Time'

  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value
    }));
  };

  const handleToggleButton = (name, value) => {
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">

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
                <span className="mr-2 text-gray-600">$</span>
                <input
                  type="number"
                  name="minProfit"
                  value={settings.minProfit}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
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

      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Additional Costs</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Prep Fee</span>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">$</span>
                <input
                  type="number"
                  name="prepFee"
                  value={settings.prepFee}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Misc Fee</span>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">$</span>
                <input
                  type="number"
                  name="miscFee"
                  value={settings.miscFee}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
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
              <span className="text-gray-700">Inbound Shipping</span>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">$</span>
                <input
                  type="number"
                  name="inboundShipping"
                  value={settings.inboundShipping}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
                <span className="ml-2 text-gray-600">per pound</span>
              </div>
            </label>
            <label className="flex items-center justify-between col-span-2">
              <span className="text-gray-700">Inbound Placement (.com only)</span>
              <select
                name="inboundPlacement"
                value={settings.inboundPlacement}
                onChange={handleChange}
                className="w-64 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="Amazon Optimized Splits">Amazon Optimized Splits</option>
                <option value="Inventory Placement">Inventory Placement</option>
              </select>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Use Peak Storage Fees</span>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="usePeakStorage"
                  checked={settings.usePeakStorage}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Enabled CEP Storage</span>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="enabledCEPStorage"
                  checked={settings.enabledCEPStorage}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
              </div>
            </label>
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
                <span className="mr-2 text-gray-600">$</span>
                <input
                  type="number"
                  name="fbmCost"
                  value={settings.fbmCost}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  step="0.01"
                />
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
              <span className="text-gray-700">Local Fulfillment</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('localFulfillment', 'FBA')}
                  className={`px-4 py-2 rounded ${
                    settings.localFulfillment === 'FBA'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  FBA
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">European Fulfillment</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('europeanFulfillment', 'EFN')}
                  className={`px-4 py-2 rounded ${
                    settings.europeanFulfillment === 'EFN'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  EFN
                </button>
              </div>
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
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('topOffers', true)}
                  className={`px-4 py-2 rounded ${
                    settings.topOffers ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Yes
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Keepa on Search Results</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('keepa', true)}
                  className={`px-4 py-2 rounded ${
                    settings.keepa ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Yes
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Store Geo Location</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('storeGeoLocation', false)}
                  className={`px-4 py-2 rounded ${
                    !settings.storeGeoLocation ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  No
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Dark Mode (Beta)</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('darkMode', false)}
                  className={`px-4 py-2 rounded ${
                    !settings.darkMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  No
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Quick Info</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Profit</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('showProfit', true)}
                  className={`px-4 py-2 rounded ${
                    settings.showProfit ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Yes
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Profit Margin</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('showProfitMargin', false)}
                  className={`px-4 py-2 rounded ${
                    !settings.showProfitMargin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  No
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show ROI</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('showROI', true)}
                  className={`px-4 py-2 rounded ${
                    settings.showROI ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Yes
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Breakeven</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('showBreakeven', false)}
                  className={`px-4 py-2 rounded ${
                    !settings.showBreakeven ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  No
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Offer Summary</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('showOfferSummary', true)}
                  className={`px-4 py-2 rounded ${
                    settings.showOfferSummary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Yes
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
          <h2 className="text-lg font-semibold text-gray-800">Charts</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Prices Chart</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('showPricesChart', true)}
                  className={`px-4 py-2 rounded ${
                    settings.showPricesChart ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Yes
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Sold Chart</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('showSoldChart', true)}
                  className={`px-4 py-2 rounded ${
                    settings.showSoldChart ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Yes
                </button>
              </div>
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Show Offers Chart</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleButton('showOffersChart', true)}
                  className={`px-4 py-2 rounded ${
                    settings.showOffersChart ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Yes
                </button>
              </div>
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
        >
          Save Settings
        </button>
      </div>

    </div>
  );
};

export default AdditionalSettings;