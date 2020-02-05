import React from 'react';
import GreenButton from '../../../common/components/GreenButton';
import TextInput from '../../../common/components/TextInput';

const CreditCard = () => {
  document.title = 'CreditCard Page';

  return (
    <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
      <h3 className="text-3xl text-gray-800 mb-2">{document.title}</h3>

      <form>
        <div className="mb-4">
          <label htmlFor="customerId" className="block text-gray-700 text-sm font-bold mb-2">
          Monthly Revenue
          </label>
          <TextInput id="customerId" className="w-full" type="text" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
        Limit request
          </label>
          <TextInput id="text" type="text" className="w-full" />
        </div>

        <div className="flex items-center justify-between">
          <GreenButton title="Apply" />

        </div>
      </form>
    </div>
  );
};

export default CreditCard;
