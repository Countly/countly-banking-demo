import React from 'react';


const Settings = () => {
  document.title = 'Settings Page';

  return (
    <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
      <h3 className="text-3xl text-gray-800 mb-2">{document.title}</h3>
      <form>
        <div className="mb-6">
          <div className="md:w-1/3" />
          <label className="md:w-2/3 block text-gray-700 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">
        Send me sms
            </span>
          </label>
        </div>
        <div className="mb-6">
          <div className="md:w-1/3" />
          <label className="md:w-2/3 block text-gray-700 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">
        Send me email
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Settings;
