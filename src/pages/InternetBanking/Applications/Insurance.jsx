import React, { useState } from 'react';
import Countly from 'countly-sdk-web';
import GreenButton from '../../../common/components/GreenButton';
import TextInput from '../../../common/components/TextInput';

const Insurance = () => {
  document.title = 'Insurance Page';
  const [step, setStep] = useState(0);

  const apply = () => {
    setStep(1);
    Countly.add_event({
      key: 'Application',
      segmentation: { type: 'Insurance' },
    });
  };
  if (step === 0) {
    return (
      <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
        <h3 className="text-3xl text-gray-800 mb-2">{document.title}</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="customerId" className="block text-gray-700 text-sm font-bold mb-2">
        Name
            </label>
            <TextInput id="customerId" className="w-full" type="text" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
      Age
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
      Location
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
          Health Status
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
          Insurance Type
            </label>
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Type X</option>
              <option>Type Y</option>
              <option>Type Z</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <GreenButton title="Apply" onClick={() => apply()} />
          </div>
        </form>
      </div>
    );
  }
  return <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">Money Sent</div>;
};

export default Insurance;
