import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';
import GreenButton from '../../../common/components/GreenButton';
import TextInput from '../../../common/components/TextInput';

const Swift = () => {
  document.title = 'Swift';

  const [step, setStep] = useState(0);
  const [sum, setSum] = useState(0);

  const updateSum = (e) => {
    setSum(e.target.value);
  };

  const sendSwift = () => {
    setStep(1);
    Countly.add_event({
      key: 'Transfer',
      sum,
      segmentation: { type: 'Swift' },
    });
    toast(<div>
      {' '}
      <strong>Transfer</strong>
      {' '}
event sent with
      {' '}
      <strong>Swift</strong>
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
      <div className="w-2/3">

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
              Swift Code
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
        Account No / Iban No
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
              Name - Surname
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
              Telephone
            </label>
            <TextInput id="text" type="text" className="w-full" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
        Amount
            </label>
            <TextInput id="text" type="text" value={sum} onChange={updateSum} className="w-full" />
          </div>

          <div className="flex items-center justify-between">
            <GreenButton title="Send" onClick={() => sendSwift()} />

          </div>
        </form>
      </div>
    );
  }
  return <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">Money Sent</div>;
};


export default withTranslation()(Swift);
