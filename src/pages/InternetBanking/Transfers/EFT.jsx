import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import TextInput from '../../../common/components/TextInput';
import GreenButton from '../../../common/components/GreenButton';

const EFT = () => {
  document.title = 'EFT';

  const [step, setStep] = useState(0);

  const sendEFT = () => {
    setStep(1);
    Countly.add_event({
      key: 'Transfer',
      segmentation: { type: 'EFT' },
    });
  };

  if (step === 0) {
    return (
      <div className="w-2/3">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
          <div className="mb-4">
            <label htmlFor="customerId" className="block text-gray-700 text-sm font-bold mb-2">
    Recipient Name
            </label>
            <TextInput id="customerId" className="w-full" type="text" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
    Recipient IBAN
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
    Amount
            </label>
            <TextInput id="text" type="number" className="w-full" />
          </div>

          <div className="flex items-center justify-between">
            <GreenButton title="Send" onClick={() => sendEFT()} />

          </div>
        </form>
      </div>
    );
  }
  return <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">Money Sent</div>;
};


export default withTranslation()(EFT);
