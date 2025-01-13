import React, { useState } from 'react';

export default function Notifications() {
  const [toggles, setToggles] = useState({
    inventoryAlerts: false,
    priceChangeAlerts: false,
    salesPerformance: false,
    complianceWarnings: false,
    systemDowntime: false,
    dashboardAlerts: false,
    email: false,
    sms: false,
    pushNotifications: false,
  });

  const handleToggleChange = (key) => {
    setToggles((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] };
      console.log(`${key.replace(/([A-Z])/g, ' $1')} ${newState[key] ? 'enabled' : 'disabled'}`);
      return newState;
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Notifications Preferences</h1>

      <div>
        <h1 className="text-xl font-semibold mb-4 mt-8">Notification Settings</h1>
        <div className="flex flex-col w-[30%] gap-4 mt-2 mb-4">
          <div className="flex justify-between items-center">
            <label>Inventory Alerts</label>
            <button
              onClick={() => handleToggleChange('inventoryAlerts')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.inventoryAlerts ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.inventoryAlerts ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label>Price Change Alerts</label>
            <button
              onClick={() => handleToggleChange('priceChangeAlerts')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.priceChangeAlerts ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.priceChangeAlerts ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label>Sales Performance</label>
            <button
              onClick={() => handleToggleChange('salesPerformance')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.salesPerformance ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.salesPerformance ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label>Compliance Warnings</label>
            <button
              onClick={() => handleToggleChange('complianceWarnings')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.complianceWarnings ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.complianceWarnings ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label>System Downtime</label>
            <button
              onClick={() => handleToggleChange('systemDowntime')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.systemDowntime ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.systemDowntime ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold mb-4 mt-8">Channel Preferences</h1>
        <div className="flex flex-col w-[30%] gap-4 mt-2 mb-4">
          <div className="flex justify-between items-center">
            <label>Dashboard Alerts</label>
            <button
              onClick={() => handleToggleChange('dashboardAlerts')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.dashboardAlerts ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.dashboardAlerts ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label>Email</label>
            <button
              onClick={() => handleToggleChange('email')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.email ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.email ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label>SMS</label>
            <button
              onClick={() => handleToggleChange('sms')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.sms ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.sms ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label>Push Notifications</label>
            <button
              onClick={() => handleToggleChange('pushNotifications')}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                toggles.pushNotifications ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  toggles.pushNotifications ? 'translate-x-5' : ''
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




// export default function Notifications() {
//   const handleCheckboxChange = (event, label) => {
//     console.log(`${label} ${event.target.checked ? 'checked' : 'unchecked'}`);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Notifications Preferences</h1>

//       <div>
//         <h1 className="text-xl font-semibold mb-4 mt-8">Notification Settings</h1>

//         <div className="flex gap-20 justify-between items-start">
//           <div className="flex flex-col gap-4 w-[25%] mt-2 mb-4">
//             <div className="flex items-center justify-between">
//               <label>Inventory Alerts</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'Inventory Alerts')}
//               />
//             </div>
//             <div  className="flex items-center justify-between">
//               <label>Price Change Alerts</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'Price Change Alerts')}
//               />
//             </div>
//             <div  className="flex items-center justify-between">
//               <label>Sales Performance</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'Sales Performance')}
//               />
//             </div>
//             <div  className="flex items-center justify-between">
//               <label>Compliance Warnings</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'Compliance Warnings')}
//               />
//             </div>
//             <div  className="flex items-center justify-between">
//               <label>System Downtime</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'System Downtime')}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h1 className="text-xl font-semibold mb-4 mt-8">Channel Preferences</h1>

//         <div className="flex gap-20 items-start">
//           <div className="flex flex-col w-[25%] gap-4 mt-2 mb-4">
//             <div  className="flex items-center justify-between">
//               <label>Dashboard Alerts</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'Dashboard Alerts')}
//               />
//             </div>
//             <div  className="flex items-center justify-between">
//               <label>Email</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'Email')}
//               />
//             </div>
//             <div  className="flex items-center justify-between">
//               <label>SMS</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'SMS')}
//               />
//             </div>
//             <div  className="flex items-center justify-between">
//               <label>Push Notifications</label>
//               <input
//                 type="checkbox"
//                 className="ml-2"
//                 onChange={(event) => handleCheckboxChange(event, 'Push Notifications')}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
