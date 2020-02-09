import React, { useState } from 'react';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';
import GreenButton from '../../../common/components/GreenButton';
import TextInput from '../../../common/components/TextInput';

const CreditCard = () => {
  document.title = 'CreditCard Page';

  const [step, setStep] = useState(0);

  const apply = () => {
    setStep(1);
    Countly.add_event({
      key: 'Application',
      segmentation: { type: 'Credit Card' },
    });
    toast(<div>
      {' '}
      <strong> Application</strong>
      {' '}
event sent with
      {' '}
      <strong>Credit Card</strong>
      {' '}
segmentation
    </div>, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  if (step === 0) {
    return (
      <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
        <h3 className="text-3xl text-gray-800 mb-2">{document.title}</h3>

        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
              Monthly Revenue
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
              Limit Request
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>

          <div className="flex items-center justify-between">
            <GreenButton title="Apply" onClick={() => apply()} />
          </div>
        </form>
      </div>
    );
  }
  return <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">Applied.</div>;
};

export default CreditCard;
